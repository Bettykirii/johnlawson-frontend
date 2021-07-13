import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    title: "",
    body: ""
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onTokenAmountChange = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      body: this.state.body
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="post">
        <form className="post" onSubmit={this.handleSubmit}>
        <span class="input">
              <input onChange={this.onTokenAmountChange} value={this.state.tokenAmount} type="text" class="input__field" id="input-3" />
              <label for="input-3" class="input__label">
                <span class="input__label-content">Token Amount</span>
              </label>
            </span>
          <textarea
            placeholder="Body" value={this.state.body}
            onChange={this.onBodyChange} required
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default Post;