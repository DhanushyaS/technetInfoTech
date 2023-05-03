import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from "../../components/Nav";
function OrderNowForm() {
    const {id} = useParams()

  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2 ">
      <Nav />
    <div>Services</div>
    </section>
  )
}

export default OrderNowForm