import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-[#FFF7E2] p-5">
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto">

                <div className="flex items-center justify-between w-7/12">
                     <h1 className="text-2xl text-[#3D6B48] font-bold uppercase">A m r u t a m</h1>

                      <ul className="flex items-center gap-8 text-lg font-medium text-[#474747]">
                        <li><Link to='/'>Home</Link></li>
                        <li className="text-[#3A643B]"><Link to='/'>Find Doctor</Link></li>
                        <li><Link to='/'>About Us</Link></li>
                      </ul>
                </div>
                <div className="flex gap-3 items-center">
                    <button className="px-4 py-2 rounded-lg border-2 border-[#3A643B] text-lg text-[#3A643B]">Login</button>
                    <button className="px-6 py-2 border rounded-lg text-lg bg-[#3A643B] text-white">Sing-up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;