import * as React from "react";
import { FaPlay } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import g1 from "@/assets/realism-1.jpg";
import g2 from "@/assets/realism-2.jpg";
import g3 from "@/assets/realism-3.jpg";
import g4 from "@/assets/realism-4.jpg";
import g5 from "@/assets/realism-5.mp4";
import g6 from "@/assets/realism-6.mp4";
import g7 from "@/assets/realism-7.mp4";
import g8 from "@/assets/realism-8.mp4";

export default function RealismHighlight() {
    const items = [
        { src: g1, alt: "Realism example 1", type: "image" },
        { src: g2, alt: "Realism example 2", type: "image" },
        { src: g3, alt: "Realism example 3", type: "image" },
        { src: g4, alt: "Realism example 4", type: "image" },
        { src: g5, alt: "Realism video 1", type: "video" },
        { src: g6, alt: "Realism video 2", type: "video" },
        { src: g7, alt: "Realism video 3", type: "video" },
        { src: g8, alt: "Realism video 4", type: "video" },
    ];

    const isMobile = useIsMobile();
    const perRow = isMobile ? 2 : 4;
    const initialCount = perRow * 2; // 2 rows
    const [expanded, setExpanded] = React.useState(false);
    const visibleItems = React.useMemo(
        () => items.slice(0, expanded ? items.length : initialCount),
        [items, expanded, initialCount]
    );

    return (
        <section id="realism" className="px-4 md:px-6 bg-[#F1F2F3]">
            <div className="rounded-lg p-4 md:p-6 bg-transparent">
                <h2 className="text-[25px] md:text-[50px] font-bold mb-[25px] text-center uppercase text-[#070B14]">
                    Portfólio Preto e Cinza
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {visibleItems.map((it, idx) => (
                        <Dialog key={idx}>
                            <DialogTrigger asChild>
                                <div className="group relative w-[95%] h-[300px] md:h-[390px] overflow-hidden rounded-md hover-scale animate-fade-in transition-all duration-300 ease-out hover:shadow-[0_0_7px_rgba(250,250,250,0.2)] cursor-pointer">
                                    {it.type === "image" ? (
                                        <>
                                            <img
                                                src={it.src}
                                                alt={it.alt}
                                                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:blur-[2px]"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/5 backdrop-blur-sm"
                                            >
                                                <Search className="size-10 text-white drop-shadow-[0_0_2px_black]" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <video
                                                src={it.src}
                                                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:blur-[2px]"
                                                preload="metadata"
                                            />
                                            <div className="absolute bottom-3 left-3 text-white font-bold">
                                                <FaPlay size={20} className="drop-shadow-[0_0_2px_black]" />
                                            </div>
                                            <div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/5 backdrop-blur-sm"
                                            >
                                                <FaPlay className="size-7 text-white drop-shadow-[0_0_2px_black]" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </DialogTrigger>

                            <DialogContent className="max-w-[100vw] max-h-[90dvh] w-auto h-auto p-2">
                                {it.type === "image" ? (
                                    <img
                                        src={it.src}
                                        alt={it.alt}
                                        className="h-full max-w-full max-h-[80dvh] object-cover rounded-lg"
                                    />
                                ) : (
                                    <video
                                        src={it.src}
                                        controls
                                        autoPlay
                                        className="h-full max-w-full max-h-[80dvh] object-cover rounded-lg"
                                    />
                                )}
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                {items.length > initialCount && (
                    <div className="mt-6 flex justify-center">
                        <Button
                            onClick={() => setExpanded((v) => !v)}
                            aria-expanded={expanded}
                            variant="secondary"
                        >
                            {expanded ? "Fechar aba" : "Mostrar mais"}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
