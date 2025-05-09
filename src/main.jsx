import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { setupStore } from './store.js'
import App from './App.jsx'
import PostPage from './features/posts/postPage/PostPage.jsx'
import HomePage from './features/posts/homePage/HomePage.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme/theme.js'

const store = setupStore({});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="/post/:postId/commentId?" element={<PostPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
