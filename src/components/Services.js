import React from 'react'
import styled from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";


const Services = () => {
    return <Wrapper>

        <div className="container-s">
            <div className="delivery-section trans-s">
                <div className="icon-c">
                    <TbTruckDelivery className='truck-icon s-icon' />
                </div>
                <p className='services-name' >Superfast & Free Delivery</p>
            </div>

            <div className="shipping-guranteed ">
                <div className="non-contact-shipping trans-s">
                    <div className="icon-c">
                        <BiShieldQuarter className='shield-icon s-icon' />
                    </div>
                    <p className='services-name'>non-contact-shipping</p>
                </div>
                <div className="moneyback-gurantee">
                    <div className="non-contact-shipping trans-s">
                        <div className="icon-c">
                            <FaMoneyCheckDollar className='shield-icon s-icon' />
                        </div>
                        <p className='services-name'>Money-Back Guranteed</p>
                    </div>
                </div>

            </div>
            <div className="delivery-section trans-s">
                <div className="icon-c">
                    <RiSecurePaymentLine className='truck-icon s-icon' />
                </div>
                <p className='services-name' >Super secure payment system</p>
            </div>
        </div>

    </Wrapper>
}

const Wrapper = styled.section`
    .delivery-section{
        height:40vh;
        width:24vw;
        background-color:#F8F8F8;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        border-radius:15px;
    }
    .trans-s:hover{
        transform:scale(1.04);
        transition:0.3s;
    }
    .services-name{
        font-size:1.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight:600;
        
    }
    .container-s{
        
        display:flex;
        align-items:center;
        gap:3rem;
        max-width: 100rem;
        margin: 0 auto;
        
    }
    .s-icon{
        font-size:3.8rem;
        color:#00008b;
    }
    .icon-c{
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        padding:8px;
        width:50px;
        height:50px;
        background-color:#fff;
    }
    .non-contact-shipping{
        width:24vw;
        height:15vh;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:6px;
        margin:1.2rem 0;
        background-color:#F8F8F8;
        border-radius:15px;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .container-s{
            flex-direction: column;
        }
        .delivery-section,.non-contact-shipping,.moneyback-gurantee {
            width:87vw;
            height:18vh;
        }
    }
    @media (max-width: ${({ theme }) => theme.media.tab}){
        
        .container-s{
            justify-content:center;
        }
        .delivery-section{
            height:18vh;
        }
    }
`;

export default Services
