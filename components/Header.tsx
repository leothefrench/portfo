'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { ModeToggle } from '@/components//ModeToggle'

const links = [
    {
        href: '/',
        label: 'LDS'
    },
    {
        href: '/posts',
        label: 'Posts'
    },
    {
        href: '/projects',
        label: 'Projects'
    },
    {
        href: '/contacts',
        label: 'Contacts'
    },
]

export const Header = () => {

    const pathname = usePathname()

  return (
    <header className='fixed inset-x-0 top-0 z-10 bg-background/75 py-6 backdrop-blur-sm'>
        <nav className='container flex max-w-3xl justify-between items-center'>
            <Link href='/' className='font-sertif text-2xl font-bold' aria-label="Retour à l'accueil" aria-current={pathname === '/' ? 'page' : undefined}>
                LDS
            </Link>
            <div className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
                {
                    links.map((link, index) => (
                        <Link href={link.href} key={index}
                        className='transition-colors hover:text-foreground'
                        aria-current={link.href === pathname ? 'page' : undefined}
                        >
                            {link.label}
                        </Link>
                    ))
                }
            </div>
            <div>
                <ModeToggle />
            </div>
        </nav>
    </header>
  )
}
