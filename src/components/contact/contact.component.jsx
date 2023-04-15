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
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Contact;