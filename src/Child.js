import React from "react";


class Child extends React.Component{

    constructor(props){
        super()
    }

    passwordShown = (event)=> {
        this.setState({
            inputPassword:event.target.password
        })
        
    };

    togglePassword = () =>{
            this.props.password(this.state.inputPassword)
            this.setState({
            inputPassword:''
        })
    }
    
    render(){
        return(
            <>
            <input type="password " placeholder="Password" onChange={this.passwordShown} password = {this.inputPassword} />
            <button onClick={this.togglePassword}>Show Password</button>
            </>
        )
    };
};
export default Child;