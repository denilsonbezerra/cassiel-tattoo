import ReptinkLogo from "../../assets/reptink-logo.png";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(id);
  };

  const handleMobileNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    // Wait for the sheet to close before scrolling to avoid jumping to top
    requestAnimationFrame(() => {
      setTimeout(() => scrollTo(id), 50);
    });
  };

  return (
    <header className="w-full h-[100px] flex items-center justify-between bg-[#070B14] text-[#F1F2F3] px-4 md:px-8">
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <img src={ReptinkLogo} className="h-[56px] md:h-[70px]" alt="Reptink Logo" />
        <span className="text-2xl md:text-3xl font-bold">REPTINK</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4 font-semibold">
        <a href="#home" className="story-link" onClick={handleNav("home")}>Home</a>
        <a href="#about" className="story-link" onClick={handleNav("about")}>About</a>
        <a href="#coverup" className="story-link" onClick={handleNav("coverup")}>Cover‑up</a>
        <a href="#portfolio" className="story-link" onClick={handleNav("portfolio")}>Portfolio</a>
        <a href="#contact" className="story-link" onClick={handleNav("contact")}>Contact</a>
      </nav>

      {/* Mobile: Hamburger + Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open menu" className="p-2 rounded-md hover:bg-white/5 transition"><Menu /></SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex items-center gap-3 mb-6">
              <img src={ReptinkLogo} className="h-12" alt="Reptink Logo" />
              <span className="text-xl font-bold">REPTINK</span>
            </div>
            <nav className="flex flex-col gap-3 text-lg font-medium">
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("home")} className="story-link text-left">Home</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("about")} className="story-link text-left">About</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("coverup")} className="story-link text-left">Cover‑up</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("portfolio")} className="story-link text-left">Portfolio</button>
              </SheetClose>
              <SheetClose asChild>
                <button type="button" onClick={handleMobileNav("contact")} className="story-link text-left">Contact</button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
