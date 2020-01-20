import React, { useState } from 'react';

import {
  StyleSheet,
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../shared/Card';
import ReviewForm from './reviewForm';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = newReview => {
    newReview.key = Math.random().toString();
    setReviews((reviews) => {
      return [...reviews, newReview];
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>

      <Modal
        visible={modalOpen}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContainer}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalAdd, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalAdd}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalAdd: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    margin: 10
  },
  modalClose: {
    backgroundColor: '#eee'
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});