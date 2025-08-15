import ReptinkLogo from "./ReptinkLogo";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

export default function Header() {

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    scrollTo(id)
  }


  const handleMobileNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    // Wait for the sheet to close before scrolling to avoid jumping to top
    requestAnimationFrame(() => {
      setTimeout(() => scrollTo(id), 50)
    })
  }

  return (
    <header className="w-full h-[100px] flex items-center justify-between bg-[#070B14] text-[#F1F2F3] px-4 md:px-8">
      <ReptinkLogo />

      <nav className="hidden md:flex items-center gap-4 font-semibold">
        <a href="#home" onClick={handleNav("home")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Home</a>
        <a href="#about" onClick={handleNav("about")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Sobre</a>
        <a href="#benefits" onClick={handleNav("benefits")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Comodidades</a>
        <a href="#realism" onClick={handleNav("realism")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Preto e Cinza</a>
        <a href="#coverup" onClick={handleNav("coverup")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Cover‑up</a>
        <a href="#location" onClick={handleNav("location")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Localização</a>
        <a href="#contact" onClick={handleNav("contact")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link">Contato</a>
      </nav>

      {/* Mobile: Hamburger + Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open menu" className="p-2 rounded-md hover:bg-white/5 transition"><Menu /></SheetTrigger>
          <SheetContent side="left" className="w-72 flex flex-col gap-4">
            <ReptinkLogo />

            <nav className="flex flex-col gap-3 text-lg font-medium">
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("home")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Home</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("about")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Sobre</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("benefits")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Comodidades</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("realism")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Preto e Cinza</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("coverup")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Cover‑up</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("location")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Localização</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("contact")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Contato</button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
