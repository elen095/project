import React from 'react';


class Password extends React.Component{
    constructor(){
        super();
        this.state={
            showPassword: false
        }
    }



render(){
    console.warn(this.state.showPassword)
    return(
       <section className='py-4 contaniner'>
        <div className='row justify-content-center'>
            <div className='col-3'>
                <div className='input-group mb-3 shadow border rounded '>
                <input className='form-control bg-dark text-light' 
                type={this.state.showPassword ? "text" : "password" }
                />
                 <button className='input-group-text bg-dark text-light' 
                 onClick={() => this.setState({showPassword: !this.state.showPassword})}>
                    Show
                    </button>
                </div>

            </div>
        </div>

       </section>
    )
}
}
export default Password; 
