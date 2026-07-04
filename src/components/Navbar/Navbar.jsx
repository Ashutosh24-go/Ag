import './Navbar.css' 
export function Navbar(){
    return (
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
        
                <button className="homebutton" id="menudriven"><i className="ri-menu-unfold-4-line"></i> 
                    
                </button>
                
            </div>
        
    </nav>
    )
}