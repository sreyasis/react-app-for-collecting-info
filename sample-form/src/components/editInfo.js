import React from 'react'
//for editing 
class EditInfo extends React.Component{
    constructor(props){ //Mounting the state using a constructor
      super(props)
      const {id, name, email} = props.location.state.Info ;
      this.state={
        id,
        name,
        email
      };
    }
    // Function to send the prop to parent component, and clear the input field when triggered by event listener 
    //(here it is triggered by clicking the update button)
    update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are mandatory!");
            return;
        }
        
        
        this.props.updateInfo(this.state)
        this.setState({name:"", email:""})
        this.props.history.push("/")
    };
    // Rendering the update details page
    render(){
    return(
    <div className="ui main">
        <h2>Edit Details</h2>
        <form className="ui form" onSubmit={this.update} >
          <div className="field">
          <label style={{color: "white"}}><h3>Name</h3></label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e)=> this.setState({name: e.target.value})}
              
            />
          </div>
          <div className="field">
          <label style={{color: "white"}}><h3>Email</h3></label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e)=> this.setState({email: e.target.value})}
           
            />
          </div>
          <button className="ui button green">Update</button>
        </form>
      </div>)}
}
export default EditInfo