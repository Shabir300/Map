import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {app, database} from './firebaseConfig';
import {collection, addDoc, getDocs} from 'firebase/firestore';



const UsersData = () => {
    const [data, setData] = useState(null);
    const collectionRef = collection(database, 'users');
  
    useEffect(() => {
      getDocs(collectionRef)
        .then((response) => {
          console.log(
            response.docs.map((item) => {
              return item.data();
            })
          );
          setData(response.docs);
        })
    }, []);
  


    const tutorsData = () => {
        if (data === null) {
          return [];
        }
        return data.map((item) => {
          const { name, email, phone } = item.data();
          return `${name}: ${email} - ${phone}`;
        });
      };

      
  
    return (
  <View>
    <Text>Tutors List</Text>
    {tutorsData().map((item, index) => (
      <Text key={index}>{item}</Text>
    ))}
  </View>
);



  };
  
  export default UsersData;
  