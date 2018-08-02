import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./Form";
import ViewData from "./ViewData";



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to ="/">Home</Link>
          <br/>
          <Link to ="/form">Enter form details</Link>
            <br/>       
          <Link to ="/viewData">View Data</Link>
          <br/>
          <br/>
          <hr/>
          <Route path="/" component={home}/>
          <Route path="/form" component={Form} /> 
          <Route path="/viewData" component={ViewData} /> 
        </div>
      </Router>

    );
  }
}

const home = () => (
<div>
  <ul>
    <li>Enter form details</li>
    <li>Click Submit Button</li>
    <li>Go to view details to verify the data entered</li>
  </ul>
</div>
);

export default App
