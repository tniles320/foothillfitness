/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Strength calls
  getStrength: function (id) {
    return axios.get(`/api/strength/${id}`);
  },
  addStrength: function (strengthData) {
    return axios.post(`/api/strength`, strengthData);
  },
  updateStrength: function (strengthData, id) {
    return axios.put(`/api/strength/${id}`, strengthData);
  },
  deleteStrength: function (id) {
    return axios.delete(`/api/strength/${id}`);
  },

  // Cardio calls
  getCardio: function (id) {
    return axios.get(`/api/cardio/${id}`);
  },
  addCardio: function (cardioData) {
    return axios.post(`/api/cardio`, cardioData);
  },
  updateCardio: function (cardioData, id) {
    return axios.put(`/api/cardio/${id}`, cardioData);
  },
  deleteCardio: function (id) {
    return axios.delete(`/api/cardio/${id}`);
  },

  // Brand calls
  getBrand: function (id) {
    return axios.get(`/api/brand/${id}`);
  },
  addBrand: function (brandData) {
    return axios.post(`/api/brand`, brandData);
  },
  updateBrand: function (brandData, id) {
    return axios.put(`/api/brand/${id}`, brandData);
  },
  deleteBrand: function (id) {
    return axios.delete(`/api/brand/${id}`);
  },

  // Image calls
  getImage: function (id) {
    return axios.get(`/api/image/${id}`);
  },
  addImage: function (imageData) {
    return axios.post(`/api/image`, imageData);
  },
  updateImage: function (imageData, id) {
    return axios.put(`/api/image/${id}`, imageData);
  },
  deleteImage: function (id) {
    return axios.delete(`/api/image/${id}`);
  },

  // Featured calls
  getFeatured: function () {
    return axios.get(`/api/featured`);
  },
  getOneFeatured: function (id) {
    return axios.get(`/api/featured/${id}`);
  },
  addFeatured: function (featuredData) {
    return axios.post(`/api/featured`, featuredData);
  },
  updateFeatured: function (featuredData, id) {
    return axios.put(`/api/featured/${id}`, featuredData);
  },
  deleteFeatured: function (id) {
    return axios.delete(`/api/featured/${id}`);
  },

  // Multer upload calls
  getUpload: function (file) {
    return axios.get(`/api/upload/${file}`);
  },
  addUpload: function (uploadData) {
    return axios.post("/api/multer", uploadData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  deleteUpload: function (id) {
    return axios.delete(`/api/upload/${id}`);
  },
};
