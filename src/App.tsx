import { Suspense } from "react";
import Banner from "./Component/Banner"
import Navbar from "./Component/Navbar"
import type { TechnologyType } from "./type";
import Technologies from "./Component/Technologies";
import Footer from "./Component/Footer";


const technologiesPromise=async():Promise<TechnologyType[]>=>{
  const res =await fetch('/data.json');
  const data =await res.json();
  return data;
}


function App() {
  
  return (
    <>
      
  <Navbar></Navbar>
      
  <Banner></Banner>
  

  <Suspense fallback={<h2>Loading....</h2>}>
  <Technologies technologiesPromise={technologiesPromise()} ></Technologies>
  </Suspense>

  <Footer></Footer>
      
    </>
  )
}

export default App
 