import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView,  FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants';
import Searchinput from '../../components/Searchinput';





const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
    

      <View className="mt-1">
      <Image
      source={images.logoSmall}
      className="justify-start w-24 h-10"    
      resizeMode='contain'
/>
      <Image
       source={images.bell}
       className="justify-end w-10 h-10 bg-blue-400 left-80"
      />
      </View>

<Searchinput />
    </SafeAreaView>

  
  )
}

export default Home