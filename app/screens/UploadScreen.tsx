import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

const UploadScreen = ({ onFinish, progress = 0, visible = false }: any) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            style={styles.animation}
            autoPlay
            onAnimationFinish={onFinish}
            loop={false}
            source={require('../assets/animations/done.json')}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  animation: {
    width: 250,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
