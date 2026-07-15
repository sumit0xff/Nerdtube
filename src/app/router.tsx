import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { NotFoundPage, PendingPage } from '@/features/system/StatusPages'
const HomePage = lazy(async () => ({ default: (await import('@/features/home/HomePage')).HomePage }))
const SearchPage = lazy(async () => ({ default: (await import('@/features/search/SearchPage')).SearchPage }))
const WatchPage = lazy(async () => ({ default: (await import('@/features/watch/WatchPage')).WatchPage }))
const TopicPage = lazy(async () => ({ default: (await import('@/features/topics/TopicPage')).TopicPage }))
const LibraryPage = lazy(async () => ({ default: (await import('@/features/library/LibraryPage')).LibraryPage }))
const SettingsPage = lazy(async () => ({ default: (await import('@/features/settings/SettingsPage')).SettingsPage }))
const Loading = () => <div className="p-8 text-sm text-[var(--muted)]">Loading…</div>
const page = (Page: React.LazyExoticComponent<React.ComponentType>) => <Suspense fallback={<Loading/>}><Page/></Suspense>
const WatchLaterPage = () => <LibraryPage kind="watch-later"/>
const LikedPage = () => <LibraryPage kind="liked"/>
export const router = createBrowserRouter([{ element: <AppLayout/>, children: [ { index: true, element: page(HomePage) }, { path: 'search', element: page(SearchPage) }, { path: 'watch/:videoId', element: page(WatchPage) }, { path: 'channel/:channelId', element: <PendingPage/> }, { path: 'history', element: <PendingPage/> }, { path: 'watch-later', element: page(lazy(async () => ({ default: WatchLaterPage }))) }, { path: 'liked', element: page(lazy(async () => ({ default: LikedPage }))) }, { path: 'downloads', element: <PendingPage/> }, { path: 'settings', element: page(SettingsPage) }, { path: 'topics/:topic', element: page(TopicPage) } ] }, { path: '*', element: <NotFoundPage/> }])
