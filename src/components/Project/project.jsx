import './project.css'
import projectImg from "./projectimages/project1.jpg";
export function Project(){
    const projects =[
        {
            id :1,
            name:'project1',
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor!',
            videolink:"asdadada",
            imgsrc:projectImg
        },
        {
            id :2,
            name:'project2',
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor!',
            videolink:"asdadada",
            imgsrc:projectImg
        },
        {
            id :3,
            name:'project3',
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor!',
            videolink:"asdadada",
            imgsrc:projectImg
        },
        {
            id :4,
            name:'project4',
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor!',
            videolink:"asdadada",
            imgsrc:projectImg
        }
    ]


    return (






        <section className="work" id="work">
  <div className="worklin1">
    <p>// SELECTED WORK </p>
    <a href="project.html" target=""> VIEW ALL PROJECTS <i className="ri-arrow-right-line"></i></a>
  </div>





   <div className="projectcards">
           {projects.map((project)=>{
           return (
             <div className="card1" key = {project.id}>
                 <p>{project.id}</p>
        <img src={projectImg} alt="project1"/>
        <h4>{project.name}</h4>
        <p>{project.about}</p>
        <a href={project.videolink} target="_blank">LIVE DEMO <i className="ri-arrow-right-up-line"></i></a>

            </div>
           )
           })}
   </div>

</section>
    )
}








