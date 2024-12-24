import { FaArrowCircleDown, FaLocationArrow } from "react-icons/fa";

const Banner = () => {
    return (
       <div className="bg-[#EAF2EA] h-[220px]">
            <div className="flex flex-col gap-6 items-center justify-center h-full">
                <h1 className="text-3xl font-semibold capitalize text-[#000000]">Find expert Doctors for an In-clinic session here</h1>
                <div className="flex items-center gap-2">
                  <label className="w-[200px] flex gap-2 items-center border bg-white p-2 rounded-lg">
                    <FaLocationArrow/>
                    <input className="w-full border-none" type="text" placeholder="Select Location" />
                    <FaArrowCircleDown/>
                  </label>
                  <label className="w-[400px] flex gap-2 items-center justify-between border bg-white p-2 rounded-lg">
                    
                    <input className="w-full " type="text" placeholder="eg. Doctor, specialisation, clinic name" />
                    <FaArrowCircleDown/>
                  </label>
                </div>
            </div>
       </div>
    );
};

export default Banner;