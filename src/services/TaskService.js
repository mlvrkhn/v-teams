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
	getTasks() {
		return apiClient.get('/tasks');
	},
	getTask(id) {
		return apiClient.get('/tasks/' + id);
	},
	postEvent(task) {
		return apiClient.post('/tasks', task);
	},
};
