import Header from "@/components/Header"
import { Toaster } from "sonner"
import { getAuthInstance } from "@/lib/better-auth/auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const auth = await getAuthInstance();

const layout = async ({children} : {children: React.ReactNode}) => {

  const session = await auth.api.getSession({headers: await headers()})

  if(!session?.user) {
    redirect('/sign-in')
  }

  const user = {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
  }

  return (
    <main className="min-h-screen text-gray-400">
        <Header user = {user}/>
        <div className="container py-10">
            {children}
        </div>
        <Toaster/>
    </main>
  )
}

export default layout