import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import { makeStyles } from '@mui/styles';
import DropdownHeader from './DropdownHeader';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(243, 243, 243, 1)"
    },
  },
  tablefooter: {
    position: 'fixed',
    backgroundColor: 'white',
    height: '25px',
    bottom: 0,
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    width: '100%',
  },
});

export default function Airtable(props) {
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const columns = props.columns;
  const classes = useStyles();

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const handleSelectChange = (event) => {
    const _rows = props.rows.map((item) => {
      return { ...item, selected: event.target.checked };
    });
    props.setRows([..._rows]);
  }

  const handleChange = (rowId) => {
    const _rows = props.rows.map((item, index) => {
      if (index === rowId) {
        return { ...item, selected: !item.selected };
      } else return item;    });
    props.setRows([..._rows]);
  }

  const handleOver = (rowId) => {
    const _rows = props.rows.map((item, index) => {
      if (index === rowId) {
        return { ...item, over: true };
      } else return item;    });
    props.setRows([..._rows]);
  }

  const handleOut = (rowId) => {
    const _rows = props.rows.map((item, index) => {
      if (index === rowId) {
        return { ...item, over: false };
      } else return item;    });
    props.setRows([..._rows]);
  }

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ height: 600 }}>
        <Table className={classes.table} stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              <TableCell
                  style={{ top: 0, left: 0, position:'sticky', zIndex: 2, width: '30px', maxWidth:'30px'}}
                  className="table-head table-cell checkbox"
              >
                <input type="checkbox" onChange={(ev)=>{handleSelectChange(ev)}}/>
              </TableCell>
              {columns.map((column, index) => {return column.show ? (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, left: 48.8, minWidth: column.minWidth, width: column.minWidth, position:'sticky', borderRight: index===0?'1px solid #cccccc':'none', zIndex: index === 0 ? 2:0 }}
                  className="table-head table-cell"
                >
                    <DropdownHeader fieldType={column.type} name={column.label} width={column.width}/>
                </TableCell>
              ):null})}
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {props.rows
              .map((row, rowId) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} style={{ height: props.size }} >
                  <TableCell
                      style={{ top: 0, left: 0, position:'sticky', backgroundColor: 'white', maxWidth: '20px', width:'20px'}}
                      className="table-cell"
                      onMouseOver={handleOver(rowId)}
                      onMouseOut={handleOut(rowId)}
                  >
                    {(row.selected || row?.over === true) ? <input type="checkbox" checked={row.selected} onClick={(ev)=>{ev.preventDefault(); ev.stopPropagation(); handleChange(rowId)}}/>:(rowId + 1)}
                  </TableCell>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      const flag = value.toString().toLowerCase().includes(props.searchStr.toLowerCase())
                      return column.show ? (
                        <TableCell 
                          key={column.id} 
                          align={column.align} 
                          style={{ left:48.8, position:index===0?'sticky':'unset', backgroundColor:flag && props.searchStr !== '' ? '#ffeab6':index===0?'white':'initial', borderRight: index===0?'1px solid #cccccc':'none'}}
                          className="table-cell"
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      ):null;
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
          <TableFooter className={classes.tablefooter}>
            <TableRow>
              <TableCell className="table-footer">{props.rows.length} records</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
