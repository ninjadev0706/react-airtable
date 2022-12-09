import React from 'react';

export default function Navbar() {
    return (
    <div id="appTopbar" className="baymax hover-container pageload-app coloredBackground coloredBorder" data-interaction-mode="pointer" data-color="green">
        <div className="flex items-center justify-between px2 flex-auto top-bar-text-light" style={{ height: "56px", paddingLeft: "20px" }}>
            <div className="flex flex-auto relative" style={{ minWidth: "400px" }}>
                <div className="flex items-center" style={{ minWidth: "0px" }}>
                    <a id="appTopBarHomeButton" aria-label="Go home" className="flex flex-none mr1-and-half rounded focus-visible-white" href="/" style={{ width: "24px", height: "24px" }}>
                        <div className="animate flex flex-auto items-center justify-center" style={{ transform: "scale(1)" }}>
                            <div style={{ position: "relative", top: "2px" }}>
                                <svg width="24" height="20.4" viewBox="0 0 200 170" style={{shapeRendering: "geometricprecision"}}>
                                    <g>
                                        <path fill="hsla(0, 0%, 100%, 0.95)" d="M90.0389,12.3675 L24.0799,39.6605 C20.4119,41.1785 20.4499,46.3885 24.1409,47.8515 L90.3759,74.1175 C96.1959,76.4255 102.6769,76.4255 108.4959,74.1175 L174.7319,47.8515 C178.4219,46.3885 178.4609,41.1785 174.7919,39.6605 L108.8339,12.3675 C102.8159,9.8775 96.0559,9.8775 90.0389,12.3675"/>
                                        <path fill="hsla(0, 0%, 100%, 0.95)" d="M105.3122,88.4608 L105.3122,154.0768 C105.3122,157.1978 108.4592,159.3348 111.3602,158.1848 L185.1662,129.5368 C186.8512,128.8688 187.9562,127.2408 187.9562,125.4288 L187.9562,59.8128 C187.9562,56.6918 184.8092,54.5548 181.9082,55.7048 L108.1022,84.3528 C106.4182,85.0208 105.3122,86.6488 105.3122,88.4608"/>
                                        <path fill="hsla(0, 0%, 100%, 0.95)" d="M88.0781,91.8464 L66.1741,102.4224 L63.9501,103.4974 L17.7121,125.6524 C14.7811,127.0664 11.0401,124.9304 11.0401,121.6744 L11.0401,60.0884 C11.0401,58.9104 11.6441,57.8934 12.4541,57.1274 C12.7921,56.7884 13.1751,56.5094 13.5731,56.2884 C14.6781,55.6254 16.2541,55.4484 17.5941,55.9784 L87.7101,83.7594 C91.2741,85.1734 91.5541,90.1674 88.0781,91.8464"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="animate absolute circle greenBase invisible">
                            <div className="circle flex items-center justify-center" style={{ width: "24px", height: "24px", backgroundColor: "white" }}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fillRule="evenodd" d="M5.64775 2.22725C5.86742 2.44692 5.86742 2.80308 5.64775 3.02275L3.233 5.4375H10.125C10.4357 5.4375 10.6875 5.68934 10.6875 6C10.6875 6.31066 10.4357 6.5625 10.125 6.5625H3.233L5.64775 8.97725C5.86742 9.19692 5.86742 9.55308 5.64775 9.77275C5.42808 9.99242 5.07192 9.99242 4.85225 9.77275L1.47725 6.39775C1.37176 6.29226 1.3125 6.14918 1.3125 6C1.3125 5.85082 1.37176 5.70774 1.47725 5.60225L4.85225 2.22725C5.07192 2.00758 5.42808 2.00758 5.64775 2.22725Z" fill="#11af22"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    <div className="flex items-center flex-auto" style={{ maxWidth: "480px" }}>
                        <div tabIndex="0" className="flex items-center huge pointer line-height-3 focus-visible-current-color rounded css-193g6a8 darkColoredBase" role="button" aria-label="Open base settings menu" data-tutorial-selector-id="openBaseMenuButton" style={{ minWidth: "0px", flex: "0 1 auto" }}>
                            <div className="truncate strong line-height-4 heading-size-default" style={{ minWidth: "0px", flex: "0 1 auto" }}>Grid View</div>
                            <svg className="flex-none ml1 baseMenuCaret" width="16" height="16" viewBox="0 0 12 12" fill="none">
                                <path fillRule="evenodd" d="M8.39907 4.89901C8.47765 4.81857 8.57142 4.75452 8.67494 4.71058C8.77846 4.66664 8.88966 4.64367 9.00212 4.64302C9.11457 4.64236 9.22604 4.66403 9.33006 4.70676C9.43408 4.7495 9.52859 4.81245 9.60811 4.89196C9.68763 4.97148 9.75058 5.06599 9.79331 5.17001C9.83604 5.27403 9.85771 5.3855 9.85705 5.49795C9.8564 5.61041 9.83343 5.72162 9.78949 5.82513C9.74555 5.92865 9.68151 6.02242 9.60107 6.10101L6.60107 9.10101C6.44166 9.26039 6.22548 9.34992 6.00007 9.34992C5.77465 9.34992 5.55847 9.26039 5.39907 9.10101L2.39907 6.10101C2.31863 6.02242 2.25458 5.92865 2.21064 5.82513C2.1667 5.72162 2.14374 5.61041 2.14308 5.49795C2.14243 5.3855 2.16409 5.27403 2.20682 5.17001C2.24956 5.06599 2.31251 4.97148 2.39203 4.89196C2.47154 4.81245 2.56605 4.7495 2.67007 4.70676C2.77409 4.66403 2.88556 4.64236 2.99802 4.64302C3.11047 4.64367 3.22168 4.66664 3.32519 4.71058C3.42871 4.75452 3.52248 4.81857 3.60107 4.89901L6.00007 7.29801L8.39907 4.89901Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="absolute" style={{ top: "32px", left: "0px" }}/>
                <div className="flex-auto"/>
            </div>
            <div className="z1 flex-none flex flex-row top-bar-text-light">
                <div className="flex-none flex items-center">
                    <div id="id_85b90f2079b3fb7d13a61496cfd67832" tabIndex="0" className="pointer flex items-center focus-visible-current-color justify-center pill px1-and-half css-13x6pkv top-bar-text-light top-bar-text-light-hover" role="button" aria-expanded="false" aria-haspopup="true" aria-label="Base history" data-tutorial-selector-id="historyMenuToggleButton" style={{ height: "28px", margin: "0px 2px" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{shapeRendering: "geometricprecision"}}>
                            <path fillRule="evenodd" fill="currentColor" d="M7.4 9.3a1.005 1.005 0 0 1-.4-.812V5.5a1 1 0 1 1 2 0v2.53l1.3 1.07a1 1 0 0 1-1.2 1.6L7.4 9.3zM1.244 6.167A6.973 6.973 0 0 1 4.5 1.937a7 7 0 1 1-.528 11.79 1 1 0 0 1 1.15-1.637 5 5 0 1 0-1.774-5.923H4.5c.412 0 .647.616.4.945l-2 2.813c-.2.267-.6.225-.8-.042l-2-2.75c-.247-.329-.012-.966.4-.966h.743z"/>
                        </svg>
                    </div>
                    <div tabIndex="0" className="focus-visible-white pointer flex items-center focus-visible-opaque justify-center flex-reverse pill px1-and-half css-13x6pkv top-bar-text-light-hover" role="button" aria-label="Help menu" data-testid="application-topBar-helpButton" style={{ height: "28px" }}>
                        <div className="helpButtonLabel ml-half">Help</div>
                        <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{shapeRendering: "geometricprecision"}}>
                            <path fillRule="evenodd" fill="currentColor" d="M8.7589721,9.5 C8.7589721,9.77614237 8.5432876,10 8.25962632,10 L7.49934584,10 C7.22356477,10 7.00000005,9.76806641 7.00000005,9.5 L7.00000005,9 C7.00000005,8.34869385 9.25010007,7.05957031 9.2501,6 C9.25009998,5.652 9.0251,4.75 8.0001,4.75 C6.9791,4.75 6.7881,5.734 6.7551,6 C6.7551,6 5.26889746,6.022 5.26989746,6 C5.26889746,5.06573486 6.0041,3.25 8.0001,3.25 C9.7211,3.25 10.7501,4.648 10.7501,6 C10.7501,7.373 8.7589721,8.60931396 8.7589721,9 L8.7589721,9.5 Z M8.0001,13 C7.4481,13 7.0001,12.552 7.0001,12 C7.0001,11.448 7.4481,11 8.0001,11 C8.5521,11 9.0001,11.448 9.0001,12 C9.0001,12.552 8.5521,13 8.0001,13 M1.0001,8 C1.0001,11.866 4.1341,15 8.0001,15 C11.8661,15 15.0001,11.866 15.0001,8 C15.0001,4.134 11.8661,1 8.0001,1 C4.1341,1 1.0001,4.134 1.0001,8 Z"/>
                        </svg>
                    </div>
                    <div id="id_1b19172eaffd8b567e83e1c3ea984059" tabIndex="0" className="relative flex items-center pill pointer css-v1tjld focus-visible-white justify-center px1-and-half css-13x6pkv top-bar-text-light-hover" role="button" aria-expanded="false" aria-haspopup="true" aria-label="0 unseen notifications">
                        <div className="flex items-center space-between">
                            <div className="relative flex items-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" className="" style={{shapeRendering: "geometricprecision"}}>
                                    <path fillRule="evenodd" fill="currentColor" d="M13,8 L13.2946243,8.29462433 C13.6835938,8.68359375 14,9.44724809 14,9.99895656 L14,11.0010434 C14,11.5573397 13.5511774,12 12.9975267,12 L3.00247329,12 C2.45576096,12 2,11.5527519 2,11.0010434 L2,9.99895656 C2,9.44266033 2.31580745,8.68419255 2.70537567,8.29462433 L3,8 L3,6.984 C3,4.559 4.728,2.555 7.02,2.099 C7.017,2.065 7,2.035 7,2 C7,1.45 7.45,1 8,1 C8.55,1 9,1.45 9,2 C9,2.035 8.983,2.065 8.98,2.099 C11.272,2.555 13,4.574 13,7 L13,8 Z M10,13 C10,14.104 9.105,15 8,15 C6.895,15 6,14.104 6,13 L10,13 Z"/>
                                </svg>
                            </div>
                            <span style={{ marginLeft: "4px" }}>Notifications</span>
                        </div>
                    </div>
                    <div>
                        <button className="erahsButton flex items-center pointer rounded line-height-4 ml1 mr2 focus-visible-white pill text-size-default shadow-elevation-low css-1azag67" data-tutorial-selector-id="applicationShareButton" style={{ border: "0px", height: "28px" }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" className="parentColoredText" style={{shapeRendering: "geometricprecision"}}>
                                <path fillRule="evenodd" fill="currentColor" d="M10.9829643,12.6437806 C12.5286237,12.8078951 14.5,12.5099682 14.5,11.75 C14.5,10.5 13.8333333,8.66666667 11.8333333,8.66666667 C11.1832271,8.66666667 10.6740002,8.86037582 10.2827561,9.1647938 C10.7576427,9.97237834 11,11.0340775 11,12.375 C11,12.4666129 10.9943133,12.5562282 10.9829643,12.6437806 Z M5.5,7 C4.11928813,7 3,5.88071187 3,4.5 C3,3.11928813 4.11928813,2 5.5,2 C6.88071187,2 8,3.11928813 8,4.5 C8,5.88071187 6.88071187,7 5.5,7 Z M11.8333333,8 C10.7287638,8 9.83333333,7.1045695 9.83333333,6 C9.83333333,4.8954305 10.7287638,4 11.8333333,4 C12.9379028,4 13.8333333,4.8954305 13.8333333,6 C13.8333333,7.1045695 12.9379028,8 11.8333333,8 Z M5.5,8 C8.16666667,8 10,9 10,12.5 C10,13.4454885 9,14.5 5.5,14.5 C2,14.5 1,13.5545115 1,12.5 C1,9 2.83333333,8 5.5,8 Z"/>
                            </svg>
                            <span className="topBarPrimaryCtaButtonLabel line-height-4 ml-half parentColoredText">Share</span>
                        </button>
                    </div>
                    <div id="id_113e2f08f3b874e17fbf27f808bdf24d" tabIndex="0" className="flex-none flex items-center pointer focus-visible-white circle" role="button" aria-label="Account" aria-expanded="false" aria-haspopup="true">
                        <div className="flex items-center">
                            <div className="userIconWrapper mediumLargeSize">
                                <div className="userIcon circle border border-white white shadow-elevation-low">
                                    <img className="block" src="https://static.airtable.com/images/userIcons/user_icon_7@2x.png" alt="Aleksei Nguen" width="28" height="28"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
