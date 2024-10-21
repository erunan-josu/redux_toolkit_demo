import { useDispatch, useSelector } from 'react-redux'
import { changeEmail, changeName } from '../store/userSlice'
const Form = () => {
  const { email, name } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Name:</p>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          dispatch(changeName(e.target.value))
        }}
      />
      <p>Email:</p>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => {
          dispatch(changeEmail(e.target.value))
        }}
      />
    </div>
  )
}

export default Form
