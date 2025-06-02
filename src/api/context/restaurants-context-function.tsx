import { createContext, useState } from "react";
import useRestaurants, { Restaurant, Cardapio } from "../get-restaurants";

interface RestaurantsContent {
  restaurants: Restaurant[];
  loading: boolean;
  fetchRestaurants: () => Promise<void>;
  getCardapioById: (id: number) => Cardapio[];
  getRestaurantsById: (id: number) => Restaurant | undefined;
  isModalOpen: boolean;
  selectedRestaurantFood: Cardapio | null;
  openModal: (restaurantFood: Cardapio) => void;
  closeModal: () => void;
}

export const RestaurantsContext = createContext<RestaurantsContent>({
  restaurants: [],
  loading: false,
  fetchRestaurants: async () => {},
  getCardapioById: () => [],
  getRestaurantsById: () => undefined,
  isModalOpen: false,
  selectedRestaurantFood: null,
  openModal: () => {},
  closeModal: () => {},
});

export const RestaurantsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { restaurants, loading, fetchRestaurants } = useRestaurants();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurantFood, setSelectedRestaurantFood] =
    useState<Cardapio | null>(null);

  const getRestaurantsById = (id: number) => {
    return restaurants.find((restaurant: Restaurant) => restaurant.id === id);
  };

  const getCardapioById = (id: number) => {
    const restaurant = getRestaurantsById(id);
    return restaurant ? restaurant.cardapio : [];
  };

  const openModal = (restaurantFood: Cardapio) => {
    setSelectedRestaurantFood(restaurantFood);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRestaurantFood(null);
    setIsModalOpen(false);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        fetchRestaurants,
        getCardapioById,
        getRestaurantsById,
        isModalOpen,
        selectedRestaurantFood,
        openModal,
        closeModal,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
