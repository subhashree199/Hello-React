import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
        console.log("constructor");
        
    
    }
    render(){
        const {name,location,contact} = this.props
        const {count} = this.state
        console.log("render");
        
        return (
            <div className="user-card">
                <h1>count:{count}</h1>
                <button onClick={()=>{
                  this.setState({
                    count:this.state.count +1,
                  })
                }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h3>Contact: {contact}</h3>
            <h4>Location: {location}</h4>
        </div>
        );
    }
}
export default UserClass;
