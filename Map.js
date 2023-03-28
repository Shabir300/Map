import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location);
    })();
  }, []);

  if (location) {
    var text = JSON.stringify(location);
  }

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
    height: '95%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});