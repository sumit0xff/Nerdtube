import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { router } from '@/app/router'
import { useAppStore } from '@/store/use-app-store'

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 60_000, retry: 2, refetchOnWindowFocus: false } } })
function ThemeBridge() { const theme = useAppStore((state) => state.theme); useEffect(() => { document.documentElement.dataset.theme = theme }, [theme]); return null }
export function App() { const [client] = useState(() => queryClient); return <QueryClientProvider client={client}><ThemeBridge /><RouterProvider router={router} /></QueryClientProvider> }
