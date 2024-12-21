import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Text, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormComponent({ state }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {state === 'register' && <TextInput style={styles.formComponent} placeholder="Username" value={username} onChangeText={setUserName} autoCorrect={false} />}
      <TextInput style={styles.formComponent} placeholder="Email" value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize="none" />
      <TextInput style={styles.formComponent} placeholder="Password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry />

      {state === 'register' ? (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.groupText1}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={navigation.navigate('login')}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.groupText1}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity onPress={navigation.navigate('register')}>
              <Text style={styles.text}>Register now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formComponent: {
    backgroundColor: '#FAFBFD',
    borderRadius: 5,
    fontSize: 14,
    paddingVertical: 22,
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 700,
    margin: 12,
  },
  groupText1: {
    alignItems: 'center',
    margin: 18,
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
});
