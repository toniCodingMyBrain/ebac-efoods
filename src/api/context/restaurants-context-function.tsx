import { createContext, useState } from "react";
import useRestaurants, { Restaurant, Cardapio } from "../get-restaurants";

interface RestaurantsContent {
  restaurants: Restaurant[];
  loading: boolean;
  fetchRestaurants: () => Promise<void>;
  getCardapioPorId: (id: number) => Cardapio[];
  getRestaurantsById: (id: number) => Restaurant | undefined;
  isModalOpen: boolean;
  selectedRestaurant: Restaurant | null;
  openModal: (restaurant: Restaurant) => void;
  closeModal: () => void;
}

export const RestaurantsContext = createContext<RestaurantsContent>({
  restaurants: [],
  loading: false,
  fetchRestaurants: async () => {},
  getCardapioPorId: () => [],
  getRestaurantsById: () => undefined,
  isModalOpen: false,
  selectedRestaurant: null,
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
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const getRestaurantsById = (id: number) => {
    return restaurants.find((restaurant: Restaurant) => restaurant.id === id);
  };

  const getCardapioPorId = (id: number) => {
    const restaurant = getRestaurantsById(id);
    return restaurant ? restaurant.cardapio : [];
  };

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        fetchRestaurants,
        getCardapioPorId,
        getRestaurantsById,
        isModalOpen,
        selectedRestaurant,
        openModal,
        closeModal,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
