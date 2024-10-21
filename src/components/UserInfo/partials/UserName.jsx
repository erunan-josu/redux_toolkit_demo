import { useSelector } from 'react-redux'

const UserName = () => {
  const user = useSelector((state) => state.user)
  return <div>UserName: {user.username}</div>
}

export default UserName
