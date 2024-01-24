import { StyleSheet, Text, View , Image, ScrollView} from 'react-native';
import React from 'react';
import Information from '../../components/Information';

export default function CoursesInformation() {
  return (
    <ScrollView>
      <Information 
      title = "Angular Eğitimi"
      imageSource = {require ('../../assets/angular.jpg')}
      desc = "Uygulamalı Angular Eğitimi"
      />
      <Information
      title = "C# Eğitimi"
      imageSource = {require ('../../assets/c#.jpg')}
      desc = "Uygulamalı C# Eğitimi"
      />
      <Information title = "Python Eğitimi"
      imageSource = {require ('../../assets/python.jpg')}
      desc = "Uygulamalı Python Eğitimi"
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({});