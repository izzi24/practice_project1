import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Header() {
  const [showMenu, setShowMenu] = useState();
  // const [user, setUser] = useState(null);
  const closeMenu = () => {
    setShowMenu(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  const logout = () => {
    localStorage.removeItem("user_token");
    toast.info("Logout successful");
    window.location.reload();
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("user_token");
    console.log(userInfo);

    if (userInfo) {
      console.log(JSON.parse(userInfo));
      // setUser(JSON.parse(userInfo));
      setIsLoggedIn(true)
    }
  }, []);

  return (
    <div className="grid grid-cols-[6fr_6fr] bg-gray-900  z-40 lg:h-[12vh] md:h-[auto] sm:h-[10vh] px-10 items-center sticky top-0">
      <div>
        <p className="text-white text-2xl font-bold  mt-3  lg:grid">Blog</p>
      </div>
      <div className="  mt-4">
        <ul className=" gap-5 ml-auto w-fit hidden lg:flex md:hidden text-white">
          <p
            onClick={() => {
              logout();
              setIsLoggedIn(false);
            
              window.location.reload()
            }}
            className={
              isLoggedIn
                ? "px-6 text-xl py-2 cursor-pointer bg-red-500 border rounded-md"
                : "hidden"
            }
          >
            Logout
          </p>

          <Link
            className={isLoggedIn ? "hidden" : "px-6 text-xl py-2 bg-blue-500 cursor-pointer text-white hover:bg-blue-600 border rounded-md"}
            to="/SignPage"
          >
            Sign in
          </Link>

          <Link
            className="px-6 text-xl py-2 cursor-pointer border rounded-md"
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-6 text-xl py-2 cursor-pointer border rounded-md"
            to="/AboutPage"
          >
            About
          </Link>

          
            <Link
              className={isLoggedIn ? "px-6 text-xl py-2 cursor-pointer border rounded-md" : "hidden"}
              to="/NewsContent"
            >
              Add-Articule
            </Link>
          
            {/* <Link
              className="px-6 text-xl py-2 bg-blue-500 cursor-pointer text-white hidden hover:bg-blue-600 border rounded-md"
              to="/SignPage"
            >
              Sign in
            </Link> */}
          
        </ul>
      </div>

      <ul className="  ">
        {showMenu ? (
          <div className="bg-gray-700 h-[55vh] w-full left-0 text-center lg:hidden  top-0 w- absolute">
            <div className="flex justify-between px-10 bg-gray-900 h-[10vh] items-center">
              <p className="text-white text-2xl font-bold">Blog</p>
              <i
                onClick={closeMenu}
                className="pi pi-times text-2xl  text-white"
              ></i>
            </div>
            <div className="p-5 grid ">
              <Link
                className="text-white font-bold py-3 text-2xl border cursor-pointer uppercase hover:bg-gray-300"
                to="/"
              >
                HOME
              </Link>
              <Link
                className="text-white font-bold py-3 text-2xl border cursor-pointer uppercase hover:bg-gray-300"
                to="/AboutPage"
              >
                ABOUT
              </Link>
              <Link
                className={isLoggedIn ? " text-white  font-bold   cursor-pointer border py-3 text-2xl uppercase hover:bg-gray-300 " : "hidden"}
                to="/NewsContent"
              >
                Add-Articule
              </Link>
              <p
            onClick={() => {
              logout();
              setIsLoggedIn(false);
            
              window.location.reload()
            }}
            className={
              isLoggedIn
                ? "px-6 text-xl py-2 cursor-pointer text-white  font-bold  bg-red-500"
                : "hidden"
            }
          >
            Logout
          </p> 
              <Link
                className={isLoggedIn ? "hidden" : " py-3 text-2xl  bg-blue-500 cursor-pointer text-white hover:bg-blue-600 border rounded-md"}
                to="/SignPage"
              >
                Sign in
              </Link>
            </div>
          </div>
        ) : (
          <div onClick={() => setShowMenu(true)} className="lg:hidden ">
            <i className="pi pi-align-justify text-white text-2xl absolute  top-4 right-10 cursor-pointer"></i>
          </div>
        )}
      </ul>
    </div>
  );
}
