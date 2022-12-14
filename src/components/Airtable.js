import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import DropdownHeader from "./DropdownHeader";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(243, 243, 243, 1)",
    },
  },
  tablefooter: {
    position: "fixed",
    backgroundColor: "white",
    height: "25px",
    bottom: 0,
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    width: "100%",
  },
});

export default function Airtable(props) {
  const { rows, columns, setRows, fetchData, fetchCol, getRowLen, rowlen } =
    props;

  const [open, setOpen] = useState(false);
  const [isEdit, setEditOpen] = useState(false);
  const [customType, setCustomType] = useState("");
  const classes = useStyles();

  const handleSelectChange = (event) => {
    const _rows = rows.map((item) => {
      return { ...item, selected: event.target.checked };
    });
    setRows([..._rows]);
  };

  const handleChange = (rowId) => {
    const _rows = rows.map((item, index) => {
      if (index === rowId) {
        return { ...item, selected: !item.selected };
      } else return item;
    });
    setRows([..._rows]);
  };

  const handleOver = (rowId) => {
    const _rows = rows.map((item, index) => {
      if (index === rowId) {
        return { ...item, over: true };
      } else return item;
    });
    setRows([..._rows]);
  };

  const handleOut = (rowId) => {
    const _rows = rows.map((item, index) => {
      if (index === rowId) {
        return { ...item, over: false };
      } else return item;
    });
    setRows([..._rows]);
  };

  const InsertLeft = async (col_id, col_order, cell_content) => {
    cell_content = customType;
    if (columns && columns.length > 0) {
      await axios
        .post(`https://cors-anywhere.herokuapp.com/https://22f9-65-109-22-190.eu.ngrok.io/insertColumn`, {
          data: {
            col_id: col_id,
            col_order: col_order,
            cell_content: cell_content,
            rowlength: rows?.length / columns?.length,
          },
        })
        .then(async (response, status) => {
          if (response.status === 200) {
            setOpen(true);
            await fetchCol();
            await fetchData();
            await getRowLen();
          }
        });
    }
  };

  const InsertRight = async (col_id, col_order, cell_content) => {
    cell_content = customType;
    if (columns && columns.length > 0) {
      await axios
        .post(`https://cors-anywhere.herokuapp.com/https://22f9-65-109-22-190.eu.ngrok.io/insertColumn`, {
          data: {
            col_id: col_id,
            col_order: col_order + 1,
            cell_content: cell_content,
            rowlength: rows?.length / columns?.length,
          },
        })
        .then(async (response, status) => {
          if (response.status === 200) {
            setOpen(true);
            await fetchCol();
            await fetchData();
            await getRowLen();
          }
        });
    }
  };

  const onSave = (value) => {
    setCustomType(value);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ height: 600 }}>
        <Table
          className={classes.table}
          stickyHeader
          aria-label="sticky table"
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  top: 0,
                  left: 0,
                  position: "sticky",
                  zIndex: 2,
                  width: "30px",
                  maxWidth: "30px",
                }}
                className="table-head table-cell checkbox"
              >
                <input
                  type="checkbox"
                  onChange={(ev) => {
                    handleSelectChange(ev);
                  }}
                />
              </TableCell>
              {columns &&
                columns.map((column, index) => {
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        top: 0,
                        left: 48.8,
                        minWidth: column.minWidth,
                        width: column.minWidth,
                        position: "sticky",
                        borderRight: index === 0 ? "1px solid #cccccc" : "none",
                        zIndex: index === 0 ? 2 : 0,
                      }}
                      className="table-head table-cell"
                    >
                      <DropdownHeader
                        fieldType={column.type}
                        name={column.col_name}
                        width={column.width}
                        column={column}
                        InsertLeft={InsertLeft}
                        InsertRight={InsertRight}
                        isOpen={open}
                        setEditOpen={setEditOpen}
                        onSave={onSave}
                      />
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {rowlen && (
              <>
                {[...Array(rowlen).keys()].map((rowId) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={rowId}
                      style={{ height: "15px" }}
                    >
                      <TableCell
                        style={{
                          top: 0,
                          left: 0,
                          position: "sticky",
                          backgroundColor: "white",
                          maxWidth: "20px",
                          width: "20px",
                        }}
                        className="table-cell"
                      >
                        {rowId.selected || rowId?.over === true ? (
                          <input
                            type="checkbox"
                            checked={rowId.selected}
                            onClick={(ev) => {
                              ev.preventDefault();
                              ev.stopPropagation();
                              handleChange(rowId);
                            }}
                          />
                        ) : (
                          rowId + 1
                        )}
                      </TableCell>
                      {rows
                        .filter((row) => row.row_id === rowId + 1)
                        .map((colItem) => {
                          return (
                            <TableCell
                              key={colItem.id}
                              className="table-cell"
                              style={{
                                left: 48.8,
                                position: colItem === 0 ? "sticky" : "unset",
                                borderRight:
                                  colItem === 0 ? "1px solid #cccccc" : "none",
                              }}
                            >
                              {colItem.cell_content}
                            </TableCell>
                          );
                        })}
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
          <TableFooter className={classes.tablefooter}>
            <TableRow>
              <TableCell className="table-footer">
                {rows?.length} records
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
