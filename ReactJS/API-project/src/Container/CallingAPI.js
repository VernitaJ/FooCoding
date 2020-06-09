import axios from "axios";

export default async function CallAPI(url) {
  try {
    const apiCall = await axios.get(url);
    return apiCall.data;
  } catch (error) {
    return error;
  }
}
