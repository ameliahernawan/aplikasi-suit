import { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Text, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormComponent({ state }) {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => setSecureTextEntry((prev) => !prev);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          Handy: require('../assets/HandyCasual.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font:', error);
      }
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      {state === 'register' && <TextInput style={styles.formComponent} placeholder="Username" value={username} onChangeText={setUserName} autoCorrect={false} />}
      <TextInput style={styles.formComponent} placeholder="Email" value={email} onChangeText={setEmail} autoCorrect={false} autoCapitalize="none" />
      <TextInput style={[styles.formComponent, { marginBottom: '50' }]} placeholder="Password" value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize="none" secureTextEntry />

      {state === 'register' ? (
        <>
          <View style={{ paddingTop: 275 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.groupText1}>
            <Text style={[styles.text, { color: 'white' }]}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('login')}>
              <Text style={[styles.text, { color: 'gold', fontWeight: 'bold' }]}> Login</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          <View style={styles.groupText1}>
            <Text style={[styles.text, { color: 'white' }]}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('register')}>
              <Text style={[styles.text, { color: 'gold', fontWeight: 'bold' }]}> Register now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C4CC',
    padding: 20,
  },
  formComponent: {
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    elevation: 5,
  },
  button: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
  },
  groupText1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  textHighlight: {
    color: 'gold',
    fontWeight: 'bold',
    marginLeft: 5,
    fontFamily: 'Handy',
  },
});
