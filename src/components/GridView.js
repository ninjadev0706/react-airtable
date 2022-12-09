import React from "react";
import Airtable from "./Airtable";
import Toolbar from "./Toolbar";
import StickerTool from './StickerTool';

function GridView() {

const [columns, setColumns]  = React.useState([
    { type:'Single Line Text', id: 'name', label: 'Name', minWidth: 140, show: true },
    { type:'Long Text', id: 'field1', label: 'Description', minWidth: 140, show: true},
    { type:'Attachment', id: 'field2', label: 'Photo', minWidth: 140, show: true },
    { type:'Checkbox', id: 'field3', label: 'Like', minWidth: 140, show: true},
    { type:'Multiple select', id: 'field4', label: 'Option', minWidth: 140, show: true },
    { type:'Single select', id: 'field5', label: 'Gender', minWidth: 140, show: true},
    { type:'Phone number', id: 'field6', label: 'Phone', minWidth: 140, show: true },
    { type:'Email', id: 'field7', label: 'Email Address', minWidth: 140, show: true},
    { type:'Date', id: 'field8', label: 'Birthday', minWidth: 140, show: true },
    { type:'Checkbox', id: 'field9', label: 'Agent', minWidth: 140, show: true},
    { type:'Currency', id: 'field10', label: 'Balance', minWidth: 140, show: true },
    { type:'Rating', id: 'field11', label: 'Rating', minWidth: 140, show: true },
]);
    
    function createData(name, field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11) {
        const selected = false;
        return { name, field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, selected };
    }
    
    const [rows, setRows] = React.useState([
        createData("Alexei", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Ronaldo", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Sergey", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Igor", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Alex", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Abbassob", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Jhon", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Denis", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Jack", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Mike", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Alexei", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Ronaldo", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Sergey", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Igor", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Alex", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Abbassob", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Jhon", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Denis", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Jack", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
        createData("Mike", "field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9", "field10", "field11"),
    ]);

    const [filters, setFilters] = React.useState([]);
    const [size, setSize] = React.useState("15px");
    const [searchStr, setSearchStr] = React.useState('');
    const [searchCount, setSearchCount] = React.useState(0);
    const findSearchStr = (str) => {
        setSearchCount(0);
        if (str !== '') {
            columns.forEach(column=> {
                if (column.label.toLowerCase().includes(str.toLowerCase())) {
                    setSearchCount(pre => pre + 1)
                }
            })
            rows.forEach(row => {
                columns.forEach(column => {
                    if (row[column.id].toString().toLowerCase().includes(str.toLowerCase())) {
                        setSearchCount(pre => pre+1)
                    }
                })
            })    
        }
    }



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
        <Airtable columns={columns} rows={rows} setRows={setRows} size={size} searchStr={searchStr}/>
        <StickerTool />

    </div>
  );
}
  
export default GridView;