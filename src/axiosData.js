import React, { Component } from 'react';
import axios from 'axios';
import './axiosCss.css';

class ApiGetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className="scrollList">
        <table className="apiList">
        	<tbody>
          {this.state.posts.map(post =>
            <tr key={post.id}>
            	<td>{post.domain}</td>
            	<td>{post.title}</td>
            	<td>{post.subreddit_type}</td>
            	<td>{post.created_utc}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ApiGetData;