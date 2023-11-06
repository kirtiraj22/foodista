import { useState, useEffect } from 'react';
const Body = () => {
    const [Restaurants, setRestaurants] = useState();
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3071588&lng=73.1812187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        );
        const jsonData = await data.json();
        // console.log(jsonData);
        const resData = jsonData?.data?.cards[2].card;
        setRestaurants(resData);
        setListOfRestaurants(resData?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // console.log(Restaurants.card.header.title);
    console.log(listOfRestaurants);

    return (
        <div>
            {listOfRestaurants.length === 0 ? (
                <p>Please Wait</p>
            ) : (
                <div>
                    <p className="font-bold text-xl">{Restaurants.card.header.title}</p>
                    <ul>
                        {listOfRestaurants.map((res, index) => (
                            <li key={index} className="text-green-600">
                                {res?.info?.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Body;
