import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const token = AsyncStorage.getItem('userToken');

const api = axios.create({
  baseURL: 'http://13.55.211.40:3000',
});

export const fetchUser = async () => {
  const token = await AsyncStorage.getItem('userToken');
  try {
    const response = await api.get('/auth/current-user', {
      headers: {
        Authorization: token,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user: ', error);
    throw new Error('Failed to fetch user data');
  }
};

export const login = async (email, password) => {
  try {
    const body = {
      email,
      password,
    };

    const response = await api.post('/auth/login', body);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const register = async (userName, email, password, avatarID = '1') => {
  try {
    const body = {
      username: userName,
      email: email,
      password: password,
      avatar_id: avatarID,
    };
    const response = await api.post('/auth/register', body);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

export default api;
