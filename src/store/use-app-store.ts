import { create } from 'zustand'
import type { Video } from '@/types/video'

export type Theme = 'oled' | 'dark' | 'graphite'
interface AppState {
  theme: Theme; isSidebarCollapsed: boolean; recentSearches: string[]; watchLater: Video[]; likedVideos: Video[]
  setTheme: (theme: Theme) => void; toggleSidebar: () => void; addRecentSearch: (query: string) => void; toggleWatchLater: (video: Video) => void; toggleLiked: (video: Video) => void
}
const toggleVideo = (videos: Video[], video: Video) => videos.some(({ id }) => id === video.id) ? videos.filter(({ id }) => id !== video.id) : [video, ...videos]

/** Centralizes lightweight local UI state while server state remains in TanStack Query. */
export const useAppStore = create<AppState>((set) => ({
  theme: 'oled', isSidebarCollapsed: false, recentSearches: [], watchLater: [], likedVideos: [],
  setTheme: (theme) => set({ theme }), toggleSidebar: () => set(({ isSidebarCollapsed }) => ({ isSidebarCollapsed: !isSidebarCollapsed })),
  addRecentSearch: (query) => set(({ recentSearches }) => ({ recentSearches: [query, ...recentSearches.filter((item) => item !== query)].slice(0, 6) })),
  toggleWatchLater: (video) => set(({ watchLater }) => ({ watchLater: toggleVideo(watchLater, video) })),
  toggleLiked: (video) => set(({ likedVideos }) => ({ likedVideos: toggleVideo(likedVideos, video) })),
}))
