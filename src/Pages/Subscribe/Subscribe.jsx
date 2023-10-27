import './Subscribe.css';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import pinterest from '../../assets/pinterest.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const information = ['Home','Explore','Flight Status','travel', 'check-in', 'Manage your booking'];
const quickGuide = ['faq','how to', 'features', 'baggage', 'route map','our communities'];
const secInformation = ['Chauffuer','our partners','destinations','careers', 'transportation', 'programme rules'];
export default function Subscribe() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[]);

    return (
        <div className="subscribe-container" id='about'>
            <div className="subscribe-section" data-aos='fade-up' data-aos-duration='2500'>
            <h3>subscribe newsletter & get latest news</h3>
            <div className="inputDiv">
            <input type="text" placeholder="Enter your email address" className='form-control text-field'/>
            <Button variant="contained" className='subscribe-btn'><span>Subscribe</span></Button>
            </div>
            </div>
            <div className='subInfo-container'>
            {/*Single info*/}
            <div className='single-subInfo' data-aos='fade-up' data-aos-duration='2500'>
            <img src={logo} alt='brand-logo'/>
            <p>You might should be stronger than your feelings, fly!</p>
            <div className='social-icon'>
            <div className='single-icon'><img src={facebook} alt='facebook-logo'/></div>
            <div className='single-icon'><img src={twitter} alt='twitter-logo'/></div>
            <div className='single-icon'><img src={youtube} alt='youtube-logo'/></div>
            <div className='single-icon'><img src={pinterest} alt='pinterest-logo'/></div>
            </div>
            </div>
            <div className='single-subInfo' data-aos='fade-up' data-aos-duration='6000'>
            <h3>Information</h3>
            {information.map((info,index) => {
                return <h5 key={index}>{info}</h5>
            })}
            </div>
            <div className='single-subInfo' data-aos='fade-up' data-aos-duration='8000'>
            <h3>Quick Guide</h3>
            {quickGuide.map((quick,index) => {
                return <h5 key={index}>{quick}</h5>
            })}
            </div>
            <div className='single-subInfo' data-aos='fade-up' data-aos-duration='10000'>
            <h3>Information</h3>
            {secInformation.map((secInfo,index) => {
                return <h5 key={index}>{secInfo}</h5>
            })}
            </div>
            </div>
        </div>
    )
}