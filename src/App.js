import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCiySoXHVY6svNN2yhe5E8NNRLKdziaYBM",
            authDomain: "authenticationr-n.firebaseapp.com",
            databaseURL: "https://authenticationr-n.firebaseio.com",
            projectId: "authenticationr-n",
            storageBucket: "authenticationr-n.appspot.com",
            messagingSenderId: "739193999883"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }

}
export default App;