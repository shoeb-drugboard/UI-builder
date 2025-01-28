import { create } from "zustand";
import { UserStore } from "./userStore";
import { CartStore, Product, CartState, initialState } from "./cartStore";

interface RootStore extends UserStore, CartStore {}

const useStore = create<RootStore>((set, get) => ({
  ...initialState,
  incQuantity: (productID: Product["_id"]) =>
    set((state: CartState) => {
      const product = state.products.find((p) => p._id === productID);
      if (!product) return state;

      return {
        ...state,
        products: state.products.map((p) =>
          p._id === productID ? { ...p, quantity: (p.quantity || 0) + 1 } : p
        ),
        total: state.total + product.price,
      };
    }),

  decQuantity: (productID: Product["_id"]) =>
    set((state: CartState) => {
      const product = state.products.find((p) => p._id === productID);
      if (!product || !product.quantity) return state;

      return {
        ...state,
        products: state.products
          .map((p) =>
            p._id === productID && p.quantity
              ? { ...p, quantity: p.quantity - 1 }
              : p
          )
          .filter((p) => p._id !== productID || (p.quantity && p.quantity > 0)),
        total: state.total - product.price,
      };
    }),

  getProduct: (productID: Product["_id"]) =>
    get().products.find((pr) => pr._id === productID),

  addProduct: (product: Product) =>
    set((state: CartState) => ({
      products: [...state.products, { ...product, quantity: 1 }],
      total: state.total + product.price * 1,
    })),

  removeProduct: (productID: Product["_id"]) =>
    set((state: CartState) => ({
      products: state.products.filter((pr) => pr._id !== productID),
      total:
        state.total -
        (state.products.find((pr) => pr._id === productID)?.price || 0) *
          (state.products.find((pr) => pr._id === productID)?.quantity || 1),
    })),

  setTotal: (total: number) => set({ total }),

  resetCart: () => set({ ...initialState }),
  name: "John",
  age: 30,
  fullName: "John Doe",
  address: "",
  setAddress: (address: UserStore["address"]) =>
    set((state) => ({ ...state, address })),
  setName: (name: UserStore["name"]) => set((state) => ({ ...state, name })),
  setAge: (age: UserStore["age"]) => set((state) => ({ ...state, age })),
  setFullName: (fullName: UserStore["fullName"]) =>
    set((state) => ({ ...state, fullName })),
}));

export default useStore;
