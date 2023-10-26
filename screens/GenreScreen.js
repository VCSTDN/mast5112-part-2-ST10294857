import * as React from 'react';
import {useState} from 'react';
import {View, Button} from 'react-native';

function GenreScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to History"
          onPress={() => navigation.navigate('History')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default GenreScreen;