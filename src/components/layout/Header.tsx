import { Menu, MoonStar, Search, SunMedium } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { useAppStore } from '@/store/use-app-store'

export function Header() {
  const navigate = useNavigate(); const toggleSidebar = useAppStore((s) => s.toggleSidebar); const theme = useAppStore((s) => s.theme); const setTheme = useAppStore((s) => s.setTheme)
  const nextTheme = theme === 'oled' ? 'dark' : theme === 'dark' ? 'graphite' : 'oled'
  return <header className="sticky top-0 z-30 flex h-18 items-center gap-4 border-b bg-[color:color-mix(in_srgb,var(--canvas)_82%,transparent)] px-4 backdrop-blur-xl md:px-6">
    <button onClick={toggleSidebar} className="grid size-9 place-items-center rounded-xl text-[var(--muted)] hover:bg-white/5" aria-label="Toggle sidebar"><Menu size={19} /></button><Logo />
    <button onClick={() => navigate('/search')} className="mx-auto hidden h-10 w-full max-w-xl items-center gap-3 rounded-xl border bg-[var(--surface)] px-3 text-left text-sm text-[var(--muted)] transition hover:border-[var(--accent)] md:flex" aria-label="Search videos"><Search size={16}/><span className="flex-1">Search ideas, people, and topics</span><kbd className="rounded border px-1.5 py-0.5 text-[11px]">⌘ K</kbd></button>
    <button onClick={() => setTheme(nextTheme)} className="grid size-9 place-items-center rounded-xl text-[var(--muted)] hover:bg-white/5" aria-label="Change theme">{theme === 'oled' ? <MoonStar size={18}/> : <SunMedium size={18}/>}</button><button onClick={() => navigate('/search')} className="grid size-9 place-items-center rounded-xl text-[var(--muted)] hover:bg-white/5 md:hidden" aria-label="Search"><Search size={18}/></button><button className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 text-xs font-bold" aria-label="Profile">S</button>
  </header>
}
