"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const tabs = [
    { name: 'My account', href: '/admin/profile/settings'},
    { name: 'Modify password', href: '/admin/profile/password'},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ProfileTabs() {
    const router = useRouter()
    const pathname = usePathname()
    const currentTab = tabs.filter(tab => tab.href === pathname)[0]


    return (
        <div className='mb-5'>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-lime-600 focus:ring-lime-600"
                    onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => router.push(e.target.value) }
                    value={currentTab.href.toString()}
                >
                    {tabs.map((tab) => (
                        <option 
                        value={tab.href}
                            key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>

            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    pathname === tab.href
                                        ? 'border-lime-600 text-lime-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                            >
                                <span>{tab.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}