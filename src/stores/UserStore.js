// Importing instance
import instance from "./instance";
import { makeAutoObservable, runInAction } from "mobx";
import decode from "jwt-decode";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserStore {
  user = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = async () => {
    this.loading = true;
    const token = await AsyncStorage.getItem("User Token");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  setUser = async (token) => {
    // Keep user logged in
    await AsyncStorage.setItem("User Token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    runInAction(() => {
      this.user = decode(token);
    });
    this.loading = false;
  };

  signout = async () => {
    try {
      await AsyncStorage.removeItem("User Token");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
      this.loading = true;
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/users/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/users/signin", userData);
      this.setUser(res.data.token);
      // alert("u r signed in");
    } catch (error) {
      // alert("u r NOT signed in");
      console.error(error);
    }
  };

  updateUser = async (updateUser) => {
    try {
      await instance.put(`users/${updateUser.id}`, updateUser);
      const user = this.user.find((user) => user.id === updateUser.id);
      for (const key in user) user[key] = updateUser[key];
      // alert("Your account info has been updated");
    } catch (error) {
      console.log(error);
      alert("Your account info has not been updated, try different input");
    }
  };
}

const userStore = new UserStore();
// userStore.signout();
userStore.checkForToken();

export default userStore;
