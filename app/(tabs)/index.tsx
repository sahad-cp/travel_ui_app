import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import {useHeaderHeight} from '@react-navigation/elements'




const Page = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{
        headerTransparent:true,
        headerTitle:"",
       headerLeft:()=>(
        <TouchableOpacity style={{marginLeft:20}} >
          <Image 
          source={{uri:'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2023/01/cat-midjourney.jpg?key=13f0611b'}}
          style={{width:40,height:40,borderRadius:10}}
          />
        </TouchableOpacity>
       ),
       headerRight:()=>(
        <TouchableOpacity style={{
          marginRight:20,
          backgroundColor:Colors.white,
          padding:10,
          borderRadius:10,
          shadowColor:'#171717',
          shadowOffset:{width:2,height:4},
          shadowOpacity:0.2,
          shadowRadius:3
          }} >
        <Ionicons name='notifications' size={20} color={Colors.black}/>
      </TouchableOpacity>
       )
      }}/>
      <View style={[styles.container,{paddingTop:headerHeight}]}>
        <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name='search' 
            size={18}
            style={{marginRight:5}}
            color={Colors.black}
            />
           <TextInput placeholder='Search...'/>
          </View>
          <TouchableOpacity onPress={()=>{}} style={styles.filterBtn}>
            <Ionicons name='options' size={28} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bgColor,
        paddingHorizontal:20,
    },
    headingTxt:{
      fontSize:28,
      fontWeight:'800',
      color:Colors.black,
      marginTop:10
    },
    searchSectionWrapper:{
      flexDirection:'row',
      marginVertical:20,

    },
    searchBar:{
      flex:1,
      flexDirection:'row',
      backgroundColor:Colors.white,
      padding:16,
      borderRadius:10,

    },
    filterBtn:{
      backgroundColor: Colors.primaryColor,
      padding:12,
      borderRadius:10,
      marginLeft:10
    }
})