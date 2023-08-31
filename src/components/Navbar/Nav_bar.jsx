import React, { useState } from 'react'
import { Navbar, Container, Form, Nav } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
const Nav_bar = (props) => {
  // search word that user entered
  const [searchWord, setSearchWord] = useState("")
  // on search button click
  const onSearchBtnClick = (event)=>{
    event.preventDefault()
    props.searchFunction(searchWord)
    setSearchWord("")
  }
  return (
    <Navbar expand="lg" fixed='top' bg='dark' variant='dark'>
      <Container>
        <Link to='/' className='logo'>menu app</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-box"
              aria-label="Search"
              onChange={(e)=>{setSearchWord(e.target.value)}}
              value={searchWord}
            />
            <button className='search-btn'
            onClick={onSearchBtnClick}
            >Search</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav_bar
