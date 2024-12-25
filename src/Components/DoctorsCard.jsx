import { MdOutlineStarPurple500 } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";
const DoctorsCard = () => {
    return (
        <div className="container mx-auto flex items-center justify-center gap-8">
            <div className="bg-[#FFF7E2] w-[350px] p-8">
                <div className="flex flex-col items-center justify-center">
                     <div className="relative">
                        <img className="w-32 h-32 rounded-full" src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX6FFRidnKLtRNCO1UsyCnjRfh9cfkow-FW1ie19s0h88wmP~Jqs82B2B0wPOEzZtiOOTEOrtqUNPB8KCidclT2ZLfLU8KqILggSYA8D1d8zyRvo25O8--T6c21FIwPH4XM3~JGe-mP9g-kq~6iM5wNP7EjnINklZn7lyXkjqO3Nbk5rRJn3tsUzqXzNb9KbjHr59ApUVKB4BagcwlWVLJBVNwWYwPZsYWSGUQWjiTf60UnTw4hlWS5VaOiFSeXbGlDCEnQzwYPaupzAlw~2fRT57VOTZu5ZpHWYXAHY87fPZFQsDXijF7sd0QPx0~1BpWsHX2xUSFHqVM7GsmhKTA__" alt="" />
                        <div className="absolute -bottom-4 left-1/3 bg-black text-white px-2 py-1 rounded-xl">
                            <p className="flex items-center gap-1">4.5 <MdOutlineStarPurple500 className="text-orange-300"/></p>
                        </div>
                     </div>
                    <h1 className="text-2xl font-bold mt-6">Dr. Prerna Narang</h1>
                </div>
                <div className="flex gap-1 flex-col items-center">
                    <p className="flex items-center gap-1"><LuLink/>Male-Female identify</p>
                    <p className="flex items-center gap-1"><FaGraduationCap/>7 years of Experience</p>
                    <p className="flex items-center gap-1"><BiCommentDetail/>Speaks English, Hindi, Marathi</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <p className="border-2 border-[#3A643B63] p-3 rounded-lg text-sm text-center w-[140px]">Vide Consultation<span className="flex items-center justify-center">
                    <MdCurrencyRupee/>800</span></p>
                    <p className="border-2 border-[#3A643B63] p-3 rounded-lg text-sm text-center w-[140px]">Chat Consultation <span>Free
                    </span></p>
                </div>
                <div className="mt-4">
                    <Link to='/doctor-profile'><button className="border-2 border-[#3A643B] w-full p-2 rounded-lg bg-slate-50">View Profile</button>
                    </Link>
                    <Link to='doctor-profile'><button className="w-full p-2 bg-[#3A643B] rounded-lg text-white mt-2">Book a Consultation</button>
                    </Link>
                </div>
            </div>
            <div className="bg-[#FFF7E2] w-[350px] p-8">
                <div className="flex flex-col items-center justify-center">
                     <div className="relative">
                        <img className="w-32 h-32 rounded-full" src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX6FFRidnKLtRNCO1UsyCnjRfh9cfkow-FW1ie19s0h88wmP~Jqs82B2B0wPOEzZtiOOTEOrtqUNPB8KCidclT2ZLfLU8KqILggSYA8D1d8zyRvo25O8--T6c21FIwPH4XM3~JGe-mP9g-kq~6iM5wNP7EjnINklZn7lyXkjqO3Nbk5rRJn3tsUzqXzNb9KbjHr59ApUVKB4BagcwlWVLJBVNwWYwPZsYWSGUQWjiTf60UnTw4hlWS5VaOiFSeXbGlDCEnQzwYPaupzAlw~2fRT57VOTZu5ZpHWYXAHY87fPZFQsDXijF7sd0QPx0~1BpWsHX2xUSFHqVM7GsmhKTA__" alt="" />
                        <div className="absolute -bottom-4 left-1/3 bg-black text-white px-2 py-1 rounded-xl">
                            <p className="flex items-center gap-1">4.5 <MdOutlineStarPurple500 className="text-orange-300"/></p>
                        </div>
                     </div>
                    <h1 className="text-2xl font-bold mt-6">Dr. Prerna Narang</h1>
                </div>
                <div className="flex gap-1 flex-col items-center">
                    <p className="flex items-center gap-1"><LuLink/>Male-Female identify</p>
                    <p className="flex items-center gap-1"><FaGraduationCap/>7 years of Experience</p>
                    <p className="flex items-center gap-1"><BiCommentDetail/>Speaks English, Hindi, Marathi</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <p className="border-2 border-[#3A643B63] p-3 rounded-lg text-sm text-center w-[140px]">Vide Consultation<span className="flex items-center justify-center">
                    <MdCurrencyRupee/>800</span></p>
                    <p className="border-2 border-[#3A643B63] p-3 rounded-lg text-sm text-center w-[140px]">Chat Consultation <span>Free
                    </span></p>
                </div>
                <div className="mt-4">
                    <Link to='/doctor-profile'><button className="border-2 border-[#3A643B] w-full p-2 rounded-lg bg-slate-50">View Profile</button>
                    </Link>
                    <Link to='doctor-profile'><button className="w-full p-2 bg-[#3A643B] rounded-lg text-white mt-2">Book a Consultation</button>
                    </Link>
                </div>
            </div>
            <div className="bg-[#FFF7E2] w-[350px] p-8">
                <div className="flex flex-col items-center justify-center">
                     <div className="relative">
                        <img className="w-32 h-32 rounded-full" src="https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX6FFRidnKLtRNCO1UsyCnjRfh9cfkow-FW1ie19s0h88wmP~Jqs82B2B0wPOEzZtiOOTEOrtqUNPB8KCidclT2ZLfLU8KqILggSYA8D1d8zyRvo25O8--T6c21FIwPH4XM3~JGe-mP9g-kq~6iM5wNP7EjnINklZn7lyXkjqO3Nbk5rRJn3tsUzqXzNb9KbjHr59ApUVKB4BagcwlWVLJBVNwWYwPZsYWSGUQWjiTf60UnTw4hlWS5VaOiFSeXbGlDCEnQzwYPaupzAlw~2fRT57VOTZu5ZpHWYXAHY87fPZFQsDXijF7sd0QPx0~1BpWsHX2xUSFHqVM7GsmhKTA__" alt="" />
                        <div className="absolute -bottom-4 left-1/3 bg-black text-white px-2 py-1 rounded-xl">
                            <p className="flex items-center gap-1">4.5 <MdOutlineStarPurple500 className="text-orange-300"/></p>
                        </div>
                     </div>
                    <h1 className="text-2xl font-bold mt-6">Dr. Prerna Narang</h1>
                </div>
                <div className="flex gap-1 flex-col items-center">
                    <p className="flex items-center gap-1"><LuLink/>Male-Female identify</p>
                    <p className="flex items-center gap-1"><FaGraduationCap/>7 years of Experience</p>
                    <p className="flex items-center gap-1"><BiCommentDetail/>Speaks English, Hindi, Marathi</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <p className="border-2 border-[#3A643B63] p-3 rounded-lg text-sm text-center w-[140px]">Vide Consultation<span className="flex items-center justify-center">
                    <MdCurrencyRupee/>800</span></p>
                    <p className="border-2 border-[#3A643B63] p-3 rounded-lg text-sm text-center w-[140px]">Chat Consultation <span>Free
                    </span></p>
                </div>
                <div className="mt-4">
                    <Link to='/doctor-profile'><button className="border-2 border-[#3A643B] w-full p-2 rounded-lg bg-slate-50">View Profile</button>
                    </Link>
                    <Link to='doctor-profile'><button className="w-full p-2 bg-[#3A643B] rounded-lg text-white mt-2">Book a Consultation</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;