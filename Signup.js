import React, { useState, useEffect } from "react";
import { TextInput, Button, Alert, Text, View, StyleSheet } from "react-native";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { setCustomUserClaims } from "firebase/functions";
import { app, auth } from './firebaseConfig';
import { Picker } from "@react-native-picker/picker";
import tw from 'tailwind-react-native-classnames';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Map from "./Map";
import * as Location from 'expo-location';



const Signup = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [locationText, setLocationText] = useState('')
  const [errorMsg, setErrorMsg] = useState(null);

  // const auth = getAuth(app);
  const firestore = getFirestore();
  // const db = firebase.firestore();


  // firebase.auth().setLogLevel('debug');



  const [location, setLocation] = useState({
    latitude: 34.0,
    longitude: 74.0,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });



  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      // console.log(location)
      setLocation(location.coords);
    })();
  }, []);

  const handleSignUp = (name, phone, email, password, subject1, subject2, subject3, subject4, location) => {
    try {
      const userCredential = createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDocRef = doc(firestore, "users", name);
      const userData = {
        name: name,
        email: email,
        gender: gender,
        phone: phone,
        age: age,
        location: location,
        subject: { subject1, subject2, subject3, subject4 },
      };
      //setDoc(userDocRef, userData);



      //   await db.collection('users').doc(firebase.auth().currentUser.uid).set({
      //     location: new firebase.firestore.GeoPoint(location.latitude, location.longitude),
      //   });

      // navigate to home screen
      // navigation.navigate('Home');
      // Set the user's display name and custom claims (subjects)
      //   await updateProfile(user, { displayName: name });
      //   await setCustomUserClaims(user.uid, { subjects: subjects });
      Alert.alert("Signed up!");
      // Do something after sign up success, such as navigate to a new screen or update the user profile
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Sign up failed:", errorMessage);
      // Do something after sign up failure, such as display an error message or clear the form fields
    }
  }


  const handleSignUpPress = () => {
    handleSignUp(name, email, password, subject1, subject2, subject3, subject4, location);
  }



  // useEffect(() => {
  //     (async () => {
  //       let { status } = await Location.requestForegroundPermissionsAsync();

  //       if (status !== 'granted') {
  //         Alert.alert('Permission to access location was denied');
  //         return;
  //       }

  //       try {
  //         let locationData = await Location.getCurrentPositionAsync({});
  //         setLocation({
  //             latitude: 33.7, 
  //             longitude: 73,
  //         });

  //       } catch (error) {
  //         console.log(error);
  //         Alert.alert('Error retrieving location data');
  //       }
  //     })();
  //   }, []);


  // const { latitude, longitude } = location?.coords || {};



  // useEffect(() => {
  //     (async () => {

  //       let { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== 'granted') {
  //         setErrorMsg('Permission to access location was denied');
  //         return;
  //       }

  //       let location = await Location.getCurrentPositionAsync();
  //       setLocation(location);
  //     })();
  //   }, []);

  //   let text = 'Waiting..';
  //   if (errorMsg) {
  //     text = errorMsg;
  //   } else if (location) {
  //     text = JSON.stringify(location);
  //   }




  // useEffect(() => {
  //     getLocationAsync();
  //   }, []);

  //   const getLocationAsync = async () => {
  //     const { status } = await Location.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.error('Permission to access location was denied');
  //       return;
  //     }

  //     const { coords } = await Location.getCurrentPositionAsync({});
  //     setLocation(coords);
  // };

  // console.log(coords)


  return (
    <>
      <Text style={tw`text-3xl text-center font-thin pt-5`}>Sign Up!</Text>
      <Text style={tw` text-center opacity-30 pt-1 pb-8`}>for a new account</Text>

      <TextInput
        placeholder="Name"
        onChangeText={setName}
        value={name}
        style={tw`px-5 py-1 ml-2 border rounded-full mr-28 my-1`}
      />
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

      <TextInput
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
        keyboardType={'numeric'}
        style={tw`px-5 py-1 ml-2 border rounded-full mr-28 my-1`}
      />


      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Select Gender" value={null} />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Male" value="male" />
      </Picker>


      {/* <TextInput
        placeholder="Age"
        onChangeText={setAge}
        value={age}
        keyboardType='numeric'
        style={tw`px-5  ml-2 border rounded-full mr-28 mb-4`}
      /> */}



      {/* MAP START  */}

      <Map />

      {/* MAP END */}





      {/* <Picker
        selectedValue={subject1}
        onValueChange={(itemValue) => setSubject1(itemValue)}
      >
        <Picker.Item label="Select Subject 1" value={null} />
        <Picker.Item label="Qaida" value="qaida" />
        <Picker.Item label="Quran" value="quran" />
        <Picker.Item label="Tafseer" value="tafseer" />
        <Picker.Item label="Fiqa" value="Fiqa" />

      </Picker>

      <Picker
        selectedValue={subject2}
        onValueChange={(itemValue) => setSubject2(itemValue)}
      >
        <Picker.Item label="Select Subject 2" value={null} />
        <Picker.Item label="Qaida" value="qaida" />
        <Picker.Item label="Quran" value="quran" />
        <Picker.Item label="Tafseer" value="tafseer" />
        <Picker.Item label="Fiqa" value="Fiqa" />

      </Picker>

      <Picker
        selectedValue={subject3}
        onValueChange={(itemValue) => setSubject3(itemValue)}
      >
        <Picker.Item label="Select Subject 3" value={null} />
        <Picker.Item label="Qaida" value="qaida" />
        <Picker.Item label="Quran" value="quran" />
        <Picker.Item label="Tafseer" value="tafseer" />
        <Picker.Item label="Fiqa" value="Fiqa" />

      </Picker>


      <Picker
        selectedValue={subject4}
        onValueChange={(itemValue) => setSubject4(itemValue)}
      >
        <Picker.Item label="Select Subject 4" value={null} />
        <Picker.Item label="Qaida" value="qaida" />
        <Picker.Item label="Quran" value="quran" />
        <Picker.Item label="Tafseer" value="tafseer" />
        <Picker.Item label="Fiqa" value="Fiqa" />

      </Picker> */}

      <Button
        title="Sign up" onPress={handleSignUpPress}
      />
    </>
  );
};


const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#f0f0f1',
    color: '#333',
    height: 50,
    width: 200,
    borderColor: 'hwb(70 50% 0%)',
    borderWidth: 5,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
  },
  pickerItem: {
    borderColor: 'hwb(70 50% 0%)',
    borderWidth: 5,
    color: '#333',
    fontSize: 16,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


export default Signup;