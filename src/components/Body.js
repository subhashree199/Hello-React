import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
    const [listofResturants ,setListofResturants] = useState([]);
    console.log(listofResturants);
    const [filteredRestaurant,setFilteredResturant]=useState([])
    const [searchText, setSearchText] = useState("");
    
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
     setListofResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      );
  
     return listofResturants.length === 0 ? (
      <Shimmer />
    ) : (
   
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4"> 
            <input type="text" className="border border-solid border-black" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}/>
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={ () => {
            const filteredRestaurant = listofResturants.filter((res) =>
              res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListofResturants(filteredRestaurant)
            }}>search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg"
           onClick={()=>{
            const filteredList = listofResturants.filter(
              (res)=>res.info.avgRating > 4
            );
            setListofResturants(filteredList)
          }}>
            Top Rated Resturants
            </button>
            </div> 
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
             <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
          ))}
        </div>
      </div>
    );
  };
  export default Body;