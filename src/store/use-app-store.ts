import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Video } from '@/types/video'

export type Theme = 'oled' | 'dark' | 'graphite'
interface AppState {
  theme: Theme; isSidebarCollapsed: boolean; isCommandPaletteOpen: boolean; isSearchOpen: boolean; sidebarWidth: number
  recentSearches: string[]; watchLater: Video[]; likedVideos: Video[]
  setTheme: (theme: Theme) => void; toggleSidebar: () => void; setSidebarWidth: (width: number) => void
  setCommandPaletteOpen: (open: boolean) => void; setSearchOpen: (open: boolean) => void; addRecentSearch: (query: string) => void
  toggleWatchLater: (video: Video) => void; toggleLiked: (video: Video) => void
}
const toggleVideo = (videos: Video[], video: Video) => videos.some(({ id }) => id === video.id) ? videos.filter(({ id }) => id !== video.id) : [video, ...videos]

export const useAppStore = create<AppState>()(persist((set) => ({
  theme: 'oled', isSidebarCollapsed: false, isCommandPaletteOpen: false, isSearchOpen: false, sidebarWidth: 272,
  recentSearches: ['System design', 'Local-first software', 'AI engineering'], watchLater: [], likedVideos: [],
  setTheme: (theme) => set({ theme }), toggleSidebar: () => set(({ isSidebarCollapsed }) => ({ isSidebarCollapsed: !isSidebarCollapsed })),
  setSidebarWidth: (sidebarWidth) => set({ sidebarWidth: Math.min(340, Math.max(224, sidebarWidth)) }),
  setCommandPaletteOpen: (isCommandPaletteOpen) => set({ isCommandPaletteOpen }), setSearchOpen: (isSearchOpen) => set({ isSearchOpen }),
  addRecentSearch: (query) => set(({ recentSearches }) => ({ recentSearches: [query, ...recentSearches.filter((item) => item !== query)].slice(0, 6) })),
  toggleWatchLater: (video) => set(({ watchLater }) => ({ watchLater: toggleVideo(watchLater, video) })),
  toggleLiked: (video) => set(({ likedVideos }) => ({ likedVideos: toggleVideo(likedVideos, video) })),
}), { name: 'nerdtube-preferences', partialize: (state) => ({ theme: state.theme, isSidebarCollapsed: state.isSidebarCollapsed, sidebarWidth: state.sidebarWidth, recentSearches: state.recentSearches, watchLater: state.watchLater, likedVideos: state.likedVideos }) }))
