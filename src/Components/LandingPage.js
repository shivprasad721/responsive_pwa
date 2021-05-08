import React from 'react';
import "./style.css";
import img1 from "../images/elena-joland-t3-HSj2or-k-unsplash@2x.png";
import img2 from "../images/jude-beck-6tuHPZHGajQ-unsplash@2x.png";
import img3 from "../images/martin-brechtl-ogiCH04kNGI-unsplash@2x.png";
import img4 from "../images/phillip-larking-G7zQ_y2cSGk-unsplash@2x.png";
const LandingPage =()=>{

    return(
        <>
            <div className="ifb-container">
                <div className="ifb-intro">
                    <h2 class="ifb-heading">LIKED IT!</h2>
                    <p>Let's try some more <br/> frangnance options</p>
                </div>
                <div className="ifb-landing-img">
                    <div className="ifb-img-block">
                        <a href=""><img src={img1} alt=""/></a>
                        <a href=""><img src={img2} alt=""/></a>
                        <a href=""><img src={img3} alt=""/></a>
                        <a href=""><img src={img4} alt=""/></a>
                    </div>
                    
                </div>
                <div className="ifb-bottom">
                        <h2> Not just FRANGANCE FRESH</h2>
                        <h1>but not get your <br/>loundry <div>refreshed</div> with steam</h1>
                </div>
            </div>
        </>
    );
}
export default LandingPage;