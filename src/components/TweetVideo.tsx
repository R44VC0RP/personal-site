"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Eye, Heart, MessageCircle } from "lucide-react";

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function cleanTweetText(text: string): string {
  // Remove t.co links and other Twitter short links
  return text
    .replace(/https?:\/\/t\.co\/\w+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export default function TweetVideo({ tweetId }: { tweetId: string }) {
  const [tweet, setTweet] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function fetchTweet() {
      try {
        const response = await fetch(`/api/tweet/${tweetId}`);
        const data = await response.json();
        setTweet(data);
      } catch (error) {
        console.error("Failed to fetch tweet:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTweet();
  }, [tweetId]);

  if (loading) {
    return (
      <div className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 animate-pulse">
        <div className="w-full aspect-video bg-zinc-800" />
        <div className="p-4">
          <div className="h-4 bg-zinc-800 rounded w-3/4 mb-3" />
          <div className="h-3 bg-zinc-800 rounded w-1/2" />
        </div>
      </div>
    );
  }

  if (!tweet) {
    return null;
  }

  // Use the best quality video URL extracted by our API
  const videoUrl = tweet.bestVideoUrl || tweet.video?.variants?.filter(
    (v: any) => v.type === "video/mp4"
  )?.sort((a: any, b: any) => (b.bitrate || 0) - (a.bitrate || 0))?.[0]?.src;
  
  const posterUrl = tweet.video?.poster;
  
  // Get video dimensions for aspect ratio
  const videoWidth = tweet.videoAspectRatio?.[0] || tweet.video?.aspectRatio?.[0] || 16;
  const videoHeight = tweet.videoAspectRatio?.[1] || tweet.video?.aspectRatio?.[1] || 9;

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <a
      href={`https://x.com/ryanvogel/status/${tweetId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors"
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
    >
      {/* Video Container - adapts to video aspect ratio */}
      <div 
        className="relative w-full bg-zinc-900"
        style={{ aspectRatio: `${videoWidth} / ${videoHeight}` }}
      >
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              poster={posterUrl}
              className="w-full h-full object-contain bg-black"
              muted
              loop
              playsInline
              preload="metadata"
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            )}
          </>
        ) : tweet.photos?.[0]?.url ? (
          <img
            src={tweet.photos[0].url}
            alt=""
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 aspect-video">
            <div className="flex flex-col items-center gap-2 text-zinc-500">
              <Play className="w-12 h-12" />
              <span className="text-sm">View on X</span>
            </div>
          </div>
        )}
      </div>

      {/* Caption & Stats */}
      <div className="p-4">
        <p className="text-white mb-3 whitespace-pre-wrap">{cleanTweetText(tweet.text)}</p>
        <div className="flex items-center gap-4 text-zinc-500 text-sm flex-wrap">
          {tweet.views && (
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {formatNumber(tweet.views)}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            {formatNumber(tweet.favorite_count || 0)}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            {formatNumber(tweet.conversation_count || 0)}
          </span>
          <span className="ml-auto text-zinc-600">
            {formatDate(tweet.created_at)}
          </span>
        </div>
      </div>
    </a>
  );
}
