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

export default function DropdownShareView(props) {
  const open = Boolean(props.anchorEl);
  const classes = useStyles();

  return props.buttonId === "share-view-btn" ? (
    <div>
      <Popover
        className={classes.drop_menu}
        open={open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >

        <div style={{ minWidth: "97px", transform: "translate(0px, 0px)" }}>
            <div>
                <div>
                    <div className="xs-max-width-1 baymax nowrap max-width-3" style={{ transform: "translateY(4px)", width: "min-content" }}>
                        <div className="white rounded">
                            <div className="overflow-auto max-width-2 light-scrollbar rounded" style={{ maxHeight: "calc(100vh - 128px)" }}>
                                <div tabindex="0" className="px3 relative focus-visible py2 pointer darken1-hover darken1-focus animate" role="button">
                                    <label className="pointer link-quieter col-12">
                                        <div className="flex items-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" className="mr2 flex-none quiet" style={{ shapeRendering: "geometricprecision" }}>
                                                <path fill-rule="evenodd" fill="currentColor" d="M3,9 C3.55,9 4,9.45003 4,10 C4,10.55003 3.55,11.00003 3,11.00003 L2.00104344,11.00002 C0.90009892,11.000009 -3.94535344e-16,10.1077607 -3.94535344e-16,9.00712765 L-3.94535344e-16,4.49287235 C-3.94535344e-16,3.39358348 0.891856397,2.5 1.99201702,2.5 L9.00798298,2.5 C10.0998238,2.5 11,3.39596581 11,4.50119565 L11,8.00003 C11,8.55003 10.55,9 10,9 C9.45,9 9,8.55003 9,8.00003 L9,5.99898656 C9,5.44269033 8.55097324,5.00003 7.99707067,5.00003 L3.00292933,5.00003 C2.43788135,5.00003 2,5.45193985 2,6.0093989 L2,7.9906611 C2,8.55667682 2.44771525,9 3,9 Z M13,4.99993 L13.9989566,4.99993 C15.0999011,4.99993 16,5.89217669 16,6.99281876 L16,11.5071112 C16,12.6064092 15.1081436,13.5 14.007983,13.5 L6.99201702,13.5 C5.90017617,13.5 5,12.6040277 5,11.4987898 L5,7.99993 C5,7.44993 5.45,6.99993 6,6.99993 C6.55,6.99993 7,7.44993 7,7.99993 L7,10.0009734 C7,10.5572697 7.44902676,10.99993 8.00292933,10.99993 L12.9970707,10.99993 C13.5621186,10.99993 14,10.5480202 14,9.9905611 L14,8.0092989 C14,7.44328318 13.5535691,6.99993 13.0028687,6.99993 L13,6.99993 C12.45,6.99993 12,6.54993 12,5.99993 C12,5.44993 12.45,4.99993 13,4.99993 Z"/>
                                            </svg>
                                            <div className="flex-auto">
                                                <div className="strong big">Create a shareable grid view link</div>
                                                <div className="quiet pre-wrap">You can send the link to anyone or embed it on a website</div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div tabindex="0" className="px3 py2 darken1-hover darken1-focus animate pointer flex items-center focus-visible" role="button">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className="mr2 flex-none text-pink" style={{shapeRendering: "geometricprecision"}}>
                                        <path fill-rule="evenodd" fill="currentColor" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0 1 14.006 16H1.994A1.995 1.995 0 0 1 0 14.006V1.994zM2 2.5c0 .268.22.5.49.5h3.02c.275 0 .49-.224.49-.5a.5.5 0 0 0-.49-.5H2.49a.492.492 0 0 0-.49.5zm0 3C2 6.334 2.67 7 3.496 7h9.008C13.32 7 14 6.328 14 5.5c0-.834-.67-1.5-1.496-1.5H3.496C2.68 4 2 4.672 2 5.5zm0 7c0 .834.67 1.5 1.496 1.5h9.008C13.32 14 14 13.328 14 12.5c0-.834-.67-1.5-1.496-1.5H3.496C2.68 11 2 11.672 2 12.5zm0-3c0 .268.22.5.49.5h3.02c.275 0 .49-.224.49-.5a.5.5 0 0 0-.49-.5H2.49a.492.492 0 0 0-.49.5z"/>
                                    </svg>
                                    <div className="flex-auto">
                                        <div className="big strong">Create a form view</div>
                                        <div className="quiet">Forms can be sent or embedded on a website for anyone to fill out</div>
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
