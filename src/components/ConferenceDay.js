import React from 'react';
import styled from 'styled-components';
import SessionCard from './SessionCard';

const ConferenceDay = ({sessions, conferenceDay}) => {
    return ( 
        <ConferenceDayContainer conferenceDay={conferenceDay}>
                <h2>{conferenceDay}</h2>
                <span className="date">
                    { conferenceDay === 'Day 1' ? '27 January 2022' :
                        conferenceDay === 'Day 2' ? '28 January 2022' : 
                        '29 January 2022'
                    }
                </span>
                <div className="hr" aria-hidden="true"></div>
                
                {
                    conferenceDay === 'Day 1' || conferenceDay === 'Day 2' || conferenceDay === 'Day 3' ? 
                    <ol className="program-items">
                        {
                        sessions.map(session => (
                            <SessionCard key={session.Record_Id} sessionDetails={session} />
                        ))
                        }
                  </ol> : null
                }
            </ConferenceDayContainer>
     );
}
 
export default ConferenceDay;

const ConferenceDayContainer = styled.div`
    overflow: hidden;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 
    0 .625rem .9375rem -0.1875rem rgba(0, 0, 0, 0.1),
    0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
    color: ${props => props.conferenceDay === 'Day 1' && 'Day 3' ? '#4DEBEB' : '#06EFEF'};
    background: ${props => props.conferenceDay === 'Day 1' && 'Day 3' ? 
        'linear-gradient(45deg, rgba(0,96,92,1) 0%, rgba(0,112,108,1) 75%);' : 
        'linear-gradient(45deg, rgba(3,119,119,1) 0%, rgba(4,133,133,1) 75%)'};
    h2, p, .date {
        margin-bottom: 16px;
        }
    .program-items {
        position: relative;
    }
    .date {
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
    }
    .hr {
        background-color: ${props => props.conferenceDay === 'Day 1' && 'Day 3' ? '#4DEBEB' : '#06EFEF'};
        height: 0.05rem;
        margin-top: 2rem;
    }
    @media screen and (max-width: 588px){
        padding: 2rem 1.5rem;
    }
`