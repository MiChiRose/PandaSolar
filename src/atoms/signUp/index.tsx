import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import GradientButton from '../../components/button/GradientButton';

const SignUpComponent = (): React.JSX.Element => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  return (
    <View style={{ marginVertical: 20 }}>
      <View
        style={{
          borderRadius: 5,
          height: 40,
          flex: 1,
          borderWidth: 0.5,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <TextInput
          style={{ flex: 1 }}
          placeholder={'Имя'}
          onChangeText={setName}
          value={name}
        />
      </View>
      <View
        style={{
          borderRadius: 5,
          height: 40,
          flex: 1,
          borderWidth: 0.5,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <TextInput
          style={{ flex: 1 }}
          placeholder={'Номер телефона'}
          onChangeText={setPhone}
          value={phone}
        />
      </View>
      <GradientButton onPress={() => {}} text={'Записаться на сеанс'} />
    </View>
  )
}

export default SignUpComponent;
