// import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FormComponent from '../component/FormComponent';

export default function LoginPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', gap: 12, margin: 10 }}>
      <FormComponent state="login"></FormComponent>
    </View>
  );
}
