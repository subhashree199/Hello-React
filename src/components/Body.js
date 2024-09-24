import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listofResturants ,setListofResturants] = useState([]);
    console.log(listofResturants);
    
    useEffect(()=>{
      fetchData();
      
    },[]);
    const fetchData = async () => {
     const data = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
     const json = await data.json();
     console.log(json.data);
     
    //  optional chaining
     setListofResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
   
     return listofResturants.length === 0 ? (
      <Shimmer />
    ) : (
   
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = listofResturants.filter(
              (res)=>res.data.avgRating >4.5
            );
            setListofResturants(filteredList)
          }}>
            Top Rated Resturants
            </button>
        </div>
        <div className="res-container">
          {listofResturants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  export default Body;