import * as React from "react";
import Popover from "@mui/material/Popover";

export default function DropdownSearch(props) {
  const open = Boolean(props.anchorEl);
  const handleChange = (event) => {
    props.setSearchStr(event.target.value);
    props.findSearchStr(event.target.value);
  }

  return props.buttonId === "search-btn" ? (
    <div>
      <Popover
        className="popover"
        open={open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="hideOnGridViewDrag rounded-bottom border border-darken2 white baymax flex flex-column findInView" data-testid="find-bar" style={{ width: "300px", borderWidth: "0px 2px 2px" }}>
            <div className="flex">
                <input type="text" className="p1 flex-auto strong" placeholder="Find in view" style={{ borderColor: "transparent",  background: "transparent" }} onChange={(ev)=>{handleChange(ev)}}/>
                    {
                      props.searchStr !== ''?
                      <div class="small quieter noevents flex items-center flex-none pr1">
                        <div style={{ fontVariantNumeric: "tabular-nums" }}>1 of {props.searchCount}</div>
                      </div>:
                      <div className="small quieter noevents flex items-center flex-none pr1"/>
                    }
                    {props.searchCount ?
                      <div class="flex py1 flex-none">
                        <a href="#" class="flex flex-none items-center justify-center pointer link-quieter rounded-left darken2" data-testid="view-search-chevron-down" style={{ width: "20px" }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" class="icon" style={{ shapeRendering: "geometricprecision" }}>
                            <path fill-rule="evenodd" fill="currentColor" d="M11.293 6.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 9.586l3.293-3.293z"/>
                          </svg>
                        </a>
                        <a href="#" class="flex flex-none items-center justify-center pointer link-quieter rounded-right darken2" data-testid="view-search-chevron-up" style={{ width: "20px" }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" class="icon" style={{ shapeRendering: "geometricprecision" }}>
                            <path fill-rule="evenodd" fill="currentColor" d="M4.707 10.707a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L8 7.414l-3.293 3.293z"/>
                          </svg>
                        </a>
                      </div>:null
                    }
                    <a href="#" className="flex flex-none items-center quieter pointer link-unquiet px1">
                        <svg width="12" height="12" viewBox="0 0 12 12" className="icon" style={{shapeRendering: "geometricprecision"}}>
                            <path fill-rule="evenodd" fill="currentColor" d="M7.41421356,6 L9.88226406,3.5319495 C10.0816659,3.33254771 10.0828664,3.01179862 9.88577489,2.81470708 L9.18529292,2.11422511 C8.97977275,1.90870494 8.66708101,1.91870543 8.4680505,2.11773594 L6,4.58578644 L3.5319495,2.11773594 C3.33254771,1.91833414 3.01179862,1.91713357 2.81470708,2.11422511 L2.11422511,2.81470708 C1.90870494,3.02022725 1.91870543,3.33291899 2.11773594,3.5319495 L4.58578644,6 L2.11773594,8.4680505 C1.91833414,8.66745229 1.91713357,8.98820138 2.11422511,9.18529292 L2.81470708,9.88577489 C3.02022725,10.0912951 3.33291899,10.0812946 3.5319495,9.88226406 L6,7.41421356 L8.4680505,9.88226406 C8.66745229,10.0816659 8.98820138,10.0828664 9.18529292,9.88577489 L9.88577489,9.18529292 C10.0912951,8.97977275 10.0812946,8.66708101 9.88226406,8.4680505 L7.41421356,6 L7.41421356,6 Z"/>
                        </svg>
                    </a>
                </div>
                {props.searchCount?
                <div class="p1 small darken1">
                  <span class="quiet">Found <b>4</b> fields and <b>2</b> cells (within <b>2</b> records)</span>
                </div>:
                <div className="p1 small darken1">
                    <span className="quiet">Use advanced search options in the </span>
                    <a href="#" className="flex-inline items-baseline strong text-blue link">
                        <svg width="12" height="12" viewBox="0 0 12 12" className="self-center mr-half" style={{shapeRendering: "geometricprecision"}}>
                            <path fill-rule="evenodd" fill="currentColor" d="M1.5 9.99V8.01C1.5 7.442 1.952 7 2.51 7h1.98c.567 0 1.01.452 1.01 1.01v1.98c0 .567-.452 1.01-1.01 1.01H2.51c-.567 0-1.01-.452-1.01-1.01zM1.044 3.5c0-1.39 1.119-2.5 2.5-2.5 1.39 0 2.5 1.12 2.5 2.5 0 1.39-1.12 2.5-2.5 2.5-1.39 0-2.5-1.12-2.5-2.5zm5.473 1.154L8.23 1.846c.282-.462.748-.467 1.034 0l1.717 2.808c.283.462.066.846-.49.846H7.008c-.559 0-.778-.379-.492-.846zm.6 5.153l1.236-.99-1.236-.988a.811.811 0 1 1 1.014-1.267l2.027 1.623a.811.811 0 0 1 0 1.266l-2.027 1.622a.811.811 0 0 1-1.014-1.266z"/>
                        </svg>search extension
                    </a>
                    <span className="quiet">.</span>
                </div>
              }
            </div>

        </Popover>
    </div>
  ) : null;
}
