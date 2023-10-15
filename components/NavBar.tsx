"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useStore } from "@/app/(store)/store";
import CheckOutDrawer from "./CheckOutDrawer";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState<boolean>(false)
    const currentPath = usePathname();
    const {transaction} = useStore()
    const darkMode = () => {
        const htmlElement = document.getElementById('html') as HTMLHtmlElement;
        const currentTheme = htmlElement.dataset.theme;
        htmlElement.dataset.theme = currentTheme === 'winter' ? 'dracula' : 'winter'
    }
    const links = [
        {label: 'Home', href: '/'},
        {label: 'Coffee', href: '/coffee'},
        {label: 'Our Team', href: '/team'},
        {label: 'Testimonials', href: '/testimonial'}
    ]
    const cartButton = () => {
        //console.log("Cart!!")
        setOpen(prev => !prev)
    }
    return (
        <nav className="navbar flex justify-between mb-2 bg-base-100/50">
            {/* Hamburger */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links.map((link, i) => (
                    <li key={i}><Link href={link.href}>{link.label}</Link></li>
                ))}
                
              </ul>
            </div>
            {/* Logo */}
            <div className="navbar-start">
                <h1 className="text-3xl lg:text-5xl text-primary text-center">
                    <Link href={'/'}>Westeros Coffee</Link>
                </h1>
            </div>
            {/* Middle */}
            <div className="navbar-center hidden lg:flex">
                <ul>
                    {links.map((link, i) => (
                        <li key={i} className={`menu menu-horizontal border-base-content ${link.href === currentPath ? 'border-b-2' : 'border-b-0'} transition-all`}>
                            <Link href={link.href} className="text-base">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* End */}
            <div className="navbar-end flex">
                <label className="swap swap-rotate btn-ghost btn btn-circle">
                  <input type="checkbox" onChange={darkMode}/>
                  {/* sun icon */}
                  <svg className="swap-on fill-current w-8 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                  {/* moon icon */}
                  <svg className="swap-off fill-current w-8 aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
                <label className="btn btn-ghost btn-circle" onClick={cartButton}>
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 aspect-square" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">
                        {transaction.length}
                    </span>
                  </div>
                </label>
            </div>
            {/* Drawer */}
            <CheckOutDrawer open={open} setOpen={setOpen}/>
        </nav>
    )
}
// tabIndex={0} 