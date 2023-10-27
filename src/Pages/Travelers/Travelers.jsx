import './Traveler.css';
import paris from '../../assets/paris.jpg';
import mary from '../../assets/mary.jpg';
import korea from '../../assets/korea.jpg';
import catherine from '../../assets/catherine.jpg';
import switzeland from '../../assets/switzeland.jpg';
import hery from '../../assets/hery.jpg';
import japan from '../../assets/japan.jpg';
import john from '../../assets/john.jpg';
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: mary,
        travelerName: 'Mary',
        socialLink : '@mary08',
    },
    {
        id: 2,
        destinationImage: korea,
        travelerImage: catherine,
        travelerName: 'Catherine',
        socialLink : '@cat007',
    },
    {
        id: 3,
        destinationImage: switzeland,
        travelerImage: hery,
        travelerName: 'Hery',
        socialLink : '@hery01',
    },
    {
        id: 4,
        destinationImage: japan,
        travelerImage: john,
        travelerName: 'John',
        socialLink : '@john09',
    },
]
export default function Travelers() {
    const [hoveredTraveler, setHoveredTraveler] = useState(null);
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[]);

    return(
        <div className="travelers-container" data-aos='fade-up' data-aos-duration='2500'>
            <div className="travelers-section">
                <h2>Top travelers of this month!</h2>

                <div className='travelers-div'>
                {travelers.map((traveler) => {
                    return(
                        <div className={`single-traveler ${hoveredTraveler === traveler.id ? 'hovered' : ''}`} 
                        key={traveler.id}
                        onMouseEnter={() => setHoveredTraveler(traveler.id)}
                        onMouseLeave={() => setHoveredTraveler(null)}
                        >
                        <img src={traveler.destinationImage} className='destinationImage'/>
        
                        <div className='traveler-details'>
                            <div className='traveler-pic'>
                            <img src={traveler.travelerImage} alt='user-img' className='travelerImage'/>
                            </div>
                            <div className='travelerName'>
                            <span>{traveler.travelerName}</span>
                            <p>{traveler.socialLink}</p>
                            </div>
        
                        </div>
                        </div>
                    )
                })}
               
                </div>
            </div>
        </div>
    )
}