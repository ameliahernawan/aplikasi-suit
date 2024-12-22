// import React, { useState } from 'react';
import { View } from 'react-native';
import FormComponent from '../component/FormComponent';

export default function RegisterPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', gap: 12, margin: 10 }}>
      <FormComponent state="register"></FormComponent>
    </View>
  );
}
