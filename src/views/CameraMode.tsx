import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

export const CameraMode = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice('back');

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (device == null) {
    return <Text>Loading camera...</Text>;
  }

  return (
    <View style={styles.absoluteFill}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={device && hasPermission}
        onInitialized={() => {
          console.log('Camera Initialized...');
        }}
        onError={() => {
          console.error('Error with camera...');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    flexGrow: 1,
    aspectRatio: 16 / 9,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
