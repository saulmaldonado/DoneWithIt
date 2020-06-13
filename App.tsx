import React, { useState } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetails from './app/screens/ListingDetails';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/components/Icon';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { AppForm, SubmitButton } from './app/components/forms';
import AppFormPicker from './app/components/forms/AppFormPicker';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
  { label: 'None', value: null },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetails
        image={require('./app/assets/jacket.jpg')}
        title='Red jacket for sale'
        subTitle='$100'
      /> */}
      {/* <MessagesScreen /> */}
      {/* <MyAccountScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}

      <AppForm
        initialValues={{ category: undefined, category2: undefined }}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormPicker icon='apps' items={categories} name='category' placeholder='category' />
        <AppFormPicker icon='apps' items={categories} name='category2' placeholder='category' />
        <SubmitButton title='submit' />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
