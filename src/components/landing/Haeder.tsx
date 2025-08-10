import ReptinkLogo from "../../assets/reptink-logo.png";

export default function Header() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className="w-full h-[100px] flex items-center justify-start bg-[#070B14] text-[#F1F2F3]">
            <div className="w-1/2 flex items-center gap-4">
                <img src={ReptinkLogo} className="h-[70px] pl-[30px]" alt="Reptink Logo" />
                <span className="text-3xl font-bold">REPTINK</span>
            </div>
            <div className="w-1/2">
                <nav className="flex items-center justify-end gap-2 pr-[40px] font-semibold">
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Home</a>
                    <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo("sobre"); }}>About</a>
                    <a href="#galeria" onClick={(e) => { e.preventDefault(); scrollTo("galeria"); }}>Gallery</a>
                    <a href="#coverup" onClick={(e) => { e.preventDefault(); scrollTo("coverup"); }}>Cover‑up</a>
                    <a href="#contato" onClick={(e) => { e.preventDefault(); scrollTo("contato"); }}>Contact</a>
                </nav>
            </div>
        </header>
    )
}