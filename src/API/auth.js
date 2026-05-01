

export const API_BASE_URL = "http://localhost:5000"; 

export const ADMIN_LOGIN = `${API_BASE_URL}/api/admin/login`;

export const ADD_PACKAGE = `${API_BASE_URL}/api/admin/packages/add`;
export const GET_PACKAGE = `${API_BASE_URL}/api/admin/packages/all`;
export const UPDATE_PACKAGE = `${API_BASE_URL}/api/admin/packages/update/:id`; // Backend route: /api/packages/update/:id
export const DELETE_PACKAGE = `${API_BASE_URL}/api/admin/packages/delete/:id`;


export const ADD_MEDIA = `${API_BASE_URL}/api/admin/media/add`;
export const GET_ALL_MEDIA = `${API_BASE_URL}/api/admin/media/all`;
export const UPDATE_MEDIA = `${API_BASE_URL}/api/admin/media/update`; // :id hum service mein handle karenge
export const DELETE_MEDIA = `${API_BASE_URL}/api/admin/media/delete`; // :id hum service mein handle karenge