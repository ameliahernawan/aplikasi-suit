import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getAccount('userToken');

const api = axios.create({
  baseUrl: 'http://13.55.211.40:3000',
});
