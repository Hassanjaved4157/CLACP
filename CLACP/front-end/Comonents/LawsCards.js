import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LawsCardsFlatList = ({ lawsData }) => {
  const [expanded, setExpanded] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchResults([]);
  };

  const handleSearch = () => {
    const filteredResults = lawsData.filter(
      (law) =>
        law.lawName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        law.section.toLowerCase() === searchTerm.toLowerCase() ||
        law.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    if (filteredResults.length === 0) {
      setModalVisible(true);
    }
  };

  const flatListData = searchResults.length > 0 ? searchResults : lawsData;

  return (
    <View style={styles.container}>
      <Text style={styles.crimeText}> Crime Laws </Text>

      <View style={{ alignItems: 'center', paddingTop: 5, marginHorizontal: 30 }}>
        <TouchableOpacity onPress={toggleSearch} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Icon name="search" size={30} color="#5e0acc" style={{ marginRight: 10, fontWeight: '800' }} />
          <Text style={{ color: '#5e0acc', fontWeight: '800' }}>Search Law</Text>
        </TouchableOpacity>

        {isSearchVisible && (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 15 }}>
            <TextInput
              placeholder="Search by section Id or Name.."
              style={{
                borderRadius: 15,
                borderWidth: 1,
                padding: 10,
                flex: 1,
                height: 50,
                borderColor: '#5e0acc',
                textAlign: 'center',
                borderWidth: 3,
                fontWeight: 'bold',
              }}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#5e0acc',
                padding: 10,
                borderRadius: 10,
                width: 100,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={handleSearch}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontWeight: '800' }}>Search</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        data={flatListData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.sectionText}>section: "{item.section}"</Text>
            <Text style={styles.lawNameText}>Law Name: "{item.lawName}"</Text>
            <Text style={[styles.sectionText, { color: 'red', fontSize: 22 }]}>Law Description</Text>
            <Text style={styles.descriptionText}>
              {expanded ? item.description : `${item.description.substring(0, 300)}...`}
            </Text>
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={styles.seeMoreText}>{expanded ? 'See less details' : 'See more details'}</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={true}
        style={{ scrollbarColor: '#000000 #743089' , marginHorizontal : 20}}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Law Not Found</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderColor: '#743089',
    borderWidth: 1,
    shadowColor: '#743089',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    color: '#9A4EAE',
    marginVertical: 5,
  },
  lawNameText: {
    color: 'green',
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
  },
  descriptionText: {
    color: '#585858',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'justify',
    marginLeft: 2,
    marginRight: 2,
    lineHeight: 25,
  },
  seeMoreText: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  crimeText: {
    color: 'green',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 0,
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default LawsCardsFlatList;
