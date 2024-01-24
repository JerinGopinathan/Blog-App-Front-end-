import React, { useState } from 'react'
import Avatar1 from '../images/avatar1.jpg'
import Avatar2 from '../images/avatar2.jpeg'
import Avatar3 from '../images/avatar3.jpg'
import Avatar4 from '../images/avatar4.jpg'
import Avatar5 from '../images/avatar5.jpg'
import Avatar6 from '../images/avatar6.jpg'
import { Link } from 'react-router-dom'

const authorsData =[
  {id: 1, avatar: Avatar1, name: 'Jerin', posts: 3},
  {id: 2, avatar: Avatar2, name: 'Zayn', posts: 5},
  {id: 2, avatar: Avatar6, name: 'Tamizhini', posts: 2},
  {id: 3, avatar: Avatar3, name: 'Jimin', posts: 0},
  {id: 4, avatar: Avatar4, name: 'Cinderella', posts: 2},
  {id: 5, avatar: Avatar5, name: 'Francisca', posts: 1}
]
const Authors = () => {
  const[authors, setAuthors]=useState(authorsData)

  return (
    <section className="authors">
      { authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name,posts})=>{
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No users / authors found</h2>}
    </section>
  )
}

export default Authors
