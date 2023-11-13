import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import routes from '../navigation/routes';
import {HistoryContext} from '../providers/HistoryProvider';

const History = ({navigation}) => {
  const [history] = useContext(HistoryContext);
  if (!history) {
    return null;
  }

  return (
    <Screen>
      <AppText style={styles.title}>Search History</AppText>
      <View style={styles.historyContainer}>
        <FlatList
          data={history}
          keyExtractor={item => `${item.name.toString()} `}
          renderItem={({item}) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.SEARCH_ITEM, item.name)
                }>
                <AppText style={styles.itemName}>{item.name}</AppText>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

export default History;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: '#166350',
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 30,
  },
  historyContainer: {},
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 5,
    justifyContent: 'center',
  },
  itemName: {
    fontWeight: 'bold',
    color: '#166350',
  },
});
