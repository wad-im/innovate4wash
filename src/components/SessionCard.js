import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const SessionCard = ({sessionDetails}) => {

    const {title, description, pitchespresentations} = sessionDetails
    const [isOpen, setIsOpen] = useState(false)

    const expandInfo = () => {
        setIsOpen(!isOpen)
    } 

    return ( 
        <SessionCardContainer>

            <p>09.00 - 09.25</p>
            <div className='session-main'>

                <h3 className='session-title'>{title}</h3>
                <p className='session-desc'>{description}</p>
                <button className="expand-session" onClick={expandInfo}>{isOpen ? 'Show less' : 'Show more'}</button>
                <AnimatePresence>
                {   isOpen && pitchespresentations &&
                    pitchespresentations.map(pitch => (
                        <motion.div
                            key={pitch.id} 
                            className='pitch' 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <div className="pitch-main">
                                <h5>{pitch.title && pitch.title }</h5>
                                <p>{pitch.description && pitch.description}</p>
                            </div>
                            <div className='speakers'>
                            {   pitch.speaker && 
                                pitch.speaker.map(eachSpeaker => (
                                    <div key={eachSpeaker.id} className='speaker'>
                                        <p className='speaker-name'>by {eachSpeaker.fullName && eachSpeaker.fullName}</p>
                                        <p>{eachSpeaker.organization && eachSpeaker.organization}</p>
                                    </div>
                                ))
                            }
                            </div>
                        </motion.div>
                    ))
                }
                </AnimatePresence>
            </div>
            <div className="hr" aria-hidden="true"></div>
        </SessionCardContainer>
     );
}
 
export default SessionCard;

const SessionCardContainer = styled.li`
    padding: 1rem 0rem;
    display: grid;
    grid-template-columns: 20% 80%;
    .session-desc {
        width: 60%;
    }
    .expand-session {
        background: none;
        border: none;
        color: #4DEBEB;
        text-decoration: underline;
        cursor: pointer;
    }
    .pitch {
        display: grid;
        grid-template-columns: 60% 40%;
        grid-column-gap: 2rem;
        margin: 1rem 0;
    }
    .speakers {
        grid-column: 2 / span 1;
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
    @media screen and (max-width: 994px){
      grid-template-columns: 100%;
      .hr {
          grid-column: 1 / span 1;
      }
    }
    @media screen and (max-width: 588px){
        .session-desc {
            width: 100%;
        }
        .pitch {
            grid-template-columns: 100%;
            .speaker {
                margin-bottom: 1rem;
                text-align: right;
                align-self: flex-end;
            }
        }
    }
`