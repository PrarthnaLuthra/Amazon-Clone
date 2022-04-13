import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/banner";
import ProductFeed from '../components/ProductFeed'
import Footer from "../components/footer";
export default function Home({products}) {
  return (
    <div className="bg-gray-100"> 
      <Head>
        <title>Amazon Clone</title>
      </Head>
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        <Banner/>
        <ProductFeed products={products}/>
        


      </main>
      
        <Footer/>
      
    </div>
  );
}
// Server side rendering

export async function getServerSideProps(context){
   const products = await fetch("https://fakestoreapi.com/products").then(
     (res)=>res.json());
     return{
       props:{
         products,
       }
     }
}
//GET https://fakestoreapi.com/products