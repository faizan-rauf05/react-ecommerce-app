import React from 'react'
import styled from 'styled-components'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <MainFooter>
            <div className="footer-sec">
                <div className="container">
                    <div className="foot-about col">
                        <h3>ECART</h3>
                        <p>eCart is the future of online shopping.</p>
                    </div>
                    <div className="updates col">
                        <h4 className='fot-h4'>Subscribe to get latest updates</h4>
                        <input type="text" placeholder='Email' />
                        <input type="submit" value="Subscribe" />
                    </div>
                    <div className="follow-us col">
                        <h4 className='fot-h4'>Follow Us</h4>
                        <FaSquareFacebook className='follow-icon' />
                        <BsInstagram className='follow-icon' />
                        <FaYoutube className='follow-icon' />
                    </div>
                    <div className="call-us col">
                        <h4 className='fot-h4'>Contact Us</h4>
                        <div className="call-us--inner">
                            <BsFillTelephoneFill className='call-icon follow-icon' />
                            <h4 className='fot-h4'>+92 6578549834</h4>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>@{new Date().getFullYear()} All right reserved</p>
                </div>
            </div>

        </MainFooter>
    )
}

const MainFooter = styled.footer`

.footer-sec{
    padding:7rem 0 2rem 0;
    color:#fff;
    background-color:#0a2351;
    position:relative;
    bottom:0;
}
.container{
    display:flex;
    justify-content:space-between;
    gap:3rem;
}
.foot-about h3{
    font-weight:600;
}
.foot-about p{
    color:#fff;
}
.updates{
    display:flex;
    flex-direction:column;
}
.follow-icon{
    font-size:2.2rem;
    margin:1rem 1rem;
    cursor:pointer;
}
.follow-us,.call-us{
    text-align:center;
}
.call-us--inner{
    display:flex;
    justify-content:center;
    align-items:center;
}

.fot-h4{
    font-size:1.6rem;
    margin-bottom:1rem;
    font-weight:500;
}
.col{
    width:17vw;
}
.footer-bottom{
    padding-top:4rem;
    text-align:center;
}
.footer-bottom p{
    color:#fff;
}

// mobile
@media (max-width: ${({ theme }) => theme.media.mobile}){
    .container{
        flex-direction:column;
        justify-content:flex-start;
    }
    .col{
        width:100%;
    }
    .follow-us,.call-us{
        text-align:start;
    }
    .call-us--inner{
        display:flex;
        justify-content:flex-start;
        // align-items:center;
    }
}

`;

export default Footer
