"use server";

import { prisma } from "@/lib/prisma";

import { Octokit } from "@octokit/rest";
import { RiskyFriday } from "@prisma/client";

export type GitHubStats = {
    riskLevel: number;
    totalCommits: number;
    riskyCommits: number;
    fridayPercentage: number;
    lateNightPercentage: number;
    analyzedRepos: number;
    dateRange: {
        start: string;
        end: string;
    };
    commitsByDay: {
        day: string;
        commits: number;
        riskyCommits: number;
    }[];
};

async function deleteAllRiskyFridaysLeaderBoardMembers() {
    await prisma.riskyFriday.deleteMany();
}

export async function getRiskLevel(username: string): Promise<GitHubStats> {
    console.log(`🔍 Analyzing GitHub stats for user: ${username}`);
    
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });

    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1);

    try {
        console.log(`📅 Fetching commits from ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`);
        
        const searchQuery = `author:${username} author-date:${startDate.toISOString().split('T')[0]}..${endDate.toISOString().split('T')[0]}`;
        
        let allCommits: any[] = [];
        let page = 1;
        const perPage = 100;
        
        // Fetch commits with pagination
        while (true) {
            console.log(`📚 Fetching page ${page} of commits...`);
            
            const { data } = await octokit.rest.search.commits({
                q: searchQuery,
                per_page: perPage,
                page: page
            });

            allCommits = [...allCommits, ...data.items];
            
            // Break if we've fetched all commits or reached 1000 (GitHub API limit)
            if (data.items.length < perPage || allCommits.length >= 1000) {
                break;
            }
            
            page++;
            
            // Add a small delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log(`✨ Found ${allCommits.length} total commits`);

        let riskyCommits = 0;
        let totalCommits = 0;
        let fridayCommits = 0;
        let riskyFridayCommits = 0;
        let lateNightCommits = 0;
        const analyzedRepos = new Set();

        console.log('🔎 Analyzing commit patterns...');

        // Analysis logic remains the same but uses allCommits instead of data.items
        for (const item of allCommits) {
            const commitDate = new Date(item.commit.author?.date || '');
            const isFriday = commitDate.getDay() === 5;
            const hour = commitDate.getHours();
            const isLateNight = hour >= 20 || hour <= 5;
            
            analyzedRepos.add(item.repository.full_name);
            
            if (isFriday) fridayCommits++;
            if (isLateNight) lateNightCommits++;
            
            const branch = item.commit.url.split('/').pop();
            const isProductionBranch = ['main', 'master', 'prod', 'production'].includes(branch || '');

            if (isProductionBranch) {
                totalCommits++;
                if (isFriday && hour >= 17) {
                    riskyFridayCommits++;
                }
            }
        }

        console.log(`🏢 Analyzed ${analyzedRepos.size} repositories`);
        console.log(`⚠️ Found ${riskyCommits} risky commits`);

        // Initialize the commits by day tracking
        const commitsByDay = new Map<string, { commits: number; riskyCommits: number, riskyFridayCommits: number }>();
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
        // Initialize all days with zero
        days.forEach(day => {
            commitsByDay.set(day, { commits: 0, riskyCommits: 0, riskyFridayCommits: 0 });
        });

        // Count commits by day
        for (const item of allCommits) {
            const commitDate = new Date(item.commit.author?.date || '');
            // Get day name (adjust Sunday from 0 to be last)
            let dayIndex = commitDate.getDay() - 1;
            if (dayIndex === -1) dayIndex = 6; // Move Sunday to end
            const dayName = days[dayIndex];
            
            
            const dayStats = commitsByDay.get(dayName)!;
            dayStats.commits++;
            
            
            // Consider it risky if it's after work hours
            const hour = commitDate.getHours();
            // console.log(`🕒 Commit day/time: ${dayName} ${hour}`);
            // if (hour >= 17 || hour <= 5) {
            //     dayStats.riskyCommits++;
            // }
            if (dayName === 'Friday' && hour >= 17) {
                dayStats.riskyFridayCommits++;
            }

            if (hour >= 17) {
                dayStats.riskyCommits++;
            }

            

            console.log(`🔍 Day stats: ${dayName} - Commits: ${dayStats.commits}, Risky Commits: ${dayStats.riskyCommits}, Risky Friday Commits: ${dayStats.riskyFridayCommits}`);
        }

        

        // Convert to array format for the chart
        const commitsByDayArray = days.map(day => ({
            day: day.slice(0, 3), // Abbreviate day names
            commits: commitsByDay.get(day)?.commits || 0,
            riskyCommits: commitsByDay.get(day)?.riskyCommits || 0,
            riskyFridayCommits: commitsByDay.get(day)?.riskyFridayCommits || 0
        }));


        let count_riskyFridayCommits = 0;
        let count_commits = 0;
        for (const day of commitsByDayArray) {
            count_riskyFridayCommits += day.riskyFridayCommits;
            count_commits += day.commits;
        }


        const riskyFridayPercentage = (count_riskyFridayCommits / count_commits) * 100;


        console.log(`🔍 Risky Friday Percentage: ${riskyFridayPercentage.toFixed(1)}%`);

        const result = {
            riskLevel: riskyFridayPercentage,
            totalCommits: allCommits.length,
            riskyCommits,
            fridayPercentage: (fridayCommits / allCommits.length) * 100,
            lateNightPercentage: (lateNightCommits / allCommits.length) * 100,
            analyzedRepos: analyzedRepos.size,
            dateRange: {
                start: startDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                }),
                end: endDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                })
            },
            commitsByDay: commitsByDayArray
        };

        console.log(`🎯 Risk Level: ${result.riskLevel.toFixed(1)}%`);
        console.log('✅ Analysis complete!');

        // Check if user already exists
        const existingUser = await prisma.riskyFriday.findFirst({
            where: { username }
        });

        // Only create if user doesn't exist
        if (!existingUser) {
            await prisma.riskyFriday.create({
                data: {
                    username,
                    riskLevel: result.riskLevel,
                }
            });
        }

        return result;

    } catch (error) {
        console.error('❌ Error fetching commit history:', error);
        throw error;
    }
}

export async function getTopRiskyUsers(): Promise<RiskyFriday[]> {
    return await prisma.riskyFriday.findMany({
        orderBy: { riskLevel: 'desc' },
        take: 5
    });
}