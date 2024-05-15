import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {moderateScale} from 'react-native-size-matters';
import {verticalScale} from 'react-native-size-matters';

const Category = ({title, images}) => {
  return (
    <Box>
      <Box borderRadius={moderateScale(6)} overflow="hidden">
        <Box flexDirection="row" w={scale(160)} gap={'$1'}>
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
        </Box>
        <Box flexDirection="row" w={scale(160)} gap={'$1'}>
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: 'https://www.themanual.com/wp-content/uploads/sites/9/2020/01/wine-bottle-standard.jpg?p=1',
            }}
            style={styles.image}
          />
        </Box>
      </Box>

      <Text
        fontWeight="500"
        color="$textPrimary"
        paddingTop={'$1.5'}
        textAlign="center"
        fontSize={moderateScale(14)}>
        {title}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: verticalScale(85),
    width: '49%',
    resizeMode: 'cover',
  },
});

export default Category;
