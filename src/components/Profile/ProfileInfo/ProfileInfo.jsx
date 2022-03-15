import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
    <div>
        <img src="https://www.bgoperator.ru/pr_img/1000787/20160930/39057527/marvel-img-worlds-of-adventure-dubai.jpg" />
      </div>
      <div className={classes.description__block}>Ava + description</div>
    </div>
  )
}

export default ProfileInfo