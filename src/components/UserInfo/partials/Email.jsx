import { useSelector } from 'react-redux'
const Email = () => {
  const user = useSelector((state) => state.user)
  return <div>Email: {user.email}</div>
}

export default Email
