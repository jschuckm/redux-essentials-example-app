import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostPage } from './features/posts/EditPostPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <AddPostForm />
                <PostsList />
              </section>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <section>
                <AddPostForm />
              </section>
            }
          ></Route>
          <Route
            path="/posts/:postId"
            element={
              <section>
                <SinglePostPage />
              </section>
            }
          ></Route>
          <Route
            path="/posts/:postId/edit"
            element={
              <section>
                <EditPostPage />
              </section>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
