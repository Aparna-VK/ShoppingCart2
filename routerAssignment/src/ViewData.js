import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    firstName : state.formSubmit.firstName,
    lastName : state.formSubmit.lastName,
    contactNumber : state.formSubmit.contactNumber,
    address : state.formSubmit.address
  });

class ViewData extends React.Component{ 
    render(){
return(
    <div>
    Name : { this.props.firstName + this.props.lastName}<br/><br/>
    Contact Number : { this.props.contactNumber}<br/><br/>
    Address : { this.props.address}<br/><br/>
    </div>
    );
}
};
export default connect(mapStateToProps, null)(ViewData);
