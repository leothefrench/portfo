import Link from 'next/link'
import { JSX, SVGProps } from 'react'

const navigation = [
  {
    name: 'GitHub',
    href: '#',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props} >
        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.33-3.37-1.33-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.05 1.53 1.05.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8a9.6 9.6 0 012.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.67-4.57 4.92.36.31.68.91.68 1.83 0 1.32-.01 2.39-.01 2.72 0 .26.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    name: 'LinkeIn',
    href: '#',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props} >
        <path
          d="M100.28 448H7V148h93.28zM53.79 108.1C24.09 108.1 0 83.92 0 54.21 0 24.49 24.09 0 53.79 0c29.7 0 53.79 24.09 53.79 54.21 0 29.71-24.09 53.89-53.79 53.89zm394.2 339.9h-93.1V302.4c0-34.7-.7-79.4-48.4-79.4-48.4 0-55.8 37.8-55.8 76.8v148H158.7V148h89.4v40.9h1.3c12.4-23.5 42.6-48.4 87.7-48.4 93.8 0 111.2 61.8 111.2 142.3v165.2z"
        />
      </svg>
    )
  }
]

import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-8'>
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-center">
          <div className="flex justify-center space-x-6 md:order-2">
            {
              navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noreferre noopener'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className="size-6" aria-hidden="true" />
                </Link>
              ))
            }
            <div className='mt-8 md:order-1 md:mt-0 mx-auto'>
              <p className='text-center text-xs leading-5 text-muted-foreground'>
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
