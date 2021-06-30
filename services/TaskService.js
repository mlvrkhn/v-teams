import axios from 'axios';

const apiClient = axios.create({
	// baseURL: 'http://my-json-server.typicode.com/mlvrkhn/v-teams/',
	baseURL: 'http://localhost:3000/',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default {
	getEvents() {
		return apiClient.get('/tasks');
	},
	getEvent(id) {
		return apiClient.get('/tasks/' + id);
	},
};
