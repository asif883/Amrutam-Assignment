import { RxCross2 } from "react-icons/rx";


const DoctorsFilter = () => {
    return (
        <div className="my-10 container mx-auto flex justify-end items-center gap-5">
                    <div className="bg-[#EAF2EA] w-[140px] rounded-full p-2">
                        <p className="text-[#585858]  flex gap-2 items-center justify-center font-medium"><span>Hair Care</span> <RxCross2/></p>
                    </div>
                    <div className="bg-[#EAF2EA] w-[140px] rounded-full p-2">
                        <p className="text-[#585858]  flex gap-2 items-center justify-center font-medium"><span>Female</span> <RxCross2/></p>
                    </div>
                    <div className="bg-[#EAF2EA] w-[140px] rounded-full p-2">
                        <p className="text-[#585858]  flex gap-2 items-center justify-center font-medium"><span>Rs.01-Rs.500</span> <RxCross2/></p>
                    </div>
                    <div className="bg-[#EAF2EA] w-[140px] rounded-full p-2">
                        <p className="text-[#585858]  flex gap-2 items-center justify-center font-medium"><span>Hindi</span> <RxCross2/></p>
                    </div>
                    
                </div>
    );
};

export default DoctorsFilter;