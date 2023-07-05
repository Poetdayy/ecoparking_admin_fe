import axiosClient from "./axiosClient";

const customerApi = {
    getAll: (params) => {
        const url = '/parkings/get-parking';
        return axiosClient.get(url, {params});
    },

    getUserThoughtRole: (role) => {
        const url = `/users`;
        return axiosClient.get(url, {
          params: {
            role: role
          }
        });
    },

    getId: (id) => {
        const url = `/get-parking/${id}`;
        return axiosClient.get(url);
    },
}

export default customerApi;