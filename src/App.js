import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shop from './components/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SingUpIn from './pages/signUpInPage/signUpInPage.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.util.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser:'',
    };
  }
  unsubscribeFromAuth=null;
  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser:{
              id:snapShot.id,
              ...snapShot.data(),
            }
          },()=>{
            console.log(this.state);
          });
        });
      } else {
        this.setState({ currentUser:userAuth});
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path="/signin" component={SingUpIn}/>
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
