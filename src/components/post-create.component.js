import React from 'react';
import axios from 'axios';

export default class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'user',
      postBody: '',
      date: new Date().toLocaleString(),
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePostBody = this.onChangePostBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //automatically called right before anything loads
  componentDidMount() {
    this.interval = setInterval(() =>
    this.setState({
      date: Date().toLocaleString()
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePostBody(e) {
    this.setState({
      postBody: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      date: new Date().toLocaleString()
    });

    const post = {
      username: this.state.username,
      postBody: this.state.postBody,
      date: this.state.date,
    }

    console.log(post);

    axios.post('http://localhost:5000/posts/add', post)
      .then(res => console.log(res.data));

    //window.location = '/';
}

  render() {
    return (
      <div className="container">
        <h3>Create New Post</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>User:</label>
          <div>
            <p>{this.state.username}</p>
          </div>
        </div>
          <div className="form-group">
            <label>Post</label>
            <input
              type="text"
              className="form-control"
              value={this.state.postBody}
              onChange={this.onChangePostBody}>
            </input>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <p>{this.state.date}</p>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Post"
              className="btn btn-primary">
            </input>
          </div>
        </form>
      </div>
    )
  }
}
