// frontend/src/services/locationService.js
import axios from 'axios';

export const getGodowns = async () => {
    const response = await axios.get('/api/godowns');
    return response.data;
};
