import React, {useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import AppText from './AppText';

const SubItem = ({subCategories}) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <View style={styles.subItemContainer}>
      {subCategories.map(item => (
        <View key={item.id} style={styles.subItem}>
          <View style={styles.imageContainer}>
            {imageLoading && (
              <View style={styles.loader}>
                <ActivityIndicator
                  size="small"
                  color="#166350"
                  style={{marginRight: 10}}
                />
              </View>
            )}
            <Image
              style={styles.image}
              source={
                item.image === null
                  ? require('../assets/transparentbg.jpeg')
                  : {uri: item.image}
              }
              onLoad={handleImageLoad}
            />
            <AppText style={styles.title}>{item.name}</AppText>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SubItem;

const styles = StyleSheet.create({
  subItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  subItem: {
    width: '45%',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: '#166350',
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  imageContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(211, 211, 211, 0.8)',
  },
});
