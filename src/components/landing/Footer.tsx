import { FaWhatsapp, FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt, FaItalic } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReptinkLogo from "./ReptinkLogo";
import SocialLinks from "./SocialLinks";

export default function Footer() {
    const phone = "558587475079";
    const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Quero agendar uma tatuagem")}`;
    const phoneLink = `tel:${phone}`

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const handleNav = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault()
        scrollTo(id)
    }

    return (
        <footer className="w-screen px-4 md:px-8 flex flex-col pt-[40px] pb-[20px] items-center justify-s border-t gap-[30px] bg-[#070B14] text-white">
            <div className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-0">
                <div className="w-[55%] flex flex-col items-center gap-3">
                    <div className="w-fit flex flex-col items-center gap-3">
                        <ReptinkLogo />
                        <div className="flex gap-[10px]">
                            <SocialLinks
                                href={wa}
                                icon={<FaWhatsapp size={20} />}
                            />

                            <SocialLinks
                                href="https://www.instagram.com/cassiel.tattoo?igsh=aHF2cHBlZGdwZzcw&utm_source=qr"
                                icon={<FaInstagram size={20} />}
                            />

                            <SocialLinks
                                href="https://www.tiktok.com/@cassiel.tattoo?_t=ZM-8ynZt1TZoRE&_r=1"
                                icon={<FaTiktok size={20} />}
                            />
                        </div>
                    </div>
                </div>

                <div className="md:w-[45%] flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-[25%] md:h-fit flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Acessos</h3>
                        <nav id="FOOTER-NAV" className="flex flex-col w-fit gap-2">
                            <a onClick={handleNav("home")} className="transition-colors duration-300 ease-in-out hover:text-secondary cursor-pointer">Home</a>
                            <a onClick={handleNav("about")} className="transition-colors duration-300 ease-in-out hover:text-secondary cursor-pointer">Sobre</a>
                            <a onClick={handleNav("studio")} className="transition-colors duration-300 ease-in-out hover:text-secondary cursor-pointer">Estúdio</a>
                            <a onClick={handleNav("realism")} className="transition-colors duration-300 ease-in-out hover:text-secondary cursor-pointer">Preto e Cinza</a>
                            <a onClick={handleNav("coverup")} className="transition-colors duration-300 ease-in-out hover:text-secondary cursor-pointer">Cover‑up</a>
                            <a onClick={handleNav("contact")} className="transition-colors duration-300 ease-in-out hover:text-secondary cursor-pointer">Contato</a>
                        </nav>
                    </div>

                    <div className="w-full md:w-[75%] md:h-fit flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">Contatos</h3>
                        <nav id="CONTATOS" className="flex flex-col items-start w-fit gap-2">
                            <Link
                                to="https://maps.app.goo.gl/N8SJtjVRudqfiHXk6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-secondary"
                            >
                                <FaMapMarkerAlt size={17} /> <span>Rua Hugo Vítor, 391 - Antônio Bezerra, Fortaleza, Ceará</span>
                            </Link>

                            <Link
                                to={phoneLink}
                                className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-secondary"
                            >
                                <FaPhone size={17} /> <span>(85) 98747-5079</span>
                            </Link>

                            <Link
                                to={wa}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-secondary"
                            >
                                <FaWhatsapp size={17} /> <span>WhatsApp - Cassiel</span>
                            </Link>

                            <Link
                                to="https://www.instagram.com/cassiel.tattoo?igsh=aHF2cHBlZGdwZzcw&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-secondary"
                            >
                                <FaInstagram size={17} /> <span>cassiel.tattoo</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <p className="text-sm font-semibold">
                © {new Date().getFullYear()} - Todos os Direitos Reservados
            </p>
        </footer>
    )
}