import { AddresDetail } from "@/@types/Address";
import { httpClient } from "@/api/axios";
import { API_END_POINT } from "@/constants/api";

export const useGetAddressDetail = async (auctionId: string) => {
  const response = await httpClient.get(`${API_END_POINT.AUCTIONS}/${auctionId}/winning-bid`);
  return response.data;
}

export const createOrderId = async () => {
  const response = await httpClient.post(API_END_POINT.CREATE_ORDERID);
  return response.data;
};

export const getCustomerKey = async () => {
  const response = await httpClient.get(API_END_POINT.CUSTOMER_KEY);
  return response.data;
}

export const getAddress = async () => {
  const response = await httpClient.get(`${API_END_POINT.ADDRESS}?size=1`);
  return response.data;
}

export const getAddresses = async () => {
  const response = await httpClient.get(API_END_POINT.ADDRESS);
  return response.data;
}

export const addAddress = async (data: AddresDetail) => {
  await httpClient.post(API_END_POINT.ADDRESS, { ...data });
}