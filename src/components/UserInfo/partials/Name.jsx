import { useSelector } from 'react-redux'

const Name = () => {
  const user = useSelector((state) => state.user)
  return <div>Name: {user.name}</div>
}

export default Name
