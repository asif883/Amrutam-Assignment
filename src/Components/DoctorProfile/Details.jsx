import { FaPlus } from "react-icons/fa";

const Details = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 gap-5">
            {/* A little about me */}
            <div className="border border-gray-300 rounded-xl ">
                <div className="bg-gray-100 flex items-center justify-between px-4 py-1  rounded-t-xl">
                    <h1 className="text-xl font-medium text-gray-600 "> A Little About Me</h1>
                    <p className="flex items-center gap-1 border-2 border-gray-200 p-2 rounded-xl text-gray-500">Follow <FaPlus/></p>
                </div>
                <div className="px-4 py-2">
                    <p className="text-gray-600">
                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Details;