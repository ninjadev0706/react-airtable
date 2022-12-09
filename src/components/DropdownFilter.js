import * as React from "react";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  drop_menu: {
      "& .MuiPopover-paper": {
          overflow: "hidden"
      }}        
  }
);


export default function DropdownFilter(props) {
  const columns = props.columns;
  const open = Boolean(props.anchorEl);
  const id = open ? "filter-columns" : undefined;
  const classes = useStyles();

  return props.buttonId === "filter-btn" ? (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={classes.drop_menu}
      >
        <div role="presentation" tabindex="-1" className="baymax" style={{maxHeight: "366px", maxWidth: "1216.75px" }}>
          <div className="xs-max-width-1 baymax nowrap max-width-4" style={{ width: "min-content" }}>
            <div className="white rounded stroked1">
              <div className="darken1 small quiet px2 light-scrollbar overflow-auto pre-wrap break-word"/>
              <div className="flex px2 pt2">
                <div className="quieter">No filter conditions are applied to this view</div>
                <div tabindex="0" className="ml1 flex items-center quiet link-unquiet pointer focus-visible text-darken4" role="button" aria-label="Learn more about filtering your views">
                  <svg width="12" height="12" viewBox="0 0 12 12" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                    <path fill-rule="evenodd" fill="currentColor" d="M7.1091,7 L5.2531,7 C5.2531,6.801 5.3281,6.604 5.4831,6.456 C5.6041,6.342 5.7311,6.226 5.8611,6.108 C6.5761,5.461 7.2501,4.85 7.2501,4 C7.2501,3.652 7.0251,2.75 6.0001,2.75 C4.9791,2.75 4.7881,3.734 4.7551,4 L3.2601,4 C3.2601,3.979 3.2511,3.96 3.2521,3.938 C3.3301,3.008 4.0041,1.25 6.0001,1.25 C7.7211,1.25 8.7501,2.648 8.7501,4 C8.7501,5.373 7.8931,6.277 7.1091,7 M6.0001,10 C5.4481,10 5.0001,9.552 5.0001,9 C5.0001,8.448 5.4481,8 6.0001,8 C6.5521,8 7.0001,8.448 7.0001,9 C7.0001,9.552 6.5521,10 6.0001,10 M6.0001,0 C2.6861,0 0.0001,2.686 0.0001,6 C0.0001,9.314 2.6861,12 6.0001,12 C9.3141,12 12.0001,9.314 12.0001,6 C12.0001,2.686 9.3141,0 6.0001,0"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between px2 pb2 pt2">
                <div className="flex items-center mr2">
                  <div tabindex="0" className="flex items-center text-size-default text-color-quiet text-color-default-hover text-blue-focus strong pointer focusFirstInModal mr2" role="button" aria-label="Add condition">
                    <svg width="12" height="12" viewBox="0 0 16 16" className="flex-none mr-half" style={{ shapeRendering: "geometricprecision" }}>
                      <path fill-rule="evenodd" fill="currentColor" d="M9,7 L9,3.5 C9,3.224 8.776,3 8.5,3 L7.5,3 C7.224,3 7,3.224 7,3.5 L7,7 L3.5,7 C3.224,7 3,7.224 3,7.5 L3,8.5 C3,8.776 3.224,9 3.5,9 L7,9 L7,12.5 C7,12.776 7.224,13 7.5,13 L8.5,13 C8.776,13 9,12.776 9,12.5 L9,9 L12.5,9 C12.776,9 13,8.776 13,8.5 L13,7.5 C13,7.224 12.776,7 12.5,7 L9,7 Z"/>
                    </svg>Add condition</div>
                  <div className="flex items-center">
                    <div tabindex="0" className="flex items-center text-size-default text-color-quiet text-color-default-hover text-blue-focus strong pointer" role="button" aria-label="Add condition group">
                      <svg width="12" height="12" viewBox="0 0 16 16" className="flex-none mr-half" style={{ shapeRendering: "geometricprecision" }}>
                        <path fill-rule="evenodd" fill="currentColor" d="M9,7 L9,3.5 C9,3.224 8.776,3 8.5,3 L7.5,3 C7.224,3 7,3.224 7,3.5 L7,7 L3.5,7 C3.224,7 3,7.224 3,7.5 L3,8.5 C3,8.776 3.224,9 3.5,9 L7,9 L7,12.5 C7,12.776 7.224,13 7.5,13 L8.5,13 C8.776,13 9,12.776 9,12.5 L9,9 L12.5,9 C12.776,9 13,8.776 13,8.5 L13,7.5 C13,7.224 12.776,7 12.5,7 L9,7 Z"/>
                      </svg>Add condition group</div>
                    <span className="ml1 flex items-center quiet link-unquiet pointer focus-visible text-darken4">
                      <a href="https://support.airtable.com/hc/en-us/articles/4408692432791" className="flex items-center focus-visible" title="Learn more about advanced filtering" target="_blank" rel="noopener noreferrer">
                        <svg width="12" height="12" viewBox="0 0 12 12" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                          <path fill-rule="evenodd" fill="currentColor" d="M7.1091,7 L5.2531,7 C5.2531,6.801 5.3281,6.604 5.4831,6.456 C5.6041,6.342 5.7311,6.226 5.8611,6.108 C6.5761,5.461 7.2501,4.85 7.2501,4 C7.2501,3.652 7.0251,2.75 6.0001,2.75 C4.9791,2.75 4.7881,3.734 4.7551,4 L3.2601,4 C3.2601,3.979 3.2511,3.96 3.2521,3.938 C3.3301,3.008 4.0041,1.25 6.0001,1.25 C7.7211,1.25 8.7501,2.648 8.7501,4 C8.7501,5.373 7.8931,6.277 7.1091,7 M6.0001,10 C5.4481,10 5.0001,9.552 5.0001,9 C5.0001,8.448 5.4481,8 6.0001,8 C6.5521,8 7.0001,8.448 7.0001,9 C7.0001,9.552 6.5521,10 6.0001,10 M6.0001,0 C2.6861,0 0.0001,2.686 0.0001,6 C0.0001,9.314 2.6861,12 6.0001,12 C9.3141,12 12.0001,9.314 12.0001,6 C12.0001,2.686 9.3141,0 6.0001,0"/>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="ml4 pointer strong text-color-quiet text-color-default-hover text-blue-focus" tabindex="0" role="button">Copy from another view</div>
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  ) : null;
}
