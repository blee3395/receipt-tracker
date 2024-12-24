/**
 * Sample React Native App
 * https://github.ci geom/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CameraMode } from './src/views/CameraMode';

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

const Section = ({ children, title }: SectionProps): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      {title && (
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
      )}
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = (): React.JSX.Element => {
  const [showCamera, setShowCamera] = useState(true);

  const toggleCamera = () => {
    setShowCamera((prev) => !prev);
  };

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaView style={styles.root}>
          {showCamera ? (
            <Section>
              <CameraMode />
            </Section>
          ) : (
            <Text>Camera is not active</Text>
          )}
          <View style={styles.buttonContainer}>
            <Button title="Toggle Camera" onPress={toggleCamera} />
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 24,
    marginHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Position it 20px from the bottom
    left: 0,
    right: 0,
    alignItems: 'center', // Centers the button horizontally
  },
});

export default App;
