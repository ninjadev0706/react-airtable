import React from 'react';

export default function TopBar() {
    return(
        <div id="appControlsContainer" className="relative hide-print">
            <div className="flex baymax v2AppControlsBar css-lhaolj" style={{ transition: "width 300ms ease-in-out 0s", marginTop: "0px", height: "32px", backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
                <div className="flex flex-auto relative" style={{ clipPath: "inset(-3px 0px 0px)" }}>
                    <div className="absolute all-0 pl1-and-half">
                        <div className="flex flex-auto scrollbar-hidden overflow-auto pt-half mtn-half pl-half mln-half" data-tutorial-selector-id="appControlsTablesTabsContainer">
                            <nav aria-label="Tables" className="flex flex-none" id="appControlsTablesTabs" data-tutorial-selector-id="appControlsTablesTabs">
                                <div className="flex" style={{ height: "32px" }}>
                                    <div className="flex relative flex-none text-size-default tableTabContainer darkBase activeTab clipRightEdge" id="tableTab-tbllEg8gqk3VarzmV">
                                        <div className="rounded-top flex flex-auto relative tab focus-visible-within-opaque flex-none pointer strong white tableTab css-116fuw8" data-tableid="tbllEg8gqk3VarzmV" data-tutorial-selector-id="tableTab-table1">
                                            <div className="">
                                                <a className="height-full flex flex-auto truncate items-center max-width-2 no-user-select focus-visible pl1-and-half" href="/appTn693IU13vUjGO/tbllEg8gqk3VarzmV?blocks=hide" style={{ paddingRight: "32px", outlineOffset: "-5px", color: "inherit" }}>Table 1</a>
                                                <div className="absolute bottom-0 flex items-center no-user-select" style={{ right: "12px", top: "0px" }}>
                                                    <div tabIndex="0" className="pointer flex-none focus-visible focus-visible-opaque ml1 tableMenuCaret" role="button" aria-label="Table 1 table options" data-tutorial-selector-id="openTableMenuButton">
                                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                            <path fillRule="evenodd" d="M8.39907 4.89901C8.47765 4.81857 8.57142 4.75452 8.67494 4.71058C8.77846 4.66664 8.88966 4.64367 9.00212 4.64302C9.11457 4.64236 9.22604 4.66403 9.33006 4.70676C9.43408 4.7495 9.52859 4.81245 9.60811 4.89196C9.68763 4.97148 9.75058 5.06599 9.79331 5.17001C9.83604 5.27403 9.85771 5.3855 9.85705 5.49795C9.8564 5.61041 9.83343 5.72162 9.78949 5.82513C9.74555 5.92865 9.68151 6.02242 9.60107 6.10101L6.60107 9.10101C6.44166 9.26039 6.22548 9.34992 6.00007 9.34992C5.77465 9.34992 5.55847 9.26039 5.39907 9.10101L2.39907 6.10101C2.31863 6.02242 2.25458 5.92865 2.21064 5.82513C2.1667 5.72162 2.14374 5.61041 2.14308 5.49795C2.14243 5.3855 2.16409 5.27403 2.20682 5.17001C2.24956 5.06599 2.31251 4.97148 2.39203 4.89196C2.47154 4.81245 2.56605 4.7495 2.67007 4.70676C2.77409 4.66403 2.88556 4.64236 2.99802 4.64302C3.11047 4.64367 3.22168 4.66664 3.32519 4.71058C3.42871 4.75452 3.52248 4.81857 3.60107 4.89901L6.00007 7.29801L8.39907 4.89901Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="flex">
                                <div tabIndex="0" className="pointer flex flex-none justify-center items-center focus-visible-opaque focus-container px1-and-half top-bar-text-light top-bar-text-light-hover" role="button" aria-label="Search all tables" style={{ height: "32px" }}>
                                    <svg className="parent-focus-visible-current-color" width="16" height="16" viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" d="M8.39907 4.89901C8.47765 4.81857 8.57142 4.75452 8.67494 4.71058C8.77846 4.66664 8.88966 4.64367 9.00212 4.64302C9.11457 4.64236 9.22604 4.66403 9.33006 4.70676C9.43408 4.7495 9.52859 4.81245 9.60811 4.89196C9.68763 4.97148 9.75058 5.06599 9.79331 5.17001C9.83604 5.27403 9.85771 5.3855 9.85705 5.49795C9.8564 5.61041 9.83343 5.72162 9.78949 5.82513C9.74555 5.92865 9.68151 6.02242 9.60107 6.10101L6.60107 9.10101C6.44166 9.26039 6.22548 9.34992 6.00007 9.34992C5.77465 9.34992 5.55847 9.26039 5.39907 9.10101L2.39907 6.10101C2.31863 6.02242 2.25458 5.92865 2.21064 5.82513C2.1667 5.72162 2.14374 5.61041 2.14308 5.49795C2.14243 5.3855 2.16409 5.27403 2.20682 5.17001C2.24956 5.06599 2.31251 4.97148 2.39203 4.89196C2.47154 4.81245 2.56605 4.7495 2.67007 4.70676C2.77409 4.66403 2.88556 4.64236 2.99802 4.64302C3.11047 4.64367 3.22168 4.66664 3.32519 4.71058C3.42871 4.75452 3.52248 4.81857 3.60107 4.89901L6.00007 7.29801L8.39907 4.89901Z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-none flex relative css-11vhnav">
                                <div className="flex items-center">
                                    <div id="id_5efec425cd38319019deee709c799ade" tabIndex="0" className="pointer flex items-center flex-none focus-visible-opaque rounded px1-and-half top-bar-text-light top-bar-text-light-hover focus-visible-current-color" role="button" aria-expanded="false" aria-haspopup="true" aria-label="Add or import table" data-tutorial-selector-id="addTableButton" style={{ height: "32px" }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none my-half" style={{shapeRendering: "geometricprecision"}}>
                                            <path fillRule="evenodd" fill="currentColor" d="M9,7 L9,3.5 C9,3.224 8.776,3 8.5,3 L7.5,3 C7.224,3 7,3.224 7,3.5 L7,7 L3.5,7 C3.224,7 3,7.224 3,7.5 L3,8.5 C3,8.776 3.224,9 3.5,9 L7,9 L7,12.5 C7,12.776 7.224,13 7.5,13 L8.5,13 C8.776,13 9,12.776 9,12.5 L9,9 L12.5,9 C12.776,9 13,8.776 13,8.5 L13,7.5 C13,7.224 12.776,7 12.5,7 L9,7 Z"/>
                                        </svg>
                                        <p className="text-size-default line-height-3 font-family-default font-weight-default ml1">Add or import</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-none flex items-center no-user-select">
                    <div className="flex z2" id="secondPaneToggles" style={{ height: "32px" }}>
                        <div className="flex">
                            <div tabIndex="0" className="flex items-center pointer focus-visible-opaque blocksOnboardingTipTarget mx1-and-half top-bar-text-light top-bar-text-light-hover focus-visible-current-color" role="button" data-tutorial-selector-id="extensions" style={{ height: "32px" }}>
                                <div className="flex">
                                    <div className="">Extensions</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex css-11vhnav">
                            <div tabIndex="0" className="flex items-center pointer focus-visible-opaque mx1-and-half top-bar-text-light top-bar-text-light-hover focus-visible-current-color" role="button" data-tutorial-selector-id="manage fields" style={{ height: "32px" }}>
                                <div className="flex">
                                    <div className="">Manage fields</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex css-11vhnav">
                            <div tabIndex="0" className="flex items-center pointer focus-visible-opaque mx1-and-half top-bar-text-light top-bar-text-light-hover focus-visible-current-color" role="button" data-tutorial-selector-id="insights" style={{ height: "32px" }}>
                                <div className="flex">
                                    <div className="">Insights</div>
                                    <svg width="12" height="12" viewBox="0 0 12 12" className="text-yellow" style={{shapeRendering: "geometricprecision"}}>
                                        <path fillRule="evenodd" fill="currentColor" d="M4.194 7.86L1.85 7.066a.527.527 0 0 1 0-1l2.344-.793a.527.527 0 0 0 .33-.33l.794-2.345a.527.527 0 0 1 1 0l.793 2.345a.527.527 0 0 0 .33.33l2.345.794a.527.527 0 0 1 0 .999l-2.344.794a.527.527 0 0 0-.33.33l-.795 2.344a.527.527 0 0 1-.999 0L4.525 8.19a.527.527 0 0 0-.33-.33zm4.742-4.831L7.94 2.69a.252.252 0 0 1 0-.476l.996-.338a.252.252 0 0 0 .157-.157l.338-.996a.252.252 0 0 1 .476 0l.338.996a.252.252 0 0 0 .157.157l.996.338a.252.252 0 0 1 0 .476l-.996.338a.252.252 0 0 0-.157.157l-.338.996a.252.252 0 0 1-.476 0l-.338-.996a.252.252 0 0 0-.157-.157zm-7.532 7.39l-.523-.177a.231.231 0 0 1 0-.438l.523-.177a.264.264 0 0 0 .165-.165l.177-.523a.231.231 0 0 1 .438 0l.177.523a.264.264 0 0 0 .165.165l.523.177a.231.231 0 0 1 0 .438l-.523.177a.264.264 0 0 0-.165.165l-.177.523a.231.231 0 0 1-.438 0l-.177-.523a.264.264 0 0 0-.165-.165z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

