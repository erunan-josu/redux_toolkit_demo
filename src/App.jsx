import { useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import UserInfo from './components/UserInfo/UserInfo'
import { useDispatch } from 'react-redux'
import { addUser } from './store/userSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <UserInfo />
      <Form />
    </>
  )
}

export default App
