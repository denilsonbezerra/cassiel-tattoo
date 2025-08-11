import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import g1 from "@/assets/realism-1.jpg";
import g2 from "@/assets/realism-2.jpg";
import g3 from "@/assets/realism-3.jpg";
import g4 from "@/assets/realism-4.jpg";
import g5 from "@/assets/realism-5.mp4";
import g6 from "@/assets/realism-6.mp4";
import g7 from "@/assets/realism-7.mp4";

export default function RealismHighlight() {
    const images = [
        { src: g1, alt: "Realism example 1" },
        { src: g2, alt: "Realism example 2" },
        { src: g3, alt: "Realism example 3" },
        { src: g4, alt: "Realism example 4" },
    ];

    const videos = [
        { src: g5, alt: "Cover-up example 5" },
        { src: g6, alt: "Cover-up example 6" },
        { src: g7, alt: "Cover-up example 7" },
    ]

    return (
        <section id="coverup" className="px-4 pb-12 md:px-6 bg-[#070B14]">
            <div className="rounded-lg p-4 md:p-6 bg-transparent">
                <h2 className="text-xl md:text-[50px] font-semibold mt-[-10px] mb-[45px] text-center text-[#F1F2F3]">Portfólio Preto e Cinza</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {images.map((it, idx) => (
                        <Dialog key={idx}>
                            <DialogTrigger asChild>
                                <div className="group relative w-[95%] h-[300px] md:h-[390px] overflow-hidden rounded-md hover-scale animate-fade-in transition-all duration-300 ease-out hover:shadow-[0_0_7px_rgba(250,250,250,0.2)] cursor-pointer">
                                    <img
                                        src={it.src}
                                        alt={it.alt}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:blur-[2px]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/5 backdrop-blur-sm"
                                    >
                                        <Search className="h-9 w-9 text-foreground" />
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-[100vw] max-h-[90dvh] w-auto h-auto p-2">
                                <img
                                    src={it.src}
                                    alt={it.alt}
                                    className="h-full max-w-full max-h-[80dvh] object-cover rounded-lg"
                                />
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}
