import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    /*<header className="py-8 xl:py-12 text-white">*/
    <header className="fixed top-0 left-0 w-full bg-primary py-4 xl:py-6 text-white shadow-lg z-50">
        <div className="container max-auto flex justify-between items-center px-4">
            {/* Logo */}
            <Link href={"/"}>
            <h1 className="text-2xl font-semibold">
                Tharu <span className="text-accent">Travels.</span>
            </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button>Hire us</Button>
                </Link>
            </div>


            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>
  )
}

export default Header
