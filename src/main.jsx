import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import PostPage from './features/post/PostPage.jsx'
import HomePage from './features/home/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/post/:postId/commentId?" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
