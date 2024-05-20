import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Best Airpods"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Phone"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"TV"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera"}/>
      <VerticalCardProduct category={"earphones"} heading={"Headphone"}/>
      <VerticalCardProduct category={"speakers"} heading={"Speaker"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home