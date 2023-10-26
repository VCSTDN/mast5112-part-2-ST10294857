import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, ImageBackground, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const zionBooksStyle = {
  fontSize: 45,
  color: 'white',
  fontStyle: 'italic',
  marginBottom: 120,
  marginLeft: 130,
  fontFamily: 'serif',
};

const textStyle = {
  fontSize: 22,
  margin: 5,
  color: 'white',
  fontFamily: 'monospace',
};

const inputTextStyle = {
  fontSize: 20,
  margin: 5,
  color: 'white',
  fontFamily: 'sans-serif',
};

function HomeScreen({ navigation, route }) {
  const { bookDetails } = route.params || {};
  const backgroundImage = require('./pop.jpg');

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={zionBooksStyle}>ZION BOOKS</Text>
          <View style={styles.textBox}>
            <Text style={textStyle}>Book name: {bookDetails?.bookName || ''}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={textStyle}>Author: {bookDetails?.author || ''}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={textStyle}>Genre: {bookDetails?.genre || ''}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={textStyle}>Total pages: {bookDetails?.totalPages || ''}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={textStyle}>Number of pages read: {bookDetails?.pagesRead || ''}</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <Button
              title="Enter Book"
              onPress={() => navigation.navigate('EnterBook')}
              color="blue"
              titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'your-font-family' }} 
            />
            <Button
              title="History"
              onPress={() => navigation.navigate('History')}
              color="purple"
              titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'your-font-family' }} 
            />
            <Button
              title="Genre"
              onPress={() => navigation.navigate('Genre')}
              color="green"
              titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'your-font-family' }} 
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function EnterBookScreen({ navigation }) {
  const [bookDetails, setBookDetails] = React.useState({
    bookName: '',
    author: '',
    genre: '',
    totalPages: '',
    pagesRead: '',
    readingSpeed: '',
  });

  const [isGenreModalVisible, setIsGenreModalVisible] = React.useState(false);

  const toggleGenreModal = () => {
    setIsGenreModalVisible(!isGenreModalVisible);
  };

  const selectGenre = (genre) => {
    setBookDetails({ ...bookDetails, genre });
    toggleGenreModal();
  };

  const saveBookDetails = () => {
    navigation.navigate('Home', { bookDetails });
  };

  const backgroundImage = require('./pop.jpg');

 
  const additionalGenres = [
    'Adventure',
    'Mystery',
    'Science Fiction',
    'Romance',
    'Fantasy',
    'Drama',
    'Horror',
    'Biography',
    'History',
    'Self-Help',
    'Cooking',
    'Travel',
    'Science',
    'Business',
    'Finance',
    'Psychology',
    'Health',
    'Fitness',
    'Sports',
    'Nature',
    'Education',
    'Technology',
    'Poetry',
    'Art',
    'Music',
    'Religion',
    'Philosophy',
    'Politics',
    'Sociology',
    'Children',
    'Young Adult',
    'Classics',
    'Humor',
    'Supernatural',
    'Paranormal',
    'Contemporary',
    'Historical Fiction',
    'Non-Fiction',
    'Crime',
    'Family',
    'War',
    'Space',
    'Time Travel',
    'Western',
    'Dystopian',
    'Post-Apocalyptic',
    'Superheroes',
   
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[zionBooksStyle, { color: 'white' }]}>ZION BOOKS</Text>

          <View style={styles.inputContainer}>
            <Text style={[styles.labelText, { fontSize: 25, color: 'white', fontFamily: 'your-font-family' }]}>Book name:</Text>
            <TextInput
              style={styles.inputEBS}
              placeholder="Enter Book Name"
              placeholderTextColor="pink"
              onChangeText={(text) => setBookDetails({ ...bookDetails, bookName: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.labelText, { fontSize: 25, color: 'white', fontFamily: 'your-font-family' }]}>Author:</Text>
            <TextInput
              style={styles.inputEBS}
              placeholder="Enter Author Name"
              placeholderTextColor="pink"
              onChangeText={(text) => setBookDetails({ ...bookDetails, author: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.labelText, { fontSize: 25, color: 'white', fontFamily: 'your-font-family' }]}>Genre:</Text>
            <TouchableOpacity onPress={toggleGenreModal}>
              <Text style={[styles.inputEBS, { fontFamily: 'your-font-family' }]}>{bookDetails.genre || 'Select Genre'}</Text>
            </TouchableOpacity>
          </View>

          <Modal transparent={true} visible={isGenreModalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  {additionalGenres.map((genre) => (
                    <TouchableOpacity key={genre} onPress={() => selectGenre(genre)}>
                      <Text style={[styles.modalOption, { fontFamily: 'your-font-family' }]}>{genre}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity onPress={toggleGenreModal}>
                  <Text style={[styles.modalOptionCancel, { fontFamily: 'your-font-family' }]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.inputContainer}>
            <Text style={[styles.labelText, { fontSize: 25, color: 'white', fontFamily: 'your-font-family' }]}>Total pages:</Text>
            <TextInput
              style={styles.inputEBS}
              placeholder="Enter Total pages"
              placeholderTextColor="pink"
              onChangeText={(text) => setBookDetails({ ...bookDetails, totalPages: text })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={[styles.labelText, { fontSize: 25, color: 'white', fontFamily: 'your-font-family' }]}>Number Pages Read:</Text>
            <TextInput
              style={styles.inputEBS}
              placeholder="Enter Number Pages Read"
              placeholderTextColor="pink"
              onChangeText={(text) => setBookDetails({ ...bookDetails, pagesRead: text })}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Save"
              onPress={saveBookDetails}
              color="blue"
              titleStyle={{ fontSize: 20, color: 'white', fontFamily: 'your-font-family' }}
            />
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
              color="green"
              titleStyle={{ fontSize: 20, color: 'white', fontFamily: 'your-font-family' }}
            />
            <Button
              title="Go to History"
              onPress={() => navigation.navigate('History')}
              color="purple"
              titleStyle={{ fontSize: 25, color: 'white', fontFamily: 'your-font-family' }}
            />
            <Button
              title="Go to Genre"
              onPress={() => navigation.navigate('Genre')}
              color="red"
              titleStyle={{ fontSize: 20, color: 'white', fontFamily: 'your-font-family' }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}



function GenreScreen({ navigation }) {
  const [bookDetails, setBookDetails] = React.useState({
    genre: '',
  });

  const [isGenreModalVisible, setIsGenreModalVisible] = React.useState(false);

  const toggleGenreModal = () => {
    setIsGenreModalVisible(!isGenreModalVisible);
  };

  const selectGenre = (genre) => {
    setBookDetails({ ...bookDetails, genre });
    toggleGenreModal();
  };

  const saveGenre = () => {
    navigation.navigate('Home', { bookDetails });
  };

  const backgroundImage = require('./pop.jpg');

  const additionalGenres = [
    'Action',
    'Fantasy',
    'Thriller',
    'Comedy',
    'Drama',
    'Horror',
    'Mystery',
    'Science Fiction',
    'Romance',
    'Biography',
    'History',
    'Self-Help',
    'Cooking',
    'Travel',
    'Science',
    'Business',
    'Finance',
    'Psychology',
    'Health',
    'Fitness',
    'Sports',
    'Nature',
    'Education',
    'Technology',
    'Poetry',
    'Art',
    'Music',
    'Religion',
    'Philosophy',
    'Politics',
    'Sociology',
    'Children',
    'Young Adult',
    'Classics',
    'Humor',
    'Supernatural',
    'Paranormal',
    'Contemporary',
    'Historical Fiction',
    'Non-Fiction',
    'Crime',
    'Family',
    'War',
    'Space',
    'Time Travel',
    'Western',
    'Dystopian',
    'Post-Apocalyptic',
    'Superheroes',
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[zionBooksStyle, { color: 'white' }]}>ZION BOOKS</Text>

          <View style={styles.inputContainer}>
            <Text style={[styles.labelText, { fontSize: 25, color: 'white', fontFamily: 'your-font-family' }]}>Genre:</Text>
            <TouchableOpacity onPress={toggleGenreModal}>
              <Text style={[styles.inputEBS, { fontFamily: 'your-font-family' }]}>{bookDetails.genre || 'Select Genre'}</Text>
            </TouchableOpacity>
          </View>

          <Modal transparent={true} visible={isGenreModalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  {additionalGenres.map((genre) => (
                    <TouchableOpacity key={genre} onPress={() => selectGenre(genre)}>
                      <Text style={[styles.modalOption, { fontFamily: 'your-font-family' }]}>{genre}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <TouchableOpacity onPress={toggleGenreModal}>
                  <Text style={[styles.modalOptionCancel, { fontFamily: 'your-font-family' }]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.buttonContainer}>
           
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate('Home')}
              color="green"
              titleStyle={{ fontSize: 20, color: 'white', fontFamily: 'your-font-family' }}
            />
            <Button
              title="Go to History"
              onPress={() => navigation.navigate('History')}
              color="purple"
              titleStyle={{ fontSize: 25, color: 'white', fontFamily: 'your-font-family' }}
            />
            <Button
              title="Go to Enter Book"
              onPress={() => navigation.navigate('EnterBook')}
              color="red"
              titleStyle={{ fontSize: 20, color: 'white', fontFamily: 'your-font-family' }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}



function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Genre" component={GenreScreen} />
        <Stack.Screen name="EnterBook" component={EnterBookScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 45,
    color: 'white',
    fontStyle: 'italic',
    marginBottom: 120,
    marginLeft: 130,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  textBox: {
    marginBottom: 15,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  text: {
    fontSize: 22,
    margin: 5,
    color: 'white',
  },
  inputEBS: {
    fontSize: 20,
    margin: 5,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 70,
    height: 50,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    height: 50,
  },
  inputContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  labelText: {
    fontSize: 25,
    color: 'white',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  modalOption: {
    fontSize: 20,
    padding: 10,
  },
  modalOptionCancel: {
    fontSize: 20,
    padding: 10,
    color: 'red',
    textAlign: 'center',
  },
});
