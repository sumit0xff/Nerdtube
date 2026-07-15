import { motion } from 'framer-motion'
import { Clock3, Heart, MoreVertical } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Video } from '@/types/video'
import { useAppStore } from '@/store/use-app-store'

interface VideoCardProps { video: Video; index?: number; showActions?: boolean }

export function VideoCard({ video, index = 0, showActions = false }: VideoCardProps) {
  const watchLater = useAppStore((state) => state.watchLater)
  const toggleWatchLater = useAppStore((state) => state.toggleWatchLater)
  const saved = watchLater.some((item) => item.id === video.id)
  return <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .045 }}>
    <div className="group relative"><Link to={`/watch/${video.id}`} className="block"><div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--surface-raised)]"><img src={video.thumbnail} alt="" className="size-full object-cover transition duration-500 group-hover:scale-105"/><span className="absolute bottom-2 right-2 rounded-md bg-black/75 px-1.5 py-0.5 text-xs font-medium text-white">{video.duration}</span></div><div className="pt-3"><p className="text-sm font-semibold leading-snug">{video.title}</p><p className="mt-1 text-xs text-[var(--muted)]">{video.channelName} · {video.views}</p><p className="mt-0.5 text-xs text-[var(--muted)]">{video.publishedAt}</p></div></Link>
      {showActions && <div className="absolute right-1 top-3 flex gap-1 opacity-0 transition group-hover:opacity-100"><button onClick={() => toggleWatchLater(video)} className="grid size-8 place-items-center rounded-lg bg-black/70 text-white" aria-label={saved ? 'Remove from watch later' : 'Save to watch later'}><Clock3 size={15}/></button><button className="grid size-8 place-items-center rounded-lg bg-black/70 text-white" aria-label="More options"><MoreVertical size={16}/></button></div>}
    </div>
  </motion.article>
}

export function VideoRow({ video }: { video: Video }) {
  const liked = useAppStore((state) => state.likedVideos).some((item) => item.id === video.id)
  const toggleLiked = useAppStore((state) => state.toggleLiked)
  return <article className="flex gap-4 border-b py-4 last:border-0"><Link to={`/watch/${video.id}`} className="w-40 shrink-0 sm:w-56"><div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--surface-raised)]"><img src={video.thumbnail} alt="" className="size-full object-cover"/><span className="absolute bottom-1.5 right-1.5 rounded bg-black/75 px-1 py-0.5 text-[10px] text-white">{video.duration}</span></div></Link><div className="min-w-0 flex-1"><Link to={`/watch/${video.id}`}><h2 className="text-sm font-semibold leading-snug sm:text-base">{video.title}</h2></Link><p className="mt-2 text-xs text-[var(--muted)]">{video.channelName} · {video.views} · {video.publishedAt}</p><p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[var(--muted)]">A thoughtful session from {video.channelName} for your {video.category.toLowerCase()} learning queue.</p></div><button onClick={() => toggleLiked(video)} className={`grid size-9 shrink-0 place-items-center rounded-xl ${liked ? 'text-rose-400' : 'text-[var(--muted)] hover:bg-white/5'}`} aria-label={liked ? 'Remove like' : 'Like video'}><Heart size={18} fill={liked ? 'currentColor' : 'none'}/></button></article>
}
