import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { AccountNavigatorParamsList } from '../navigation/AccountNavigator';
import { routes } from '../navigation/routes';
import AuthContext from '../auth/context';
import UserApi from '../api/user';
import { ApiResponse } from 'apisauce';
import { UserRes } from '../api/schemas/user';

type User = {
  title: string;
  iconName: string;
  iconColor: string;
  screen: keyof AccountNavigatorParamsList;
};

const pages: User[] = [
  {
    title: 'My Listings',
    iconName: 'format-list-bulleted',
    iconColor: colors.primary,
    screen: routes.ACCOUNT,
  },
  {
    title: 'My Messages',
    iconName: 'email',
    iconColor: colors.secondary,
    screen: routes.MESSAGES,
  },
];

type MyAccountScreenNavigationProp = StackNavigationProp<
  AccountNavigatorParamsList,
  routes.ACCOUNT
>;
type MyAccountScreenProps = {
  navigation: MyAccountScreenNavigationProp;
};

let profile = {
  image: require('../assets/mosh.jpg'),
  title: 'Mosh Hamedani',
  subTitle: 'programmingwithmosh@gmail.com',
};

const MyAccountScreen = ({ navigation }: MyAccountScreenProps) => {
  const auth = useContext(AuthContext);

  const [currentProfile, setProfile] = useState(profile);

  const getCurrentUser = async () => {
    const id = auth?.user?.userId;

    if (id) {
      const { data } = (await UserApi.getUser(id)) as ApiResponse<UserRes>;
      if (data) {
        setProfile({ image: profile.image, title: data.name, subTitle: data.email });
      }
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <ProfileCard
        profileIcon={currentProfile.image}
        title={currentProfile.title}
        subTitle={currentProfile.subTitle}
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
              onPress={() => navigation.navigate(item.screen)}
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
