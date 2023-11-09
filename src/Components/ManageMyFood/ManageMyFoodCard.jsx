import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";


const ManageMyFoodCard = ({food, handleDelete}) => {
    const {_id, foodName, donarEmail,donarImage, email, expireDate, foodImage, location, notes,quantity, status} = food;

    console.log(foodName);



    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity,
        },
        {
            name: "Date",
            selector: (row) => row.Date, // Note the capital "D" in "Date"
        },
        {
            name: "Operations",
            selector: (row) => row.operations, // Note the capital "D" in "Date"
        },
    ];

    const data = [
        {
            id: _id,
            name: foodName,
            email: email,
            quantity: quantity,
            Date: expireDate,
            operations : <div className="flex gap-5">
                <Link to={`/manageFood/editFood/${_id}`} className="">Update</Link>
                <Link to={`/manageFood/singleFood/${_id}`} className="">Manage Food</Link>
                <button onClick={()=> handleDelete(_id)} className="">Delete</button>
            </div>
        },
        // Add more data objects here...
    ];
    return (
        <div>
            <div className="">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
};

export default ManageMyFoodCard;