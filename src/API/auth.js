
export const API_BASE_URL = "https://archies-academy.onrender.com/api";

export const ADMIN_LOGIN = `${API_BASE_URL}/admin/login`;

export const ADD_PACKAGE = `${API_BASE_URL}/admin/packages/add`;
export const GET_PACKAGE = `${API_BASE_URL}/admin/packages/all`;
export const UPDATE_PACKAGE = `${API_BASE_URL}/admin/packages/update/:id`; // Backend route: /packages/update/:id
export const DELETE_PACKAGE = `${API_BASE_URL}/admin/packages/delete/:id`;


export const ADD_MEDIA = `${API_BASE_URL}/admin/media/add`;
export const GET_ALL_MEDIA = `${API_BASE_URL}/admin/media/all`;
export const UPDATE_MEDIA = `${API_BASE_URL}/admin/media/update`; // :id hum service mein handle karenge
export const DELETE_MEDIA = `${API_BASE_URL}/admin/media/delete`; // :id hum service mein handle karenge