import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import userInfo from "../data/userData.json";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function SignPage() {
  const [username, setUsername] = useState("");
  let [passwd, setPasswd] = useState("");
  const navigate = useNavigate();
  let [showPassword, setShowPassword] = useState(false);

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePasswd = (e) => {
    setPasswd(e.target.value);
  };

  const handleSubmit = () => {
    // const data = {
    //   username : username,
    //   password : passwd
    // }
    // await login(data).then((res)=>{
    //   localStorage.setItem("user_token", res.data)
    // })

    if (username === userInfo[0].username && passwd === userInfo[0].password) {
      toast.success("user login successful");
      console.log(userInfo[0]);
      const data = {
        id: userInfo[0].id,
        username: userInfo[0].username,
        gender: userInfo[0].gender,
        location: userInfo[0].location,
        role: userInfo[0].role,
      };
      localStorage.setItem("user_token", JSON.stringify(data));
      navigate("/");
      window.location.reload();
    } else {
      toast.error("Incorrect credentials");
      setPasswd("");
    }
  };
  return (
    <div className=" ">
      <Header/>

      <div className=" lg:flex hidden items-center justify-center py-3 w-full">
      
        <div className="bg-white text-center rounded-2xl h-[75vh] w-[50%]">
          <p className="  py-4 capitalize text-3xl font-bold">welcome back!</p>
          <p className="capitalize text-2xl font-bold">login</p>
          <div className="p-2">
            <input
              className=" border w-[90%] h-[40px] mt-5"
              type="text"
              placeholder="Type your username"
              value={username}
              onChange={(e) => changeUsername(e)}
            />
            <div className="relative">
              <input
                className="  border h-[40px] mt-5 px-3 w-[90%]"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={passwd}
                onChange={(e) => changePasswd(e)}
              />
              <button
                type="button"
                className="absolute right-10 top-7 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`pi ${showPassword ? "pi-eye" : "pi-eye-slash"}`}
                ></i>
              </button>
            </div>
          </div>
          <div className="text-end text-sm font-bold lg:px-12 sm:px-5">
            {" "}
            <p>Forget password?</p>
          </div>
          <div className="py-5">
            <button
              onClick={handleSubmit}
              type="button"
              className="py-3 px-9 text-white rounded-xl text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              Login
            </button>
          </div>
          <p className="capitalize text-2xl">Or sign up using</p>
          <div className="py-5">
            <i className="pi pi-facebook text-blue-900 w-[50px] cursor-pointer"></i>
            <i className="pi pi-twitter text-blue-600 w-[50px] cursor-pointer"></i>
            <i className="pi pi-google text-red-500 w-[50px] cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div className=" lg:hidden sm: h-[88vh] px-5  bg-gray-600   ">
        <div className="bg-white text-center h-[87vh]  rounded-2xl w-[full]  ">
          <p className="  py-4 capitalize text-3xl font-bold">welcome back!</p>
          <p className="capitalize text-2xl font-bold">login</p>
          <div className="p-2">
            <div>
              <input
                className=" border w-[90%] px-3 h-[40px] mt-5"
                type="text"
                placeholder="Type your username"
                value={username}
                onChange={(e) => changeUsername(e)}
              />
            </div>
            <div className="relative">
              <input
                className="  border h-[40px] mt-5 px-3 w-[90%]"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={passwd}
                onChange={(e) => changePasswd(e)}
              />
              <button
                type="button"
                className="absolute right-10 top-7 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={`pi ${showPassword ? "pi-eye" : "pi-eye-slash"}`}
                ></i>
              </button>
            </div>
          </div>
          <div className="text-end text-sm font-bold lg:px-12 sm:px-5">
            {" "}
            <p className="px-7">Forget password?</p>
          </div>
          <div className="py-5">
            <button
              onClick={handleSubmit}
              type="button"
              className="py-3 px-9 text-white rounded-xl text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
            >
              Login
            </button>
          </div>
          <p className="capitalize text-2xl">Or sign up using</p>
          <div className="py-5">
            <i className="pi pi-facebook text-blue-900 w-[50px] cursor-pointer"></i>
            <i className="pi pi-twitter text-blue-600 w-[50px] cursor-pointer"></i>
            <i className="pi pi-google text-red-500 w-[50px] cursor-pointer"></i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
