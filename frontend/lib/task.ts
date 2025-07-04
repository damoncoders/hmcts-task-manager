import { Task } from "@/types/task";
import axios from "./axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

//laravel sanctum api
export const sanctum = async () => {
    await axios.get(`${API_URL}/sanctum/csrf-cookie`);
};

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/api/tasks`);
    return response.data.data;
};

export const createTask = async (task: Task) => {
    await sanctum();
    const response = await axios.post(`${API_URL}/api/tasks`, task);
    return response;
};

export const editTask = async (id: number, task: Task) => {
    await sanctum();
    const response = await axios.put(`${API_URL}/api/tasks/${id}`, task);
    return response;
};

export const viewTask = async (id: number) => {
    await sanctum();
    const response = await axios.get(`${API_URL}/api/tasks/${id}`);
    return response;
};

export const deleteTask = async (id: number) => {
    await sanctum();
    const response = await axios.delete(`${API_URL}/api/tasks/${id}`);
    return response;
};
