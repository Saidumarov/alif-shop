import { ProductType } from "@/types";
import { create, SetState } from "zustand";

// Karta interfeysi
interface Card extends ProductType {
  count: number;
}

// Karta do'kon interfeysi
interface CardStore {
  cards: Card[];
  loading: boolean;
  error: string;
  loadCards: (cards: ProductType[]) => Promise<void>;
  addCard: (newCard: ProductType) => Promise<void>;
  removeCard: (cardId: string) => Promise<void>;
  updateCard: (updatedCard: ProductType) => Promise<void>;
  setError: (errorMessage: string) => void;
  setLoading: (isLoading: boolean) => void;
}

const useCardStore = create<CardStore>((set: SetState<CardStore>) => ({
  cards: [],
  loading: true,
  error: "",

  // Kartlarni yuklash
  loadCards: async (cards: ProductType[]) => {
    set((state) => {
      return {
        ...state,
        cards: cards,
        loading: false,
      };
    });
  },
  // Karta qo'shish
  addCard: async (newCard: ProductType) => {
    const newCardObj: Card = { ...newCard, count: 1 };
    set((state) => {
      const cardExists = state.cards?.some((card) => card._id === newCard._id);
      if (!cardExists) {
        const updatedCards = [...state?.cards, newCardObj];
        localStorage.setItem("cards", JSON.stringify(updatedCards));
        return { ...state, cards: updatedCards };
      }
      return state;
    });
  },

  // Karta o'chirish
  removeCard: async (cardId: string) => {
    set((state) => {
      const updatedCards = state.cards?.filter((el) => el._id !== cardId);
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      return { ...state, cards: updatedCards };
    });
  },

  // Karta yangilash
  updateCard: async (updatedCard: ProductType) => {
    set((state: any) => {
      const updatedCards = state?.cards?.map((card: ProductType) =>
        card._id === updatedCard._id ? updatedCard : card
      );
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      return { ...state, cards: updatedCards };
    });
  },

  // Xatolikni sozlash
  setError: (errorMessage: string) =>
    set((state) => ({ ...state, error: errorMessage })),

  // Yuklashni sozlash
  setLoading: (isLoading: boolean) =>
    set((state) => ({ ...state, loading: isLoading })),
}));

export default useCardStore;
