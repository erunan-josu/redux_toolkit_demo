import Name from './partials/Name'
import UserName from './partials/UserName'
import Email from './partials/Email'

const UserInfo = () => {
  return (
    <header>
      <h1>Redux Example</h1>
      <ul>
        <li>
          <Name />
        </li>
        <li>
          <UserName />
        </li>
        <li>
          <Email />
        </li>
      </ul>
    </header>
  )
}

export default UserInfo
