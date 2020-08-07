import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

class HomePage extends React.Component {
   
    render(){
        return(
            <>    
            <div className="hp-bg" >        
                <div className="main-bg-container">
                    <h1 className="hp-header">We &lt; 3 people who code</h1>
                    <p className="hp-header-addition">
                        We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
                    </p>
                </div>

                <div className="bg2-container">
                    <h3 className="hp-sub-header">Questions are everywhere, answers are on LIFO Overflow</h3>
                    <div className="bg2-guide grid align-center">
                        <div className="bg2-labels grid" >
                            <label className="bg2-guide-label grid align-center">
                                <div className="guide-img" >
                                    <img src={window.guide_question}/>
                                </div>
                                <span>Ask a question</span>
                            </label>
                            <label className="bg2-guide-label grid align-center">
                                <div className="guide-img" >
                                    <img src={window.guide_like} />
                                </div>
                                <span>Vote on everything</span>
                            </label>
                            <label className="bg2-guide-label grid align-center">
                                <div className="guide-img" >
                                    <img src={window.guide_faq} />
                                </div>
                                <span>Answer questions</span>
                            </label>
                        </div>
                        <div className="bg2-video">
                            <video id="guide-bg" src={window.guide_bg} autoPlay={true} muted="muted"/>                           
                        </div>
                        <div className="bg2-labels grid" >
                            <label className="bg2-guide-label grid align-center">
                                <div className="guide-img" >
                                    <img src={window.guide_tag} />
                                </div>
                                <span>Tag your question</span>
                            </label>
                            <label className="bg2-guide-label grid align-center">
                                <div className="guide-img" >
                                    <img src={window.guide_check} />
                                </div>
                                <span>Accept an answer</span>
                            </label>
                            <label className="bg2-guide-label grid align-center">
                                <div className="guide-img" >
                                    <img src={window.guide_star} />
                                </div>
                                <span>Get recognized</span>
                            </label>
                        </div>
                    </div>
                </div>                
            <Footer />
            </div>
            </>                       
        )
    }
}

export default HomePage;