import './Myself.css'
import { Typewriter } from '../../utils/typing'
import {img } from './test.png'
export function Myself(){
    return (
        <section className="myself" id="home">
    <div className="homepage">
        <h4>NAMASTE!👋</h4>
            <div className="name">
                <h6>I'M  </h6>
                <h6 id="ashu">ASHUTOSH </h6>
            </div>
        <Typewriter/>
        <div className="intro">
               
                
                
                    <p>I enjoy solving problems,</p>
                    <p>exploring new ideas,</p>
                    <p>and pushing my limits.</p>
        </div>
        <div className="buttons">

                <a href="https://github.com/Ashutosh24-go?tab=repositories" target="_blank"  className="primarybtn" ><i className="ri-play-large-fill" ></i> VIEW WORK</a>
                <a href="" target="_blank" className="secondarybtn">GET MY RESUME <i className="ri-download-2-line"></i> </a>
        </div>
    </div>
    
    <div className="myphoto">
        <img src={img} alt="myphoto"/>
    </div>
</section>
    )
}