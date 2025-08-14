import ReptinkImage from "../../assets/reptink-logo.png";

export default function ReptinkLogo() {
    return (
        <div className="flex items-center gap-3 cursor-pointer transition-all duration-300 ease-in-out hover:text-[#699689]">
            <img src={ReptinkImage} className="h-[56px] md:h-[70px]" alt="Reptink Logo" />
            <span className="text-2xl md:text-3xl font-bold">REPTINK</span>
        </div>
    )
}