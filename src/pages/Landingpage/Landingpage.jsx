import Nav from "../../components/Nav"
import Lap from "../../assets/Laptop.png"
import Clock from "../../assets/clock.svg"
function Landingpage ()
{
  return (
    // md:h-screen
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2">
      <Nav/>
      <div className="md:container px-2  pt-5 md:text-left text-center">
        <h1 className="text-2xl  text-white">
          <span className="text-[#ffffff70] font-bold mr-2"></span></h1>
        <div className="md:flex items-center md:justify-between  pt-6 ">
          <img src={Lap} className="md:w-[50%] w-[60%]  md:mx-0 mx-auto md:py-0 py-4" alt=""/>
          <div className="md:w-1/2 ">
            <h1 className="text-white w-full font-Bellefair pb-2 text-6xl">TECHNET INFOTECH</h1>
            <p className="text-[#d2d8f9] font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">
              Welcome to Technet Infotech computers
            </p>
            <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
              <div>

                <h1 className="text-[#d2d8f9] text-xl">Working Hours</h1>
                <h1 className="text-white text-sm text-center" >MONDAY - SATURDAY</h1>
                <h1 className="text-white text-sm text-center">9.00AM to 8.00PM</h1>
              </div>
              <span>
              <div>
                <span>
                  <img src={Clock} alt="" />
                </span>
              </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landingpage