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

export default function DropdownSort(props) {
  const columns = props.columns;
  const open = Boolean(props.anchorEl);
  const id = open ? "sort-columns" : undefined;
  const classes = useStyles();



  return props.buttonId === "sort-btn" ? (
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
          <div style={{ width: "min-content", minWidth: "67px", transform: "translate(0px, 0px)" }}>
            <div>
              <div>
                <div className="xs-max-width-1 baymax nowrap max-width-3" style={{ transform: "translateY(4px)", width: "min-content" }}>
                  <div className="white rounded">
                    <div data-testid="view-config-sort">
                      <div style={{ minWidth: "280px" }}>
                        <div className="p1-and-half">
                          <div className="flex justify-between mx1 items-center">
                            <div className="flex items-center">
                              <p className="text-size-default text-color-quiet line-height-4 font-family-default font-weight-strong">Sort by</p>
                              <div tabindex="0" className="ml-half flex items-center quiet link-unquiet pointer focus-visible text-darken4" role="button" aria-label="Learn more about sorting">
                                <svg width="12" height="12" viewBox="0 0 12 12" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                                  <path fill-rule="evenodd" fill="currentColor" d="M7.1091,7 L5.2531,7 C5.2531,6.801 5.3281,6.604 5.4831,6.456 C5.6041,6.342 5.7311,6.226 5.8611,6.108 C6.5761,5.461 7.2501,4.85 7.2501,4 C7.2501,3.652 7.0251,2.75 6.0001,2.75 C4.9791,2.75 4.7881,3.734 4.7551,4 L3.2601,4 C3.2601,3.979 3.2511,3.96 3.2521,3.938 C3.3301,3.008 4.0041,1.25 6.0001,1.25 C7.7211,1.25 8.7501,2.648 8.7501,4 C8.7501,5.373 7.8931,6.277 7.1091,7 M6.0001,10 C5.4481,10 5.0001,9.552 5.0001,9 C5.0001,8.448 5.4481,8 6.0001,8 C6.5521,8 7.0001,8.448 7.0001,9 C7.0001,9.552 6.5521,10 6.0001,10 M6.0001,0 C2.6861,0 0.0001,2.686 0.0001,6 C0.0001,9.314 2.6861,12 6.0001,12 C9.3141,12 12.0001,9.314 12.0001,6 C12.0001,2.686 9.3141,0 6.0001,0"/>
                                </svg>
                              </div>
                            </div>
                            <div>
                              <span tabindex="0" className="pointer quiet text-size-small link-unquiet-focusable" role="button" aria-label="Copy from a view">Copy from a view…</span>
                            </div>
                          </div>
                          <div className="hsection bg-light-gray-3 mx1 my1"/>
                          <div tabindex="-1" className="flex items-center px1 py-half" role="button">
                            <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                              <path fill-rule="evenodd" className="quietest" fill="currentColor" d="M6.1485,10.2969 C4.1335,10.2969 2.5005,8.6639 2.5005,6.6489 C2.5005,4.6339 4.1335,2.9999 6.1485,2.9999 C8.1635,2.9999 9.7965,4.6339 9.7965,6.6489 C9.7965,8.6639 8.1635,10.2969 6.1485,10.2969 M14.2075,12.6429 L11.0995,9.7069 C11.0555,9.6629 10.9995,9.6419 10.9505,9.6079 C11.4835,8.7459 11.7965,7.7339 11.7965,6.6489 C11.7965,3.5339 9.2635,0.9999 6.1485,0.9999 C3.0335,0.9999 0.5005,3.5339 0.5005,6.6489 C0.5005,9.7629 3.0335,12.2969 6.1485,12.2969 C7.1495,12.2969 8.0885,12.0329 8.9045,11.5739 C8.9455,11.6409 8.9765,11.7129 9.0355,11.7709 L12.1435,14.7069 C12.5335,15.0979 13.1665,15.0979 13.5575,14.7069 L14.2075,14.0569 C14.5975,13.6669 14.5975,13.0339 14.2075,12.6429"/>
                            </svg>
                            <input className="flex-auto no-outline border-none placeholder-solid-quieter pl1-and-half" type="text" placeholder="Find a field" value="" style={{ border: "none" }}/>
                          </div>


                          <div className="overflow-auto light-scrollbar flex flex-column justify-center" style={{minHeight: "100px", maxHeight: "calc(100vh - 380px)"}}>
                            <div className="flex-auto flex flex-column justify-start">

                              {columns.map((column) => { return(
                                <div tabindex="0" className="flex items-center darken1-hover px1 py-half text-blue-focus rounded pointer">
                                <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none mr1-and-half quiet" style={{ shapeRendering: "geometricprecision" }}>
                                  <path fill-rule="evenodd" fill="currentColor" d="M2.554 12.615L6.628 2.429C6.834 1.916 7.448 1.5 8 1.5c.556 0 1.166.416 1.372.93l4.074 10.185c.306.765-.116 1.385-.944 1.385h-.252a1.1 1.1 0 0 1-.987-.711l-.526-1.578c-.13-.39-.577-.711-.996-.711H6.259c-.43 0-.865.318-.996.711l-.526 1.578c-.13.39-.573.711-.987.711h-.252c-.828 0-1.25-.62-.944-1.385zM6.371 8.07c-.205.513.072.929.638.929h1.982c.557 0 .845-.41.637-.929L8.556 5.393c-.308-.77-.806-.77-1.114 0L6.372 8.07z"/>
                                </svg>
                                <span>{column.label}</span>
                              </div>)
                              })}

                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </Popover>
    </div>
  ) : null;
}
