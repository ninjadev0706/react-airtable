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

export default function DropdownColor(props) {
  const columns = props.columns;
  const open = Boolean(props.anchorEl);
  const classes = useStyles();


  return props.buttonId === "color-btn" ? (
    <div>
      <Popover
        open={open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={classes.drop_menu}
      >

        <div role="presentation" tabindex="-1" className="baymax" data-element-owned-by="viw5TtrZt9Urr03Gk-colorConfigButton" style={{ maxHeight: "366px", maxWidth: "1222.53px" }}>
            <div className="xs-max-width-1 baymax nowrap max-width-3" style={{ width: "min-content" }}>
                <div className="white rounded stroked1">
                    <div className="rounded-big white max-width-1">
                        <div tabindex="0" className="p2 flex darken1-focus darken1-hover pointer" role="button">
                            <div className="flex-auto">
                                <div className="strong mb-half big flex items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none" style={{ shapeRendering: "geometricprecision" }}>
                                        <path fill-rule="evenodd" fill="currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM5.032 6.835l2.437 3.83c.29.457.77.461 1.063 0l2.436-3.83c.291-.457.083-.835-.47-.835H5.502c-.565 0-.765.374-.471.835z"/>
                                    </svg>
                                    <div className="ml-half">Select field</div>
                                </div>
                                <div className="quiet">Color records the same as a single select field</div>
                            </div>
                        </div>
                        <div tabindex="0" className="p2 flex darken1-focus darken1-hover pointer" role="button">
                            <div className="flex-auto">
                                <div className="strong mb-half big flex items-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none" style={{ shapeRendering: "geometricprecision" }}>
                                        <path fill-rule="evenodd" fill="currentColor" d="M10,2 L14.0001925,2 C14.5562834,2 15,2.44771525 15,3 C15,3.55613518 14.5523709,4 14.0001925,4 L10,4 L10,2 Z M10,9 L1.99754464,9 C1.44631139,9 0.999999995,8.55228475 0.999999995,8 C0.999999995,7.44386482 1.44661595,7 1.99754464,7 L10,7 L10,9 Z M1.99895656,2 L4,2 L4,4 L1.99895657,4 C1.44266034,4 1.00000001,3.55228475 1.00000001,3 C1,2.44386482 1.44724809,2 1.99895656,2 Z M7,1 C8.105,1 9,1.895 9,3 C9,4.105 8.105,5 7,5 C5.895,5 5,4.105 5,3 C5,1.895 5.895,1 7,1 Z M13,6 C14.105,6 15,6.895 15,8 C15,9.105 14.105,10 13,10 C11.895,10 11,9.105 11,8 C11,6.895 11.895,6 13,6 Z M3,11 C4.105,11 5,11.895 5,13 C5,14.105 4.105,15 3,15 C1.895,15 1,14.105 1,13 C1,11.895 1.895,11 3,11 Z M6,14 L6,12 L14.0024554,12 C14.553384,12 15,12.4438648 15,13 C15,13.5522847 14.5536886,14 14.0024554,14 L6,14 Z"/>
                                    </svg>
                                    <div className="ml-half">Conditions</div>
                                </div>
                                <div className="quiet">Color records based on conditions</div>
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
