"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { navigationLinks } from "@/constants"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import HamburgerMenu from "@/app/components/hamburger-menu"
import GradientBorderButton from "@/app/components/icons/gradient-border-button"

export default function Header() {
  const params = useParams()
  const [openNavigation, setOpenNavigation] = useState(false)
  const [hash, setHash] = useState("")
  console.log("Header ~ hash:", hash)

  useEffect(() => {
    setHash(window.location.hash)
  }, [params])

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:border-n-8/90 lg:backdrop-blur-sm",
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      )}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src="/brainwave.svg" width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={cn(
            "fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent",
            openNavigation ? "flex" : "hidden"
          )}
        >
          {/* Desktop navigation */}
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={cn(
                  "relative block p-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12",
                  link.onlyMobile ? "lg:hidden" : "",
                  link.url === hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile navigation */}
          <HamburgerMenu />
        </nav>

        <Link
          href="#signup"
          className={cn(
            buttonVariants({ variant: "primary" }),
            "mr-8 hidden text-n-1/50 hover:text-n-1 lg:flex"
          )}
        >
          New account
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "primary" }),
            "relative z-10 hidden lg:flex"
          )}
          href="#login"
        >
          <span className="z-30">Sign in</span>
          <GradientBorderButton />
        </Link>
      </div>
    </div>
  )
}
