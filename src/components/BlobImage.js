import React from 'react';

const BlobImage = () => {
    return ( 
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    <path fill="#8BEDE8" d="M49.5,-65.4C58.2,-51.8,55.1,-30.5,54.2,-12.9C53.4,4.7,54.7,18.5,49.1,28.6C43.6,38.6,31.1,44.8,17.6,50.9C4.1,57,-10.5,62.8,-22.5,59.5C-34.5,56.1,-44.1,43.5,-53.7,29.7C-63.3,15.8,-73,0.6,-73.4,-15.7C-73.8,-32,-65,-49.4,-51.2,-62.2C-37.4,-75,-18.7,-83.1,0.9,-84.1C20.4,-85.2,40.9,-79.1,49.5,-65.4Z" transform="translate(100 100)"/>
                </clipPath>
            </defs>
            <image width="100%" height="100%" preserveAspectRatio="xMinYMin " href="https://source.unsplash.com/random" clip-path="url(#user-space)"/>
	    </svg>
     );
}
 
export default BlobImage;