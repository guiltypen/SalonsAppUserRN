// Importing instance
import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ServiceStore {
  services = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchServices = async () => {
    try {
      this.loading = true;
      const response = await instance.get(`/services`);
      this.services = response.data;
      this.loading = false;
      //   console.log(this.services);
    } catch (error) {
      console.error(error);
    }
  };
}

const serviceStore = new ServiceStore();
// serviceStore.fetchServices();

export default serviceStore;
