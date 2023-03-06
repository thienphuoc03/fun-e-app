import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Checkbox = ({label, value, onChange}) => {
  const [checked, setChecked] = useState(value);

  const handlePress = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#bbb',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {checked && (
            <View
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: '#007AFF',
              }}
            />
          )}
        </View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({});
