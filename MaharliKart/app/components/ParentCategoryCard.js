import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import AppText from './AppText';

const ParentCategoryCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.content}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    overflow: 'hidden',
    borderColor: '#166350',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    bottom: 0,
  },
  title: {
    fontSize: 24,
    color: '#166350',
    fontWeight: '700',
  },
});

export default ParentCategoryCard;
