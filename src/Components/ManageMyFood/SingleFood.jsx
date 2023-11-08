import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    const foods = useLoaderData();
    const {location} = foods;
    console.log(location);
    return (
        <div>
            hi
        </div>
    );
};

export default SingleFood;