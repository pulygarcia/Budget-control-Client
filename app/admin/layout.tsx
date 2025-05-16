import ToastNotification from "../src/components/ToastNotification";
import Link from "next/link";
import { verifySession } from "../lib/auth/dal";
import AdminMenu from "../src/components/admin/adminMenu";

export default async function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    //DAl
    await verifySession()

    return (
      <>
        <header className='bg-cyan-800 py-5'>
          <div className='max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <div className='w-96'>
              <Link href={'/admin'}>
                  <span className="text-white font-semibold text-3xl">Admin Panel</span>
              </Link>
            </div>

            <AdminMenu />
          </div>
        </header>
        <section className='max-w-5xl mx-auto mt-20 p-3 py-10'>
          {children}
        </section>
        
        <ToastNotification />
  
        <footer className='py-5'>
          <p className='text-center'>
            Made by <a href="https://portfolio-puly-v4.vercel.app/">@pulygarcia</a>
          </p>
        </footer>
      </>
    );
  }