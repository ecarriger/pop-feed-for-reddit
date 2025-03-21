import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import App from './App.jsx'
import PostPage from './features/postPage/PostPage.jsx'
import HomePage from './features/posts/homePage/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/post/:postId/commentId?" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
