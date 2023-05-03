import React from 'react'
import Nav from "../../components/Nav";
import './Contact.css'
function Contact() {
  return (
    <section className="bg-hero-bg  bg-cover bg-center font-Barlow pb-2 " style={{maxHeight:"100%"}}>
    <Nav />
    <div style={{float:"left"}}></div>
    <div className='geeks text-green-300 text-4xl' >
        <span>T</span>
        <span>E</span>
        <span>C</span>
        <span>H</span>
        <span>N</span>
        <span>E</span>
        <span>T</span>
        <span>  </span>
        <span>I</span>
        <span>N</span>
        <span>F</span>
        <span>O</span>
        <span>T</span>
        <span>E</span>
        <span>C</span>
        <span>H</span>
    </div>
    <div class="box ml-10 mt-20">
		<form autocomplete="off">
			<h2>Send us your queries, we will contact you soon.</h2>
			<div class="inputBox">
				<input type="text" required="required" />
				<span>NAME</span>
				<i></i>
			</div>
			<div class="inputBox">
				<input type="email" required="required" />
				<span>EMAIL</span>
				<i></i>
			</div>
      <div class="inputBox">
				<input type="phone" required="required" />
				<span>MOBILE NUMBER</span>
				<i></i>
			</div>
      <div class="inputBox">
				<input type="feed" required="required" />
				<span>FEEDBACK OR QUERIES</span>
				<i></i>
			</div>
      <div>
    </div>
			<input type="submit" value="SEND" />
		</form>
	</div>
  <div style={{zIndex:10,top:180,position:'absolute',right:60}}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.858948382564!2d77.71709501480586!3d11.345011591937253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f39cd09b1cd%3A0xa868e24a044025ac!2sTechnet%20Infotech!5e0!3m2!1sen!2sin!4v1680675495292!5m2!1sen!2sin" width="600" height="450" style={{border:0}}></iframe>
  </div>
    </section>
  )
}

export default Contact