"use client";
import { HeroPage } from "@/components/pages/Hero"
import { Navbar } from "@/components/pages/navbar"
import { Navbar2 } from "@/components/pages/Navbar2"
import { Button } from "@/components/ui/button"
import  ResponsiveMenu  from "../components/pages/ResponsiveMenu"
export default function Home(){
  return (
 <div>
  <Navbar2/>
  {/* <Navbar/> */}
  <HeroPage/>
  <ResponsiveMenu />
 </div>
  )
}