import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../../utils/mockData";
const Body = () => {
    const [listofResturants ,setListofResturants] =useState(resList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = listofResturants.filter(
              (res)=>res.data.avgRating >4.5
            );
            setListofResturants(filteredList)
          }}>
            Top Rated Resturants</button>
        </div>
        <div className="res-container">
          {listofResturants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;