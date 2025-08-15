import { useState } from "react";
import ReptinkLogo from "./ReptinkLogo";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(id);
  };

  const handleMobileNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setSheetOpen(false)
    setTimeout(() => scrollTo(id), 500)
  };

  return (
    <header className="w-full h-[100px] flex items-center justify-between bg-[#070B14] text-[#F1F2F3] px-4 md:px-8">
      <ReptinkLogo />

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-4 font-semibold">
        <a onClick={handleNav("home")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link cursor-pointer">Home</a>
        <a onClick={handleNav("about")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link cursor-pointer">Sobre</a>
        <a onClick={handleNav("studio")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link cursor-pointer">Estúdio</a>
        <a onClick={handleNav("realism")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link cursor-pointer">Preto e Cinza</a>
        <a onClick={handleNav("coverup")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link cursor-pointer">Cover‑up</a>
        <a onClick={handleNav("contact")} className="px-4 py-2 rounded-lg transition-all duration-200 ease-in hover:bg-[hsl(var(--nav-hover))]/30 active:scale-95 story-link cursor-pointer">Contato</a>
      </nav>

      {/* Mobile nav */}
      <div className="md:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger aria-label="Open menu" className="p-2 rounded-md hover:bg-white/5 transition">
            <Menu />
          </SheetTrigger>

          <SheetContent side="left" className="w-72 flex flex-col gap-4">
            <ReptinkLogo />

            <nav className="flex flex-col gap-3 text-lg font-medium">
              <button type="button" onClick={handleMobileNav("home")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Home</button>
              <button type="button" onClick={handleMobileNav("about")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Sobre</button>
              <button type="button" onClick={handleMobileNav("studio")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Estúdio</button>
              <button type="button" onClick={handleMobileNav("realism")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Preto e Cinza</button>
              <button type="button" onClick={handleMobileNav("coverup")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Cover‑up</button>
              <button type="button" onClick={handleMobileNav("contact")} className="text-left transition-colors duration-200 hover:text-[hsl(var(--nav-hover-mobile))] story-link">Contato</button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
