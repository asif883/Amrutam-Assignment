import { IoIosArrowDown } from "react-icons/io";
const FilterOption = () => {
    return (
        <div className="my-10 border-b border-gray-200 pb-5 container mx-auto flex items-center gap-10 justify-center">
            <div className="bg-[#F3F3F3] w-[140px] rounded-lg p-3">
                <p className="text-[#585858]  flex gap-2 items-center justify-center"><span>Expertise</span> <IoIosArrowDown/></p>
            </div>
            <div className="bg-[#F3F3F3] w-[140px] rounded-lg p-3">
                <p className="text-[#585858]  flex gap-2 items-center justify-center"><span>Gender</span> <IoIosArrowDown/></p>
            </div>
            <div className="bg-[#F3F3F3] w-[140px] rounded-lg p-3">
                <p className="text-[#585858]  flex gap-2 items-center justify-center"><span>Languages</span> <IoIosArrowDown/></p>
            </div>
            <div className="bg-[#F3F3F3] w-[140px] rounded-lg p-3">
                <p className="text-[#585858]  flex gap-2 items-center justify-center"><span>Fees</span> <IoIosArrowDown/></p>
            </div>
            <div className="bg-[#DCEEDC] w-[140px] rounded-lg p-3">
                <p className="text-[#585858]  flex gap-2 items-center justify-center"><span>All Filters</span> <IoIosArrowDown/></p>
            </div>
        </div>
    );
};

export default FilterOption;