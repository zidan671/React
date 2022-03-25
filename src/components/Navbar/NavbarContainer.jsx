
import StoreContext from '../../StoreContext';
import Navbar from './Navbar';



const NavbarContainer = () => {
  
  
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState()
        return <Navbar navBarPage={state.navBarPage}/>
      }
      }
    </StoreContext.Consumer>
  )
}

export default NavbarContainer
