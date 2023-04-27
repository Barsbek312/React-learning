import axios from "axios";
import { login } from "../redux/auth-reducer";
import { Input } from "../components/common/FormsControls/FormsControls";

let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {

    async getUsers(currentPage = 1, pageSize = 5) {
        let res = await instance.get(`users?page=${currentPage}&count=${pageSize}`,{})
        return res.data
    },

    async postFollow(userId) {
        let res = await instance.post(`follow/${userId}`, {})
        return res.data
    },

    async postUnfollow(userId) {
        let res = await instance.delete(`follow/${userId}`)
        return res.data
    }
}

export const profileAPI = {

    async getProfile(userId) {
        let res = await instance.get(`profile/${userId}`)
        return res.data
    },

    async getStatus(userId) {
        let res = await instance.get(`profile/status/${userId}`)
        return res.data
    },

    updateStatus(status) {
        return instance
            .put(`profile/status/`, {
                status
            })
    }

}

export const authAPI = {

    async me() {
        let res = await instance .get(`auth/me`)
        return res.data
    },

    async login(email, password, rememberMe = false) {
        let res = await instance
        .post(`auth/login`, {
            email, password, rememberMe
        })
        return res.data
    },

    async logout() {
        let res = await instance.delete('auth/login')
        return res.data
    }

}