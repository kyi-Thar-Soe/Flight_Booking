import './Search.css';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Button } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Search() {
    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])
    return (
    <div className="search-container" data-aos='fade-up' data-aos-duration='2500' id='destinations'>
        <div className="section-container">
            <div className="singleBtn">
                <span>Economy</span>
            </div>
            <div className="singleBtn">
                <span>Business Class</span>
            </div>
            <div className="singleBtn">
                <span>First Class</span>
            </div>
        </div>

        <div className="searchInput"  data-aos='fade-up' data-aos-duration='2000'>
        <div className="singleInput">
            <div className='icon'><PlaceOutlinedIcon/></div>
            <div>
            <h4>Location</h4>
            <input type='text' placeholder='Where do you want to' className='form-control textField'/>
            </div>
        </div>
        <div className="singleInput">
            <div className='icon'><PersonPinCircleOutlinedIcon/></div>
            <div>
            <h4>Travelers</h4>
            <input type='text' placeholder='Add guests' className='form-control textField'/>
            </div>
        </div>
        <div className="singleInput">
            <div className='icon'><CalendarMonthOutlinedIcon/></div>
            <div>
            <h4>Check In</h4>
            <input type='text' placeholder='Add date' className='form-control textField'/>
            </div>
        </div>
        <div className="singleInput">
            <div className='icon'><CalendarMonthOutlinedIcon/></div>
            <div>
            <h4>Check Out</h4>
            <input type='text' placeholder='Add date' className='form-control textField'/>
            </div>
        </div>
        <div className='search-flight'>
        <Button variant="contained" sx={{borderRadius: '4rem',textTransform: 'capitalize',px: '20px'}}>Search Flight</Button>
        </div>
        </div>
    </div>
    )
}