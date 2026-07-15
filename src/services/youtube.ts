import type { Video } from '@/types/video'

const sampleVideos: Video[] = [
  { id: '1', title: 'The system design interview: a practical guide', channelName: 'ByteByteGo', publishedAt: '2 days ago', duration: '18:42', views: '284K views', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', category: 'System Design' },
  { id: '2', title: 'What actually happens when you type a URL?', channelName: 'Hussein Nasser', publishedAt: '5 days ago', duration: '22:10', views: '126K views', thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80', category: 'Engineering' },
  { id: '3', title: 'Building reliable AI applications in 2026', channelName: 'Vercel', publishedAt: '1 week ago', duration: '31:05', views: '89K views', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80', category: 'Artificial Intelligence' },
  { id: '4', title: 'The Linux desktop is having a moment', channelName: 'The Primeagen', publishedAt: '1 week ago', duration: '14:28', views: '342K views', thumbnail: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=900&q=80', category: 'Linux' },
]
/** Temporary deterministic adapter. Replace its body with YouTube Data API calls once an API key is configured. */
export async function getRecommendedVideos(): Promise<Video[]> { return sampleVideos }
