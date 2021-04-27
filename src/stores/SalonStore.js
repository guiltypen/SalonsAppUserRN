import axios from "axios";
import { makeAutoObservable } from "mobx";
// Importing instance
import instance from "./instance";

class SalonStore {
  salons = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchSalons = async () => {
    try {
      const response = await instance.get("/salons");
      this.salons = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const salonStore = new SalonStore();
salonStore.fetchSalons();

export default salonStore;
