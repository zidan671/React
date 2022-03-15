import classes from './Header.module.css'


const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="./logo.png"
        alt=""
      />
    </header>
  )
}


export default Header