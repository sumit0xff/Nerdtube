import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { NotFoundPage, PendingPage } from '@/features/system/StatusPages'
const HomePage = lazy(async () => ({ default: (await import('@/features/home/HomePage')).HomePage }))
const SearchPage = lazy(async () => ({ default: (await import('@/features/search/SearchPage')).SearchPage }))
const Loading = () => <div className="p-8 text-sm text-[var(--muted)]">Loading…</div>
const page = (Page: React.LazyExoticComponent<React.ComponentType>) => <Suspense fallback={<Loading/>}><Page/></Suspense>
export const router = createBrowserRouter([{ element: <AppLayout/>, children: [ { index: true, element: page(HomePage) }, { path: 'search', element: page(SearchPage) }, { path: 'watch/:videoId', element: <PendingPage/> }, { path: 'channel/:channelId', element: <PendingPage/> }, { path: 'history', element: <PendingPage/> }, { path: 'watch-later', element: <PendingPage/> }, { path: 'liked', element: <PendingPage/> }, { path: 'downloads', element: <PendingPage/> }, { path: 'settings', element: <PendingPage/> }, { path: 'topics/:topic', element: <PendingPage/> } ] }, { path: '*', element: <NotFoundPage/> }])
