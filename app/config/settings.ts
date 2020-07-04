import Constants from 'expo-constants';

const setting = {
  dev: {
    apiUrl: 'http://192.168.29.192:8000/api/v1',
  },
  staging: {
    apiUrl: 'http://192.168.29.192:8000/api/v1',
  },
  prod: {
    apiUrl: 'http://192.168.29.192:8000/api/v1',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return setting.dev;
  }
  if (Constants.manifest.releaseChannel === 'staging') {
    return setting.staging;
  } else {
    return setting.prod;
  }
};

export default getCurrentSettings();
