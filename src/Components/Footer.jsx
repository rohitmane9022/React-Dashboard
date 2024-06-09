import Frame from "../images/Frame.png"
import { IoIosCall } from "react-icons/io";


const Footer = () => {
  return (
    <footer >
      <div className="flex justify-between w-[90%] mx-auto mt-28">
      <div className="">
        <div className="flex items-center mb-2">
        <img src={Frame} alt="" className="w-6 h-6 mr-1"/> <h1 className="text-2xl font-Montserrat font-semibold ">uifry</h1>
        </div>
        <p className="flex items-center gap-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-color">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>

rohitmane8356@gmail.com</p>
        <p className="flex items-center"><IoIosCall className="w-6 h-6 text-primary-color gap-2"/> +911234567890</p>
      </div>
      <div className="flex justify-between ">
        <div className="mx-10">
          <h1 className="text-3xl mb-3 font-Nunito font-medium">Links</h1>
          <div className=" mb-3">Home</div>
          <div className=" mb-3 font-inter font-medium">About Us</div>
          <div className=" mb-3 font-inter font-medium">Bookings</div>
          <div className=" mb-3 font-inter font-medium">Blog</div>
        </div>
        
        <div className="mx-10">
          <h1 className="text-3xl mb-3 font-Nunito font-medium">Legal</h1>
          <div className=" mb-3 font-inter font-medium">Terms of Use</div>
          <div className=" mb-3 font-inter font-medium">Privacy Policy</div>
          <div className=" mb-3 font-inter font-medium">Cookie Policy</div>
          
        </div>
        <div className="mx-10">
          <h1 className="text-3xl mb-3 font-Nunito font-medium">Product</h1>
          <div className=" mb-3 font-inter font-medium">Take Tour</div>
          <div className=" mb-3 font-inter font-medium">Live Chat</div>
          <div className=" mb-3 font-inter font-medium">Reviews</div>
          
        </div>
      </div>

      <div>
        <h1 className="text-3xl mb-3 font-Nunito font-medium">Newsletter</h1>
        <p className=" mb-3 font-inter font-medium">Stay Up to Date</p>
        <div className="flex ">
        <input type="email" className="drop-shadow-md mr-2" />
        <button className="text-lg bg-black text-white p-2 rounded-md">Subscribe</button>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer