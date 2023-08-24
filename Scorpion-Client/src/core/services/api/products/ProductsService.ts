import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IProducts {
  id: number;
  name: string;
  price: number;
}

const getAll = async (): Promise<IProducts[] | ApiException> => {
  try {
    const { data } = await Api().get("/produtos");
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erroao consultar a API");
  }
};

const getById = async (id: number): Promise<IProducts[] | ApiException> => {
  try {
    const { data } = await Api().get(`/produtos/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erroao consultar a API");
  }
};

const create = async (
  dataToCreate: Omit<IProducts, "id">
): Promise<IProducts[] | ApiException> => {
  try {
    const { data } = await Api().post("/produtos", dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erroao consultar a API");
  }
};

const updateById = async (
  id: string,
  dataToUpdate: IProducts
): Promise<IProducts[] | ApiException> => {
  try {
    const { data } = await Api().put(`/produtos/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || "Erroao consultar a API");
  }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    await Api().get(`/produtos/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || "Erroao consultar a API");
  }
};

export const ProductsService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
