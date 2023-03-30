import React, {useState} from 'react';
import { View, Alert, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { app } from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

const auth = getAuth();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('')
    
// const handleLoginPress = (email, password) => {


//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in 
//           const user = userCredential.user;
//           Alert.alert('Sucessfully Logged In!')
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           Alert.alert(error.message)
//         });


// }


const handleLogin = async ( email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // navigate to home screen
      // navigation.navigate('Home');
      
      Alert.alert("Logged In!");
      // Do something after sign up success, such as navigate to a new screen or update the user profile
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("LogIn failed:", errorMessage);
      // Do something after sign up failure, such as display an error message or clear the form fields
    }
  }


  const handleLoginPress = () => {
    handleLogin( email, password);
  }





    return (
<View>

        <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={tw`px-5 py-1 ml-2 border rounded-full mr-28 my-1`}
        />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={tw`px-5 py-1 ml-2 border rounded-full mr-28 my-1`}
        />

        <Button
        title="Login"
        onPress={handleLoginPress}
        />
</View>
    )
}

export default Login;