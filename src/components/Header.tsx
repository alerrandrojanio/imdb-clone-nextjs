import Link from "next/link"

import { MenuItem } from "./MenuItem"

import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import { DarkModeSwitch } from "./DarkModeSwitch"

export function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto">
      <div className="flex">
        <MenuItem
          title="HOME"
          address="/"
          Icon={AiFillHome}
          description="home"
        />
        <MenuItem
          title="ABOUT"
          address="/about"
          Icon={BsFillInfoCircleFill}
          description="about"
        />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />

        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold text-black bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
