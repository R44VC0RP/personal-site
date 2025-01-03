"use server";

import { prisma } from "@/lib/prisma";
export async function createInvestment(username: string, amount: number) {
    // Check if user has already invested
    const existingInvestment = await prisma.investment.findFirst({
        where: {
            username
        }
    });

    if (existingInvestment) {
        return {
            success: false,
            error: "You have already invested."
        }
    }

    const investment = await prisma.investment.create({
        data: {
            username,
            amount
        }
    });

    return {
        success: true,
        investment
    };
}

export async function getTopInvestors() {
    const investments = await prisma.investment.findMany({
        orderBy: { amount: 'desc' },
        take: 5
    });
    return investments;
}