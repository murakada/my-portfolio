'use client'
import React,{useEffect} from "react";
import dynamic from 'next/dynamic'

const HeroOne = dynamic(() => import('./components/HeroOne'));

export default function Index(){
    useEffect(() => {
        if (typeof window !== "undefined"){
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.classList.add('light');
        }
      }, []);
    return(
        <>
            <HeroOne/>
        </>
    )
}