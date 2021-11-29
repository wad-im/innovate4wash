import React from 'react';

const BlobImage = ({className}) => {
    return ( 
        <svg viewBox="0 0 428 497" xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' className={className}>
            <defs>
                <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                <path d="M342.951 85.1715C386.308 140.411 434.777 223.27 426.257 284.947C417.8 346.52 352.417 386.911 292.209 428.029C232.064 469.147 177.095 510.888 120.295 491.783C63.4315 472.574 4.73816 392.518 0.951497 308.102C-2.77206 223.789 48.4111 135.219 94.5453 78.9415C140.68 22.6638 181.765 -1.32168 221.525 0.547318C261.222 2.41632 299.53 29.9321 342.951 85.1715Z" fill="#049D9D"/>                </clipPath>
            </defs>
            <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="https://source.unsplash.com/random" clipPath="url(#user-space)"/>P
	    </svg>
     );
}
 
export default BlobImage;

