// import { useEffect, useState } from 'react';
// import fetchUsers from './fetchUsers';

// const TutorsList = () => {
//     const [userList, setUserList] = useState([]);

//     useEffect(() => {
//       // Retrieve a list of all signed-in users
//       const fetchUserList = async () => {
//         const users = await fetchUsers();
//         setUserList(users);
//       };
  
//       fetchUserList();
//     }, []);

//   return (
   
// <View> 
//       <Text>All Users</Text>
//       <View>
//         {userList.map((user) => (
//           <View key={user.uid}>
//             <Text>Name: {user.displayName}</Text>
//             <Text>Email: {user.email}</Text>
//             <Text>UID: {user.uid}</Text>
//           </View>
//         ))}
//       </View>
// </View>
//   );
// };

// export default TutorsList;


