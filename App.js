import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
//import Medication from './screens/Medication';
import {SafeAreaView, Image} from 'react-native';
import LetsStarted from './screens/LetsStarted';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import Rabies from './screens/SideScreens/Rabies';
import Distemper from './screens/SideScreens/Distemper';
import Parvovirus from './screens/SideScreens/Parvovirus';
import Leptospirosis from './screens/SideScreens/Leptospirosis';
import Lyme from './screens/SideScreens/Lyme';
import Camera from './screens/PIC';
import photo from './screens/PIC';
import PIC from './screens/PIC';
import Spitz from './screens/Spitz';
import Pitbull from './screens/Pitbull';
import ROTT from './screens/ROTT';
import Poodle from './screens/Poodle';
import Maltese from './screens/Maltese';
import Shih from './screens/Shih';
import Labrador from './screens/Labrador';
import ChangePassword from './screens/ChangePassword';
import Verification from './screens/Verification';
import Dane from './screens/Dane';
import VetAvailability from './screens/SideScreens/Vetsavailability';
import Breedinformation from './screens/SideScreens/Breedsinformation';
import VetList from './screens/SideScreens/Vetlist';

const Stack = createStackNavigator();
//const express = require('express');
//require('dotenv').config();
//const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
//const Drawer = createDrawerNavigator();

function App() {
  <SafeAreaView />;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LetsStarted" component={LetsStarted} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PIC" component={PIC} />
        <Stack.Screen
          name="Rabies"
          component={Rabies}
          options={{headerShown: TabRouter, title:"VACCINATION"}}
        />
        <Stack.Screen
          name="VetAvailability"
          component={VetAvailability}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Parvovirus"
          component={Parvovirus}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Leptospirosis"
          component={Leptospirosis}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Lyme"
          component={Lyme}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Spitz"
          component={Spitz}
          options={{headerShown: TabRouter, title: "BREED INFORMATION" }}
        />
        <Stack.Screen
          name="Pitbull"
          component={Pitbull}
          options={{headerShown: TabRouter, title: 'Write A review'}}
        />
        <Stack.Screen
          name="ROTT"
          component={ROTT}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Breed-info"
          component={Breedinformation}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Vet-List"
          component={VetList}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Poodle"
          component={Poodle}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#00bfff',
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="Maltese"
          component={Maltese}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Dane"
          component={Dane}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Shih"
          component={Shih}
          options={{headerShown: TabRouter}}
        />
        <Stack.Screen
          name="Labrador"
          component={Labrador}
          options={{headerShown: TabRouter}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
