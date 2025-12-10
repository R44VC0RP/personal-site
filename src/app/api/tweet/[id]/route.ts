import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    // Fetch directly from Twitter's syndication API to get full video info
    const response = await fetch(
      `https://cdn.syndication.twimg.com/tweet-result?id=${id}&token=x`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Tweet not found" }, { status: 404 });
    }

    const tweet = await response.json();
    
    // Extract best quality video from mediaDetails
    const mediaDetail = tweet.mediaDetails?.[0];
    if (mediaDetail?.video_info?.variants) {
      // Filter MP4s and sort by bitrate to get highest quality
      const mp4Variants = mediaDetail.video_info.variants
        .filter((v: any) => v.content_type === "video/mp4")
        .sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0));
      
      if (mp4Variants.length > 0) {
        // Add the best quality video URL to the response
        tweet.bestVideoUrl = mp4Variants[0].url;
        tweet.allVideoVariants = mp4Variants;
      }
      
      // Get aspect ratio from video_info
      if (mediaDetail.video_info.aspect_ratio) {
        tweet.videoAspectRatio = mediaDetail.video_info.aspect_ratio;
      }
    }

    return NextResponse.json(tweet);
  } catch (error) {
    console.error("Error fetching tweet:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweet" },
      { status: 500 }
    );
  }
}
