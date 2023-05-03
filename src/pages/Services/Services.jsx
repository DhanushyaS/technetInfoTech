import React from 'react'
import {Link} from 'react-router-dom';
import Nav from "../../components/Nav";
import './Services.css'
function Services() {
   const service=[
      {title:'Motherboard Services',img:'https://media.istockphoto.com/id/937063796/photo/close-up-of-a-woman-hands-repairing-computer.jpg?b=1&s=170667a&w=0&k=20&c=38-YsZX0FKKcCW4lvKEkTEPZKunOFUpdS02f_ZaluE8='},
      {title:'Hardware Services',img:'https://media.istockphoto.com/id/1144570782/photo/pcb-layout-repairing-technician-soldering-laptop.jpg?b=1&s=170667a&w=0&k=20&c=Y2msomIQehHcR0DiEV4L0E4IN-lEzJ3M6OizENBe3DY='},
      {title:'Virus or Malware Attack',img:'https://media.istockphoto.com/id/1144604134/photo/malware-detected-warning-screen.jpg?b=1&s=612x612&w=0&k=20&c=eivxSHNfCqiT6GyjCcnWO9kYGFtbLOyOjcy1NjM6F9s='},
      {title:'Broken Computer Disassembling',img:'https://media.istockphoto.com/id/622912100/photo/broken-computer-disassembling-close-up.jpg?b=1&s=612x612&w=0&k=20&c=0UUxQZKJzhDf_yiJmO9jZJ08RbLy9O9KtH9fZCAwHLA='},
      {title:'Printer Services',img:'https://media.istockphoto.com/id/862302786/photo/man-repairing-toner-for-laser-printer.jpg?b=1&s=612x612&w=0&k=20&c=c1xCrDaTHXx9DyAxHiu_jRUA_muH9gmmOwyXc5q7lKo='},
      {title:'OS Updates',img:'https://static3.bigstockphoto.com/4/9/2/large1500/294029662.jpg'},
   ]
   
  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2 ">
      <Nav />
    <div class="flip-main">
    {/* <div><h1 style={{color:'white',textAlign:'center',fontSize:'50px'}}>Services</h1></div> */}
    <div className='geeks1 text-green-300 text-4xl'>
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
        <span>S</span>
    </div>
   <div class="container">
      <div class="row">
      {service.map((ele,index)=>{
         return(
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                   <img src={ele.img} alt="flip-card" className='h-48'/>
                </div>
                <div class="flip-card-back">
                   <div class="text">
                      <h3 className='pb-8'>{ele.title}</h3>
                      <div className='flex justify-center'>
                      <Link to="/contact" className="rounded-full bg-gradient-to-r from-[#6b78b1] to-blue-500 px-8 py-3 text-white font-bold text-md flex gap-4 hover:animate-pulse">More details</Link>
                      </div>
                   </div>
                </div>
            </div>
         </div>
    )})}
      </div>
   </div>
 </div>
 
    </section>
  )
         
}

export default Services