'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '../lib/supabase/client'
import { Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.session) {
        router.push('/dashboard')
        router.refresh()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[calc(100dvh-66px)] items-center justify-center bg-[#f4f7f8] px-6 py-12 font-jost">
      <div className="w-full max-w-[420px]">
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[#225475] uppercase">Resource hub</p>
        <h1 className="mt-3 font-poppins text-4xl font-semibold tracking-tight text-black">Sign in</h1>
        <p className="mt-3 text-base leading-relaxed text-[#5c6b73]">
          Sign in to access your resources and materials.
        </p>

        <form
          className="mt-8 space-y-5 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(10,10,10,0.06)] sm:p-8"
          onSubmit={handleLogin}
        >
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
          )}

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-black">
              Email address
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#5c6b73]" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-xl border border-black/15 bg-white pr-4 pl-11 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-black">
              Password
            </label>
            <div className="relative">
              <Lock className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#5c6b73]" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-xl border border-black/15 bg-white pr-4 pl-11 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center rounded-full bg-[#225475] text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
