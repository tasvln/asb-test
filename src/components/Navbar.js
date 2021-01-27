import * as React from 'react'
import logo from '../assets/logo.svg'
import home from '../assets/home.svg'
import entries from '../assets/entries.svg'
import divisions from '../assets/divisions.svg'
import search from '../assets/search.svg'
import user from '../assets/user.svg'
import note from '../assets/notifications.svg'
import dropdown from '../assets/arrowdown.svg'

export default function Navbar() {
    return(
        <div>
            <div className="bg-white navbar flex items-center">
                <div className="flex items-center py-5 px-8 logo-padd">
                    <img src={logo} />
                    <p className="font-semibold ml-1 hide-phone">FE Engineer Test 1</p>
                </div>
                <div className="hide-phone flex items-center">
                    <div className="flex items-center ml-8">
                        <a href="" className="flex py-5 px-4 items-center nav-link">
                            <img className="mr-3" src={home} />
                            Home
                        </a>
                    </div>
                    <div className="flex items-center ml-8">
                        <a href="" className="flex py-5 px-4 items-center nav-link">
                            <img className="mr-3" src={entries} />
                            Entries
                        </a>
                    </div>
                    <div className="flex items-center ml-8">
                        <a href="" className="flex py-5 px-4 items-center nav-link-active">
                            <img className="mr-3" src={divisions} />
                            Divisions
                        </a>
                    </div>
                </div>
                <div className="ml-auto flex items-center">
                    <div className="relative flex items-center hide-phone">
                        <input className="py-2 pl-12 pr-4 custom-input outline-none" type="text" />
                        <img className="absolute left-0 ml-4 pointer-events-none" src={search} />
                    </div>
                    <div className="hidden phone-show">
                        <img className="" src={search} />
                    </div>
                    <a href="" className="px-8 note-padd">
                        <img src={note} />
                    </a>
                    <div className="pr-8 user-padd flex items-center">
                        <a href="" className="mr-2">
                            <img src={user} />
                        </a>
                        <img src={dropdown} />
                    </div>
                </div>
            </div>
            <div className="hidden sec-nav phone-show px-2 bg-white navbar">
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <a href="" className="flex py-5 px-4 items-center nav-link">
                            <img className="mr-3" src={home} />
                            Home
                        </a>
                    </div>
                    <div className="flex items-center mx-4">
                        <a href="" className="flex py-5 px-4 items-center nav-link">
                            <img className="mr-3" src={entries} />
                            Entries
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="" className="flex py-5 px-4 items-center nav-link-active">
                            <img className="mr-3" src={divisions} />
                            Divisions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}