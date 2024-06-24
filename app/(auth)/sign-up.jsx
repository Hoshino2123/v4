import {  Image,  Text, StyleSheet, View, Button, ScrollView , Dimensions, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import Botao from '../../components/Botao';
import axios from 'axios';

// import { insertUser } from '../../database/Onevent'; // Importe as funções do db.js





  const Signup = () => {
    

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const createUser =  async (username, email, password) => {
    try {
      let body = { username, email, password }
     
  const response = await axios.post('http://192.168.1.65:3000/api/signup', body, {
        headers: {
            'Accept': 'application/json',
'Content-Type': 'application/json'
        }
});
        console.log(response.data);
        alert('User created successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to create user.');
      }
    };
    const handleSubmit = async () => {
     if (username && email && password) 
      try {
        await signup(form.username, form.email, form.password);
        alert('User created successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to create user.');
      }
    };
    const [isLogged, setIsLogged] = useState(false);

    const submit = async () => {
      if (form.username === "" || form.email === "" || form.password === "") {
        Alert.alert("Error", "Please fill in all fields");
      }
      
        //...
        try {
          const result = await createUser(form.username, form.email, form.password);
          setIsLogged(true); // Update the isLogged state variable
          router.replace('/home');
        } catch (error) {
          Alert.alert("Error", error.message);
        } finally {
          setSubmitting(false);
        }
     
      };

  


  return (
    <SafeAreaView className="bg-black  h-full">
      <ScrollView>
        <View className="w-full justify-left items-topleft h-full px-6 my-2">
        <Image
      source={images.logo}
      className="w-120 h-120"
      />
      <Text className="text-2xl  text-white">Sign up  to Onevent today, it's free, so signup rigth now</Text>
            <FormField
        // Apply consistent styles to all FormField components
            
            label="Username"
            title="Username"
            placeholder="Write your user here"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,username: e })}
            otherStyles="mt-10"
          keyboardType='email-adress'
            />
            <FormField
            // Apply consistent styles to all FormField components

            label="Email"
            title="Email"
            placeholder="Write your email here : (ex: nome@exemplo.com)"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,email: e })}
            otherStyles="mt-7"
            keyboardType='email-adress'
          />
          
        
          <FormField
            label="Password"
            title="Password" // Corrected title
            placeholder="Write your password here"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
          />
          <Botao
          title="Sign up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
           />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
            Hey! Have an account already? 
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary">Sign in</Link>
             </View>
             </View>
 
            </ScrollView>
           </SafeAreaView>
 );
};


export default Signup;