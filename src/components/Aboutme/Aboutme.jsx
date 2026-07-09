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
            <p>Computer Science student at NSUT. Passionate about web development, problem-solving, and building meaningful digital experiences. Constantly learning, experimenting, and creating projects that push my skills beyond the classNameroom.
</p>
        </div>
    </div>
        </div>
    );
}