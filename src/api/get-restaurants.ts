import { useEffect, useState } from "react";

export interface Cardapio {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  foto: string;
  porcao: string;
}

export interface Restaurant {
  id: number;
  titulo: string;
  tipo: string;
  destacado: boolean;
  capa: string;
  avaliacao: string;
  descricao: string;
  cardapio: Cardapio[];
}

export interface UseRestaurantReturn {
  restaurants: Restaurant[];
  loading: boolean;
  fetchRestaurants: () => Promise<void>;
}

const useRestaurants = (): UseRestaurantReturn => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRestaurants = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://fake-api-tau.vercel.app/api/efood/restaurantes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurantes.");
      }
      const data: Restaurant[] = await response.json();
      setRestaurants(data);
    } catch (err) {
      console.log("Error fetching restaurants: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return { restaurants, loading, fetchRestaurants };
};

export default useRestaurants;
