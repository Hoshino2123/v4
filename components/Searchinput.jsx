import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'

import { icons } from '../constants'

const Searchinput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)

  return (
      <View className="border-1 border-black-100 w-64 h-10 px-10  bg-black-200 rounded-full focus:bg-blue-300     items-center flex-row-reverse  ">
        <TextInput
            className="flex-1  text-yellow-100 font-psemibold text-base"
            value={value}
            placeholder="Sugestões para si"
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
       
       <TouchableOpacity>
        <Image
        source={icons.search}
        className='w-5 h-5 left-48'
        resizeMode='contain'
        />
        
        </TouchableOpacity>   
        
      

      </View>

  )
}
export default Searchinput;