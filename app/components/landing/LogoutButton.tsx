'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '../../lib/supabase/client'

export default function LogoutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-full border border-black/15 bg-white px-4 py-2 font-jost text-sm font-semibold text-black transition-colors hover:border-black/40"
    >
      Logout
    </button>
  )
}