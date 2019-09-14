import axios from 'axios';

export async function deleteTask(id) {
    console.log('delete task: '+id);

    try {
        const result = await axios ({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/' + id,
        })
        console.log(result);
        return result.data;
    } catch (e) {
        console.log("reducer: deleteTask: The back end didn't respond to the task delete request...");
    }

}

export async function toggleComplete() {
    
}