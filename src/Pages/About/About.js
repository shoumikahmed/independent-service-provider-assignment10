import React from 'react';
import shoumik from '../../images/my picture/shoumik.jpg'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='container w-50 my-5 col-md-12'>
                <img className='w-100 container float-right' src={shoumik} alt="..." class="img-thumbnail" />
                <div className='mt-3 text-center'>
                    <h3 className='text-success'>My Goal</h3>
                    <p className='text-secondary '>Hi there, I'm Shoumik Ahmad. From the beginning, I set my goal as a full stack web developer. Basically, full stack is a combination of front-end and back-end development. It's very hard to prove oneself as a full stack cause It's time consuming and need continuous work for a long time.</p>
                    <br />
                    <p className='text-secondary '>My roadmap shows me a simple path. Front-end is the entrance. After absorbing this skill I want to set up myself for back end</p>
                </div>
            </div>

        </div>
    );
};

export default About;