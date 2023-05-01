import './index.css'

const User = () => {
  const userName = 'Wade Warren'
  const userProfileUrl =
    'https://assets.ccbp.in/frontend/react-js/profile-img.png '
  const description = 'Software developer at UK'

  return (
    <div className="user-details-cntainer">
      <img src={userProfileUrl} className="user-img" alt="profile" />
      <h1 className="name">{userName}</h1>
      <p className="txt">{description}</p>
    </div>
  )
}

export default User
