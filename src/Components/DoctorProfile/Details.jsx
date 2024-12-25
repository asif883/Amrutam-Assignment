import { FaPlus , FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaRegUser, FaShieldAlt, FaRegSmile, FaRegHeart } from 'react-icons/fa';
import { TbCalendarWeek } from "react-icons/tb";
import { TbBuildingBank } from "react-icons/tb";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Details = () => {
    return (
        <div className="container mx-auto grid grid-cols-2 gap-5">
            <div>
                 {/* A little about me */}
                <div className="border border-gray-300 rounded-xl ">
                    <div className="bg-gray-100 flex items-center justify-between px-4 py-1  rounded-t-xl">
                        <h1 className="text-xl font-medium text-gray-600 "> A Little About Me</h1>
                        <p className="flex items-center gap-1 border-2 border-gray-200 p-2 rounded-xl text-gray-500">Follow <FaPlus/></p>
                    </div>
                    <div className="px-4 py-2">
                        <p  className="text-sm text-gray-600 mt-4">
                        Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the....
                    
                        </p>
                        <div className="flex justify-end mt-1">
                            <span className="text-gray-500 text-sm font-medium underline">Read More</span>
                        </div>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex items-center gap-8 my-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Language Spoken</h3>
                            <div className="flex space-x-2">
                            {['English', 'Hindi', 'Telugu'].map((language) => (
                                <span
                                key={language}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                {language}
                                </span>
                            ))}
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-4 text-gray-500 pb-3">
                        <a href="#" className="hover:text-blue-500 text-lg border-2 p-2 rounded-full">
                        <FaFacebookF  className='text-[#3A643B]'/>
                        </a>
                        <a href="#" className="hover:text-blue-500 text-lg border-2 p-2 rounded-full">
                        <FaInstagram  className='text-[#3A643B]'/>
                        </a>
                        <a href="#" className="hover:text-blue-500 text-lg border-2 p-2 rounded-full">
                        <FaYoutube  className='text-[#3A643B]'/>
                        </a>
                        <a href="#" className="hover:text-blue-500 text-lg border-2 p-2 rounded-full">
                        <FaTwitter  className='text-[#3A643B]'/>
                        </a>
                        </div>
                    </div>
                </div>
                {/* specialized */}
                <div className="border border-gray-300 rounded-xl space-y-6 mt-6">
                    <div>
                        <h3 className="px-6 py-1 rounded-t-xl bg-gray-100 text-lg font-semibold text-gray-800 mb-4">I Specialize In</h3>
                        <div className="grid grid-cols-4 gap-4">
                        {/* Specialization Cards */}
                        <div className="flex flex-col items-center pb-4">
                            <div className="bg-gray-50 p-4 rounded-full">
                            <FaRegHeart className="text-[#3A643B85] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-700 mt-2 text-center">Women's Health</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-50 p-4 rounded-full">
                            <FaRegSmile className="text-[#3A643B85] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-700 mt-2 text-center">Skin Care</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-50 p-4 rounded-full">
                            <FaShieldAlt className="text-[#3A643B85] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-700 mt-2 text-center">Immunity</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-50 p-4 rounded-full">
                            <FaRegUser className="text-[#3A643B85] text-2xl" />
                            </div>
                            <p className="text-sm text-gray-700 mt-2 text-center">Hair Care</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-xl mt-6'>
                    <h3 className=" px-6 text-lg bg-gray-100 rounded-t-xl font-semibold text-gray-800 mb-4">The Concerns I Treat</h3>
                    <div className="flex flex-wrap gap-2 p-4">
                    {/* Concern Tags */}
                    {['Skin Treatment', 'Pregnancy', 'Period Doubts', 'Endometriosis', 'Pelvic Pain', 'Ovarian Cysts', '+ 5 More'].map(
                        (concern, index) => (
                        <span
                            key={index}
                            className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full shadow-sm"
                        >
                            {concern}
                        </span>
                        )
                    )}
                    </div>
                </div>
                <div className="border border-gray-300 rounded-xl mt-6 space-y-8">
                {/* My Work Experience Section */}
                <div>
                    <h3 className="text-lg px-6 py-1 bg-gray-100 rounded-t-xl font-semibold text-gray-800 mb-4">My Work Experience</h3>
                    <div className='px-6'>
                        <p className="text-green-700 font-semibold mb-4 ">
                        I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
                        </p>
                        <hr className="my-4 border-gray-300" />
                    </div>
                    <div className="space-y-4 px-6 pb-3">
                    {/* Work Experience Item */}
                    {[
                        { place: 'Midtown Medical Clinic', position: 'Senior doctor', period: '2016–PRESENT' },
                        { place: 'Midtown Medical Clinic', position: 'Senior doctor', period: '2010–2015' },
                    ].map((experience, index) => (
                        <div key={index} className="flex items-start space-x-4">
                        <div className="bg-gray-50 p-3 rounded-full">
                            <TbBuildingBank className="text-blue-700 text-2xl" />
                        </div>
                        <div>
                            <p className="text-gray-800 font-medium">{experience.place}</p>
                            <p className="text-sm text-gray-600">{experience.position}</p>
                            <p className="text-sm text-gray-500">{experience.period}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
                {/* Featured Reviews Section */}
                <div className='border border-gray-300 rounded-xl mt-6'>
                    <h3 className="text-lg bg-gray-100 rounded-t-xl px-6 py-1  font-semibold text-gray-800 mb-4">Featured Reviews (102)</h3>
                    <div className="space-y-4 px-4 pb-4">
                    {/* Review Item */}
                    {[
                        {
                        name: 'Alicent Hightower',
                        consultation: 'Consulted for Skin care',
                        date: '20 January 2023',
                        review:
                            'Might be a bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.',
                        rating: 5,
                        },
                        {
                        name: 'Alicent Hightower',
                        consultation: 'Consulted for Pregnancy',
                        date: '20 January 2023',
                        review:
                            'Might be a bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.',
                        rating: 5,
                        },
                    ].map((review, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-4">
                            <img
                            src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2YGR-mobEe7G-NLmISy-4XCVKz-xJJxsjriBCT9K2m1~W7FUSYoh262pKF41BEmTx2BufUFcSJrrhsexYTVF2ibSsBe2kNJ4XI4l1Bt7cFt2kdJsyzCQ1qoUcg-H7v9aBe1NIvcZOBHSsfJdoqLlnitGQ1E0oWGC3tiMpwY6M-p5zHLKmfUtiUPWiBkPaHAeCox7Qeax5a3na1YlrUuMFxFFlTO5R4Nu7u3LtUjm0i0J5IImzaoEpXkEUKo4lmV4TxVNocIwHs74lIgzcxNOUq4vQPKASUWRyianu9QN0JsbKoVvBllWo08B~kpCM2I0DrlOexUfkX1YEHjt62uKA__"
                            alt="Reviewer"
                            className="w-10 h-10 rounded-full"
                            />
                            <div className='flex items-center justify-between w-full'>
                               <div>
                                    <p className="text-gray-800 font-medium">{review.name}</p>
                                    <p className="text-sm text-gray-600">{review.consultation}</p>
                               </div>
                                <div>
                                    <p className="text-sm text-gray-500 ml-auto">{review.date}</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className="mt-2 flex items-center">
                            {/* Star Rating */}
                            {Array(review.rating)
                            .fill(0)
                            .map((_, i) => (
                                <span key={i} className="text-yellow-500 text-xl">★</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{review.review}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className='border-2 border-gray-100 rounded-xl p-6'>
               <div className='p-2 px-6 flex justify-between border-2 border-gray-100 rounded-xl'>
                  <h1>Appointment Fee</h1>
                  <p>699.0</p>
               </div>
               <div className='mt-8'>
                 <h1 className="font-semibold border-b-2 pb-3">Select your mode of session </h1>
                 <div className='flex items-center justify-around text-center mt-5'>
                    <p className='font-medium border border-gray-200 px-8 py-3 rounded-lg'>In Clinic <br /> 45min</p>
                    <p className='font-medium bg-green-50 border border-green-200 px-8 py-3 rounded-lg'>Video <br /> 45min</p>
                    <p className='font-medium border border-gray-200 px-8 py-3 rounded-lg'>Chat <br /> 10min</p>
                 </div>
               </div>
               <div className='mt-8'>
                 <h1 className="font-semibold border-b-2 pb-3 flex items-center justify-between">Pick a Time Slot < TbCalendarWeek size={24}/></h1>
                 <div className='flex items-center justify-around text-center mt-5 border rounded-lg p-4'>
                    <p className='p-1 border border-black rounded-full '><MdKeyboardArrowLeft/></p>
                    <p className='font-medium border border-gray-200 px-8 py-3 rounded-lg text-green-900'>Mon, 10oct <br /> <span className='text-red-600'>5 slots</span></p>
                    <p className='font-medium bg-green-50 border border-green-200 px-8 py-3 rounded-lg text-green-900'>Tue, 11oct <br /><span className=''>11 slots</span></p>
                    <p className='font-medium border border-gray-200 px-8 py-3 rounded-lg text-green-900'>Wed, 12oct <br /> <span className='text-yellow-400'>17 slots</span></p>
                    <p className='p-1 border border-black rounded-full'><MdKeyboardArrowRight/></p>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default Details;