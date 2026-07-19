const FetchData = async (url, options = {}) => {
    try {
        const res = await fetch(import.meta.env.VITE_BASE_URL + url, options)
        if (!res.ok) {
            return { success: false, data: null, error: "Request Failed" };
        }
        const data = await res.json();
        return { success: true, data, error: null };
    } catch (error) {
        return { success: false, data: null, error: error.message };
    }

}

export default FetchData