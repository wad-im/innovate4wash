import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const SessionCard = ({sessionDetails}) => {

    const {Name, Start, End, Presentations, Type} = sessionDetails
    const [isOpen, setIsOpen] = useState(false)

    const expandInfo = () => {
        setIsOpen(!isOpen)
    }
    const presentations = Presentations !== null && Presentations.map(presentation => presentation.data)
    
    return ( 
        <SessionCardContainer>

            <p>{Start.substr(3)} - {End.substr(3)} </p>
            <div className='session-main'>

                <h3 className='session-title'>{Name}</h3>
                <span className="session-type">{Type}</span>
                {/* <p className='session-desc'>{description}</p> */}
                {
                    presentations && <button className="expand-session" onClick={expandInfo}>{isOpen ? 'Show less' : 'Show more'}</button>
                
                }
                <AnimatePresence>
                {   isOpen && presentations &&
                    presentations.map(pitch => (
                        <motion.div
                            key={pitch.Record_Id} 
                            className='pitch' 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <div className="pitch-main">
                                <h5>{pitch.Title ? pitch.Title : "To be announced"}</h5>
                                <p>{pitch.Description && pitch.Description}</p>
                            </div>
                            <div className='speakers'>
                            {   pitch.Speaker && 
                                pitch.Speaker.map(eachSpeaker => (
                                    <div key={eachSpeaker.data.Record_Id} className='speaker'>
                                        <p className='speaker-name'>by {eachSpeaker.data.Name && eachSpeaker.data.Name}</p>
                                        <p>{eachSpeaker.data.Organization && eachSpeaker.data.Organization}</p>
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
    .session-main {
        display: grid;
        grid-template-columns: 80% 20%;
        grid-column-gap: 2rem;
    }
    .session-desc {
        width: 60%;
    }
    .expand-session {
        justify-self: start;
        background: none;
        border: none;
        color: #4DEBEB;
        text-decoration: underline;
        cursor: pointer;
    }
    .session-type {
        display: inline-flex;
        vertical-align: top;
        -webkit-box-align: center;
        align-items: center;
        max-width: 100%;
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 1.2;
        outline: #4DEBEB solid 1px;
        outline-offset: 2px;
        height: fit-content;
        width: fit-content;
        border-radius: 0.375rem;
        padding: 0.5rem;
        background: none;
    }
    .pitch {
        grid-column: 1 / span 2;
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
      .session-type {
          grid-row: 1 / span 2;
          margin-bottom: 1rem;
      }
      .session-title {
          grid-column: span 2;
      }
      .hr {
          grid-column: 1 / span 1;
      }
    }
    @media screen and (max-width: 588px){
        .session-desc {
            width: 100%;
        }
        .session-main {
            grid-column-gap: 0;
            grid-template-columns: 100%;
        }
        .expand-session {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .pitch {
            grid-column: 1 / span 1;
            display: flex;
            flex-direction: column;
            .speaker {
                margin-bottom: 1rem;
            }
        }
        
    }
`