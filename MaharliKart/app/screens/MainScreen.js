import React, {useContext, useState} from 'react';
import {
  FlatList,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import ParentCategoryCard from '../components/ParentCategoryCard';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import {CategoryContext} from '../providers/CategoryProvider';
import {HistoryContext} from '../providers/HistoryProvider';

const ParentCategory = ({navigation}) => {
  const [categories] = useContext(CategoryContext);
  const [history, setHistory] = useContext(HistoryContext);
  const [searchWord, setSearchWord] = useState('');

  const handleSearchSubmit = () => {
    const historyItem = {name: searchWord};
    navigation.navigate(routes.SEARCH_ITEM, searchWord);
    setHistory([...history, historyItem]);
    setSearchWord('');
  };

  const handleClearSearch = () => {
    setSearchWord('');
  };

  return (
    <Screen>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          value={searchWord}
          onChangeText={text => setSearchWord(text)}
          maxLength={40}
        />
        {searchWord.length > 0 && (
          <TouchableOpacity onPress={handleClearSearch}>
            <View style={styles.clearButton}>
              <Text>Clear</Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleSearchSubmit}>
          <View style={styles.searchButton}>
            <Text>Search</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        keyExtractor={category => category.id.toString()}
        renderItem={({item}) => (
          <ParentCategoryCard
            title={item.name}
            image={item.image}
            onPress={() => navigation.navigate(routes.SUB_CATEGORY, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#166350',
    color: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  clearButton: {
    padding: 10,
    backgroundColor: '#166350',
    borderRadius: 5,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#166350',
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default ParentCategory;
