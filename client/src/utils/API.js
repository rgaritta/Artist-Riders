import axios from "axios";

export default {
  // Gets all books
  getRiders: function() {
    return axios.get("/api/rider");
  },
  // Gets the book with the given id
  getRider: function(id) {
    return axios.get("/api/rider/" + id);
  },
  // Deletes the book with the given id
  deleteRider: function(id) {
    return axios.delete("/api/rider/" + id);
  },
  // Saves a book to the database
  saveRider: function(riderData) {
    return axios.post("/api/rider", riderData);
  }
};
