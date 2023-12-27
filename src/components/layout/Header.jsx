import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const {id} = useParams()

    const location = useLocation();

  return (
    <>
      <div className="w-full h-24 flex items-center gap-24 custom-box select-none">
        <div className="ml-auto flex justify-center items-center gap-24">
          <span
            onClick={() => navigate("/")}
            className={`font-semibold hover:text-red-500 cursor-pointer ${
              location?.pathname === "/" && "text-gray-300"
            }`}
          >
            Home
          </span>
          <span
            onClick={() => navigate("/event/:id")}
            className={`font-semibold hover:text-red-500 cursor-pointer ${
              location?.pathname === "/event/"+id && "text-gray-300"
            }`}
          >
            Event
          </span>
        </div>
        <div className="ml-auto mr-10 flex justify-center items-center gap-7">
          <span className="text-black font-semibold text-xl hidden md:flex">
            Gokul krishna
          </span>
          <div className="bg-white aspect-square w-10 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Header