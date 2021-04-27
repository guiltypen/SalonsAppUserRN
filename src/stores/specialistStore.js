// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class SpecialistStore {
  specialists = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchSpecialists = async () => {
    try {
      this.loading = true;
      const response = await instance.get(`/specialists`);
      this.specialists = response.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

const specialistStore = new SpecialistStore();
// specialistStore.fetchSpecialists();

export default specialistStore;
