import { useEffect, type CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'
import { MobileNav } from '@/components/layout/MobileNav'
import { CommandPalette } from '@/components/layout/CommandPalette'
import { useAppStore } from '@/store/use-app-store'
export function AppLayout() {
  const collapsed = useAppStore((state) => state.isSidebarCollapsed); const width = useAppStore((state) => state.sidebarWidth); const toggle = useAppStore((state) => state.toggleSidebar); const location = useLocation()
  useEffect(() => { const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key === 'b') { event.preventDefault(); toggle() } }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler) }, [toggle])
  return <div className="min-h-screen"><Header/><Sidebar/><main style={{ '--shell-sidebar': `${collapsed ? 76 : width}px` } as CSSProperties} className="app-content min-h-[calc(100vh-68px)] pb-24 transition-[margin] duration-300 lg:pb-0"><div className="mx-auto max-w-[1800px]"><motion.div key={location.pathname} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22, ease: [0.16, 1, 0.3, 1] }}><Outlet/></motion.div></div></main><MobileNav/><CommandPalette/></div>
}
