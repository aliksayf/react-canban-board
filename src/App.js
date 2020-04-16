import React, { StrictMode } from 'react';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';


function App() {
    return (
        <StrictMode>
            <h1 className="text-center display-5">Kanban board</h1>
            <Board/>
        </StrictMode>
    );
}

export default App;
