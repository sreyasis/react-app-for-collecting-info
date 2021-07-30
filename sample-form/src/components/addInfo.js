import React from 'react'

class AddInfo extends React.Component{
    state={
        name:"",
        email:""
    };
    // Function to send the prop to parent component, and clear the input field when triggered by event listener 
    //(here it is triggered by clicking the add button)
    addInfo = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are mandatory!");
            return;
        }
        this.props.recieveInfo(this.state)
        this.setState({name:"", email:""})
        this.props.history.push("/")
    };
    
    render(){
    return(
    <div className="ui main">
        <h2>Add details</h2>
        <form className="ui form" onSubmit={this.addInfo} >
          <div className="field" >
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
          <button className="ui button green">Add</button>
        </form>
      </div>)}
}
export default AddInfo