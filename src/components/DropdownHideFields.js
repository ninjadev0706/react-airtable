import * as React from "react";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  drop_menu: {
      "& .MuiPopover-paper": {
          overflow: "hidden"
      }}        
  }
);


const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 14,
  height: 8,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(6px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(6px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#20c933",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 5,
    height: 5,
    borderRadius: 3,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function DropdownHideFields(props) {
  const columns = props.columns;
  const open = Boolean(props.anchorEl);
  const id = open ? "hide-columns" : undefined;
  const [filterStr, SetFilterStr] = React.useState("");
  const classes = useStyles();

  const handleChange = (id) => {
    const _columns = columns.map((item) => {
      if (item.id === id) {
        return { ...item, show: !item.show };
      } else return item;
    });
    props.setColumns([..._columns]);
  };

  const handleHideAll = () => {
    const _columns = columns.map((item, index) => {
      return { ...item, show: index === 0?true:false };
    });
    props.setColumns([..._columns]);
  };

  const handleShowAll = () => {
    const _columns = columns.map((item) => {
      return { ...item, show: true };
    });
    props.setColumns([..._columns]);
  };

  const handleFilter = (event) => {
    SetFilterStr(event.target.value);
  };

  return props.buttonId === "hide-field-btn" ? (
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
        <div style={{ width: "min-content", minWidth: "105px", transform: "translate(0px, 0px)" }}>
        <div>
          <div>
            <div data-testid="viewConfigColumnVisOrder" class="xs-max-width-1 baymax nowrap max-width-3" style={{ transform: "translateY(4px)", width: "min-content" }}>
              <div class="white rounded">
                <div class="clearfix" style={{ minWidth: "20rem" }}>

              <div class="mt1 mx2 border-bottom-thick border-darken2 flex items-center find-hide-field">
              <input type="text" placeholder="Find a field" class="flex-auto small px0 py1" onChange={(ev)=>{handleFilter(ev)}} style={{ border: "0px" }} />
                <div tabindex="0" class="undefined flex items-center quiet link-unquiet pointer focus-visible text-darken4" role="button" aria-label="Learn more about hiding fields">
                  <svg width="12" height="12" viewBox="0 0 12 12" class="icon" style={{ shapeRendering: "geometricprecision" }}>
                    <path fill-rule="evenodd" fill="currentColor" d="M7.1091,7 L5.2531,7 C5.2531,6.801 5.3281,6.604 5.4831,6.456 C5.6041,6.342 5.7311,6.226 5.8611,6.108 C6.5761,5.461 7.2501,4.85 7.2501,4 C7.2501,3.652 7.0251,2.75 6.0001,2.75 C4.9791,2.75 4.7881,3.734 4.7551,4 L3.2601,4 C3.2601,3.979 3.2511,3.96 3.2521,3.938 C3.3301,3.008 4.0041,1.25 6.0001,1.25 C7.7211,1.25 8.7501,2.648 8.7501,4 C8.7501,5.373 7.8931,6.277 7.1091,7 M6.0001,10 C5.4481,10 5.0001,9.552 5.0001,9 C5.0001,8.448 5.4481,8 6.0001,8 C6.5521,8 7.0001,8.448 7.0001,9 C7.0001,9.552 6.5521,10 6.0001,10 M6.0001,0 C2.6861,0 0.0001,2.686 0.0001,6 C0.0001,9.314 2.6861,12 6.0001,12 C9.3141,12 12.0001,9.314 12.0001,6 C12.0001,2.686 9.3141,0 6.0001,0"/>
                  </svg>
                </div>
              </div>
            {props.columns.map((item, index) => {
            return index > 0 ? (item.label
              .toLowerCase()
              .includes(filterStr.toLowerCase()) ? (
              <ListItemButton key={item.id} className="hide-show-column">
                <ListItemIcon
                  onClick={(e) => {
                    handleChange(item.id);
                  }}
                >
                  <AntSwitch
                    checked={item.show}
                    inputProps={{ "aria-label": "ant design" }}
                  />
                </ListItemIcon>
                <ListItemText
                  className="hide-field-column"
                  onClick={(e) => {
                    handleChange(item.id);
                  }}
                  id={item.id}
                  primary={`${item.label}`}
                />
                <ListItemIcon className="reorder-column">
                  <DragIndicatorIcon />
                </ListItemIcon>
              </ListItemButton>
            ) : null):null;
          })}
          <ListItem spacing={1} className="hideshowall">
            <ListItemButton
              className="hideshowall-btn hide-all-btn"
              onClick={handleHideAll}
            >
              Hide all
            </ListItemButton>
            <ListItemButton className="hideshowall-btn" onClick={handleShowAll}>
              Show all
            </ListItemButton>
          </ListItem>
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
