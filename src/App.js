import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shop from './components/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SingUpIn from './pages/signUpInPage/signUpInPage.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.util.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action.js';
import {selectCurrentUser} from './redux/user/user.selector.js';
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/checkout.component.jsx';
class App extends React.Component {
  
  
  unsubscribeFromAuth=null;
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
            currentUser:{
              id:snapShot.id,
              ...snapShot.data(),
            }
          },()=>{
            console.log(this.state);
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
            <Route exact path="/signin" render={() => 
                                                    this.props.currentUser?
                                                    (<Redirect to='/' />)
                                                    :(<SingUpIn/>)}/>
        </Switch>
        
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
