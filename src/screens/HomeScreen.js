import { StyleSheet, Text, View , Button} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
        title="Kurs Bilgilerim"
        onPress={() => navigation.navigate('Kurs Bilgilerim')}
      />
      <Button
        title="Sayaç Uygulaması"
        onPress={() => navigation.navigate('Sayaç')}
      />
      <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate('Kutu Uygulaması')}
      />
       <Button
        title="Renk Değiştir"
        onPress={() => navigation.navigate('Renk Değiştir')}
      />
       <Button
        title="Şifre Ekranı"
        onPress={() => navigation.navigate('Şifre Ekranı')}
      />
      <Button
        title="Design Ekranı"
        onPress={() => navigation.navigate('Design Ekranı')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});