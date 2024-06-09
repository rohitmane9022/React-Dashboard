import Group1000002332 from "../images/Group1000002332.png"
import Group35917 from "../images/Group35917.png"

const Testimonial = () => {
  return (
    <section className="mx-auto">
      <div className="text-center">
        <p className="font-medium  text-gray-500">TESTIMONIAL</p>
        <h1 className="font-bold text-4xl w-62 mx-auto font-inter">What Our User</h1>
        <h1 className="font-bold text-3xl  mx-auto font-inter">Says About Us?</h1>
      </div>

      <div className="flex -mt-5 justify-evenly items-center ">
        <div className="w-3/6">
        <img src={Group1000002332} alt="" />
        </div>
        <div className="w-2/5">
        <div >
          
          <h1 className="font-bold text-3xl font-inter">The Best Financial Accounting App Ever!</h1>
          <p className="text-gray-500 pt-3">“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”</p>
          <img src={Group35917} alt="" className="py-5" />
          <p className="text-lg font-semibold">Rohit Mane</p>
        </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonial