import React from 'react'
import Nav from "../../components/Nav";
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Sales() {
  // const [CartItems,setCartItems]=useState([]);
  const product=[
  {name:'RAM',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://images.unsplash.com/photo-1611663806011-b37e091090f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",quantity:1},
  {name:'MSI',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://images.unsplash.com/photo-1609581771681-9a920ff90f26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXNpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",quantity:1},
  {name:'SATA',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://www.shutterstock.com/image-photo/sata-data-cable-on-white-260nw-161882969.jpg"},
  {name:'M.2 SSD',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://cdn.ttgtmedia.com/rms/onlineImages/sss-m600d_mobile.jpg"},
  {name:'NVME SSD',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://www.seagate.com/content/dam/seagate/migrated-assets/www-content/solutions/gaming/images/what-is-an-nvme-ssd-article-1170x665.jpg"},
  {name:'D-LINK(USB)',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://shivamitservice.com/wp-content/uploads/2022/09/D-Link-DWA-171-Wireless-AC600-MU-MIMO-Wi-Fi-USB-Adapter-2.jpg"},
  {name:'DAX',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41NRCLy2bUL._SY450_.jpg"},
  {name:'MOTHERBOARD',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://www.tutorialspoint.com/computer_fundamentals/images/mother_board.jpg"},
  {name:'CORSAIR',description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita harum animi maiores di",image:"https://sgltechno.com/wp-content/uploads/2022/05/71j4Zdjc2vL._SL1500_.jpg"},

];
const AddToCart =async (item) => {
  const datas = await localStorage.getItem('cart')
  if(datas==null){
    await localStorage.setItem("cart",JSON.stringify([item]))
  }else{
    const data=await localStorage.getItem('cart')
    const parsedData=JSON.parse(data);
    await localStorage.removeItem("cart");
    parsedData.push(item)
    await localStorage.setItem("cart",JSON.stringify(parsedData))
  }
  alert("Item added to cart")
};
  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2 ">
      <Nav />
      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {product.map((ele,index)=>{
      return(
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72 mt-10">
          <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ele.image} alt="" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white">{ele.name}</h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{ele.description}</p>
          {/* <Link to={`/accessories/${ele}`} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={()=>ele.AddToCart(ele)}>Order Now</Link> */}
          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={()=>AddToCart(ele)}>Order Now</button>
          {/* <button onClick={sam}>sample</button> */}
        </div>
      </div>
      )
    })}
    </div>
</div>

    </section>
  )
}

export default Sales