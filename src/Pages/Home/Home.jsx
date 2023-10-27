import './Home.css';
import video from '../../assets/video.mp4';
import plane from '../../assets/airplane.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home() {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    return (
        <div id='home'>
            <div className="title">
            <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
            </div>

            <div className='video-container'>
                <div className='video-div'>
                    <video src={video} autoPlay loop muted></video>
                </div>
                <div className='plane'>
                <img src={plane} alt='plane'/>
                </div>
            </div>
        </div>
    )
}