"use client"

import Link from "next/link";
import { Suspense, useState } from 'react'
import { IoArrowBack, IoBagOutline } from "react-icons/io5";
import Display from "./display";

import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

function CategoryFallback() {
    return <h2 className="text-3xl font-semibold m-10">Category</h2>
}

export default function Category(){

  const [collections, setCollections] = useState<any>([]);
  const getCollections = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));

    const productData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCollections(productData);
  }
  getCollections()
    return (
    <>
    <div className="w-full h-16 flex items-center gap-12 justify-between border-b border-zinc-300 px-10 ">
        <Link href="/">
          <IoArrowBack size={25} />
        </Link>
        <Link href="/cart">
          <IoBagOutline size={30} />
        </Link>
    </div>
    <Suspense fallback={<CategoryFallback/>}>
        <Display data={collections}/>
    </Suspense>
    </>
    );
}