// import React from 'react'
// import {Text, View, TouchableOpacity, TextInput} from 'react-native'
// import { useState } from 'react'
// import MapView from 'react-native-maps';


// const styles = {
//     start: {
//         marginTop: '1.5rem',
//         fontSize: '1rem',
//         marginBottom: '.3rem',
//         paddingInline: '1rem',
//         opacity: '.6',
//         textTransform: 'uppercase'
//     },
//     end: {
//         marginTop: '',
//         fontSize: '1rem',
//         marginBottom: '.8rem',
//         paddingInline: '1rem',
//         opacity: '.6',
//         textTransform: 'uppercase'
//     },
//     textInput: {
//         color: 'grey',
//         border: '1px solid grey',
//         borderRadius: '20px',
//         width: '75%',
//         marginInline: '1rem',
//         paddingInline: '1rem',
//         marginBottom: '1rem',
//         paddingBlock: '.5rem'
//     }, 
//     sameAreaBtn: {
//         marginLeft: '-4.3rem',
//         opacity: '.3',
//         textTransform: 'lowercase',
//         paddingBottom: '1rem'

//     },
//     areaDiv: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',

//     },
//     pricing: {
//         paddingLeft: '2rem',
//         paddingRight: '.4rem',
//         textTransform: 'capitalize',
//         opacity: '0.8',
//         fontSize: '1.3rem',
//         fontWeight: 'lighter'
//     },
//     priceDiv: {
//         display: 'flex',

//     },
//     priceInput: {
//         color: 'grey',
//         border: '1px solid grey',
//         borderRadius: '20px',
//         width: '17%',
//         marginInline: '1rem',
//         paddingInline: '1rem',
//         marginBottom: '1rem',
//         paddingBlock: '.5rem'
//     },
//     searchBtn: {
//         width: 'fit-content',
//         marginInline: 'auto',
//         marginBlock: '1rem',
//         paddingBlock: '.6rem',
//         paddingInline: '1.4rem',
//         textTransform: 'uppercase',
//         border: '1px solid black',
//         backgroundColor: 'black',
//         borderRadius: '15px'

//     }
// }

// const AreaSelection = () => {
//     return (
//         <View>
//             {/* MAP */}
//             <Text style={styles.start}>Select on Map</Text>
//             <View style={{flex: 1,}}>
//                 <MapView style={{ width: '100%', height: '30%', }} />
//             </View>
//             <View>
//                 <Text style={styles.end}>or type here</Text>
//                 <TextInput 
//                     placeholder='your Area'
//                     value=''
//                     style={styles.textInput}
//                 />
//                 <View style={styles.areaDiv}>

//                     <TextInput 
//                     placeholder='tutor Area'
//                     value=''
//                     style={styles.textInput}
//                     />
//                     <TouchableOpacity style={styles.sameAreaBtn} >
//                         <Text>Same</Text>
//                     </TouchableOpacity>
//                 </View>

//                 {/* PRICING */}
//                 <View style={{ flexDirection: 'row', }}>
//                     <View>
//                         <Text style={styles.pricing}>
//                             Price
//                         </Text>
//                     </View>

//                     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                         <TextInput 
//                             value=''
//                             placeholder='min'
//                             style={styles.priceInput}
//                         />
//                         <Text style={{paddingBottom: '17px', opacity: '.7'}}>to</Text>
//                         <TextInput 
//                             value=''
//                             placeholder='max'
//                             style={styles.priceInput}
//                         />
//                     </View>
//                 </View>

//                 {/* SEARCH BUTTON */}

//                 <View>
//                     <TouchableOpacity style={styles.searchBtn}>
//                         <Text style={{color: 'white', fontWeight: 'lighter', letterSpacing: '1px'}}>Search</Text>
//                     </TouchableOpacity>
//                 </View>
                
//             </View>
//         </View>
//     )
// }

// export default AreaSelection;


import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});




