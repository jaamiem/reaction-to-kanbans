import axios from 'axios';

export async function getTasks() {
	try {
		const result = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=70")

		// Add Key value to data
		result.data.map(v => v.key = v.id);
		result.data.map(v => v.completed = false);
		return result.data;
	} catch(e) {
		console.log("api: getTasks: The back end didn't respond to the tasks request...");
		console.log(e);
	}
}

