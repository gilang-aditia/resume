"use client";

import { FaSpotify } from "react-icons/fa";

interface SpotifyCardProps {
  playlistId?: string;
}

export function SpotifyCard({ playlistId }: SpotifyCardProps) {
  // Use Next.js client env prefix first, fallback to standard VITE env or a popular default playlist ID (Today's Top Hits)
  const spotifyPlaylistId =
    playlistId ||
    process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID

  // Spotify embed URL format
  const embedUrl = `https://open.spotify.com/embed/playlist/${spotifyPlaylistId}`;

  if (!spotifyPlaylistId) {
    return null;
  }

  return (
    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-300 dark:border-gray-700 p-6 rounded-2xl space-y-4 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-2">
        <FaSpotify size={24} className="text-[#1DB954] animate-pulse" />
        <h3 className="text-lg font-semibold text-foreground font-serif">
          Now Playing 🎵
        </h3>
      </div>

      <div className="w-full h-90">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl border border-gray-200 dark:border-gray-800"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <a
          href={`https://open.spotify.com/playlist/${spotifyPlaylistId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#1DB954] hover:text-[#1ed760] transition-colors text-xs font-semibold uppercase tracking-wider font-mono"
        >
          Open in Spotify <span className="text-xs">→</span>
        </a>
        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Spotify Embed
        </span>
      </div>
    </div>
  );
}
