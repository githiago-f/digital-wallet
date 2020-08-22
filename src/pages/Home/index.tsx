import React from 'react';
import { Template } from 'components/Template';

const Home = (props: PageProps<{}, {}>) => (
    <Template>
        <h3>Titulo da página</h3>
        {props.match.params}
    </Template>
);

export default Home;
