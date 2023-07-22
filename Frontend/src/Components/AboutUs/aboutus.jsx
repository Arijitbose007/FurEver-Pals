import React from 'react'; 
import './aboutus.css'; 
const AboutUs = () => {
    return (
        <section className="bg-white dark:bg-gray-900 b_1">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <p id="About"></p>
                <h2
                    className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white text_3"
                >
                    About Us
                </h2>
                <p
                    className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl text_4"
                >
                    Our mission is to provide a platform that connects animal lovers with pets in need of a forever home, while also providing emergency medical care for stray animals in distress. We strive to make a difference in the lives of these innocent creatures by offering options to
                    <a className="hover-underline-animation" href="#adopt"><b>Adopt</b></a>,
                    <a className="hover-underline-animation" href="./donate.html"><b>Donate</b></a>, and through our SOS feature
                    <a className="hover-underline-animation" href="./reportstary.html"><b>Report</b></a>
                    stray animals in need of immediate assistance. Together, we can create a better world for all animals.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
