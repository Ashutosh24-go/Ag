import { Navbar } from "./components/Navbar/Navbar";
import { Myself } from "./components/Myself/Myself";
import { Project } from "./components/Project/project";
import {Techstack} from "./components/Techstack/Techstack";
import {Aboutme} from "./components/Aboutme/Aboutme";
export default function App(){
  return(


    <>
    <Navbar/>
    <Myself/>
    <Project/>
    <Techstack/>
    <Aboutme/>
    </>
  )
    
}
