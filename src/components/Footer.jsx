
import imaA from "../images/Parach-computers-ibadan-logo-1-e1565984209812-157x49.png";

export default function Footer() {
  return (
    <div className=" lg:grid lg:grid-cols-[4fr_4fr_4fr] sm:grid sm:grid-cols- sm:h-[auto]  bg-gray-900 px-10 lg:h-[10vh] items-center">
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
  );
}
