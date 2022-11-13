import { defineStore } from "pinia";
import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
});
export const useDocumentStore = defineStore("main", {
  state: () => ({
    documents: [],
    serverError: {},
    currentDocument: null,
    requestErrorMessage: undefined,
  }),
  actions: {
    async loadDocuments() {
      await Axios.get("/user/docs")
        .then((response) => {
          this.documents = response.data;
          this.requestErrorMessage = undefined;
        })
        .catch((error) => {
          this.requestErrorMessage = error.message;
        });
    },
    async searchDocuments(searchString) {
      await Axios.get("/user/docs", {
        params: { search: searchString },
      })
        .then((response) => {
          this.documents = response.data;
          this.requestErrorMessage = undefined;
        })
        .catch((error) => {
          this.requestErrorMessage = error.message;
        });
    },
    deleteDocument(id) {
      this.documents = this.documents.filter((doc) => doc.id !== id);
      this.currentDocument = null;
    },
  },
});
