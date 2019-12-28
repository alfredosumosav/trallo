import React from 'react';
import { Link } from 'react-router-dom';

const SplashCollaborate = (props) => {
    return (
        <div className="splash-container collaborate-container">
            <div className="splash-row">
                <div className="splash-column sm-col">
                    <h3>Work with any team</h3>
                    <p>Whether it’s for work, a side project or even the next family vacation, Trallo helps your team stay organized.</p>
                    <p><Link className="btn btn-secondary" to="/signup">Start&nbsp;doing&nbsp;→</Link></p>
                </div>
                <div className="splash-column">
                    <div className="board-img">
                        <img src="https://trello-attachments.s3.amazonaws.com/5b9270821913198b25dc6c3f/5dc991d0b414ca552bc7aa95/5f8b2c5f8b21276bd6a816acf486faa1/board.png" alt="board"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SplashCollaborate;