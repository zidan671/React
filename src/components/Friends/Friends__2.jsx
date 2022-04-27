
// import axios from 'axios'
// import classes from './Friends.module.css'
// import userPhoto from '../../assets/images/user.png'

// const Friends = (props) => {
//   let getUsers = ()=> {
//   if (props.friends.length ===0) {
    
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").
//           then(response =>{
//             props.setFriends(response.data.items)
//           })
//   }}
  
//   return (
//     <div>
//       <button onClick={getUsers}>Получить пользователей</button>
//       {props.friends.map((friend) => (
//         <div key={friend.id}>
//           <div>
//             <img className={classes.avatar_img} src={friend.photos.small != null ? friend.photos.small : userPhoto} 
//             alt="" />
            
//             <div>{friend.follow 
//             ? <button onClick = {()=>{props.unfollow(friend.id)}}>UnFollow</button> 
//             : <button onClick = {()=>{props.follow(friend.id)}}>Follow</button>}
//             </div>
//             <div className={classes.friend_info_status}>
//               <div>{friend.name}</div>
//               <div style={{ position: 'absolute', bottom: '-70px' }}>
//                 {friend.status}
//               </div>
//             </div>

//             <div className={classes.friend_info_location}>
//               <div>{"friend.location.city"}</div>
//               <div style={{ position: 'absolute', bottom: '-70px' }}>
//                 {"friend.location.country"}
//               </div>
              
//             </div>
        
//           </div>

          
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Friends
