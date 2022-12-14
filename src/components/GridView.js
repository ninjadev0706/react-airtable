import React, { useEffect } from "react";
import axios from "axios";
import Airtable from "./Airtable";
import Toolbar from "./Toolbar";
import StickerTool from "./StickerTool";

function GridView() {
  const [columns, setColumns] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [rowlen, setRowLen] = React.useState(0);
  const [filters, setFilters] = React.useState([]);
  const [size, setSize] = React.useState("15px");
  const [searchStr, setSearchStr] = React.useState("");
  const [searchCount, setSearchCount] = React.useState(0);
  const findSearchStr = (str) => {
    setSearchCount(0);
    if (str !== "") {
      columns.forEach((column) => {
        if (column.label.toLowerCase().includes(str.toLowerCase())) {
          setSearchCount((pre) => pre + 1);
        }
      });
      rows.forEach((row) => {
        columns.forEach((column) => {
          if (
            row[column.id].toString().toLowerCase().includes(str.toLowerCase())
          ) {
            setSearchCount((pre) => pre + 1);
          }
        });
      });
    }
  };

  const fetchData = async () => {
    await axios.get(`https://cors-anywhere.herokuapp.com/https://22f9-65-109-22-190.eu.ngrok.io/`, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      }
  }).then((response) => {
      setRows(response.data);
    });
  };

  const fetchCol = async () => {
    await axios.get(`https://cors-anywhere.herokuapp.com/https://22f9-65-109-22-190.eu.ngrok.io/columns`, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      }
  }).then((response) => {
      setColumns(response.data);
    });
  };

  const getRowLen = async () => {
    await axios.get(`https://cors-anywhere.herokuapp.com/https://22f9-65-109-22-190.eu.ngrok.io/rowlen`, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      }
  }).then((response) => {
      setRowLen(response.data[0].len);
    });
  };

  useEffect(() => {
    fetchCol();
    fetchData();
    getRowLen();
  }, []);

  return (
    <div className="content">
      <Toolbar
        columns={columns}
        setColumns={setColumns}
        setSize={setSize}
        filters={filters}
        setFilters={setFilters}
        setSearchStr={setSearchStr}
        searchStr={searchStr}
        searchCount={searchCount}
        setSearchCount={setSearchCount}
        findSearchStr={findSearchStr}
      />
      <Airtable
        columns={columns}
        rows={rows}
        setRows={setRows}
        size={size}
        rowlen={rowlen}
        searchStr={searchStr}
        fetchData={fetchData}
        fetchCol={fetchCol}
        getRowLen={getRowLen}
      />
      <StickerTool />
    </div>
  );
}

export default GridView;
