import Group35924 from "../images/Group35924.png";
import Group35937 from "../images/Group35937.png";
import { PiStarFourBold } from "react-icons/pi";
import { RiBox3Line } from "react-icons/ri";
import { MdOutlineGetApp } from "react-icons/md";

const SectionTwo = () => {
  return (
    <section className="relative w-full">
      {/* Image Tag */}
      <div className="-mt-80">
        <img src={Group35924} alt="" className="" />
      </div>
      
      <div className="flex justify-between items-center -mt-10 relative">

        <div className="w-2/4">
        <div className="absolute top-[50rem] left-[15rem] z-0 w-52 h-48 gradient-blur rounded-full"></div>
          <div className="z-50">
            <img src={Group35937} alt=""/>
          </div>
        </div>
        <div className="w-2/4">
          <p className="text-xl font-medium text-primary-color mb-0">FEATURES</p>
          <h1 className="text-5xl font-bold mb-4 font-DM">Uifry Premium</h1>
          <div>
            <div className="my-4">
              <div className="flex gap-2 items-center">
                <PiStarFourBold className="text-primary-color text-2xl" /> 
                <h2 className="text-xl font-semibold">Budgeting Intervals</h2>
              </div>
              <p className="text-gray-500 text-sm my-4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
              </p>
            </div>
            <div className="my-4">
              <div className="flex gap-2 items-center">
                <MdOutlineGetApp className="text-primary-color text-2xl" /> 
                <h2 className="text-xl font-semibold">Budgeting Intervals</h2>
              </div>
              <p className="text-gray-500 text-sm my-4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
              </p>
            </div>
            <div className="my-4">
              <div className="flex gap-2 items-center">
                <RiBox3Line className="text-primary-color text-2xl" /> 
                <h2 className="text-xl font-semibold">Budgeting Intervals</h2>
              </div>
              <p className="text-gray-500 text-sm my-4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
