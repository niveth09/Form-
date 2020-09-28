class Form extends React.Component
{
	constructor(props){
  super(props)
  this.state = {
  	firstName:'',
    lastName:'',
    email:''
  }
  }
  
  handleFirstNameChange = (event) =>
  {	
  this.setState({
  firstName: event.target.value
  })
  }
  
  handleLastNameChange = (event) =>
  {	
  this.setState({
  lastName: event.target.value
  })
  }
  
  handleEmailChange = (event) =>
  {
  this.setState({
  email: event.target.value
  })
  }
  
  handleFile = (event) =>
  {
  
  }
  
	render()
  {
  return(
  	
    <form>
      <div>
        <label>FirstName &ensp;&ensp;</label>
        <input type='text' 
        value={this.state.firstName} 
        onChange={this.handleFirstNameChange}/>
        </div>
        <div>
        <br />
        <label>LastName &ensp;&ensp;</label>
        <input type='text' 
        value={this.state.lastName} 
        onChange={this.handleLastNameChange}/>
      </div>
      <br />
      <div>
        <label>&ensp;&ensp;Email&ensp;&ensp;&ensp;&ensp;&ensp;</label>
        <input type='text' 
        value={this.state.email} 
        onChange={this.handleEmailChange}/>        
      </div>
      <br />
      
      <div>
        <label>&ensp;Upload&ensp;&ensp;&ensp;&emsp;</label>
        <input type="file" name="file" onChange={this.handleFile} />
        <br/>
        <small>&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;&ensp;&emsp;Max 10MB</small>
        <br/>
        <small>&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;&ensp;&ensp;&emsp;&ensp;&ensp;&ensp;&emsp;Supported format(.mp3,.fav)</small>
      </div>
      <div>
      <button>Submit</button>
      </div>
    </form>
  	
   )
  }
}


ReactDOM.render(<Form />, document.querySelector("#app"))