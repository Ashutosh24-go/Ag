import './Myself.css'
import { Typewriter } from '../../utils/typing'
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
                    <p>I build fast, modern and responsive</p>
                    <p>web experiences with clean code</p>
                    <p>and thoughtful design.</p>
        </div>
        <div className="buttons">

                <a href="https://github.com/Ashutosh24-go?tab=repositories" target="_blank"  className="primarybtn" ><i className="ri-play-large-fill" ></i> VIEW WORK</a>
                <a href="" target="_blank" className="secondarybtn">GET MY RESUME <i className="ri-download-2-line"></i> </a>
        </div>
    </div>
    
    <div className="myphoto">
        <img src='/test.png' alt="myphoto"/>
    </div>
</section>
    )
}