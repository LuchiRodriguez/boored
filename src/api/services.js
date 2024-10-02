import { i } from "./api";

export const getActivity = async () => {
  try {
    const response = await i.get("/activity");
    return response.data;
  } catch (error) {
    console.error("Error al obtener actividad:", error);
  }
};

export const findByType = async (type) => {
  try {
    const response = await i.get("/activity?type=" + type);
    console.log("/activity?type=:" + type);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error al filtrar por tipo:", error);
  }
};
