import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

// https://primereact.org/datatable/
const BaseDataTable = ({ url, columns, onSort, onFilter }) => {

  const [data, setData] = useState([])
  const [sortableColumns, setSortableColumns] = useState([])
  const [filterableColumns, setFilterableColumns] = useState([])
  const [sortField, setSortField] = useState(null)
  const [sortOrder, setSortOrder] = useState(null)
  const [globalFilter, setGlobalFilter] = useState(null)

  useEffect(() => {
    const fullUrl = `${import.meta.env.VITE_API_URL}/${url}`;
    axios.get(fullUrl).then((res) => {
      const { sort_field, sortable_columns, filterable_columns, global_filter } = res.data;
      setData(res.data.data);
      setSortableColumns(sortable_columns);
      setFilterableColumns(filterable_columns);
      setSortField(sort_field);
    })
  }, [])

  const isSortable = (field) => sortableColumns.includes(field);
  const isFilterable = (field) => filterableColumns.includes(field);

  return (
    <div>
      <DataTable
        value={data}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={onSort}
        // globalFilter={globalFilter}
        onFilter={onFilter}
      >
        {columns.map((column, i) => (
          <Column
            key={i}
            field={column.field}
            header={column.header}
            sortable={sortableColumns.includes(column.field)}
            filter={filterableColumns.includes(column.field)}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default BaseDataTable;
