import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { useContext } from 'react';
import { AuthContext, IAuthContext } from '../context/AuthContext';

const MyNavbar = () => {

    const { user, signIn, signOut } = useContext<IAuthContext>(AuthContext)

    console.log('user', user)
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='d-flex align-items-center justify-content-center'>
                <Navbar.Brand href="#">
                    <img className='' src="/logo-teatro-summarte.png" alt="" style={{ height: 50}} />
                </Navbar.Brand>
                {/* {
                    user ?
                    <div>
                        {user.displayName}
                        <Image src={user.photoURL ? user.photoURL : ''} roundedCircle alt="" style={{ height: 35, width: 35}}/>
                        <Button onClick={() => signOut()}>Sign Out</Button>
                    </div>
                    :
                    <Button onClick={() => signIn()}>Login</Button>
                } */}
            </Container>
        </Navbar>
    );
}

export default MyNavbar;