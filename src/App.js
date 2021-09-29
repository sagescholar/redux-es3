import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Navbar } from './app/Navbar'

import { AddPostFrom } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'


function App() {
  return (
    <Router>
      <Navbar />
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render = {() => (
                <>
                  <AddPostFrom />
                  <PostsList />
                </>
              )}
            />
            <Route exact path="/post/:postId" component={SinglePostPage} />
            <Route exact path="/editPost/:postId" component={EditPostForm} />
            <Redirect to="/" />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
