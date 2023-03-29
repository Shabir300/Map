import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
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
      console.log(location)
      setLocation(location.coords);
    })();
  }, []);

  if (location) {
    var text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={location} title={'You'}></Marker>
      </MapView>
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