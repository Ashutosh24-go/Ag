import'./Techstack.css';
import html from "./Techstackimages/html-5.png";
import css from "./Techstackimages/css-3.png";
import js from "./Techstackimages/js.png";
import cpp from "./Techstackimages/c-.png";
import python from "./Techstackimages/python.png";
import react from "./Techstackimages/atom.png";
import sql from "./Techstackimages/database.png";

export  function Techstack(){
    const techstacks = [
  { id: 1, name: "HTML", imgsrc: html },
  { id: 2, name: "CSS", imgsrc: css },
  { id: 3, name: "JAVASCRIPT", imgsrc: js },
  { id: 4, name: "C++", imgsrc: cpp },
  { id: 5, name: "PYTHON", imgsrc: python },
  { id: 6, name: "REACT", imgsrc: react },
  { id: 7, name: "SQL", imgsrc: sql },
];
    return (
        <section className="techstack" id="skills">
    <div className="techline1">
        <p>// TECH STACK</p>
    </div>
    <div className="techlin2">
        <div className="techimg">
        {techstacks.map((techstack)=>{
            return (
                <div  key = {techstack.id}className="techcard">
                <img src={techstack.imgsrc} alt={techstack.name}/>
                    <p>{techstack.name}</p>
                    </div>
            );
        })}
        </div>
    </div>
</section>
 
    );

}