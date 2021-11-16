import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {APIGetTableData} from "../api/instance";

const StyledTable = styled.table`
width: 100%;
background-color: #B8EBB0;
`

const Table = (props) => {
    const [sortedData, setSortedData] = useState([]);
    const [sort, setSort] = useState({columnKey: props.cells[0].key, sortDirection: 'asc'});
    const [filter, setFilter] = useState({});
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect((() => {
        APIGetTableData(page, filter, sort, itemsPerPage);
    }), [page, filter, sort, itemsPerPage])

    const handleFilter = (key) => (event) => {
        const newFilter = {...filter};
        newFilter[key] = event.target.value;
        setFilter(newFilter);
    }

    const handleSort = (key) => (event) => {
        let newSort = {...sort};
        if (key === sort.column.key) {
            newSort.sortDirection = newSort.columnKey === 'asc' ? 'desc' : 'asc';
        } else {
            newSort.columnKey = key;
            newSort.sortDirection = 'asc';
        }
        setSort(newSort);
        console.log('handleSort', sort.column.key, setSort, newSort.columnKey, key)
    }

    return (
        <StyledTable>
            <thead>
            <tr>
                {props.cells.map((cellData, index) => {
                    return (
                        <td onClick={handleSort(cellData.key)}
                            key={index}
                            className={"table_header_cell"}
                            style={{width: `${cellData.width}%`}}>
                            {sort.columnKey === cellData.key && "sorted"}
                            {cellData.name}
                            <input onChange={handleFilter(cellData.key)} value={filter[cellData.key]}/>
                        </td>
                    )
                })}
            </tr>
            </thead>
            <tbody>
            {props.data.map((row, index) => {
                return (
                    <tr key={index}>
                        {props.cells.map((cellData, index) => {
                            return (
                                <td key={index}>
                                    {row[cellData.key]}
                                </td>
                            )
                        })
                        }
                    </tr>
                )
            })}
            <tfoot>
            <tr>
                <td colSpan={props.cells.length}>
                    <div onClick={() => (setPage(page - 1))}>
                        Previous
                    </div>
                    <div>
                        Page {page}
                    </div>
                    <div onClick={() => (setPage(page + 1))}>
                        Next
                    </div>
                </td>
            </tr>
            </tfoot>
            </tbody>

        </StyledTable>
    )
}
export default Table