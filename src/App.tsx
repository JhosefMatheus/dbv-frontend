import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, SignInPage, AccountPage } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/account",
    element: <AccountPage />
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
