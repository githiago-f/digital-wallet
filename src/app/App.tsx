import React from 'react';
import { Routes } from 'app/routes';
import BaseTheme from 'components/StyleBase';
import { Card } from 'components/Card';

function App() {
    return (
        <>
            <BaseTheme />
            <Routes />
            <Card title="titulo" subtitle="subtitle"></Card>
        </>
    );
}

export default App;
