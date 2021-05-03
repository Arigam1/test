import React, { useState, useEffect } from 'react';
import { Spinner, Button, FormControl } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { postsAPI } from '../api/api'
import Pagination from '../Pagination/Pagination'
import './Post.scss'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [search, setSearch] = useState('');

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

  return (<div className="posts">
    <div className="headerPost">
      <div className="headerPost-left">
        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={e => setSearch(e.target.value)} />
        <Button onClick={() => { }} className="search-button"> Search </Button>
      </div>
      <NavLink to={`/createPost`}><Button variant="success">Создать пост</Button></NavLink>
    </div>
    <ul>
      {currentPosts.filter(value => value.title.toString().toLowerCase().includes(search.toString().toLowerCase())).map((post) => (
        <li key={post.id} className='list-group-item'>
          <NavLink to={`/card/${post.id}`}>{post.title}</NavLink>
        </li>
      ))
      }
      {/* {
        filteredPosts.map((post) => (
          <li key={post.id} className='list-group-item'>
            <NavLink to={`/card/${post.id}`}>{post.title}</NavLink>
          </li>
        ))
      } */}
    </ul >
    <Pagination postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate} />
  </div>
  );
};

export default Posts;