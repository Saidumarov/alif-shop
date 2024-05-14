import { ProductType } from "@/types";
import { create, SetState } from "zustand";

// Karta interfeysi
interface Likes extends ProductType {}

// Karta do'kon interfeysi
interface LikeStore {
  likes: Likes[];
  loading: boolean;
  error: string;
  loadLikes: () => Promise<void>;
  addLike: (newCard: ProductType) => Promise<void>;
  removeLike: (cardId: string) => Promise<void>;
  setError: (errorMessage: string) => void;
  setLoading: (isLoading: boolean) => void;
}

// Karta do'koni ma'lumotlarini saqlash uchun zustand hook'ini o'rnatish
const useLikeStore = create<LikeStore>((set: SetState<LikeStore>) => ({
  likes: [],
  loading: true,
  error: "",

  // Karta ma'lumotlarini yuklash
  loadLikes: async () => {
    try {
      const cards = await localStorage.getItem("likes");
      if (cards !== null) {
        set((state) => ({
          ...state,
          likes: JSON.parse(cards),
          loading: false,
        }));
      }
    } catch (error) {
      console.log("Xatolik: ", error);
      set((state) => ({ ...state, error: "Error", loading: false }));
    }
  },

  // Karta qo'shish
  addLike: async (newCard: ProductType) => {
    const newCardObj: Likes = { ...newCard, count: 1 };
    set((state) => {
      const cardExists = state.likes.some((card) => card._id === newCard._id);
      if (!cardExists) {
        const updatedCards = [...state.likes, newCardObj];
        localStorage.setItem("likes", JSON.stringify(updatedCards));
        return { ...state, likes: updatedCards };
      }
      return state;
    });
  },

  // Karta o'chirish
  removeLike: async (cardId: string) => {
    set((state) => {
      const updatedCards = state.likes.filter((el) => el._id !== cardId);
      localStorage.setItem("likes", JSON.stringify(updatedCards));
      return { ...state, likes: updatedCards };
    });
  },

  // Xatolikni sozlash
  setError: (errorMessage: string) =>
    set((state) => ({ ...state, error: errorMessage })),

  // Yuklashni sozlash
  setLoading: (isLoading: boolean) =>
    set((state) => ({ ...state, loading: isLoading })),
}));

export default useLikeStore;
