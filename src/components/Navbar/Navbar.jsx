import './Navbar.css' 
import { useState } from 'react';
export function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        <nav>
        
            <div className="nav1">
                <h6>/AG</h6>
            </div>
            <div className="nav2">
            <a href="#home" className="navigation" >01. HOME</a>
            <a href="#work" className="navigation">02. WORK</a>
            <a href="#skills" className="navigation">03. SKILLS</a>
            <a href="#aboutme" className="navigation">04. ABOUT </a>
            <a href="#" className="navigation">05. CONTACT</a>
        
                <button className="homebutton" id="menudriven"><i className="ri-menu-unfold-4-line"  onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}></i> 
                    
                </button>
                
            </div>
        
    </nav>
        {
            menuOpen && (
               
        
          
            
            <div className="mobilenav">
            <a href="#home" className="navigation" onClick={() => setMenuOpen(false)} >01. HOME</a>
            <a href="#work" className="navigation " onClick={() => setMenuOpen(false)} >02. WORK</a>
            <a href="#skills" className="navigation" onClick={() => setMenuOpen(false)}>03. SKILLS</a>
            <a href="#aboutme" className="navigation" onClick={() => setMenuOpen(false)}>04. ABOUT </a>
            <a href="#" className="navigation"onClick={() => setMenuOpen(false)} >05. CONTACT</a>
        
                
                
            </div>
        
    
            )
        }
        </>
    );
}