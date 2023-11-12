import React, {useContext, useState} from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import AppText from '../components/AppText';
import routes from '../navigation/routes';
import SubItem from '../components/SubItem';
import AppTextInput from '../components/AppTextInput';
import {HistoryContext} from '../providers/HistoryProvider';

const SubCategory = ({route, navigation}) => {
  const {params: subCategory} = route;
  const [searchWord, setSearchWord] = useState('');
  const [history, setHistory] = useContext(HistoryContext);

  const handleSearchSubmit = () => {
    const historyItem = {name: searchWord};
    navigation.navigate(routes.SEARCH_ITEM, searchWord);
    setHistory([...history, historyItem]);
    setSearchWord('');
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: subCategory.image}} />
      <View style={styles.subCategoryContainer}>
        <AppText style={styles.title}>{subCategory.name}</AppText>
        <AppText style={styles.subtitle}>Products</AppText>
        <SubItem subCategories={subCategory.sub_categories} />
        <View style={styles.searchContainer}>
          <AppTextInput
            placeholder="Explore more..."
            value={searchWord}
            onChangeText={text => setSearchWord(text)}
            maxLength={33}
            onSubmitEditing={handleSearchSubmit}
            style={styles.searchInput}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subCategoryContainer: {
    padding: 20,
    paddingBottom: 20,
    gap: 10,
  },
  title: {
    fontSize: 24,
    color: '#166350',
    fontWeight: '700',
  },
  description: {
    fontSize: 18,
    color: 'white',
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 20,
    color: '#166350',
    fontWeight: '700',
  },
  image: {
    width: '100%',
    height: 250,
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 20,
    paddingLeft: 10,
  },
});

export default SubCategory;
