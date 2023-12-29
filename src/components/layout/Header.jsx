import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { removeReduxUser } from '../../utils/reducers/user-reducer';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const user = useSelector((state => state?.user?.userData))


    const logout = () => {
      dispatch(removeReduxUser())
    }

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
            onClick={logout}
            className={`font-semibold hover:text-red-500 cursor-pointer`}
          >
            Logout
          </span>
        </div>
        <div className="ml-auto mr-10 flex justify-center items-center gap-7">
          <span className="text-black font-semibold text-xl hidden md:flex">
            {user?.name}
          </span>
          <div className="bg-white aspect-square w-10 rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Header