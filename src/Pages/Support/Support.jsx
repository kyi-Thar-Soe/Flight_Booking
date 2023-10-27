import './Support.css';
import viewOne from '../../assets/view1.jpg';
import viewTwo from '../../assets/view2.jpg';
import viewThree from '../../assets/view3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Support() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    return(
        <div className="support-container" id='offers'>
            <div className="title-div">
                <span>Travel Support</span>
                <h2>Plan your travel with confidence</h2>
                <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
            </div>

            <div className='infoDiv'>
                <div className='textDiv'>
                    <div className='singleInfo paramOne' data-aos='fade-up' data-aos-duration='2500'>
                        <span className='numberOne'>01</span>
                        <h4>Travel equirements for Dubai</h4>
                        <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                    </div>
                    <div className='singleInfo paramTwo' data-aos='fade-up' data-aos-duration='3000'>
                        <span className='numberTwo'>02</span>
                        <h4>Chauffeur services at your arrival</h4>
                        <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                    </div>
                    <div className='singleInfo paramThree' data-aos='fade-up' data-aos-duration='4000'>
                        <span className='numberThree'>03</span>
                        <h4>Multi-risk travel insurance</h4>
                        <p>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                    </div>
                </div>
                <div className='img-div' data-aos='fade-up' data-aos-duration='4000'>
                <div className='img-one'><img src={viewOne} alt='support-img'/></div>
                <div className='img-two'><img src={viewTwo} alt='support-img'/></div>
                <div className='img-three'><img src={viewThree} alt='support-img'/></div>
                </div>
            </div>
        </div>
    )
}