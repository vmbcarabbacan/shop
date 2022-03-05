import axios from 'axios';
import login from './modules/login';
export default {
    GET_ALL_TIMING({commit}){
        axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

        axios.get('/api/GET-ALL-TIMING')
        .then((result) => {
            commit("TIMINGS", result.data)
        })
    }
}