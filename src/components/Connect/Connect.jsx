import { Mail, } from "lucide-react";
import './Connect.css';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export function Connect() {

    return (
        <div className="connect">
            <div className="connectlin1">
                <p> // LET'S CONNECT </p>
            </div>
            <div className="connectlin2">
                <div className="connectlinks">
                    <div className="contact-info">
                        <a href="mailto:ashutoshgoyal2409@gmail.com" className="infocard">
                            <Mail size={30} />
                            <div className="infowrite">
                                <h4>EMAIL</h4>
                                <p>ashutosh@gmail.com</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href="https://github.com/Ashutosh24-go" className="infocard" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                            <div className="infowrite">
                                <h4>GITHUB</h4>
                                <p>github.com/Ashutosh24-go</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/ashutosh24-go/" className="infocard" target="_blank" rel="noopener noreferrer">
                            <CiLinkedin size={30} />
                            <div className="infowrite">
                                <h4>LINKEDIN</h4>
                                <p>linkedin.com/in/ashutosh24-go/</p>
                            </div>
                        </a>
                    </div>
                    <div className="contact-info">
                        <a href="https://www.instagram.com/_ashutosh.g/" className="infocard" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                            <div className="infowrite">
                                <h4>INSTAGRAM</h4>
                                <p>instagram.com/_ashutosh.g//</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="connectmessage">
                    <div className="connect-name-email">
                        <div className="connect-name">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                            ></input>
                        </div>
                        <div className="connect-email">
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                            ></input>
                        </div>
                    </div>
                    <div className="connect-message">
                          <textarea
            placeholder="Your Message"
            rows="8"
            required
        ></textarea>
                    </div>
                    <div className="send-btn">
                        <button type="submit">
            SEND MESSAGE →
        </button>
                    </div>
                </div>
            </div>

        </div >
    );

}