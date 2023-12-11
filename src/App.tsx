import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignInPage } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />
  }
])

function App() {
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
