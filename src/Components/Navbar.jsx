import Frame from "../images/Frame.png"
import Star1 from "../images/Star1.png"


const Navbar = () => {
  return (
    <div className="flex mt-5 justify-between">
      <div className="flex items-center gap-10">
        <div className="flex gap-1 items-center">
          <img src={Frame} alt="" className="w-8 h-8"/>
          <h1 className="text-3xl font-semibold">unify</h1> 
        </div>
        <div >
        <ul className="flex gap-10">
          <li>
          <a className="font-medium text-lg" href="#">Home</a>
          </li>
          <li>
          <a className="font-medium text-lg" href="#about">About Us</a>
          </li>
          <li>
          <a className="font-medium text-lg" href="#pricing">Pricing</a>
          </li>
          <li>
          <a className="font-medium text-lg" href="#feature">Feature</a>
          </li>
        </ul>
        </div>
      </div>
      <div className="flex relative gap-6">
        <div>
          <button className="bg-black text-white px-7 py-3 rounded-md text-sm font-normal">Download</button>
        </div>
        <div>
          <img src={Star1} alt="" className="w-12 h-12 top-4 absolute"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar