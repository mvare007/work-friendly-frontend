import BaseDataTable from "./BaseDataTable";

const userDataTable = () => {
  const columns = [
    { field: "id", header: "ID" },
    { field: "first_name", header: "First Name" },
    { field: "last_name", header: "Last Name" },
    { field: "email", header: "Email" },
    { field: "created_at", header: "Created At" },
    { field: "updated_at", header: "Updated At" },
  ];

  return (
    <BaseDataTable
      url={"users/datatable"}
      columns={columns}
    />
  );
};

export default userDataTable;