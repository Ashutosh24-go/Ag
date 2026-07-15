import './Aboutme.css';
import img1 from './coder.jpg'
export  function Aboutme(){
    return (
        <div className="aboutme" id="aboutme">
    <div className="aboutmelin1">
        <p> // ABOUT ME </p>
    </div>
    <div className="aboutmelin2">
        <img src={img1} alt="" className="aboutmeimg"/>
        <div className="myline">
            <h2>CURIOUS . CONSISTENT . CREATIVE</h2>
            <p>Hey, I'm Ashutosh, a Computer Science student at NSUT, Delhi. I enjoy solving complex problems and building full-stack web applications, with a growing interest in backend development and AI engineering. I have a solid foundation in Data Structures & Algorithms and actively practice competitive programming in C++ to sharpen my problem-solving skills. On the development side, I work with React, Node.js, and Express, and I'm continuously learning — always eager to take on new challenges and build impactful projects using modern technologies.
</p>
        </div>
    </div>
        </div>
    );
}