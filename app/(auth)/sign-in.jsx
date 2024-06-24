import { Image, ScrollView, Text, View, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { router } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import Botao from "../../components/Botao";


const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
})

  const [isSubmitting, setisSubmitting] = useState(false)

  //Faz o Sign up
  const submit = async () =>{

    if(!form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setisSubmitting(true);
    
    
    try {
      // await SignIn (form.email, form.password)
      
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally{
      setisSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-black  h-full">
      <ScrollView>
        <View className="w-full justify-left items-topleft h-full px-6 my-2">
          <Image source={images.logo} className="w-120 h-120" />
          <Text className="text-2xl  text-white">Log in to Onevent today</Text>
          <FormField
          // Apply consistent styles to all FormField components
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-9"
            keyboardType="email-address"
          />
          <FormField

            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,password: e })}
            otherStyles="mt-9"
          />

          <Botao
            title="Iniciar sessão"
            alignItems="center"
            justifyContent="center"
            containerStyles="max-w-48 justify-center mt-7 rounded-full "
            handlePress={submit}
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-blue-500"
            >Signup</Link>

          </View>
          <Text className="text-center mt-4 text-yellow-50">Problemas em iniciar sessão?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
