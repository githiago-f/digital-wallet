import { createGlobalStyle } from 'styled-components';

const BaseTheme = createGlobalStyle`
    :root{
        /* add here all colors and dimensions */
        --primary-dark:#1F2326;
        --secoundary-dark:#494B56;
        --light-dark:#888D97;

        --light-blue:#57A2ED;
        --light-cian:#6CD9E9;

        --light-yellow:#F8CB84;

        --light-red:#FE7E7C;
    }

    * {
        margin: 0;
        padding: 0;
    }
`;

export default BaseTheme;
