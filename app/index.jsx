import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import Botao from "../components/Botao";

export default function App() {
  return (
    <>
      <SafeAreaView className="bg-primary w-full h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-full 5px">
            <Image source={images.logo} className="w-120 h-120" />
            <Text className="relative mt-6"></Text>
            <Text className="text-3xl text-yellow-50 font-bold justify-center mb-10">
              Welcome to {""}
              <Text className="text-blue-500 ">Onevent</Text>
            </Text>
            
            <Botao
              title="Criar conta"
              handlePress={() => router.push("/sign-up")}
              containerStyles="w-64 mt-1 rounded-full"
            />

            <Botao
              title="Iniciar Sessão"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-64 m-5 rounded-full"
            />
         
            <Text className="text-center text-yellow-50">Problemas em iniciar sessão?</Text>
          </View>
        </ScrollView>

        <StatusBar backgroundColor="black" style="light" />
      </SafeAreaView>
    </>
  );
}
