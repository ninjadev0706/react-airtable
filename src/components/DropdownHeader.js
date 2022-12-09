import * as React from 'react';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputFieldIcon from './fields/InputFieldIcon';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: 4,
    minWidth: 180,
    backgroundColor: '#333333',
    color: 'white',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0px',
    },
    '& .MuiMenuItem-root': {
        fontSize: '13px',
        '& .MuiSvgIcon-root': {
        color: 'white',
        width: '18px',
        marginRight: theme.spacing(1.5),
      },
      '&:hover' : {
        backgroundColor: '#444',
      },
      '&:active': {
        backgroundColor: '#444',
      },
    },
  },
}));

export default function DropdownHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div>
    //   <span
    //     id="demo-customized-button"
    //     aria-controls={open ? 'demo-customized-menu' : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? 'true' : undefined}
    //     variant="contained"
    //     disableelevation="true"
    //   >
    //     {props.name}
    //   </span>
    //   <ArrowDropDownIcon 
    //     onClick={handleClick}
    //     style={{float: 'right'}}
    //   />
    //   <StyledMenu
    //     id="demo-customized-menu"
    //     MenuListProps={{
    //       'aria-labelledby': 'demo-customized-button',
    //     }}
    //     anchorEl={anchorEl}
    //     open={open}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <CategoryIcon />
    //       Customize field type
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <EditIcon />
    //       Rename field
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <InfoIcon />
    //       Edit field description
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <LockIcon />
    //       Edit field permissions
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <ContentCopyIcon />
    //       Duplicate field
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <WestIcon />
    //       Insert left
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <EastIcon />
    //       Insert right
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <KeyboardDoubleArrowDownIcon />
    //       Sort 1-9
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <KeyboardDoubleArrowUpIcon />
    //       Sort 9-1
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <FilterListIcon />
    //       Filter by this field
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <TableViewIcon />
    //       Group by this field
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <VisibilityOffIcon />
    //       Hide field
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <TuneIcon />
    //       Show dependencies
    //     </MenuItem>
    //     <MenuItem onClick={handleClose} disableRipple>
    //       <DeleteIcon />
    //       Delete field
    //     </MenuItem>
    //   </StyledMenu>
    // </div>

    <div>
      <span
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableelevation="true"
      >
        <InputFieldIcon fieldType={props.fieldType} />
        {props.name}
      </span>
      <ArrowDropDownIcon 
        onClick={handleClick}
        style={{float: 'right'}}
      />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

      <div style={{ minWidth: "122px", transform: "translate(0px, 0px)" }}>
        <div>
          <div className="dropdown-header">
            <ul className="rounded dark text-white overflow-auto light-scrollbar menu" role="menu" style={{ minWidth: "180px", maxWidth: "400px", maxHeight: "100vh" }}>
              <li data-tutorial-selector-id="columnMenuItem-changeType" tabindex="0" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M7.9258,11.6118 C7.9258,13.5238 6.3758,15.0748 4.4628,15.0748 C2.5508,15.0748 0.9998,13.5238 0.9998,11.6118 C0.9998,9.6998 2.5508,8.1488 4.4628,8.1488 C6.3758,8.1488 7.9258,9.6998 7.9258,11.6118 Z M9,13.5836948 L9,8.56570518 C9,8.30258048 9.21983051,8.0747 9.49100518,8.0747 L14.5089948,8.0747 C14.7721195,8.0747 15,8.29453051 15,8.56570518 L15,13.5836948 C15,13.8468195 14.7801695,14.0747 14.5089948,14.0747 L9.49100518,14.0747 C9.22788048,14.0747 9,13.8548695 9,13.5836948 Z M4.57122958,7.0747 C4.29264082,7.0747 4.18348417,6.87257388 4.31901479,6.63780098 L7.32158521,1.43659902 C7.46087959,1.19530635 7.69048417,1.20182612 7.82601479,1.43659902 L10.8285852,6.63780098 C10.9678796,6.87909365 10.8474317,7.0747 10.5763704,7.0747 L4.57122958,7.0747 Z"/>
                </svg>
                <div className="ml1">Customize field type</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-rename" tabindex="0" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M2.35675466,10.6432453 L8.64324534,4.35675466 C8.84064305,4.15935695 9.1593509,4.15929778 9.3559202,4.35580156 L11.6440798,6.64319844 C11.838707,6.83776073 11.8402755,7.15874732 11.6432453,7.35580563 L5.35675466,13.6431944 C5.15935695,13.8406203 4.7782068,14 4.50461102,14 L2.49538898,14 C2.2157526,14 2,13.7782068 2,13.504611 L2,11.495389 C2,11.2157526 2.1597245,10.8402755 2.35675466,10.6432453 Z M12.7109951,1.71135812 L14.2896049,3.28944188 C14.6796404,3.67934745 14.6824243,4.31845743 14.2896881,4.71080116 L13.3483476,5.65120077 C13.1568151,5.84254182 12.8404491,5.84010222 12.6438798,5.64359844 L10.3557202,3.35620156 C10.161093,3.16163927 10.1557721,2.84442791 10.3481734,2.65202659 L11.2890435,1.71115654 C11.6873,1.3129 12.3182129,1.31870679 12.7109951,1.71135812 Z"/>
                </svg>
                <div className="ml1">Rename field</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-editDescription" tabindex="0" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M8,5.6667 C7.356,5.6667 6.833,5.1447 6.833,4.4997 C6.833,3.8557 7.356,3.3337 8,3.3337 C8.644,3.3337 9.167,3.8557 9.167,4.4997 C9.167,5.1447 8.644,5.6667 8,5.6667 L8,5.6667 Z M9,11.9997 C9,12.5527 8.552,12.9997 8,12.9997 C7.448,12.9997 7,12.5527 7,11.9997 L7,7.9997 C7,7.4477 7.448,6.9997 8,6.9997 C8.552,6.9997 9,7.4477 9,7.9997 L9,11.9997 Z M8,0.9997 C4.134,0.9997 1,4.1337 1,7.9997 C1,11.8657 4.134,14.9997 8,14.9997 C11.866,14.9997 15,11.8657 15,7.9997 C15,4.1337 11.866,0.9997 8,0.9997 L8,0.9997 Z"/>
                </svg>
                <div className="ml1">Edit field description</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-editPermissions" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M12.636 7.91V6.726C12.636 4.364 10.52 2 7.91 2 5.3 2 3.182 4.334 3.182 6.727V7.91C2.529 7.91 2 8.442 2 9.08v4.75c0 .646.539 1.17 1.176 1.17h9.466a1.18 1.18 0 0 0 1.176-1.17V9.08a1.18 1.18 0 0 0-1.182-1.17zm-7.09 0h4.727V6.726s0-2.363-2.364-2.363-2.364 2.363-2.364 2.363V7.91z"/>
                </svg>
                <div className="ml1">Edit field permissions</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-duplicate" tabindex="0" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M5,3.9973917 C5,2.89426272 5.89585781,2 6.9973917,2 L12.0026083,2 C13.1057373,2 14,2.89585781 14,3.9973917 L14,9.0026083 C14,10.1057373 13.1041422,11 12.0026083,11 L6.9973917,11 C5.89426273,11 5,10.1041422 5,9.0026083 L5,3.9973917 Z M2,12.0026083 L2,5.99754465 C2,5.4463114 2.44771525,5 3,5 C3.55613518,5 4,5.44902676 4,6.00292933 L4,10.4983244 C4,11.3288106 4.67232308,12 5.50167562,12 L9.99707067,12 C10.5621186,12 11,12.4477153 11,13 C11,13.5561352 10.553384,14 10.0024554,14 L3.9973917,14 C2.89585781,14 2,13.1057373 2,12.0026083 Z"/>
                </svg>
                <div className="ml1">Duplicate field</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-insertLeft" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M2.307 7.412c-.446.325-.44.858-.003 1.18l3.87 2.848c.456.31.826.116.826-.44v-1h4.994A1.998 1.998 0 0 0 14 8c0-1.105-.887-2-2.006-2H7V5c0-.552-.36-.74-.803-.42l-3.89 2.832z"/>
                </svg>
                <div className="ml1">Insert left</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-insertRight" tabindex="0" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M9.826 4.57C9.37 4.262 9 4.455 9 5.01v1H4.006A1.998 1.998 0 0 0 2 8.01c0 1.105.887 2 2.006 2H9v1c0 .553.36.741.803.421l3.89-2.837c.446-.325.44-.858.003-1.18l-3.87-2.843z"/>
                </svg>
                <div className="ml1">Insert right</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-sortAscending" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M14 4h1a.5.5 0 0 1 .416.777l-1.341 1.906c-.317.45-.832.451-1.15 0l-1.341-1.906A.5.5 0 0 1 12 4h1V.5c0-.275.225-.5.5-.5s.5.225.5.5V4zM1 2a1 1 0 0 1 1.01-1h1.98a1 1 0 1 1 0 2H2.01C1.451 3 1 2.556 1 2zm0 3a1 1 0 0 1 .99-1h4.02c.546 0 .99.444.99 1a1 1 0 0 1-.99 1H1.99A.993.993 0 0 1 1 5zm0 3c0-.552.453-1 .997-1h6.006C8.553 7 9 7.444 9 8c0 .552-.453 1-.997 1H1.997A.996.996 0 0 1 1 8zm0 3c0-.552.445-1 .996-1h9.008c.55 0 .996.444.996 1 0 .552-.445 1-.996 1H1.996A.995.995 0 0 1 1 11zm0 3c0-.552.45-1 1.007-1h11.986c.556 0 1.007.444 1.007 1 0 .552-.45 1-1.007 1H2.007A1.001 1.001 0 0 1 1 14z"/>
                </svg>
                <div className="ml1">
                  <span>Sort <span className="sortOrderLabel">A → Z</span>
                  </span>
                </div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-sortDescending" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M1.94 1h12.12c.506 0 .94.424.94.948a.942.942 0 0 1-.94.948H1.94A.953.953 0 0 1 1 1.948C1 1.421 1.421 1 1.94 1zm.017 3h9.086c.54 0 .957.424.957.948a.95.95 0 0 1-.957.948H1.957A.946.946 0 0 1 1 4.948.95.95 0 0 1 1.957 4zm-.008 3.104h6.102c.519 0 .949.424.949.948A.946.946 0 0 1 8.05 9h-6.1A.952.952 0 0 1 1 8.052c0-.528.425-.948.95-.948zM1.951 10h4.098a.947.947 0 1 1 0 1.896H1.951a.947.947 0 1 1 0-1.896zm-.003 3.104h2.104a.95.95 0 0 1 .948.948.946.946 0 0 1-.948.948H1.948A.95.95 0 0 1 1 14.052c0-.527.424-.948.948-.948zM14 12h1a.5.5 0 0 1 .416.777l-1.341 1.906c-.317.45-.832.451-1.15 0l-1.341-1.906A.5.5 0 0 1 12 12h1V8.5c0-.275.225-.5.5-.5s.5.225.5.5V12z"/>
                </svg>
                <div className="ml1">
                  <span>Sort <span className="sortOrderLabel">Z → A</span>
                  </span>
                </div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-addFilter" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M5.5 13c0-.552.444-1 1-1h3c.552 0 1 .444 1 1 0 .552-.444 1-1 1h-3c-.552 0-1-.444-1-1zm-2-4c0-.552.446-1 .998-1h7.004c.551 0 .998.444.998 1 0 .552-.446 1-.998 1H4.498A.996.996 0 0 1 3.5 9zM1 4.5C1 3.672 1.675 3 2.498 3h11.004C14.329 3 15 3.666 15 4.5c0 .828-.675 1.5-1.498 1.5H2.498A1.495 1.495 0 0 1 1 4.5z"/>
                </svg>
                <div className="ml1">Filter by this field</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-groupBy" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M1 3.006C1 1.898 1.897 1 3.006 1h9.988C14.102 1 15 1.897 15 3.006v9.988A2.005 2.005 0 0 1 12.994 15H3.006A2.005 2.005 0 0 1 1 12.994V3.006zm2 .99v8.009c0 .54.446.995.995.995h8.01c.54 0 .995-.446.995-.995v-8.01c0-.54-.446-.995-.995-.995h-8.01C3.455 3 3 3.446 3 3.995zM7 6c0-.552.444-1 1-1h3c.552 0 1 .444 1 1 0 .552-.444 1-1 1H8c-.552 0-1-.444-1-1zm0 4c0-.552.444-1 1-1h3c.552 0 1 .444 1 1 0 .552-.444 1-1 1H8c-.552 0-1-.444-1-1zM4 6c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1zm0 4c0-.552.444-1 1-1 .552 0 1 .444 1 1 0 .552-.444 1-1 1-.552 0-1-.444-1-1z"/>
                </svg>
                <div className="ml1">Group by this field</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-hide" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M8.445 3.512L7.172 5.55c-1.227.149-2.34.627-3.339 1.347A8.182 8.182 0 0 0 2.59 8.001c.178.267.495.645.961 1.037.309.259.646.489 1.014.685l-.823 1.318a2 2 0 0 0-.194.403C1.447 10.3.653 8.639.653 8.639.358 8.175.4 7.462.777 7.05c0 0 2.623-3.55 7.222-3.55.151 0 .3.004.446.012zm3.94 1.212c1.852 1.09 2.86 2.513 2.86 2.513.353.421.404 1.147.09 1.588 0 0-1.834 3.675-7.334 3.675-.153 0-.303-.003-.45-.009l1.265-2.024c1.541-.128 2.737-.622 3.663-1.365.453-.363.76-.71.933-.955.06-.085.105-.158.133-.215a2 2 0 0 1 .16-.267c-.209.294-.211.553-.042.794l-.05-.067a3.582 3.582 0 0 0-.2-.245 8.452 8.452 0 0 0-2.073-1.719l.918-1.47c.048-.076.09-.155.126-.234zm-6.358 7.925a.75.75 0 0 1-1.278-.785l5.256-8.559a.75.75 0 1 1 1.278.785l-5.256 8.56z"/>
                </svg>
                <div className="ml1">Hide field</div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-showDependencies" tabindex="0" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M10,2 L14.0001925,2 C14.5562834,2 15,2.44771525 15,3 C15,3.55613518 14.5523709,4 14.0001925,4 L10,4 L10,2 Z M10,9 L1.99754464,9 C1.44631139,9 0.999999995,8.55228475 0.999999995,8 C0.999999995,7.44386482 1.44661595,7 1.99754464,7 L10,7 L10,9 Z M1.99895656,2 L4,2 L4,4 L1.99895657,4 C1.44266034,4 1.00000001,3.55228475 1.00000001,3 C1,2.44386482 1.44724809,2 1.99895656,2 Z M7,1 C8.105,1 9,1.895 9,3 C9,4.105 8.105,5 7,5 C5.895,5 5,4.105 5,3 C5,1.895 5.895,1 7,1 Z M13,6 C14.105,6 15,6.895 15,8 C15,9.105 14.105,10 13,10 C11.895,10 11,9.105 11,8 C11,6.895 11.895,6 13,6 Z M3,11 C4.105,11 5,11.895 5,13 C5,14.105 4.105,15 3,15 C1.895,15 1,14.105 1,13 C1,11.895 1.895,11 3,11 Z M6,14 L6,12 L14.0024554,12 C14.553384,12 15,12.4438648 15,13 C15,13.5522847 14.5536886,14 14.0024554,14 L6,14 Z"/>
                </svg>
                <div className="ml1">Show dependencies<svg width="12" height="12" viewBox="0 0 12 12" className="ml1 text-yellow" style={{ shapeRendering: "geometricprecision" }}>
                    <path fillRule="evenodd" fill="currentColor" d="M4.194 7.86L1.85 7.066a.527.527 0 0 1 0-1l2.344-.793a.527.527 0 0 0 .33-.33l.794-2.345a.527.527 0 0 1 1 0l.793 2.345a.527.527 0 0 0 .33.33l2.345.794a.527.527 0 0 1 0 .999l-2.344.794a.527.527 0 0 0-.33.33l-.795 2.344a.527.527 0 0 1-.999 0L4.525 8.19a.527.527 0 0 0-.33-.33zm4.742-4.831L7.94 2.69a.252.252 0 0 1 0-.476l.996-.338a.252.252 0 0 0 .157-.157l.338-.996a.252.252 0 0 1 .476 0l.338.996a.252.252 0 0 0 .157.157l.996.338a.252.252 0 0 1 0 .476l-.996.338a.252.252 0 0 0-.157.157l-.338.996a.252.252 0 0 1-.476 0l-.338-.996a.252.252 0 0 0-.157-.157zm-7.532 7.39l-.523-.177a.231.231 0 0 1 0-.438l.523-.177a.264.264 0 0 0 .165-.165l.177-.523a.231.231 0 0 1 .438 0l.177.523a.264.264 0 0 0 .165.165l.523.177a.231.231 0 0 1 0 .438l-.523.177a.264.264 0 0 0-.165.165l-.177.523a.231.231 0 0 1-.438 0l-.177-.523a.264.264 0 0 0-.165-.165z"/>
                  </svg>
                </div>
              </li>
              <li data-tutorial-selector-id="columnMenuItem-delete" tabindex="0" aria-disabled="false" className="flex items-center p1 pointer lighten2-focus" role="menuitem">
                <svg width="16" height="16" viewBox="0 0 16 16" className="icon" style={{ shapeRendering: "geometricprecision" }}>
                  <path fillRule="evenodd" fill="currentColor" d="M4,7.50639765 C4,6.6744372 4.66831553,6 5.50473881,6 L10.4952612,6 C11.3263055,6 12,6.67646277 12,7.50639765 L12,13.0026083 C12,14.1057373 11.1132936,15 10.0018986,15 L5.99810135,15 C4.89458045,15 4,14.1041422 4,13.0026083 L4,7.50639765 Z M11,3 L5,3 L5,1.5 C5,1.225 5.225,1 5.5,1 L10.5,1 C10.775,1 11,1.225 11,1.5 L11,3 Z M3,4 C3,3.44771525 3.4556644,3 3.99539757,3 L12.0046024,3 C12.5543453,3 13,3.44386482 13,4 C13,4.55228475 12.5443356,5 12.0046024,5 L3.99539757,5 C3.44565467,5 3,4.55613518 3,4 Z M6,3 L10,3 L10,2 L6,2 L6,3 Z"/>
                </svg>
                <div className="ml1">Delete field</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </StyledMenu>
    </div>
    );
}
