import './Info.css';
import { Button } from "@mui/material";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Info() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    return (
        <div className="info-container">
            <div className="titleDiv">
            <div className='title'>
            <h3>Travel to make memories all around the world</h3>
            </div>
            <div className='view-btn'>
            <Button variant="contained" sx={{borderRadius: '4rem',textTransform: 'capitalize',px: '20px'}}>view all</Button>
            </div>
            </div>

            <div className='card-div'>
                <div className='single-card' data-aos='fade-up' data-aos-duration='7500'>
                <div className='info-div'>
                <div className='icon-div cal-icon'>
                    <CalendarMonthOutlinedIcon/>
                </div>
                <span>Book & Relax</span>
                <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div>
                </div>
                <div className='single-card' data-aos='fade-down' data-aos-duration='5000'>
                <div className='info-div'>
                <div className='icon-div check-icon'>
                    <VerifiedUserOutlinedIcon/>
                </div>
                <span>Smart Checklist</span>
                <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div>
                </div>
                <div className='single-card' data-aos='fade-up' data-aos-duration='2500'>
                <div className='info-div'>
                <div className='icon-div save-icon'>
                    <BeenhereOutlinedIcon/>
                </div>
                <span className='save-more'>Save More</span>
                <p>You can also call airlines from your phone and book a flight ticket!</p>
                </div>
                </div>
            </div>
        </div>
    )
}