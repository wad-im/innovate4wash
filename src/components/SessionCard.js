import React from 'react';
import styled from 'styled-components';

const SessionCard = ({sessionDetails}) => {

    const {title, description, pitchespresentations} = sessionDetails

    return ( 
        <SessionCardContainer>

            <p>09.00 - 09.25</p>
            <div className='session-main'>

                <h3 className='session-title'>{title}</h3>
                <p className='session-desc'>{description}</p>

                {
                    pitchespresentations.map(pitch => (
                        <div key={pitch.id} className='pitch'>
                            <div className="pitch-main">
                                <h5>{pitch.title}</h5>
                                <p>{pitch.description}</p>
                            </div>

                            {
                                pitch.speaker.map(eachSpeaker => (
                                    <div key={eachSpeaker.id} className='speaker'>
                                        <p className='speaker-name'>by {eachSpeaker.fullName}</p>
                                        <p>{eachSpeaker.organization}</p>
                                    </div>
                                ))
                            }

                        </div>
                    ))
                }

            </div>
            <div className="hr" aria-hidden="true"></div>
        </SessionCardContainer>
     );
}
 
export default SessionCard;

const SessionCardContainer = styled.article`
    padding: 1rem 0rem;
    display: grid;
    grid-template-columns: 20% 80%;
    .session-desc {
        width: 60%;
    }
    .pitch {
        display: grid;
        grid-template-columns: 60% 40%;
        grid-column-gap: 2rem;
    }
    .speaker p {
        margin-bottom: 0;
    }
    .speaker-name {
        font-weight: 700;
    }
    .hr {
        grid-column: 1 / span 2;
        background-color: #06EFEF;
        height: 0.05rem;
        margin-top: 2rem;
    }
`