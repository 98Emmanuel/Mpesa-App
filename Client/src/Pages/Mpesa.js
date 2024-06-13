import React from "react";
import "../Styles/Mpesa.css"
import Axios from "axios";

class Mpesa extends React.Component{
constructor(){
    super();
    this.state = {
        phone : undefined,
        amount : undefined
    }
}

handlePhone = (e) => {
const phone1 = e.target.value;
console.log(phone1)
this.setState({ phone : phone1 });
}

handleAmount = (f) => {
    const amount1 = f.target.value;
    console.log(amount1)
    this.setState({ amount : amount1 });
    }

    payHandler = (event) => {
        event.preventDefault();
        const { amount, phone } = this.state
        Axios.post("https://mpesa-app-8.onrender.com/token", {
          amount,
          phone,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
           console.log(error);
          });
      };

    render(){
        const { phone, amount } = this.state
        return(
            <div>
            <div className="container">
        <form>
        <label for="1">Phone number : </label>
    <input type="text" placeholder="Enter Phone number" id="1" className="mb-5" onChange={this.handlePhone}/> <br/>

        <label for="2">Amount : </label>
    <input type="number" placeholder="Amount" id="2" className="mb-5" onChange={this.handleAmount}/><br/>

    <input type="button" value="Pay" className="btn btn-success text-light" onClick={this.payHandler}/>
    
    </form>
    </div>
            </div>
        )
        }
}

export default Mpesa;
