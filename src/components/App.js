import React from "react";
import Accordion from "./Accordion";
import Flag from "./Flag";//delete when done

class App extends React.Component {


    render(){
        return(
            <div>
                <div>
                    <Flag /> test
                </div>
                <div>
                    test123
                </div>
                <div>
                    <Accordion />
                </div>

            </div>
        );
    }
}

export default App;