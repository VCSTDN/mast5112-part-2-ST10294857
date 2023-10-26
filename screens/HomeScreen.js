import * as React from 'react';
import {useState, useEffect} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Button
          title="Go to Enter Book"
          onPress={() => navigation.navigate('EnterBook')}
        />
      </View>
    );
  }


  
  export default HomeScreen;

