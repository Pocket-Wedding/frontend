import { create } from "zustand";

const CheckStore = create((set) => ({
  companyName: "",
  companyComment: "",
  setCompanyName: (name: string) => set({ companyName: name }),
  setCompanyComment: (comment: string) => set({ companyComment: comment }),
  deleteCompany: () => set({ companyName: "", companyComment: "" }),
}));

export default CheckStore;
