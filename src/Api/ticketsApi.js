import axiosClient from "./axiosClient";

const ticketApi = {
    getAll: (params) => {
        const url = '/tickets/get-ticket';
        return axiosClient.get(url, {params});
    },

    getId: (id) => {
        const url = `/get-parking/${id}`;
        return axiosClient.get(url);
    },
}

export default ticketApi;