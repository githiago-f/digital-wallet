import { createGlobalStyle } from 'styled-components';

const BaseTheme = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,400&display=swap');

    :root{
        /*  Theme styles */
        --primary-dark:#1F2326;
        --secondary-dark:#272B2E;

        --light-blue:#57A2ED;
        --light-cian:#6CD9E9;

        --light-yellow:#F8CB84;
        --light-red:#FE7E7C;

        /* Text theme style */
        --text-white:#fff;
        --text-color:#C4C4C4;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background-color:var(--primary-dark);
        color:var(--text-color);
    }
`;

export default BaseTheme;
