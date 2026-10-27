
// export const API_BASE_URL = "https://archies-academy.onrender.com/api";
export const API_BASE_URL = "http://localhost:5000/api";
export const ADMIN_LOGIN = `${API_BASE_URL}/admin/login`;

export const ADD_PACKAGE = `${API_BASE_URL}/admin/packages/add`;
export const GET_PACKAGE = `${API_BASE_URL}/admin/packages/all`;
export const UPDATE_PACKAGE = `${API_BASE_URL}/admin/packages/update`; // bina /:id ke
export const DELETE_PACKAGE = `${API_BASE_URL}/admin/packages/delete`; // bina /:id ke


export const ADD_MEDIA = `${API_BASE_URL}/admin/media/add`;
export const GET_ALL_MEDIA = `${API_BASE_URL}/admin/media/all`;
export const UPDATE_MEDIA = `${API_BASE_URL}/admin/media/update`; // :id hum service mein handle karenge
export const DELETE_MEDIA = `${API_BASE_URL}/admin/media/delete`; // :id hum service mein handle karenge


export const ADD_STUDENT = `${API_BASE_URL}/admin/student/add`;
export const GET_ALL_STUDENTS = `${API_BASE_URL}/admin/student/getall`;
export const GET_STUDENT_BY_ID = `${API_BASE_URL}/admin/student/get`;
export const UPDATE_STUDENT = `${API_BASE_URL}/admin/student/update`;
export const DELETE_STUDENT = `${API_BASE_URL}/admin/student/delete`;