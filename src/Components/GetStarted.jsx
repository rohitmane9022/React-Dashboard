import Group35887 from "../images/Group35887.png"
import iPhone13Pro from "../images/iPhone13Pro.png"
import { IoLogoApple } from "react-icons/io5";

const GetStarted = () => {
  return (
    <section className="relative w-[90%] mx-auto overflow-hidden">
      <div className=" relative">
          <img src={Group35887} alt="Group" style={{ filter: 'invert(1)' }} className="w-[600px] top-40 absolute -left-[410px]" />
        </div>
        <div className="bg-black rounded-md text-white my-10 flex justify-between items-center py-7 mx-auto over">
      <div>
        <div className="pl-16 py-10 ">
          <h1 className="text-4xl font-Montserrat font-extrabold my-4">Ready To Get Started?</h1>
          <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a!</p>
          <button className="text-base font-medium px-5 py-3 rounded-md bg-white text-black flex items-center gap-2">Download App <IoLogoApple className="w-8 h-8 bg-white"/></button>
        </div>
        
      </div>

      <div className="z-50">
            <img src={iPhone13Pro} alt="" />
      </div>
      </div>
      <div className=" relative ">
          <img src={Group35887} alt="Group" style={{ filter: 'invert(1)' }} className="w-[600px] rotate-45 z-0 -top-[800px] absolute left-[850px]  " />
        </div>
    </section>
  )
}

export default GetStarted