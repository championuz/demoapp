/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   ListItem,
   Left,
   Thumbnail,
   Body,
   H1,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
 } from 'react-native';
 import {images} from './images';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}) => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
  const backgroundStyle = {
     backgroundColor: Colors.lighter
   };
 class App extends React.Component {
 
  render () {
   return (
       <ScrollView style={styles.scrollView} >
         <View
           style={{
             backgroundColor: Colors.white        }}>
             <Image 
             source={{uri: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?cs=srgb&dl=pexels-mica-asato-1082528.jpg&fm=jpg'}}
             style={{ width: 380, height: 200, resizeMode: 'cover', margin: 20 }}
              />
           <Section title="Network Images">
             <Text>Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down. </Text>
           </Section>
         </View>
         <View
           style={{
             backgroundColor: Colors.white        }}>
             <Image 
             source={{uri: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?cs=srgb&dl=pexels-mica-asato-1082528.jpg&fm=jpg'}}
             style={{ width: 380, height: 200, resizeMode: 'cover', margin: 20 }}
              />
           <Section title="Network Images">
             <Text>Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down. </Text>
           </Section>
         </View>
         </ScrollView>
   );
 };
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 0,
     paddingHorizontal: 24,
   },
   scrollView: {
     paddingTop: 40,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
      