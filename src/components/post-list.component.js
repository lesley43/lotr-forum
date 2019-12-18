import React from 'react';
import axios from 'axios';

const Post = props => (
  <tr>
    <td>{props.post.username}</td>
    <td>{props.post.postBody}</td>
    <td>{props.post.date}</td>
  </tr>
)

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/posts/')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  postList() {
    return this.state.posts.map(current => {
      return <Post post={current} key={current._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User</th>
              <th>Post</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.postList()}
          </tbody>
        </table>
      </div>
    )
  }
}
