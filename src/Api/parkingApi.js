import axiosClient from "./axiosClient";

const parkingApi = {
    getAll: (params) => {
        const url = '/parkings/get-parking';
        console.log('link', axiosClient.baseUrl);
        return axiosClient.get(url, {params});
    },

    getId: (id) => {
        const url = `/get-parking/${id}`;
        return axiosClient.get(url);
    },
}

export default parkingApi;