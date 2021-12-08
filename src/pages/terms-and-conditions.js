import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql} from 'gatsby'
import {documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components';

const TermsOfUse = () => {

    const termsOfUseContent = useStaticQuery(graphql`
    query {
        contentfulPage (pageName: {in: "Terms of use"}){
            pageName
            createdAt (formatString: "DD MMM YYYY")
            updatedAt (formatString: "DD MMM YYYY")
            content {raw}
        }
       }
    `)
    const {
        pageName,
        createdAt,
        updatedAt,
        content
    } = termsOfUseContent.contentfulPage

    return ( 
        <Layout pageTitle='Privacy Policy'>
            <TermsOfUseContainer>
                <h1>{pageName}</h1>
                <div className="time-stamps">
                    <p>created on {createdAt} and last updated on {updatedAt}.</p>
                </div>
                <div className="content-body">
                    {documentToReactComponents(JSON.parse(content.raw))}
                </div>
            </TermsOfUseContainer>
        </Layout>
     );
}
 
export default TermsOfUse;

const TermsOfUseContainer = styled.div`
    margin-bottom: 3.052rem;
    h1, .time-stamps {
        margin-bottom: 1.25rem;
    }
    h2 {
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
        margin-top: 1.5rem;
    }
    p {
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.9);
    }
    ul, ol {
        margin-left: 2rem;
        p {
            margin-bottom: 0.5rem;
        }
    }
    ol li::marker {
        font-size: 1.25rem;
        padding-right: 0.5rem;
    }
    a {
        color: #06EFEF;
    }

`