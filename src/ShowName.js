import React from "react";

class ShowName extends React.Component{
state = {
    name: "Elen",
    value: true,
    surname:"Baghdasarova"
}
changeSurname = () =>{
    this.setState({
        value: !this.state.value
    })
} 
render(){
    return(
        <>
             {this.state.value ? <p>{this.state.name}</p>  : <p>{this.state.surname}</p> }
           
              <button onClick={this.changeSurname}>Show Surname</button>
        </>
        
    )
}

}
export default ShowName;