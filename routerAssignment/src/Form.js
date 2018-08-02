import React from "react";
import { connect } from "react-redux";
import { buttonClicked } from "./actions";

const mapDispatchToProps = dispatch => ({
    buttonClicked1: () => dispatch(buttonClicked(
        document.getElementById("firstName").value,
        document.getElementById("lastName").value,
        document.getElementById("contactNumber").value,
        document.getElementById("address").value
    )
    )
});

class Form extends React.Component {
    render(){
        return(
            <div>
        First Name
                <input type="text" name="firstName" id="firstName" placeholder="first Name"/>
                <br /><br />
        Last Name
                <input type="text" name="lastName" id="lastName" placeholder="Second Name"/>
                <br /><br />
        Contact Number
                <input type="text" name="contactNumber" id="contactNumber" placeholder="Contact Number"/>
                <br /><br />
        Address
                <input type="text" name="adress" id="address" placeholder="Address"/>
                <br /><br/>
                <button onClick={this.props.buttonClicked1} > submit </button>

            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Form);
