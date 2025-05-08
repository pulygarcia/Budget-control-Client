import Link from "next/link";

export default async function AdminPage() {
    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
        <div className='w-full md:w-auto'>
            <h1 className="font-black text-4xl text-cyan-700 my-5">Mis Presupuestos</h1>
            <p className="text-xl font-bold">Maneja y administra tus {''}
            <span className="text-lime-500">presupuestos</span>
            </p>
        </div>
        <Link
            href={'/admin/budget/new'}
            className='bg-cyan-700 hover:bg-cyan-600 p-2 rounded-lg text-white font-bold w-full md:w-auto text-center'
        >
            Crear Presupuesto
        </Link>
        </div>
      );
  }