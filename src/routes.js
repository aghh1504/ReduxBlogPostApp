import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'App'
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsSHOW from './components/posts_show'


export default (
<Route path="/" component={App}>
  <IndexRoute component={PostsIndex}/>
  <Route path="posts/new" component={PostsNew}/>
  <Route path="posts/:id" component={PostsSHOW}/>
</Route>
)
