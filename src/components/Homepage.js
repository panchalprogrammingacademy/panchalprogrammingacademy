import React, { useEffect, useState } from 'react';
import BrandIcon from '../images/brand.png';
import FounderIcon from '../images/shubham.jpeg';
import LinkedInIcon from '../images/linkedin.png';
import GitHubIcon from '../images/github.png';
import BloggerIcon from '../images/blogger.png';
import ExternalLink from './ExternalLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import '../styles/homepage.scss';
export default function Homepage(props){

    const [isVisible, setIsVisible] = useState(true);
    useEffect(function(){
        window.addEventListener('resize', event => {
            setIsVisible(window.innerWidth > 990)
        });
    }, []);

    const onClickNavbarItem = (event) => {
        event.preventDefault();
        let id = event.target.getAttribute('id');
        let link = document.getElementById(id);
        console.log(link);
    }
    return (
        <div id="homepage">
            <div className="navbar">
                <div className="navbar-brand">
                    <img src={BrandIcon} width="200" alt=""/>
                    <button className="navbar-toggler" onClick={event => setIsVisible(!isVisible)}>
                        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
                    </button>
                </div>
                {isVisible && 
                <div className="navbar-links">
                    <ExternalLink to="#about" onClick={onClickNavbarItem}>About</ExternalLink>
                    <ExternalLink to="#services" onClick={onClickNavbarItem}>Services</ExternalLink>
                    <ExternalLink to="#courses" onClick={onClickNavbarItem}>Courses</ExternalLink>
                    <ExternalLink to="#articles" onClick={onClickNavbarItem}>Articles</ExternalLink>
                    <ExternalLink to="#contact" onClick={onClickNavbarItem}>Contact</ExternalLink>
                </div>}
            </div>
            <div className="home">
                <h1 className='page-title'>
                    Panchal Programming Academy
                </h1>
                <h2 className='page-subtitle'>
                    <em>"Programming is a skill best acquired by practice and examples rather than from books"</em>
                </h2>
            </div>

            <div className="about" id="about">
                <div className="header">
                    About
                </div>
                <div className="row">
                    <div className="col profile">
                        <img src={FounderIcon} alt="" />                        
                    </div>
                    <div className="col welcome">
                        <div>Hello Everyone!</div>
                        <p>
                            Welcome to Panchal Programming Academy! I'm Shubham 
                            Panchal, the founder of this academy and I appreciate 
                            your presence here. I founded this academy with a hope 
                            to help aspirants to learn programming in the simplest 
                            possible way. By the way I'm a Computer Science bachelor at 
                            IIT Hyderabad, I love to code and I love to teach!  
                        </p>
                        <ExternalLink external={true} className="explore"
                            to="https://shubhampanchal.herokuapp.com">
                            Explore
                        </ExternalLink>
                    </div>
                </div>
            </div>

            <div className="services" id="services">
                <div className="header">Services</div>
                <ExternalLink external={true} to="https://panchalprogrammingacademy.github.io/course-problem-deck">
                    Course Problem Deck
                </ExternalLink>
                <ExternalLink external={true} to="https://panchalshubham.github.io/CodeBuddy">
                    Code Buddy
                </ExternalLink>
                <ExternalLink external={true} to="https://panchalshubham.github.io/ProgressTest">
                    Progress Test
                </ExternalLink>
            </div>

            <div className="courses" id="courses">
                <div className="header">
                    Courses
                </div>                
                <div className="row">
                    <div className="course-card">
                        <img className="card-img-top" 
                            src="https://img-a.udemycdn.com/course/750x422/2375470_ce29_5.jpg" 
                            alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <a href="https://www.udemy.com/course/the-complete-c-course-ppa/?referralCode=E8FBBBCC47B68F60F275" className="course-link">The Complete C Course (Udemy)</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="contact" id="contact">
                <div className="header">
                    Get in touch!
                </div>                
                <div className="row">
                    <div className="col">
                        <img src={BrandIcon} alt="" /> <br/>
                        <div className="message">Aminagar Sarai, Baghpat, UP - 250606</div>
                        <div className="message break-word"><FontAwesomeIcon icon={faEnvelope} /> panchalprogrammingacademy@gmail.com</div>
                        <div className="message"><FontAwesomeIcon icon={faPhone} /> +91 9773669462</div>
                        <div className="social">
                            <ExternalLink external={true} to="https://github.com/panchalprogrammingacademy">
                                <img src={GitHubIcon} alt="" />
                            </ExternalLink>
                            <ExternalLink external={true} to="https://www.linkedin.com/company/30187120/">
                                <img src={LinkedInIcon} alt="" />
                            </ExternalLink>
                            <ExternalLink external={true} to="/">
                                <img src={BloggerIcon} alt="" />
                            </ExternalLink>
                        </div>
                    </div>
                    <div className="col">
                        <fieldset>
                            <legend>Let's chat</legend>
                            <form action="/" method="post" autoComplete="off"
                                className="contact-form">
                                <input type="text" placeholder="Name"
                                    className="text-field" required />
                                <input type="email" placeholder="Email"
                                    className="text-field" required />
                                <textarea className="text-area" required
                                    placeholder="Message"></textarea>
                                <button className="submit">Submit</button>
                            </form>
                        </fieldset>
                    </div>
                </div>
                <div className="footer">
                    Copyright &copy; 2019 Panchal Programming Academy
                </div>
            </div>
        </div>
    );
};
