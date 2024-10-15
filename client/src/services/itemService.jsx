// frontend/src/services/itemService.js
import axios from 'axios';

export const getItemDetails = async () => {
    const response = await axios.get(`/api/items`);
    return response.data;
};
