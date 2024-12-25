import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const DoctorBanner = () => {
    return (
        <div className="container mx-auto my-10 border rounded-lg">
           <div className="relative">
             <img className="w-full h-[150px] object-cover rounded-t-lg" src="https://s3-alpha-sig.figma.com/img/1921/7dcc/b6672e4ba8a3d7edf2997aaa27c73b00?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C6gMCZJ~pfLr5UQg0xNhSFtmsuawm0eqVsjyBL67ZYVN0HQR~IZMK0z84Cg9QgTilbVWXElY3ZhXYk3VnJxk9VvyQ1YCOaEAFdD54tXeg6Qfak2yW4ySQcUSkV9zR8-znnwqoXXGEqMrsHNJcVSaNAyTXnYpMo1R9JzJ8zKx84imtUF40EDpoHrfYgdVG-HmAT~aSIKMusH7AWzfCTpdqGor3EWFX1OKk2e~4iqp3e1myDZ8jKaqa2w-hEEfUuFzXWi2lhRUXwoZMgwv3EjeTl2ghzMb5FnlJ58Qp-r99KDiY5k5Bks7SRw51cFefrW~C9WLKg8ygmLrvqVQfy98xA__" alt="" />
              
             <div className=" bg-[#FFFBF2] rounded-b-lg px-4  w-full grid grid-cols-3">
              <img className="w-36 h-36 rounded-full absolute top-32" src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IL1C1jnWkvkJRcAl15eVN5Qp33kSIdjKWgeWnpAxMoqdtoGXY4UXa49UeQfwxNHb7m-xljL2XLqvNufmMCO8C3D7Elpdo6UuROpyMdXwiwu3a2ZdwDnhMZ9qj3hvbwoGaTm5wHtJSFQ95KnutQnuvPcQyax8Tr2LQ6gQ-2w2SIKDwGaKpjvqhee4L~X7rYQp8wsEAzAO1jZlYMbrfkH3ARrmqk-6D8VabXuVa98MP0Z9n5z3zi7yS3RCNmyb97di3zVwtJr6~APqKPempRm1HRPJ42wy-gXJ3Gk7HhX4zvjgrP1aqRr-KRzhkYNqiMPQV2eqZvq0HJRm-IHuBDpDSA__" alt="" />
              <div className="ml-[160px] pt-8 h-[150px]">
                <h1 className="text-xl font-semibold flex items-center gap-1">Dr. Bruce Willis
                    <RiVerifiedBadgeFill className="text-[#2E37A4]"/>
                </h1>
                 <p className="text-gray-700">Gynecologist</p>
                  <p className="flex items-center gap-1">4.5 <MdOutlineStarPurple500 className="text-orange-400"/>
                  <MdOutlineStarPurple500 className="text-orange-400"/>
                  <MdOutlineStarPurple500 className="text-orange-400"/>
                  </p>
              </div>
              <div className="flex items-center justify-center text-center gap-8">
                <p className="text-[#3A643B] font-semibold">Followers <br /> <span className="text-xl text-black">850
                </span></p>
                <p className="text-[#3A643B] font-semibold">Following <br /> <span className="text-xl text-black">15k
                </span></p>
                <p className="text-[#3A643B] font-semibold">Posts <br /> <span className="text-xl text-black">150
                </span></p>
              </div>
              <div className="flex items-center justify-center text-center">
              <button className="w-1/2 p-2 bg-[#3A643B] rounded-lg text-white mt-2">Book an Appointment</button>
              </div>
          </div>
           </div>
           
        </div>
    );
};

export default DoctorBanner;