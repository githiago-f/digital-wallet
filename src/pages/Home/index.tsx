import React from 'react';
import { Theme } from 'components/Theme';

const Home = (props: PageProps<{}, {}>) => {
    console.log(props.history);
    return(
        <Theme>
            <h3>Titulo da página</h3>
        </Theme>
    );
};

export default Home;
