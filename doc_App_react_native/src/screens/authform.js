// src/screens/AuthScreen.js
/*import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SignInForm from '../composants/signinform'; // Assurez-vous que le chemin est correct
import SignUpForm from '../composants/signupform'; // Assurez-vous que le chemin est correct


const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(false);
  
    const toggleForm = () => {
      setIsSignUp((prev) => !prev);
    };
  
    return (
      <View style={styles.container}>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <Button
          title={isSignUp ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
          onPress={toggleForm}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#fff',
    },
  });
  
  export default AuthScreen;
  */
 // src/screens/AuthScreen.js
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SignInForm from '../composants/signinform'; // Assurez-vous que le chemin est correct
import SignUpForm from '../composants/signupform'; // Assurez-vous que le chemin est correct

const AuthScreen = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSignInSuccess = () => {
    navigation.replace('TabView'); // Naviguer vers TabView après connexion réussie
  };

  return (
    <View style={styles.container}>
      {isSignUp ? <SignUpForm onSwitch={toggleForm} /> : <SignInForm onSignInSuccess={handleSignInSuccess} />}
      <Button
        title={isSignUp ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
        onPress={toggleForm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default AuthScreen;