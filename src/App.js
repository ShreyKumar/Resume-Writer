import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [profileUrl, setProfileUrl] = useState('')

    return (
        <div className="App">
            <div className="main">
                Paste your linkedin profile url below to begin:
                <input type="text" value={profileUrl} onChange={(e) => setProfileUrl(e.target.value)} />
            </div>
            
        </div>
    );
}

export default App;
