import React, { ReactNode, FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ImageComponent,
  StyleProp,
  ViewStyle,
} from 'react-native';
import fonts from '../config/fonts';
import colors from '../config/colors';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ProfileCard = ({
  profileIcon,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}: ProfileCardProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.profileCard, style]}>
          {IconComponent}
          {profileIcon && <Image source={profileIcon} style={styles.profileIcon} />}
          <View style={styles.profileText}>
            <Text style={styles.name}>{title}</Text>
            {subTitle && <Text style={styles.listings}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  profileIcon: {
    height: 75,
    width: 75,
    borderRadius: 75,
  },
  profileText: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 13,
    fontFamily: fonts.primary,
  },
  listings: {
    fontSize: 13,
    fontFamily: fonts.primary,
    color: '#a9a9a9',
  },
});

interface ProfileCardProps {
  profileIcon?: any;
  title: string;
  subTitle?: string;
  IconComponent?: JSX.Element;
  onPress?: () => void;
  renderRightActions?: () => ReactNode;
  style?: StyleProp<ViewStyle>;
}
