import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './auth/Login.tsx'
import AuthProvider from './context/AuthContext.tsx'
import Profile from './pages/MyProfile.tsx'
import UserProfile from './pages/UserProfile.tsx'
import PostPage from './pages/PostPage.tsx'
import PostProvider from './context/PostActionContext.tsx'
import Post404 from './pages/Post404.tsx'
import Error404 from './pages/Error404.tsx'


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>,
    errorElement:<Error404/>

  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error404/>

  },
  {
    path:'/profile',
    element:<Profile/>,
    errorElement:<Error404/>
  },
  {
    path:'/:userId',
    element:<UserProfile/>,
    errorElement:<Error404/>

  },
  {
    path:'/post/:id',
    element:<PostPage/>,
    errorElement:<Post404/>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AuthProvider>
    <PostProvider>
    <RouterProvider router={router}/>
    </PostProvider>
   </AuthProvider>
  </StrictMode>,
)
