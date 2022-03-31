import classes from './Friends.module.css'

const Friends = (props) => {

  if (props.friends.length ===0) {
    
    props.setFriends([
      { id: 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg5biSqcBzmz58p1iv7ILmGc9MeBifR5csw&usqp=CAU', follow: false, name: 'Andrey', status:'I am a boss', location:{city:'Minsk', country:'Belarus'} },
      { id: 2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg5biSqcBzmz58p1iv7ILmGc9MeBifR5csw&usqp=CAU', follow: false, name: 'Petr', status:'I am a boss too', location:{city:'Moskow', country:'Russia'} },
      { id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg5biSqcBzmz58p1iv7ILmGc9MeBifR5csw&usqp=CAU', follow: true, name: 'Vera', status:'I am a boss too', location:{city:'Paris', country:'France'} },
      { id: 4, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg5biSqcBzmz58p1iv7ILmGc9MeBifR5csw&usqp=CAU', follow: true, name: 'Aleksey', status:'I am a free', location:{city:'London', country:'England'} },
      { id: 5, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg5biSqcBzmz58p1iv7ILmGc9MeBifR5csw&usqp=CAU', follow: true, name: 'Sergey', status:'I am a free', location:{city:'Novosibirsk', country:'Russia'} },
    ])
  }
  
  return (
    <div>
      {props.friends.map((friend) => (
        <div key={friend.id}>
          <div>
            <img className={classes.avatar_img} src={friend.photoUrl} alt="" />
            <div>{friend.follow 
            ? <button onClick = {()=>{props.unfollow(friend.id)}}>UnFollow</button> 
            : <button onClick = {()=>{props.follow(friend.id)}}>Follow</button>}
            </div>
            <div className={classes.friend_info_status}>
              <div>{friend.name}</div>
              <div style={{ position: 'absolute', bottom: '-70px' }}>
                {friend.status}
              </div>
            </div>

            <div className={classes.friend_info_location}>
              <div>{friend.location.city}</div>
              <div style={{ position: 'absolute', bottom: '-70px' }}>
                {friend.location.country}
              </div>
              
            </div>
        
          </div>

          
        </div>
      ))}
    </div>
  )
}

export default Friends
