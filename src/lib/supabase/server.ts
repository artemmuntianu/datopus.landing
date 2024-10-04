import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createSupabaseClient() {
    const cookieStore = cookies()

    return createServerClient(
        'https://vqetvtgvpvvecktdmvfu.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxZXR2dGd2cHZ2ZWNrdGRtdmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NDY3MTQsImV4cCI6MjA0MDQyMjcxNH0.rJPH9pTmjrGWdD3RrGjaKSsSknO5pYT2AFPhb2rD78g',
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                }
            }
        }
    )
}