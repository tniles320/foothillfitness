/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "https://us-central1-foothill-fitness.cloudfunctions.net/api";

export default {
  // Strength calls
  getStrength: function () {
    return axios.get(`${URL}/api/strength`);
  },
  getOneStrength: function (id) {
    return axios.get(`${URL}/api/strength/${id}`);
  },
  addStrength: function (strengthData) {
    return axios.post(`${URL}/api/strength`, strengthData);
  },
  updateStrength: function (id, strengthData) {
    return axios.put(`${URL}/api/strength/${id}`, strengthData);
  },
  deleteStrength: function (id) {
    return axios.delete(`${URL}/api/strength/${id}`);
  },

  // Cardio calls
  getCardio: function () {
    return axios.get(`${URL}/api/cardio/`);
  },
  getOneCardio: function (id) {
    return axios.get(`${URL}/api/cardio/${id}`);
  },
  addCardio: function (cardioData) {
    return axios.post(`${URL}/api/cardio`, cardioData);
  },
  updateCardio: function (id, cardioData) {
    return axios.put(`${URL}/api/cardio/${id}`, cardioData);
  },
  deleteCardio: function (id) {
    return axios.delete(`${URL}/api/cardio/${id}`);
  },

  // Brand calls
  getBrand: function () {
    return axios.get(`${URL}/api/brand/`);
  },
  addBrand: function (brandData) {
    return axios.post(`${URL}/api/brand`, brandData);
  },
  updateBrand: function (id, brandData) {
    return axios.put(`${URL}/api/brand/${id}`, brandData);
  },
  deleteBrand: function (id) {
    return axios.delete(`${URL}/api/brand/${id}`);
  },

  // Image calls
  getImage: function (id) {
    return axios.get(`${URL}/api/image/${id}`);
  },
  addImage: function (imageData) {
    return axios.post(`${URL}/api/image`, imageData);
  },
  updateImage: function (id, imageData) {
    return axios.put(`${URL}/api/image/${id}`, imageData);
  },
  deleteImage: function (id) {
    return axios.delete(`${URL}/api/image/${id}`);
  },

  // Featured calls
  getFeatured: function () {
    return axios.get(`${URL}/api/featured`);
  },
  getOneFeatured: function (id) {
    return axios.get(`${URL}/api/featured/${id}`);
  },
  addFeatured: function (featuredData) {
    return axios.post(`${URL}/api/featured`, featuredData);
  },
  updateFeatured: function (id, featuredData) {
    return axios.put(`${URL}/api/featured/${id}`, featuredData);
  },
  deleteFeatured: function (id) {
    return axios.delete(`${URL}/api/featured/${id}`);
  },

  // Multer upload calls
  getUpload: function (file) {
    return axios.get(`${URL}/api/upload/${file}`);
  },
  addUpload: function (uploadData) {
    return axios.post(`${URL}/api/multer`, uploadData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  deleteUpload: function (image) {
    return axios.delete(`${URL}/api/image/${image}`);
  },
};
