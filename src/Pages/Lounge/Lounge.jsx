import './Lounge.css';
import ecoOne from '../../assets/ecoOne.jpg';
import ecoTwo from '../../assets/ecoTwo.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Lounge() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    return(
        <div className='lounge-container' id='seats'>
            <div className='loungeTitle-div'>
            <h2 className='minor-title'>Unaccompanied Minor Lounge</h2>
            <div className='grid-div'>
            <div className='single-grid' data-aos='fade-down' data-aos-duration='2500'>
            <h5>Help through the airport</h5>
            <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations!</p>
            </div>
            <div className='single-grid' data-aos='fade-down' data-aos-duration='3000'>
            <h5>Priority Boarding</h5>
            <p>You can also call airlines from your phone and book a flight ticket o one of your favourite destinations!</p>
            </div>
            <div className='single-grid' data-aos='fade-down' data-aos-duration='4000'>
            <h5>Care on the flight</h5>
            <p>You can also call airlines from your phone and book a flight ticket o one of your favourite destinations!</p>
            </div>
            <div className='single-grid service' data-aos='fade-down' data-aos-duration='5000'>
            <h5>Chauffer-drive service</h5>
            <p>You can also call airlines from your phone and book a flight ticket o one of your favourite destinations!</p>
            </div>
            </div>
            </div>

            <div className='ecoImg-div' data-aos='fade-up' data-aos-duration='2500'>
            <div className='ecoOne'>
            <img src={ecoOne} alt='eco-img'/>
            </div>
            <div className='ecoTwo'>
            <img src={ecoTwo} alt='eco-img'/>
            </div>
            </div>
        </div>
    )
}