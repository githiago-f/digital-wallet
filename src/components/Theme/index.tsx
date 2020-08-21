import React from 'react';
import Header from 'components/Header';
import LateralMenu from 'components/LateralMenu';

export const Theme = (props: PropsBase<{}>) => {
    return (
        <>
            <LateralMenu/>
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    );
};
