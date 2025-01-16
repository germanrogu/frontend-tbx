import axios from "axios";
import { API_URL } from "../constants/index";

export const getFileList = async () => {
  const response = await axios.get(`${API_URL}/list`);
  return response.data.files;
};

export const getFileData = async (fileName) => {
  const url = fileName
    ? `${API_URL}/data?fileName=${fileName}`
    : `${API_URL}/data`;
  const response = await axios.get(url);
  return response.data;
};
