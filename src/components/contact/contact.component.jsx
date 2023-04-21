import React from "react";
import './contact.styles.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src="" alt="contact-image"/>
                            </div>
                            <div className="title-area">
                                <h4 className="title">Andreas Priftis</h4>
                                <span>Software Engineer</span>
                            </div>
                            <div className="description">
                                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                <span className="phone">Phone: +1 534-288-9503</span>
                                <span className="email">Email: andreascompany@gmail.com</span>
                            </div>
                            <div className="social-media-area">
                                <div className="name">Find me!</div>
                                <div className="social-group-icons">
                                    <a href="#"></a>
                                    <a href="#"></a>
                                    <a href="#"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                               <form id="contact-form">
                                
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Contact;