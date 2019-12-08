import axios from 'axios';
import { API_URL, MOCK_JWT } from '../../configs';


const apiCalls = {

    getLaunches: () => axios.get(`${API_URL}/launches`, { headers: {'Authorization': "Bearer " + MOCK_JWT}}),

    setFavorite: ({flight_number}) => axios({ 
        method: 'post', 
        url: `${API_URL}/launches/favorite/${flight_number}`, 
        headers: {'Authorization': "Bearer " + MOCK_JWT}
    })

};

export default apiCalls;