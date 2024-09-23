 'use client'
 
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { IoArrowBack, IoBagOutline } from 'react-icons/io5';
 
export default function Subcategory(){
  const [products, setProducts] = useState<any>([]);
  const pathname = usePathname()
  const category = pathname.split("/")[1];
  const subcategory = pathname.split("/")[2];

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, subcategory));

    const productData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
  setProducts(productData);
  }
  getProducts();
  return (
    <>
        
        <div className="w-full h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 ">
            <Link href={`/category?group=${category.charAt(0).toUpperCase() + category.slice(1)}`}>
              <IoArrowBack size={25} />
            </Link>
            <Link href="/cart">
              <IoBagOutline size={30} />
            </Link>
        </div>
        <h2 className="text-3xl font-semibold m-10">{category.charAt(0).toUpperCase() + category.slice(1) + " " + subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-auto-fill-200 justify-evenly gap-10 flex-wrap px-10">
          {products.map((product: any) => {
              return ( 

                  <Link key={product.id} href={`${pathname}/${product.id}`}>
                      <ProductCard title={product.title} price={product.price} images={product.images}/>
                  </Link>
              );
          })}
        </div>
    </>
  );
}