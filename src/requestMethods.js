import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjhmZjhlZjQ5ZmNiMjA3MjA0MzdhNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzMwNjg1NjMsImV4cCI6MTY3MzMyNzc2M30.c4LoCnORYnHrz0XPDLHQHqHXTN8r8mCK1xic2khWhZQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`}
})