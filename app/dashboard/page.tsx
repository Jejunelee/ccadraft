import { createClient } from '../lib/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from '../components/landing/LogoutButton'
import Handouts, { type Handout } from './Handouts'
import { Download, FileText, BookOpen, Filter } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch handouts from Supabase
  const { data: handouts, error } = await supabase
    .from('handouts')
    .select('*')
    .order('created_at', { ascending: false })

  // Fetch user's download history
  const { data: userDownloads } = await supabase
    .from('user_downloads')
    .select('handout_id')
    .eq('user_id', user.id)

  const downloadedIds = userDownloads?.map((download) => download.handout_id) ?? []

  const stats = {
    totalHandouts: handouts?.length || 0,
    totalDownloads: handouts?.reduce((sum, h) => sum + (h.download_count || 0), 0) || 0,
    userDownloads: userDownloads?.length || 0,
    categories: new Set(handouts?.map(h => h.category)).size || 0
  }

  const statCards = [
    { label: 'Total handouts', value: stats.totalHandouts, icon: BookOpen },
    { label: 'Total downloads', value: stats.totalDownloads.toLocaleString(), icon: Download },
    { label: 'Your downloads', value: stats.userDownloads, icon: FileText },
    { label: 'Categories', value: stats.categories, icon: Filter },
  ]

  return (
    <div className="min-h-screen bg-[#f4f7f8] font-jost text-black">
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f7f8]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[66px] w-full max-w-[1120px] items-center gap-4 px-6">
          <Link href="/" className="flex items-center" aria-label="CCA Connect">
            <Image src="/logo.png" alt="CCA Connect" width={614} height={361} className="h-9 w-auto" />
          </Link>
          <div className="mr-auto">
            <h1 className="font-poppins text-sm font-semibold">Resource hub</h1>
            <p className="hidden text-xs text-[#5c6b73] sm:block">Handouts and materials</p>
          </div>
          <span className="hidden text-sm text-[#5c6b73] md:inline">{user.email}</span>
          <LogoutButton />
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1120px] px-6 py-10">
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {statCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-black/10 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-[#5c6b73] sm:text-sm">{card.label}</p>
                  <p className="mt-1 font-poppins text-xl font-semibold">{card.value}</p>
                </div>
                <div className="rounded-xl bg-[#AFCFE4]/40 p-2 text-[#225475]">
                  <card.icon className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {error ? (
          <div className="rounded-2xl border border-black/10 bg-white p-12 text-center">
            <h2 className="font-poppins text-lg font-semibold">Handouts couldn&apos;t be loaded</h2>
            <p className="mt-2 text-[#5c6b73]">Refresh the page and try again.</p>
          </div>
        ) : (
          <Handouts handouts={(handouts ?? []) as Handout[]} downloadedIds={downloadedIds} />
        )}
      </div>
    </div>
  )
}