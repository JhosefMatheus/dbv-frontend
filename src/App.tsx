import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, SignInPage } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />
  },
  {
    path: "/home",
    element: <HomePage />
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
