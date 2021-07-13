import  React, { Component } from 'react';
// import { Button } from 'antd';
import './Form.css';
import axios from 'axios'

class Form extends Component {
  state = {
    tokenAmount: "",
    tokenAddress: "",
    noOfBuys:"",
    ethAmount:""
  };

  onBuys = e => {
    this.setState({
      noOfBuys: e.target.value
    });
  };

  onTokenAddressChange = e => {
    this.setState({
      tokenAddress: e.target.value
    });
  };

  onTokenAmountChange = e => {
    this.setState({
      tokenAmount: e.target.value
    });
  };

  onEthAmountChange = e => {
    this.setState({
      ethAmount: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("here")
    e.preventDefault();
    const data = {
      ethAmount: this.state.ethAmount,
      tokenAddress: this.state.tokenAddress,
      tokenAmount: this.state.tokenAmount,
      noOfBuys: this.state.noOfBuys
    };
    axios
      .post("https://603f17a99b90.ngrok.io/api/orders", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Form">

        <form onSubmit={this.handleSubmit} >

          <div id="container">

            <span class="input">
              <input onChange={this.onTokenAddressChange} value={this.state.tokenAddress} type="text" class="input__field" id="input-1" />
              <label for="input-1" class="input__label">
                <span class="input__label-content">Eth Address</span>
              </label>
            </span>

            <span class="input">
              <input onChange={this.onEthAmountChange} value={this.state.ethAmount} type="text" class="input__field" id="input-2" />
              <label for="input-2" class="input__label">
                <span class="input__label-content">Eth Amount</span>
              </label>
            </span>

            <span class="input">
              <input onChange={this.onTokenAmountChange} value={this.state.tokenAmount} type="text" class="input__field" id="input-3" />
              <label for="input-3" class="input__label">
                <span class="input__label-content">Token Amount</span>
              </label>
            </span>

            <span class="input">
              <input onChange={this.onBuys} value={this.state.noOfBuys} type="text" class="input__field" id="input-4" />
              <label for="input-4" class="input__label">
                <span class="input__label-content">Number of Buys</span>
              </label>
            </span>


            <button id="send-button" type="submit">Send</button>

          </div>

        </form>

      </div>


    );
  }
}

export default Form;