import "./productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows as rows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter((item) => {
            return item.id !== id; 
        }))
    }

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "product", headerName: "Product", width: 130, renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img src={`${params.row.img || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }`} alt="" className="productListImg" />
                    {params.row.name}
                </div>
            )
        } },
        { field: "stock", headerName: "Stock", width: 130 },
        { field: "status", headerName: "Status", width: 90 },
        { field: "price", headerName: "Price", width: 90 },
        { field: "action", headerName: "Action", width: 100, renderCell: (params) => {
            return (
                <>
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                </>
            )
        } },
    ];

    return (
        <div className="productList">
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

export default ProductList;