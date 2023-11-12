import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import axios from 'axios';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import SubItem from '../components/SubItem';

const SearchItem = ({route}) => {
  const {params: item} = route;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `https://api.maharlikart.ph/v4.2/api/categories?keyword=${item}`,
        );
        setSearchResults(response.data.data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchItem();
  }, [item]);

  if (!searchResults || searchResults.length === 0) {
    return (
      <Screen>
        <AppText style={styles.title}>Product not available</AppText>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <AppText style={styles.title}>{item}</AppText>
          {searchResults?.map(searchResult => (
            <View key={searchResult.id}>
              <AppText style={styles.subtitle}>{searchResult.name}</AppText>
              <View>
                <SubItem subCategories={searchResult.sub_categories} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#166350',
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 15,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 20,
    color: '#166350',
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 15,
  },
});

export default SearchItem;
