import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Nav from "../../components/Nav";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Home/Home.css';
import Rotate from 'react-reveal/Rotate';
// import Fade from 'react-reveal/Fade';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { motion } from "framer-motion";

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2" style={{maxHeight:"100%"}}>
    <Nav />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="http://www.gbscomputers.com/images/main-slider/asus-showroom-in-chennai-banner.webp"/></SwiperSlide>
        <SwiperSlide><img src="http://www.gbscomputers.com/images/main-slider/lenovo-showroom-chennai-banner.webp"/></SwiperSlide>
        <SwiperSlide><img src="http://www.gbscomputers.com/images/main-slider/dell-showroom-chennai-banner.webp"/></SwiperSlide>
        <SwiperSlide><img src="http://www.gbscomputers.com/images/main-slider/hp-showroom-chennai-banner.webp"/></SwiperSlide>
        <SwiperSlide><img src="http://www.gbscomputers.com/images/main-slider/acer-showroom-chennai-banner.webp"/></SwiperSlide>
        <SwiperSlide><img src="https://press.razer.com/wp-content/uploads/2018/05/Blade-2018-Key-Visual-No-Logo-980-x-500-720x405.png"/></SwiperSlide>
        <SwiperSlide><img src="https://s3b.cashify.in/gpro/uploads/2022/03/31223407/HP-15s-Natural-Silver.jpg"/></SwiperSlide>
        <SwiperSlide><img src="https://1.bp.blogspot.com/--_lNe7S_QbA/X_7kECbcU2I/AAAAAAAAAMY/O5r1lGb_vlAgP_ekPNXaxaNFutYytxz7wCLcBGAsYHQ/s2048/1534557-gf-web-amp-30-series-laptop-social-partner-2048x1024-tw-engb.jpg"/></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    {/* <div className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2" style={{maxHeight:"100%"}}>
    <div className='about' style={{color:'whitesmoke'}}>
    <h1>
        <Rotate top left cascade>
          ABOUT US
        </Rotate>
      </h1>
    </div>
    <div>
        <Fade left>
        <h1 style={{textAlign:'center',fontSize:'30px',fontWeight:330,color:'white'}}><b>Technet Infotech in Erode HO, Erode</b></h1>
        <p style={{textAlign:'center',fontSize:'20px',fontWeight:100,color:'white'}}>Technet Infotech in Erode is one of the leading businesses in the Computer Software Dealers. Also known for Computer Repair & Services, Computer Dealers, Laptop Dealers, Laptop Repair & Services, Computer Printer Dealers, Second Hand Laptop Dealers, Laptop Repair & Services-Acer, Laptop Repair & Services-Dell and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Technet Infotech, Erode.</p>
        </Fade>
      </div>
      <div>
        <Fade right>
        <h2 style={{textAlign:'center',fontSize:'30px',fontWeight:330,color:'white'}}><b>Location and Overview</b></h2>
        <p style={{textAlign:'center',fontSize:'20px',fontWeight:100,color:'white'}}>Established in the year 2013, Technet Infotech in Erode HO, Erode is a top player in the category Computer Software Dealers in the Erode. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Erode, this establishment occupies a prominent location in Erode HO. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Agilmedu 6th Street, Near Ajantha International, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Computer Repair &amp; Services, Computer Dealers, Laptop Dealers, Laptop Repair &amp; Services, Computer Printer Dealers, Second Hand Laptop Dealers, Laptop Repair & Services-Acer, Laptop Repair & Services-Dell.</p>
        </Fade>
      </div>
    </div> */}
    <div className="md:flex md:justify-between mt-16 gap-32 ">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-black">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 text-black">
                About
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-black">
          Technet Infotech is one of the leading businesses in the Computer Software Dealers. Also known for Computer Repair & Services, Laptop Dealers, Laptop Services, Printer Dealers, Second Hand Laptop Dealers and much more.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-black">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3 text-black">
                Vision
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-black">
          We are No.1 in Tamilnadu presence for Laptop Service. Hope, we will be No.1 in India with in 2 years.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-black">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3 text-black">
                Mission
              </p>
            </div>
          <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-black">
          We will make Technet Infotech as a one of the cash rich company in India, through that we will educate over 1000+ poor students annually. One day Technet Infotech growth will be a case study for IIM Students.
          </p>
        </motion.div>
      </div>
      </section>
    </>
  );
}
