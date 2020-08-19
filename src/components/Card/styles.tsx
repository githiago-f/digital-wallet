import styled from 'styled-components';

export const LeftCard = styled.div`
    width:200px;
    height:50px;
    background-color:var(--secondary-dark);

    &{
        /* display:flex;
        margin:auto;
        justify-content:center;
        align-items:center; */
        position: relative;
        background: #2c3e50;
        height: 200px;
    }

&::before {
    position: absolute;
    content: '';
    left: 100%;
    top:0%;
    z-index: 10;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary-dark);
    transform: translateX(-50%) translateY(50%);
    bottom: 0px;
}
`;
