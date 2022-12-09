import * as React from "react";
import DropdownHideFields from "./DropdownHideFields";
import DropdownFilter from "./DropdownFilter";
import DropdownSort from "./DropdownSort";
import DropdownGroup from "./DropdownGroup";
import DropdownRowHeight from "./DropdownRowHeight";
import DropdownShareView from "./DropdownShareView";
import DropdownColor from "./DropdownColor";
import DropdownSearch from "./DropdownSearch";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import {HideFieldsIcon, FiltersIcon, GroupIcon, SortIcon, RowHeightIcon, SearchIcon, ShareViewIcon, ColorIcon} from './Icons';

export default function Toolbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [buttonId, setButtonId] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setButtonId(event.currentTarget.id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div id="viewBar" role="region" aria-label="View configuration" className="viewBarContainer baymax flex flex-none">
        <div className="viewSwitcherContainer flex-none flex items-center">
          <div className="height-full flex items-center pl1-and-half" data-testid="View sidebar toggle hover zone">
            <div id="viewSidebarToggleButton" tabIndex="0" className="relative rounded focus-visible flex items-center pointer border-thick text-dark mr1 white border-transparent darken1-hover" role="button" aria-expanded="false" aria-describedby="id_057e98a862467bb6d9b73f809385341b" data-tutorial-selector-id="viewSidebarToggleButton" style={{ height: "26px", padding: "0px 6px" }}>
              <span className="flex items-center flex-none">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M2,12 C2,11.4477153 2.45576096,11 3.00247329,11 L12.9975267,11 C13.5511774,11 14,11.4438648 14,12 C14,12.5522847 13.544239,13 12.9975267,13 L3.00247329,13 C2.44882258,13 2,12.5561352 2,12 Z M2,8 C2,7.44771525 2.45576096,7 3.00247329,7 L12.9975267,7 C13.5511774,7 14,7.44386482 14,8 C14,8.55228475 13.544239,9 12.9975267,9 L3.00247329,9 C2.44882258,9 2,8.55613518 2,8 Z M2,4 C2,3.44771525 2.45576096,3 3.00247329,3 L12.9975267,3 C13.5511774,3 14,3.44386482 14,4 C14,4.55228475 13.544239,5 12.9975267,5 L3.00247329,5 C2.44882258,5 2,4.55613518 2,4 Z"/>
                </svg>
              </span>
              <span className="flex-none strong ml-half">Views</span>
            </div>
            <div className="darken3 ml-half mr1-and-half" style={{ height: "16px", width: "1px" }}/>
            <div id="id_7ce6b1f1d5a167fef8639565fa2a87ee" tabIndex="0" className="flex items-center pointer darken1-hover rounded focus-visible px1" role="button" aria-label="Grid view" aria-expanded="false" aria-haspopup="true" data-tutorial-selector-id="viewTopBarMenu" style={{ height: "26px" }}>
              <div className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" className="coloredText flex-none" data-color="blue" style={{ shapeRendering: "geometricprecision" }}>
                  <title>grid</title>
                  <path fillRule="evenodd" fill="currentColor" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994zM2 7v1.002C2 8.557 2.452 9 3.01 9h1.98A.999.999 0 0 0 6 8.001V6.999C6 6.443 5.548 6 4.99 6H3.01A.999.999 0 0 0 2 6.999zm5 0v1.002C7 8.557 7.449 9 8.003 9h4.994A.994.994 0 0 0 14 8.001V6.999A.998.998 0 0 0 12.997 6H8.003A.994.994 0 0 0 7 6.999zM2 3c0 .556.452 1 1.01 1h1.98a1 1 0 1 0 0-2H3.01A1 1 0 0 0 2 3zm5 0c0 .556.449 1 1.003 1h4.994A.994.994 0 0 0 14 3c0-.556-.449-1-1.003-1H8.003A.994.994 0 0 0 7 3zm-5 8.999v1.002c0 .556.452.999 1.01.999h1.98A.999.999 0 0 0 6 13.001v-1.002C6 11.443 5.548 11 4.99 11H3.01a.999.999 0 0 0-1.01.999zm5 0v1.002c0 .556.449.999 1.003.999h4.994A.994.994 0 0 0 14 13.001v-1.002A.998.998 0 0 0 12.997 11H8.003A.994.994 0 0 0 7 11.999z"/>
                </svg>
                <h2 data-testid="viewName" className="strong truncate flex-auto text-size-default ml1" style={{ maxWidth: "200px" }}>Grid view</h2>
                <div className="flex align-middle mx1 quiet">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                    <title>team</title>
                    <path fillRule="evenodd" fill="currentColor" d="M13.323 12.687c.007-.061.01-.123.01-.187 0-1.582-.422-2.755-1.187-3.566.33-.168.722-.267 1.187-.267 2 0 2.667 1.833 2.667 3.083 0 .627-1.34.94-2.677.937zm-9.47-3.753c-.764.81-1.186 1.984-1.186 3.566 0 .064.003.126.009.187C1.339 12.69 0 12.377 0 11.75c0-1.25.667-3.083 2.667-3.083.465 0 .857.099 1.187.267zM8 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm5.333 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2.667 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 8c2.667 0 4.5 1 4.5 4.5 0 .945-1 2-4.5 2s-4.5-.945-4.5-2C3.5 9 5.333 8 8 8z"/>
                  </svg>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <title>More view options</title>
                  <path fillRule="evenodd" fill="rgba(0, 0, 0, 0.5)" d="M3.6011,4.00002 L8.4011,4.00002 C8.8951,4.00002 9.1771,4.56402 8.8811,4.96002 L6.4811,8.16002 C6.2411,8.48002 5.7611,8.48002 5.5211,8.16002 L3.1211,4.96002 C2.8241,4.56402 3.1071,4.00002 3.6011,4.00002"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="viewConfigContainer flex-auto flex items-center" data-tutorial-selector-id="viewConfigContainer">
          <div className="flex items-center flex-auto height-full overflow-hidden">
            <div className="flex items-center px1">
              <div className="flex items-center">
                <div className="flex flex-row mr1">
                  <div id="hide-field-btn" onClick={handleClick}>
                    <div aria-label="Hide fields" className="focus-visible mr1" role="button" aria-haspopup="true" aria-expanded="false" tabIndex="0">
                      <div data-color="cyan" className="pointer flex items-center rounded px1 py-half animate-background-color darken1-hover" data-isactive="false">
                        <HideFieldsIcon />
                        <div className="ml-half">Hide fields</div>
                      </div>
                    </div>
                  </div>
                  <div id="filter-btn" onClick={handleClick} tabIndex="0" className="collapsed focus-visible" role="button" data-tutorial-selector-id="filterButton" aria-label="Filter rows">
                    <div data-color="green" className="pointer flex items-center rounded px1 py-half animate-background-color darken1-hover" data-isactive="false">
                      <FiltersIcon />
                      <div className="ml-half max-width-1 truncate">
                        <span data-activefiltercount="0">Filter</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center" data-tutorial-selector-id="groupAndSortButtons">
                  <div id="group-btn" onClick={handleClick}>
                    <div aria-label="Group rows" className="collapsed focus-visible mr1" role="button" aria-haspopup="true" aria-expanded="false" tabIndex="0">
                      <div data-color="purple" className="pointer flex items-center rounded px1 py-half animate-background-color darken1-hover" data-isactive="false">
                        <GroupIcon />
                        <div className="ml-half">Group</div>
                      </div>
                    </div>
                  </div>
                  <div id="sort-btn" onClick={handleClick}>
                    <div aria-label="Sort rows" className="focus-visible collapsed mr1" role="button" aria-haspopup="true" aria-expanded="false" tabIndex="0">
                      <div data-color="orange" className="pointer flex items-center rounded px1 py-half animate-background-color darken1-hover" data-isactive="false">
                        <SortIcon />
                        <div className="ml-half">Sort</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="color-btn" onClick={handleClick} tabIndex="0" className="collapsed focus-visible mr1" role="button" aria-label="Row colors">
                  <div data-color="yellow" className="pointer flex items-center rounded px1 py-half animate-background-color darken1-hover" data-isactive="false">
                    <ColorIcon />
                    <div className="ml-half">Color</div>
                  </div>
                </div>
                <div id="height-btn" onClick={handleClick}>
                  <div className="focus-visible mr1" role="button" aria-haspopup="true" aria-expanded="false" tabIndex="0">
                    <div className="flex items-center px1 py-half rounded pointer animate-background-color darken1-hover pointer" style={{ minHeight: "24px" }}>
                      <RowHeightIcon />
                    </div>
                  </div>
                </div>
              </div>
              <span id="share-view-btn" onClick={handleClick} className="flex items-center">
                <div className="publishPopover mr1 relative">
                  <div aria-label="Share view" className="flex items-center px-half rounded pointer animate-background-color focus-visible darken1-hover pointer" role="button" aria-haspopup="true" aria-expanded="false" data-color="pink" tabIndex="0" style={{ minHeight: "24px" }}>
                    <div className="flex items-center p-half">
                      <ShareViewIcon />
                    </div>
                    <div className="py-half pr-half">Share view</div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div id="search-btn" onClick={handleClick} role="button" aria-label="toggle view search input" className="flex-none flex">
          <div className="flex items-center quiet link-unquiet pointer">
            <SearchIcon />
          </div>
        </div>
      </div>
      {/* <Stack spacing={2} direction="row" className="toolbar">
        <Button id="hide-field-btn" onClick={handleClick} startIcon={<HideFieldsIcon />} >
           Hide fields
        </Button>
        <Button id="filter-btn" onClick={handleClick} startIcon={<FiltersIcon />}>
          Filter
        </Button>
        <Button id="group-btn" onClick={handleClick} startIcon={<GroupIcon  />} >
          Group
        </Button>
        <Button id="sort-btn" onClick={handleClick} startIcon={<SortIcon  />}>
          Sort
        </Button>
        <Button id="color-btn" onClick={handleClick} startIcon={<FormatColorFillOutlinedIcon  />}>
          Color
        </Button>
        <Button id="height-btn" onClick={handleClick} startIcon={<RowHeightIcon  />}>
        </Button>
        <Button id="share-view-btn" onClick={handleClick} startIcon={<ShareViewIcon  />}>
          Share view
        </Button>
        <Button id="search-btn" onClick={handleClick} startIcon={<SearchIcon  />}>
        </Button>
      </Stack> */}
      <DropdownHideFields
        columns={props.columns}
        setColumns={props.setColumns}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="hidden-columns"
      />
      <DropdownFilter
        columns={props.columns}
        setColumns={props.setColumns}
        filters={props.filters}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="filter-columns"
      />
      <DropdownSort
        columns={props.columns}
        setColumns={props.setColumns}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="sort-columns"
      />
      <DropdownGroup
        columns={props.columns}
        setColumns={props.setColumns}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="group-columns"
      />
      <DropdownRowHeight
        columns={props.columns}
        setColumns={props.setColumns}
        setSize={props.setSize}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="row-height"
      />
      <DropdownShareView
        columns={props.columns}
        setColumns={props.setColumns}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="share-view"
      />
      <DropdownColor
        columns={props.columns}
        setColumns={props.setColumns}
        handleClose={handleClose}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="share-view"
      />
      <DropdownSearch
        columns={props.columns}
        setColumns={props.setColumns}
        handleClose={handleClose}
        setSearchStr={props.setSearchStr}
        searchStr={props.searchStr}
        searchCount={props.searchCount}
        findSearchStr={props.findSearchStr}
        anchorEl={anchorEl}
        buttonId={buttonId}
        aria-describedby="share-view"
      />

    </div>
  );
}
