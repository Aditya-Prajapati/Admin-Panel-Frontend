import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows as rows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter((item) => {
            return item.id !== id; 
        }))
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "user", headerName: "User", width: 130, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img src={`${params.row.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }`} alt="" className="userListImg" />
                    {params.row.username}
                </div>
            )
        } },
        { field: "email", headerName: "Email", width: 130 },
        { field: "status", headerName: "Status", width: 90 },
        { field: "transaction", headerName: "Transaction", width: 90 },
        { field: "action", headerName: "Action", width: 100, renderCell: (params) => {
            return (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                </>
            )
        } },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 8 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}

export default UserList;