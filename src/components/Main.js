import React from 'react'
import {Link, Route} from 'react-router-dom'
import PhotoGrid from './PhotoGrid'
import Single from './Single'

const Main = (props) => {
  return (
    <div>
      <h1>
        <Link to='/'>Reduxstagram</Link>
      </h1>
      <Route exact path='/' render={() => <PhotoGrid {...props} />} />
      <Route path={`${props.match.url}view/:postId`} render={({match}) => <Single {...props} match={match} />} />
    </div>
  )
}

export default Main