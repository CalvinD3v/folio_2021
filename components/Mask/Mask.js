import React from 'react'

function Mask({ imageLink }) {
    return (
        <svg width="804px" height="577px" viewBox="0 0 804 577" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <polygon id="path-1" points="0 80 804 0 804 577 0 497"></polygon>
                <pattern id="pattern-2" patternUnits="objectBoundingBox" y="-25.9965338%" height="125.996534%" width="100%">
                    <use xlinkHref="#image-3" transform="scale(0.5,0.5)"></use>
                </pattern>
                <image id="image-3" width="100vw" height="1754" xlinkHref={imageLink}></image>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Desktop-HD-Copy-7" transform="translate(-459.000000, -165.000000)">
                    <g id="0f4fad4c6831740f210d1f84fa0acf2c3cb06d63" transform="translate(459.000000, 165.000000)">
                        <mask id="mask-4" fill="white">
                            <use xlinkHref="#path-1"></use>
                        </mask>
                        <use id="Mask" fill="url(#pattern-2)" xlinkHref="#path-1"></use>
                    </g>
                </g >
            </g >
        </svg >
    )
}
export default Mask;