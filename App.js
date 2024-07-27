import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from './src';
import { askForLocation } from './src/location';
import { useEffect, useState } from 'react';


export default function AppShell() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    askForLocation().then((location) => {
      setLocation(location);
    });
  }, []);

  return (
    <View style={styles.container}>
      <App location={location} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
