import axios from "axios";
import axiosClient from "./axiosClient";
import { axiosSendRequest } from "./axiosSendRequest";

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
    
    /**
     * @typedef LoginParams
     * @property {string} email
     * @property {string} password  
     * @param {LoginParams} param 
     */
    login: async ({email, password, dispatch, navigate}) => {
      const url = 'https://api-ecoparking.azurewebsites.net/users/login';
        return await axiosSendRequest(
          'post',
          url,
          {email, password},
          null,
        )
      
    }
}

export default customerApi;