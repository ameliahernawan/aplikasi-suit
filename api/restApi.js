import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    return response.data;
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
    return response.data;
  } catch (error) {
    console.log('Login Error Response:', error.response?.data);
    throw error;
  }
};

export const updateUserAvatar = async (avatar_id) => {
  const token = await AsyncStorage.getItem("userToken");
  try {
    const body = {
      avatar_id: avatar_id,
    };

    const response = await api.post("/auth/update-user", body, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

export const updateUserWinstreak = async (winstreak) => {
  const token = await AsyncStorage.getItem("userToken");
  try {
    const body = {
      winstreak: winstreak,
    };

    const response = await api.post("/auth/update-user", body, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

export const createMatch = async (player_one_id, player_two_id) => {
  const token = await AsyncStorage.getItem('userToken');
  try {
    const body = {
      player_one_id,
      player_two_id,
    };

    const response = await api.post('/gameplay/create-match', body, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Create match failed');
  }
};

export const playRound = async (match_id, player_one_move, player_two_move) => {
  const token = await AsyncStorage.getItem('userToken');
  try {
    const body = {
      match_id,
      player_one_move,
      player_two_move,
    };

    const response = await api.post('/gameplay/play-round', body, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Play Round failed');
  }
};

export const playRoundPVP = async (match_id, player_one_move, player_two_move) => {
  const token = await AsyncStorage.getItem('userToken');
  try {
    const body = {
      match_id,
      player_one_move,
      player_two_move,
    };

    const response = await api.post('/gameplay/play-round-pvp', body, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Play Round failed');
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
  
    return response.data;
  } catch (error) {
    console.log('Register Error Response:', error.response?.data);
    throw error;
  }
};

export default api;
