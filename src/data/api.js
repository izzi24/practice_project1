import axios from "axios";

const baseURL = 'https://fivic73350.pythonanywhere.com/'

const getAllBlogs = async () => {
    return await axios.get(`${baseURL}blogs/`)
}

const getSingleBlog = async (id) => {
    return await axios.get(`${baseURL}blogs/${id}/`)
}

const createNewBlog = async (payload) => {
    return await axios.post(`${baseURL}blogs/`, payload)
} 

const editNewBlog = async (id, payload) => {
    return await axios.put(`${baseURL}blogs/${id}/`, payload)
}

const deleteNewBlog = async (id) => {
    return await axios.delete(`${baseURL}blogs/${id}/`)
}

export {
    getAllBlogs,
    createNewBlog,
    getSingleBlog,
    editNewBlog,
    deleteNewBlog,
}

