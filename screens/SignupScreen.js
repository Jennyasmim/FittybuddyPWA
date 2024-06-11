import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Adicione a lógica de cadastro aqui
    navigation.navigate('Login');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.loginTitle}>
          <Image source={{uri:'https://github.com/PhYllipepdm/FittyBuddy/blob/main/img/FITTYBUDDY.jpg?raw=true'}} style={styles.logo} />
          <Text style={styles.title}>FittyBuddy</Text>
        </View>
        <Text style={styles.subtitle}>Crie sua conta para começar</Text>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.ou}>--- ou ---</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Voltar ao Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f5fd',
  },
  container: {
    padding: 20,
    width: 350,
    height: 700,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
  },
  loginTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: { 
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: 'center', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#364670',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#364670',
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#364670',
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: 175,
    alignSelf: 'center', 
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ou:{
    fontSize: 14,
    color: '#364670',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  }
});
