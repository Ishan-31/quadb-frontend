import { getallProducts } from "@/api/product";
import Layout from "@/components/Layout";
import AneekProducts from "@/components/allProducts/AneekProducts";
import Enquire from '../components/Enquire'
import React, { useEffect, useState } from "react";


const allProducts = (props) => {
  const [url, setUrl] = useState('None')
  useEffect(()=>{
    const cu = window.location.href;
    setUrl(cu)
  })
  let { products } = props;
  if (url!='None' && url.includes('?q=')){
    var url2 = url.split("?q=")
    var searchItem = url2[1].toLowerCase()
    const newProducts = products.filter((currValue)=>{
    let title = currValue.title.toLowerCase()
    if (title.includes(searchItem)){
      return true
    }
    else return false
  })
  if (newProducts.length>0)
    products = newProducts
  }

  return (
    <Layout>
      <AneekProducts products={products} />
      <Enquire />
    </Layout>
  );
};

export default allProducts;

export async function getServerSideProps(ctx) {
  try {
    const res = await getallProducts();
    return {
      props: {
        products: res.data.data?.filter((currValue)=>{
          if (currValue.isPublished)
            return true
          else return false
        }),
      },
    };
  } catch (err) {
    return {
      props: {
        products: null,
      },
    };
  }
}
