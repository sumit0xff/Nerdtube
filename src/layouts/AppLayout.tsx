import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { useAppStore } from '@/store/use-app-store'
export function AppLayout() { const collapsed = useAppStore((s) => s.isSidebarCollapsed); return <><Header/><Sidebar/><main className={`min-h-[calc(100vh-4.5rem)] transition-[margin] duration-200 ${collapsed ? 'lg:ml-0' : 'lg:ml-64'}`}><Outlet/></main></> }
