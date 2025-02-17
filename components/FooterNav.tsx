"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterNav() {
    const currentPath = usePathname();
  return (
    <nav className="py-[29px] desktop:py-10">
    <ul className="flex justify-between w-[262.92px] desktop:w-[366px] mx-auto ">
        <li>
            <Link
                href="/"
                style={{ color: currentPath === "/" ? "#7C4EE4" : "" }}
                className="font-raleway  text-[11.49px] desktop:text-base"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                href="/blog"
                style={{ color: currentPath === "/blog" ? "#7C4EE4" : "" }}
                className="font-raleway  text-[11.49px] desktop:text-base"
            >
                Blog
            </Link>
        </li>
        <li>
            <Link
                href="/about"
                style={{ color: currentPath === "/about" ? "#7C4EE4" : "" }}
                className="font-raleway  text-[11.49px] desktop:text-base"
            >
                About
            </Link>
        </li>
        <li>
            <Link
                href="/contact"
                className="font-raleway  text-[11.49px] desktop:text-base"
            >
                Contact Us
            </Link>
        </li>
    </ul>
</nav>
  )
}
