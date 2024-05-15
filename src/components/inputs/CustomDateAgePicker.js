import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Box} from '@gluestack-ui/themed';
import {verticalScale} from 'react-native-size-matters';
import {VStack, Text} from '@gluestack-ui/themed';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {moderateScale} from 'react-native-size-matters';

const CustomDateAgePicker = ({label = 'Age', setUserAge}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setselectedDate] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  const handleDateConfirm = date => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const formattedDate = formatDate(date);
    setselectedDate(formattedDate);
    setSelectedAge(age);
    setUserAge(age);
    toggleDatePicker();
  };

  const formatDate = date => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleDatePicker}>
      <Box
        borderColor="$inputBackground"
        $focus={{
          borderColor: '$textSecondary',
        }}
        h={verticalScale(64)}
        marginVertical={'$2'}
        borderRadius={'$xl'}
        bg="$inputBackground">
        <VStack paddingVertical={'$2'} paddingHorizontal={'$4'} w="100%">
          <Box mb="$1">
            <Text color="$textSecondary" fontWeight="500">
              {label} {selectedAge && `(${selectedAge} years old)`}
            </Text>
          </Box>
          <Text
            color="$textSecondary"
            fontWeight="600"
            mt={'$1'}
            pl={'$2'}
            fontSize={moderateScale(21)}>
            {selectedDate}
          </Text>
        </VStack>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={toggleDatePicker}
        />
      </Box>
    </TouchableOpacity>
  );
};

export default CustomDateAgePicker;

const styles = StyleSheet.create({});
