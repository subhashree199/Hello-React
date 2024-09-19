
            const heading = React.createElement("div",{id:"heading"},"hello subha"
            ,[
                React.createElement("div",{id:"child"},[
                    React.createElement("h1",{},"I'm subha"),
                    React.createElement("h2",{},"I'm suha"),


                ]),
                React.createElement("div",{ id:"child2"},[
                    React.createElement("h1",{},"i am sushi"),
                    React.createElement("h2",{},"i am shital"),

                ]),

            ]
            );
            console.log(heading);//object
            
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(heading);
        