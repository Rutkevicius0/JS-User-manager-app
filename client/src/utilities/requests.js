import axios from 'axios';

const baseUrl = 'http://localhost:3001/users';

export const getAllUsers = async () => {
  try {
    const result = await axios.get(baseUrl);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewUser = async (newUserDataObj) => {
  try {
    const result = await axios.post(`${baseUrl}/new`, newUserDataObj);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const deleteResult = await axios.delete(`${baseUrl}/delete/${userId}`);
    return deleteResult.data;
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (userId, updatedUserData) => {
  try {
    await axios.put(`${baseUrl}/edit/${userId}`, updatedUserData);
  } catch (error) {
    console.log(error);
  }
};
