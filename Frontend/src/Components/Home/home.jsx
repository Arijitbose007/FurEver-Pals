import React, { useState } from 'react';
import './home.css';

const Home = () => {
    return (
        <section className="main-body-section">
        <div className="main-body-section-div">
            <div className="heading-main-body">
                <div className="main-body-heading-text">
                    <h1 className="heading-main-body-h1">Adopt Me</h1>
                    <div className="heading-main-body-moto">
                        Give life to an animal in need.
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- back to top button --> */}
        <li>
            <a href="#top">
                <button id="bttbutton" title="backtotop" >
                    <img src="./uparrow.png" width="20" height="25" />
                </button>
            </a>
        </li>

        {/* <!--end of back to top button -->

        <!-- SOS button --> */}
        <div>
            <form action="./reportstary.html" method="get" target="_blank">
                <button id="mySBtn" title="SOS">SOS</button>
            </form>
        </div>
        {/* <!--end of SOS button --> */}
    </section>
    );
};

export default Home;