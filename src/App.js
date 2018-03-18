import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {
    state={ loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCiySoXHVY6svNN2yhe5E8NNRLKdziaYBM",
            authDomain: "authenticationr-n.firebaseapp.com",
            databaseURL: "https://authenticationr-n.firebaseio.com",
            projectId: "authenticationr-n",
            storageBucket: "authenticationr-n.appspot.com",
            messagingSenderId: "739193999883"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true});
            }else{
              this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn){
          case true:
            return (
                <CardSection>
                    <Button onPress={()=> firebase.auth().signOut()}>
                        Log out
                    </Button>
                </CardSection>
            );
          case false:
            return <LoginForm/>;
          default:
              return <Spinner size="large"/>;
        }

    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }

}
export default App;