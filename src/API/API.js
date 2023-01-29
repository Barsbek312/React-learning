import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(res => res.data);
    },

    postFollow(userId) {
        return instance
            .post(`follow/${userId}`, {})
            .then(res => res.data)
    },

    postUnfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(res => res.data)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use ProfileAPI object.')
        return profileAPI.getProfile(userId);
    }

}
export const profileAPI = {

    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(res => res.data)
    },

    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(res => res.data)
    },

    updateStatus(status) {
        return instance
            .put(`profile/status/`, {
                status
            })
    }

}

export const authAPI = {
    me() {
        return instance 
            .get(`auth/me`)
            .then(res => res.data)
    }
}