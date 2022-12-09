import React from 'react';

export default function Sticker() {
    return (
        <div className="flex flex-auto focus-visible pl1" style={{ bottom: "30px", position: "absolute" }}>
            <div tabIndex="0" role="button" aria-label="Add record">
                <div className="relative flex items-center justify-center border border-darken2 white animate-background-color nowrap pr1-and-half pl2 py1 bg-light-gray-3-hover pointer" data-tutorial-selector-id="summaryBarAddRowButton" style={{ borderTopLeftRadius: "9999px", borderBottomLeftRadius: "9999px" }}>
                    <span className="items-center flex" style={{ height: "18px" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                            <path fillRule="evenodd" fill="currentColor" d="M9,7 L9,3.5 C9,3.224 8.776,3 8.5,3 L7.5,3 C7.224,3 7,3.224 7,3.5 L7,7 L3.5,7 C3.224,7 3,7.224 3,7.5 L3,8.5 C3,8.776 3.224,9 3.5,9 L7,9 L7,12.5 C7,12.776 7.224,13 7.5,13 L8.5,13 C8.776,13 9,12.776 9,12.5 L9,9 L12.5,9 C12.776,9 13,8.776 13,8.5 L13,7.5 C13,7.224 12.776,7 12.5,7 L9,7 Z"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <div tabIndex="0" role="button" aria-label="Add more">
                    <div className="relative flex items-center justify-center border-right border-top border-bottom border-darken2 white animate-background-color nowrap pl1-and-half pr2 py1 pointer bg-light-gray-3-hover" data-tutorial-selector-id="summaryBarAddRowButton" style={{ borderTopRightRadius: "9999px", borderBottomRightRadius: "9999px" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 8V11" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 9.5H15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.25 2.5V5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 3.75H6.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.5 11.5V13.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.5 12.5H11.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.6515 2.35241L2.35746 11.6464C2.1622 11.8417 2.1622 12.1583 2.35746 12.3536L3.65014 13.6462C3.8454 13.8415 4.16198 13.8415 4.35725 13.6462L13.6513 4.3522C13.8465 4.15694 13.8465 3.84035 13.6513 3.64509L12.3586 2.35241C12.1633 2.15715 11.8468 2.15715 11.6515 2.35241Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 5L11 7" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="pl1"> Add...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

