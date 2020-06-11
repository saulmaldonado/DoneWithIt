import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, SectionList, FlatList } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';

const profile = {
  image: require('../assets/mosh.jpg'),
  title: 'Mosh Hamedani',
  subTitle: 'programmingwithmosh@gmail.com',
};
const pages = [
  {
    title: 'My Listings',
    iconName: 'format-list-bulleted',
    iconColor: colors.primary,
  },
  {
    title: 'My Messages',
    iconName: 'email',
    iconColor: colors.secondary,
  },
];
const MyAccountScreen = () => {
  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <ProfileCard
        profileIcon={profile.image}
        title={profile.title}
        subTitle={profile.subTitle}
        onPress={() => console.log('Account card pressed')}
        style={{ marginTop: 20 }}
      />
      <View style={styles.pages}>
        <FlatList
          data={pages}
          renderItem={({ item }) => (
            <ProfileCard
              title={item.title}
              IconComponent={<Icon name={item.iconName} backgroundColor={item.iconColor} />}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ListItemSeparator}
        ></FlatList>
      </View>
      <ProfileCard
        title='Logout'
        IconComponent={<Icon name='logout' backgroundColor={colors.warning} />}
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  pages: {
    marginTop: 40,
    marginVertical: 25,
  },
});
