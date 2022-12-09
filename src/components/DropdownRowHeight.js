import * as React from "react";
import Popover from "@mui/material/Popover";
import { makeStyles } from "@mui/styles";
import {rowHeight} from '../utils/constants';

const useStyles = makeStyles({
    drop_menu: {
        "& .MuiPopover-paper": {
            overflow: "hidden"
        }}        
    }
);


export default function DropdownHeight(props) {
  const open = Boolean(props.anchorEl);
  const classes = useStyles();
  const [size, setRowHeight] = React.useState("short");

  const handleChange = (ev, size) => {
    ev.preventDefault();
    ev.stopPropagation();
    props.setSize(rowHeight[size]);
    setRowHeight(size);
  }

  return props.buttonId === "height-btn" ? (
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
            <div style={{ width: "min-content", minWidth: "40px", transform: "translate(0px, 0px)" }}>
                <div>
                    <div>
                        <div className="xs-max-width-1 baymax nowrap max-width-3" style={{ transform: "translateY(4px)", width: "min-content" }}>
                            <div className="white rounded overflow-hidden">
                                <div className="px2 small quiet py-half">Select a row height</div>
                                <ul className="col-12 relative menu" role="menu" style={{ maxHeight: "200px" }}>
                                    <li tabindex="0" className={`flex items-center px2 py1 animate pointer darken1-hover ${size === "short"?"text-blue":null}`} aria-disabled="false" role="menuitem" onClick={(ev)=>{handleChange(ev, "short")}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none mr1" style={{ shapeRendering: "geometricprecision" }}>
                                            <path fill-rule="evenodd" fill="currentColor" d="M12.002 11.511v-7h-.626c-.3 0-.479-.37-.312-.645l1.422-1.645a.7.7 0 0 1 1.059 0l1.422 1.645c.166.276-.013.646-.312.646H14v7h.655c.3 0 .478.37.312.645l-1.417 1.677a.7.7 0 0 1-1.07 0l-1.416-1.677c-.167-.276.012-.646.312-.646h.626zM1.5 2h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zm0 5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1zm0 3h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1zm0 3h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1z"/>
                                        </svg>
                                        <div className="flex-auto">Short</div>
                                    </li>
                                    <li tabindex="0" className={`flex items-center px2 py1 animate pointer darken1-hover ${size === "medium"?"text-blue":null}`} onClick={(ev)=>{handleChange(ev, "medium")}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none mr1" style={{ shapeRendering: "geometricprecision" }}>
                                            <path fill-rule="evenodd" fill="currentColor" d="M12.002 11.511v-7h-.626c-.3 0-.479-.37-.312-.645l1.422-1.645a.7.7 0 0 1 1.059 0l1.422 1.645c.166.276-.013.646-.312.646H14v7h.655c.3 0 .478.37.312.645l-1.417 1.677a.7.7 0 0 1-1.07 0l-1.416-1.677c-.167-.276.012-.646.312-.646h.626zM1.5 2h8a.5.5 0 0 1 .5.5v5.02a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5zm0 8h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1zm0 3h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1z"/>
                                        </svg>
                                        <div className="flex-auto">Medium</div>
                                    </li>
                                    <li tabindex="0" className={`flex items-center px2 py1 animate pointer darken1-hover ${size === "tall"?"text-blue":null}`} onClick={(ev)=>{handleChange(ev, "tall")}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none mr1" style={{ shapeRendering: "geometricprecision" }}>
                                            <path fill-rule="evenodd" fill="currentColor" d="M12.002 11.511v-7h-.626c-.3 0-.479-.37-.312-.645l1.422-1.645a.7.7 0 0 1 1.059 0l1.422 1.645c.166.276-.013.646-.312.646H14v7h.655c.3 0 .478.37.312.645l-1.417 1.677a.7.7 0 0 1-1.07 0l-1.416-1.677c-.167-.276.012-.646.312-.646h.626zM1.5 2h8a.5.5 0 0 1 .5.5v7.979a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5zm0 11h8a.5.5 0 1 1 0 1h-8a.5.5 0 1 1 0-1z"/>
                                        </svg>
                                        <div className="flex-auto">Tall</div>
                                    </li>
                                    <li tabindex="0" className={`flex items-center px2 py1 animate pointer darken1-hover ${size === "extra"?"text-blue":null}`} onClick={(ev)=>{handleChange(ev, "extra")}}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" className="flex-none mr1" style={{ shapeRendering: "geometricprecision" }}>
                                            <path fill-rule="evenodd" fill="currentColor" d="M12.002 11.511v-7h-.626c-.3 0-.479-.37-.312-.645l1.422-1.645a.7.7 0 0 1 1.059 0l1.422 1.645c.166.276-.013.646-.312.646H14v7h.655c.3 0 .478.37.312.645l-1.417 1.677a.7.7 0 0 1-1.07 0l-1.416-1.677c-.167-.276.012-.646.312-.646h.626zM1.5 2h8a.5.5 0 0 1 .5.5v11.023a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V2.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                        <div className="flex-auto">Extra Tall</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Popover>
    </div>
  ) : null;
}
