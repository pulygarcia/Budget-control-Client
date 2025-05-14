'use client'

import { logout } from '@/app/actions/logout-action'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'

export default function AdminMenu() {
  return (
      <Popover>
        <PopoverButton className="block cursor-pointer text-sm/6 font-semibold focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
          <span className='p-2 border border-gray-300 rounded-lg text-white'>Settings</span>
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
        >
          <div className="p-3 space-y-6">
            <div>
                <Link href={'/'/*'/profile'*/} className='text-white'>Profile</Link>
                <p className="text-gray-400">Check your profile data</p>
            </div>
            <div>
                <Link href={'/'/*'/budgets'*/} className='text-white'>My budgets</Link>
                <p className="text-gray-400">Check and manage your budgets</p>
            </div>
            <div>
                <button onClick={async () => await logout()} className='bg-red-600 p-2 rounded-lg text-white cursor-pointer'>
                    <span className=''>Close session</span>
                </button>
            </div>
          </div>
         
        </PopoverPanel>
      </Popover>
  )
}