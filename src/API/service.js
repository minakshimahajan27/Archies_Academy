// src/API/service.js
import { ADMIN_LOGIN , ADD_PACKAGE, GET_PACKAGE ,UPDATE_PACKAGE,DELETE_PACKAGE} from "./auth.js";
import { ADD_MEDIA, GET_ALL_MEDIA, UPDATE_MEDIA, DELETE_MEDIA } from "./auth.js";
// Admin Login Service
export const adminLogin = async (email, password) => {
  try {
    const response = await fetch(ADMIN_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong during login.");
    }

    return data;
  } catch (error) {
    console.error("Login service error:", error);
    throw error;
  }
};

//packeage..........................................................................


// ✅ Add New Package Service
// ✅ Add New Package Service
export const addPackageService = async (packageData) => {
  try {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(ADD_PACKAGE, {
      method: "POST",
      headers: {
        // "Content-Type" ko hata diya gaya hai, browser ise khud handle karega
        "Authorization": `Bearer ${token}`, 
      },
      // JSON.stringify hata diya hai, ab direct packageData (FormData) jayega
      body: packageData, 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Package add karne mein error aaya!");
    }

    return data;
  } catch (error) {
    console.error("Add Package Service Error:", error.message);
    throw error;
  }
};

// ✅ Get All Packages Service
export const getAllPackagesService = async () => {
  try {
    const response = await fetch(GET_PACKAGE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Packages fetch nahi ho paye!");
    }

    return data; // Isme backend se 'data' array aayega
  } catch (error) {
    console.error("Get Package Service Error:", error.message);
    throw error;
  }
};


// ✅ Update Package Service
export const updatePackageService = async (id, packageData) => {
  try {
    const token = localStorage.getItem("adminToken");

    // UPDATE_PACKAGE URL mein id pass karni hogi, e.g., `/api/packages/update/${id}`
    const response = await fetch(`${UPDATE_PACKAGE}/${id}`, {
      method: "PUT",
      headers: {
        // Content-Type skip kiya hai kyunki packageData ek FormData object hai
        "Authorization": `Bearer ${token}`,
      },
      body: packageData, 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Package update karne mein error aaya!");
    }

    return data;
  } catch (error) {
    console.error("Update Package Service Error:", error.message);
    throw error;
  }
};

// ✅ Delete Package Service
export const deletePackageService = async (id) => {
  try {
    const token = localStorage.getItem("adminToken");

    // DELETE_PACKAGE URL mein id pass karni hogi, e.g., `/api/packages/delete/${id}`
    const response = await fetch(`${DELETE_PACKAGE}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Package delete karne mein error aaya!");
    }

    return data;
  } catch (error) {
    console.error("Delete Package Service Error:", error.message);
    throw error;
  }
};




// 1. ADD MEDIA SERVICE......................................................................................
export const addMediaService = async (mediaData) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await fetch(ADD_MEDIA, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: mediaData, // FormData (Title, Category, File)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Media add karne mein error!");
    return data;
  } catch (error) {
    console.error("Add Media Error:", error.message);
    throw error;
  }
};

// 2. GET ALL MEDIA SERVICE
export const getAllMediaService = async () => {
  try {
    const response = await fetch(GET_ALL_MEDIA, {
      method: "GET",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Media fetch karne mein error!");
    return data;
  } catch (error) {
    console.error("Get Media Error:", error.message);
    throw error;
  }
};

// 3. UPDATE MEDIA SERVICE
export const updateMediaService = async (id, mediaData) => {
  try {
    const token = localStorage.getItem("adminToken");
    // URL mein ID dynamic bhej rahe hain
    const response = await fetch(`${UPDATE_MEDIA}/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: mediaData, // Updated FormData
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Media update karne mein error!");
    return data;
  } catch (error) {
    console.error("Update Media Error:", error.message);
    throw error;
  }
};

// 4. DELETE MEDIA SERVICE
export const deleteMediaService = async (id) => {
  try {
    const token = localStorage.getItem("adminToken");
    const response = await fetch(`${DELETE_MEDIA}/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Media delete karne mein error!");
    return data;
  } catch (error) {
    console.error("Delete Media Error:", error.message);
    throw error;
  }
};