import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';

const ErrorPage = () => {
    return (
        <Wrapper>
            <div className="container">
                <div>
                    <h3>404</h3>
                    <p>The page you are looking is not available at this url. Please try again</p>
                    <NavLink to='/'>
                        <Button>Go back to home</Button >
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.container{
    padding:9rem 0;
    text-align:center;
}
h3{
    font-size:4.5rem;
}
p{
    margin:2rem 0;
}
`;

export default ErrorPage
