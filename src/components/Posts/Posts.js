import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { postsAPI } from './../api/api'
import Pagination from './../Pagination/Pagination'
import './Post.scss'

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await postsAPI.getPosts();
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }


  return (<div>
    <ul className="ul">
      {currentPosts.map((post) => (
        <li key={post.id} className='list-group-item'>
          <NavLink to={`/card/${post.id}`} style={{ fontSize: 24, textTransform: 'uppercase' }}>{post.title}</NavLink>
        </li>
      ))
      }
    </ul >
    <Pagination postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate} />
  </div>
  );
};

export default Posts;
