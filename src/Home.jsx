import React from 'react'
import Feed from './Feed'

function Home({posts, setPosts}) {
  return (
    <home className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{marginTop: "2rem"}}>
          No posts to display.
        </p>
      )}
    </home>
  )
}

export default Home