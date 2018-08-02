const initialState = {
    firstName :"",
    lastName: "",
    contactNumber:"",
    address:""
};
const formSubmit = (state = initialState, action) => {
    console.log(action.firstName);
    switch (action.type) {
    case "BUTTON_CLICKED":
        return {
            ...state,
            firstName: action.firstName1,
            lastName: action.lastName1,
            contactNumber: action.contactNumber1,
            address: action.address1,
        };
    default:
        return state;
    }
};
export default formSubmit;
