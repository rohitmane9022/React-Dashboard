import Group35935 from "../images/Group35935.png"
import { MdOutlineCircleNotifications } from "react-icons/md";


const SectionThree = () => {
  return (
    <section>
      <div className="flex justify-evenly mx-auto items-center">
      
      <div className="w-2/5">
      <p className="text-xl font-medium text-primary-color mb-0">ADVATNAGES</p>
      <h1 className="text-5xl font-black mb-4 font-DM">Why Choose Uifry?</h1>
      <div>
        <div className="my-4">
        <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold flex items-center "><MdOutlineCircleNotifications className="w-10 h-10 text-primary-color" /> Budgeting Intervals</h2>
       </div>
        <p className="text-gray-500 my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sunt veritatis fuga saepe tenetur laborum magni reprehenderit excepturi, eveniet optio dolore nulla at quisquam ipsum ullam maxime suscipit nisi molestiae.</p>
      </div>
     
      </div>
      </div>
      <div className="w-2/4">
      <div >
      <img src={Group35935} alt="" className="size-fit" />
      </div>
      </div>
     </div>
    </section>
  )
}

export default SectionThree