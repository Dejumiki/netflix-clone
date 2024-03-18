import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import './footer.css'

function Footer() {
  return (
    <div className='footer_outer_container' >
    <div className='footer_container'>
        <div className='footer_icons'>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
            
        </div>

        <div className='footer_data'>
            <div>
                <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
                
                </ul>
            </div>
            
            <div>
                <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookies Preferences</li>
                
                </ul>
            </div>
            
            <div>
                <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li> Corporate Information</li>
                
                </ul>
            </div>
            
            <div>
                <ul>
                <li>Media Center</li>
                <li>Privacy </li>
                <li>Contact Us</li>
                
                </ul>
            </div>
            
        </div>
        
    </div>

</div>
  )
}

export default Footer