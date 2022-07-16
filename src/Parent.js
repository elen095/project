import React from 'react';
import Child from "./Child";
import ShowPassword from './ShowPassword';


class Parent extends React.Component{

        state ={
            password:''
        }

        showPassword = (password)=>{
            this.setState({
                password:password
                
            })
        }


render(){
    return(
        <>
        <Child password={this.showPassword}/>
        <ShowPassword myPassword= {this.state.password}/>
        </>
    )
}
}

export default Parent;