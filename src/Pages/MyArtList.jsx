import { useEffect, useState } from "react";
import Card from "../Components/Card";
import UseAuth from "../Hook/UseAuth";
const MyArtList = () => {
    const { user } = UseAuth();

    const [items, setItems] = useState([])
    //console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/craft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [user])
    return (

        <div className="bg-[#FAF3E0]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-12 pt-12 mx-[2%] sm:mx-[4%] mb-[500px]">
                {
                    items.map(item => <Card
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    ></Card>)
                }
            </div>
        </div>

    );
};

export default MyArtList;