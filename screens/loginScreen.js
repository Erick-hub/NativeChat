import React from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSigninButton,
  GoogleSignIn,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  // Initialize google sign in
  //!  returning undefined, can't reach firestore
  //TODO Fix it

  GoogleSignIn.configure({
    webClientId:
      '481695809251-6i0s6llermji9sfkgprug23l1uoltrjl.apps.googleusercontent.com',
  });

  const handleLogin = async () => {
    try {
      const {idToken} = await GoogleSignIn.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <GoogleSignInButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#151718',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {width: 225, height: 60},
});

export default LoginScreen;
