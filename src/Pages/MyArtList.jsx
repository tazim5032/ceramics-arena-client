import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Card from "../Components/Card";
import UseAuth from "../Hook/UseAuth";

const MyArtList = () => {
    const { user } = UseAuth();

    const [items, setItems] = useState([]);
    const [filterCustomization, setFilterCustomization] = useState(""); // State to store selected customization option

    useEffect(() => {
        fetch(`http://localhost:5000/craft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, [user]);

    // Filter items based on selected customization option
    const filteredItems = filterCustomization
        ? items.filter(item => item.customization === filterCustomization)
        : items;

    const handleCustomizationFilterChange = (e) => {
        setFilterCustomization(e.target.value);
    };

    return (
        <div className="">
            <Helmet>
                <title>My Art&Craft List</title>
            </Helmet>
            <div className="flex justify-center my-8">
                <label className="mr-2">Filter by Customization:</label>
                <select
                    className="border border-gray-300 rounded-md p-1"
                    value={filterCustomization}
                    onChange={handleCustomizationFilterChange}
                >
                    <option value="">All</option>
                    <option value="yes">Customizable</option>
                    <option value="no">Not Customizable</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 mx-[2%] sm:mx-[4%] mb-[500px]">
                {filteredItems.map(item => (
                    <Card
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyArtList;
