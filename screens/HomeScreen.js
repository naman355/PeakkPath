import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';

const HomeScreen = () => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('planner');

  // Dummy data for continue courses
  const continueCourses = [
    { id: '1', title: 'Workshop Title', image: 'https://via.placeholder.com/200x100' },
    { id: '2', title: 'Workshop Title', image: 'https://via.placeholder.com/200x100' },
    { id: '3', title: 'Workshop Title', image: 'https://via.placeholder.com/200x100' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'planner':
        return <Text>Content for Planner tab goes here.</Text>;
      case 'workshops':
        return <Text>Content for Workshops tab goes here.</Text>;
      case 'courses':
        return <Text>Content for Courses tab goes here.</Text>;
      case 'premium':
        return <Text>Content for Premium tab goes here.</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowProfileDetails(!showProfileDetails)}>
          <Text style={styles.profileName}>Profile Name</Text>
        </TouchableOpacity>
        <Text style={styles.coins}>Coins: 100</Text>
      </View>
      
      <Modal
        visible={showProfileDetails}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowProfileDetails(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}><Text style={styles.bold}>Name:</Text> Emma</Text>
            <Text style={styles.modalText}><Text style={styles.bold}>Email:</Text> emma2000@gmail.com</Text>
            <Text style={styles.modalText}><Text style={styles.bold}>Phone no.:</Text> 91+ 3582965xxx</Text>
            <TouchableOpacity onPress={() => setShowProfileDetails(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
      />
      
      <Text style={styles.sectionTitle}>Continue Courses</Text>
      <FlatList
        data={continueCourses}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />

      <View style={styles.tabContent}>
        {renderTabContent()}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setActiveTab('planner')} style={styles.tab}>
          <Text style={styles.tabText}>Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('workshops')} style={styles.tab}>
          <Text style={styles.tabText}>Workshops</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('courses')} style={styles.tab}>
          <Text style={styles.tabText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('premium')} style={styles.tab}>
          <Text style={styles.tabText}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  coins: {
    fontSize: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseItem: {
    padding: 16,
    marginRight: 16,
    alignItems: 'center',
  },
  courseImage: {
    width: 200,
    height: 100,
    marginBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  closeButton: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
  tabContent: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: 10,
  },
  tab: {
    padding: 10,
  },
  tabText: {
    color: 'white',
  },
});

export default HomeScreen;
