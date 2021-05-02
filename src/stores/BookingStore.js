import { makeAutoObservable } from "mobx";
// Importing instance
import instance from "./instance";

class BookingStore {
  bookings = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  newBooking = async (data) => {
    try {
      this.loading = true;
      const response = await instance.post("/bookings", data);
      this.bookings = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const bookingStore = new BookingStore();

export default bookingStore;
