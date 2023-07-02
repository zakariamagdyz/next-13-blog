import Link from "next/link"
import React from "react"
import { FaGithub, FaLaptop, FaTwitter, FaYoutube } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row">
        <h1 className=" mb-2 text-center text-3xl font-bold text-white md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Zakaria Magdy
          </Link>
        </h1>
        <div
          className="flex flex-row justify-center gap-4 align-middle text-4xl text-white sm:justify-evenly lg:text-5xl"
          data-testid="social-links"
        >
          <Link
            href=""
            className="text-white/90 hover:text-white"
            target="_blank"
          >
            <FaYoutube />
          </Link>
          <Link
            href=""
            className="text-white/90 hover:text-white"
            target="_blank"
          >
            <FaLaptop />
          </Link>
          <Link
            href="https://github.com/zakariamagdyz"
            className="text-white/90 hover:text-white"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            href=""
            className="text-white/90 hover:text-white"
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
