import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import ProfileCard from '../components/ProfileCard';
import fonts from '../config/fonts';
import { FeedNavigatorParamsList } from '../navigation/FeedNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { routes } from '../navigation/routes';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import { sendMessage } from '../api/messages';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import * as yup from 'yup';

type ListingDetailsNavigationProp = StackNavigationProp<
  FeedNavigatorParamsList,
  routes.LISTING_DETAILS
>;

type ListingDetailsRouteProp = RouteProp<FeedNavigatorParamsList, routes.LISTING_DETAILS>;

type ListingDetailsProps = {
  navigation: ListingDetailsNavigationProp;
  route: ListingDetailsRouteProp;
};

const validationSchema = yup.object().shape({
  content: yup.string().required().max(700).label('Message'),
});

const ListingDetails = ({
  route: {
    params: { images, title, price, id },
  },
}: ListingDetailsProps) => {
  const profileImage = require('../assets/default-profile.png');
  const profileName = 'Mosh Hamedani';

  return (
    <View style={styles.page}>
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
        style={{ flex: 1 }}
      >
        <Image uri={images[0].full} style={styles.image} />
        <View style={styles.container}>
          <View style={styles.itemInfo}>
            <Text style={styles.text}>{title}</Text>
            <Text style={{ ...styles.text, color: 'green' }}>${price}</Text>
          </View>
          <ProfileCard
            profileIcon={profileImage}
            title={profileName}
            subTitle={'5 Listings'}
            onPress={() => console.log('Card Tapped')}
          />
          <AppForm<{ content: string }>
            initialValues={{
              content: '',
            }}
            onSubmit={({ content }) =>
              sendMessage({ content, dateTime: Date.now(), listingId: id })
            }
            validationSchema={validationSchema}
          >
            <AppFormField
              name='content'
              placeholder={'Message...'}
              maxLength={700}
              multiline
              numberOfLines={3}
              scrollEnabled
              style={{ backgroundColor: colors.white, borderRadius: 10, maxHeight: 90 }}
            />
            <SubmitButton title='Contact Seller' />
          </AppForm>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f8f4f4',
    flex: 1,
  },
  image: {
    height: '40%',
    width: '100%',
  },
  container: {
    height: '60%',
  },
  itemInfo: {
    marginLeft: 15,
    display: 'flex',
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary,
  },
});
