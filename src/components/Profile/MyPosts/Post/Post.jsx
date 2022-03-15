import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}
export default Post
