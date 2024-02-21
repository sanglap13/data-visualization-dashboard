import axios from 'axios';
import { apiResponse } from '../../../@types/api/api.types';

const API_URL = 'http://20.121.141.248:5000/assignment/feb/sde_fe';

export const api = async (): Promise<apiResponse | undefined> => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    if (response.status) {
      return response.data;
    } else {
      alert('status: failed');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
