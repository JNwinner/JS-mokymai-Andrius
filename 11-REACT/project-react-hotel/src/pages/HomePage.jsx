import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className="bg-[#16302D] py-10 px-20 grid grid-cols-1 lg:grid-cols-2">
                <div className="h-full w-full">
                    <img src="/imgs/villa.png" alt="villa" />
                </div>
                <div className="flex items-center justify-center px-8">
                
                    <div className="flex flex-col justify-center  gap-5 max-w-[75%] px-2 py-4 ">
                    <h1 className="text-white text-6xl font-bold font-krona leading-[64px] ">Welcome to <span className="block text-shadow-bottom">Manaus Hotel:</span></h1>
                    <p className="text-white font-krona text-2xl">Your Gateway to Unmatched Comfort and Luxury</p>
                    <div className="space-x-4">
                    <NavLink to="/contact">
                        <button className="text-white font-krona border-2 border-solid border-white rounded px-4 py-2 hover:bg-[#50C557] hover:text-black">CONTACT US</button>
                    </NavLink>
                    <NavLink to="/bookings">
                        <button className="text-white font-krona border-2 border-solid border-white rounded px-4 py-2 hover:bg-[#50C557] hover:text-black ">BOOKINGS</button>
                    </NavLink>
                    </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default HomePage