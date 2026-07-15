import { BookOpen, BrainCircuit, Cloud, Code2, Cpu, FileCode2, Heart, History, Home, Layers3, ListVideo, MonitorCog, Podcast, ShieldCheck, Settings2, Terminal, WalletCards } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem { label: string; to: string; icon: LucideIcon }
export const primaryNavigation: NavItem[] = [
  { label: 'Home', to: '/', icon: Home }, { label: 'Programming', to: '/topics/programming', icon: Code2 }, { label: 'Artificial Intelligence', to: '/topics/ai', icon: BrainCircuit }, { label: 'System Design', to: '/topics/system-design', icon: Layers3 }, { label: 'Open Source', to: '/topics/open-source', icon: FileCode2 }, { label: 'Cybersecurity', to: '/topics/cybersecurity', icon: ShieldCheck }, { label: 'Linux', to: '/topics/linux', icon: Terminal }, { label: 'Cloud', to: '/topics/cloud', icon: Cloud }, { label: 'DevOps', to: '/topics/devops', icon: MonitorCog }, { label: 'Finance', to: '/topics/finance', icon: WalletCards }, { label: 'Productivity', to: '/topics/productivity', icon: Cpu }, { label: 'Podcasts', to: '/topics/podcasts', icon: Podcast },
]
export const libraryNavigation: NavItem[] = [ { label: 'History', to: '/history', icon: History }, { label: 'Watch Later', to: '/watch-later', icon: ListVideo }, { label: 'Liked', to: '/liked', icon: Heart }, { label: 'Settings', to: '/settings', icon: Settings2 } ]
export const discoveryNavigation: NavItem = { label: 'Explore learning', to: '/search', icon: BookOpen }
