import { MdOutlineSlowMotionVideo } from "react-icons/md";
import iPhone13One from "../images/iPhone13One.png"
import iPhone13Two from "../images/iPhone13Two.png"




const SectionOne = () => {
  return (
    <section className=" h-screen w-full py-36 ">
      {/* Blur Effect */}
      <div className="circlePosition absolute top-52 left-64 w-52 h-48 gradient-blur rounded-full blur-2xl">
      </div>
      {/* All Text */}
      <div className="flex justify-between absolute z-20 ">
      <div className="w-2/4">
        <div>
          <h1 className="text-6xl font-extrabold mt-1">Make The Best Financial Decisions</h1>
          <p className="text-gray-600 text-sm mt-3 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora! Tempore ullam nam eius dolores, delectus quibusdam optio repellendus. A repellendus perspiciatis necessitatibus optio dolorum quae facere error.</p>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <button className="bg-black text-white py-2 px-4 rounded-md flex items-center gap-2">Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
</svg>

            </button>
            <p className="font-medium flex items-center gap-1"><MdOutlineSlowMotionVideo className="size-7"/>Watch Video</p>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-2/4">
      <div className="flex z-20 relative right-28 ">
        <div>
      <img src={iPhone13Two} alt="" className="w-50 h-50 z-50 absolute -top-44"/>
        </div>
        <div>
      <img src={iPhone13One} alt="" className="w-50 h-50 z-40 absolute right-0 -top-20"/>
        </div>
        <div>
      <img src={iPhone13Two} alt="" className="w-50 h-50 z-30 absolute -right-28 -top-5"/>
        </div>
        <div className=" absolute top-[28rem] left-48 w-52 h-48 gradient-blurTwo rounded-full blur-2xl">
      </div>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default SectionOne