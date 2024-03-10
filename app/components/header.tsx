"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:border-n-8/90 lg:backdrop-blur-sm",
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm",
      )}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src="/brainwave.svg" width={190} height={40} alt="Brainwave" />
        </a>
      </div>
    </div>
  );
}
