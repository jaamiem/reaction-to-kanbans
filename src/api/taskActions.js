import axios from 'axios';

export async function deleteTask(task) {
    console.log('delete task: ', task);

    try {
        const result = await axios ({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/' + task.id,
        })
        console.log(result);
        return result.data;
    } catch (e) {
        console.log("reducer: deleteTask: The back end didn't respond to the task delete request...");
    }

}

export async function newTask(data) {
    try {
        const result = await axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            ...data,
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log("reducer: newTask: The back end didn't respond to the new task request...")
    }
}

export async function putTask(task) {
    
}