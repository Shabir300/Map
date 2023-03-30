
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Map from './Map';
import tw from 'tailwind-react-native-classnames'
import ClassOptions from './components/ClassOptions';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Signup';
import Login from './Login';
import TutorsList from './TutorsList';
import UsersData from './UsersData';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <>
    <View style={tw`px-5 pt-3`}>
      {/* <Text style={tw`text-2xl text-center font-thin`}>
        Quran Mentor
      </Text> */}
      <View style={tw`pt-6`}>

        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={tw`opacity-30 text-xl`}>Sign up!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={tw`opacity-30 text-xl`}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('usersData')}>
          <Text style={tw`opacity-30 text-xl`}>Tutors</Text>
        </TouchableOpacity>


          <Text style={tw`text-3xl font-extralight `}>find ur Deeni Tutor</Text>
      </View>

      <View style={tw`pt-4`}>
        <Text style={tw`uppercase opacity-40 `}>Type Here</Text>
        <View style={tw``}>
          <TextInput 
            value=''
            placeholder='Your Area'
            style={tw`border opacity-75 rounded-full px-5 py-1 my-2`}
            />
          <TextInput
            value=''
            placeholder='Tutor Area'
            style={tw`border opacity-75 rounded-full px-5 py-1 my-2`}
          />
          <View style={tw`flex flex-row pt-5 pl-4`}>
            <Text style={tw`mr-5  text-xl opacity-50  `}>Price</Text>
            <View style={tw`flex flex-row items-center`}>
              <TextInput
                value=''
                placeholder='min'
                style={tw`mr-5 border rounded-full px-5 `}
                />
              <Text style={tw`mr-4`}>to</Text>
              <TextInput
                value=''
                placeholder='max'
                style={tw` border rounded-full px-5 `}
                />
            </View>
          </View>
          <View style={{width: 160, marginHorizontal: 70}}>
            <TouchableOpacity style={{display: 'flex', justifyContent: 'center'}}>
              <Text style={tw`text-center mt-8 mb-0 font-thin 
              border pt-1 py-3 rounded-full bg-black text-white`}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

<Map />
</>
  );
}

export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="usersData" component={UsersData} />
        {/* <Stack.Screen name="tutorslist" component={TutorsList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
