
import imaA from "../images/Parach-computers-ibadan-logo-1-e1565984209812-157x49.png";

export default function Footer() {
  return (
    <div>
      <div className=" lg:flex justify-between hidden  bg-gray-900 px-10 lg:h-[10vh] items-center">
      <div>
        <img src={imaA} alt="" />
      </div>
      <div className="">
        <div>
          <p className="text-white sm:hidden text-center ">&copy; Emmanuel</p>
        </div>
        <div>
          <p className="text-white w-fit ml-auto">Adedapotope57@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="flex justify-between lg:hidden  bg-gray-900 px-10 lg:h-[10vh] items-center">
      <div>
        <img src={imaA} alt="" />
      </div>
      <div className="">
        <div>
          <p className="text-white sm:hidden text-center ">&copy; Emmanuel</p>
        </div>
       
      </div>
    </div>
    </div>
    
  );
}
