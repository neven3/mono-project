import React from 'react';
import './styles.css'

export default function Home(props) {

    return(
        <div className="welcome">
            <h1>Hi, welcome to my test project!</h1>
            <button
                className="check-app"
                onClick={props.changeScreen}
            >
                Check the app
            </button>
        </div>
    );
};