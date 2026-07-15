import { FormEvent, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Clock3, Search } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { VideoRow } from '@/components/video/VideoCard'
import { searchVideos } from '@/services/youtube'
import { useAppStore } from '@/store/use-app-store'

export function SearchPage() {
  const [params] = useSearchParams(); const requestedQuery = params.get('q') ?? ''; const [query, setQuery] = useState(requestedQuery); const navigate = useNavigate(); const recent = useAppStore((s) => s.recentSearches); const add = useAppStore((s) => s.addRecentSearch)
  const { data: results = [], isFetching } = useQuery({ queryKey: ['videos', 'search', requestedQuery], queryFn: () => searchVideos(requestedQuery), enabled: Boolean(requestedQuery) })
  useEffect(() => setQuery(requestedQuery), [requestedQuery])
  const submit = (event: FormEvent) => { event.preventDefault(); const value = query.trim(); if (value) { add(value); navigate(`/search?q=${encodeURIComponent(value)}`) } }
  return <div className="mx-auto max-w-3xl px-5 py-16 md:py-24"><p className="text-sm font-medium text-[var(--accent)]">Discover</p><h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">What are you curious about?</h1><form onSubmit={submit} className="mt-8 flex h-14 items-center gap-3 rounded-2xl border bg-[var(--surface)] px-4 shadow-2xl shadow-black/10"><Search className="text-[var(--muted)]" size={20}/><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search programming, AI, business…" className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[var(--muted)]" aria-label="Search videos"/><kbd className="hidden rounded border px-1.5 py-0.5 text-xs text-[var(--muted)] sm:block">Esc</kbd></form>{requestedQuery ? <section className="mt-10"><p className="text-sm text-[var(--muted)]">{isFetching ? 'Searching…' : `${results.length} results for “${requestedQuery}”`}</p><div className="mt-3">{results.map((video) => <VideoRow key={video.id} video={video}/>)}</div>{!isFetching && !results.length && <p className="mt-5 text-sm text-[var(--muted)]">No results yet. Try a topic like AI, cloud, Linux, or finance.</p>}</section> : recent.length > 0 && <section className="mt-10"><div className="flex items-center gap-2 text-sm text-[var(--muted)]"><Clock3 size={16}/> Recent searches</div><div className="mt-3 flex flex-wrap gap-2">{recent.map((item) => <button onClick={() => navigate(`/search?q=${encodeURIComponent(item)}`)} key={item} className="rounded-full border bg-[var(--surface)] px-3 py-1.5 text-sm hover:border-[var(--accent)]">{item}</button>)}</div></section>}</div>
}
