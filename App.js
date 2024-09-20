    import React, { Component } from "react";
    import ReactDOM from "react-dom/client";
    const element = <span> My name is subu</span>
    const title = (
        <div>
            {element}
    <h1 className="practice"> Hello React</h1>
    </div>
      );
    const Head = () => (
     <h1> BEAUTIFUL WORLD</h1>
      );
    
    const HeadComponent = () =>(<div id="container"> 
    {title}
    {Head()}    
    caling a function inside jsx 

        <h1 className="heading"> hello subha</h1>
    </div>);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadComponent />)
