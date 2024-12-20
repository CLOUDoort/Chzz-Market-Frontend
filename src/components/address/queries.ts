import type { IAddressBase } from "@/@types/Address";
import { httpClient } from '@/shared/api/axios';
import { API_END_POINT } from '@/shared/constants/apiEndPoint';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import { ROUTES } from '@/shared/constants/routes';
import { QueryObserverResult, RefetchOptions, UseMutateFunction, useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useGetAddressDetail = async (auctionId: string) => {
  const response = await httpClient.get(`${API_END_POINT.AUCTION}/${auctionId}/winning-bid`);
  return response.data;
};

export const createOrderId = async () => {
  const response = await httpClient.post(API_END_POINT.CREATE_ORDERID);
  return response.data;
};

export const getCustomerKey = async () => {
  const response = await httpClient.get(API_END_POINT.CUSTOMER_KEY);
  return response.data;
};

export const getAddress = async () => {
  const response = await httpClient.get(`${API_END_POINT.ADDRESS}?size=1`);
  return response.data;
};

export const getAddresses = async () => {
  const response = await httpClient.get(API_END_POINT.ADDRESS);
  return response.data;
};

export const editAddress = async ({addressId, data }: { addressId: string, data: IAddressBase }) => {
  await httpClient.put(`${API_END_POINT.ADDRESS}/${addressId}`, { ...data });
};

export const addAddress = async (data: IAddressBase) => {
  await httpClient.post(API_END_POINT.ADDRESS, { ...data });
};

export const deleteAddress = async (addressId: string) => {
  await httpClient.delete(`${API_END_POINT.ADDRESS}/${addressId}`);
};

export const usePostAddress = (auctionId: string): {
  mutate: UseMutateFunction<any, Error, IAddressBase, unknown>;
  isPending: boolean;
} => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: addAddress,
    onSuccess: () => {
      navigate(ROUTES.PAYMENT.ADDRESS.getListRoute(auctionId), { replace: true });
    },
  });

  return { mutate, isPending };
};

export const useEditAddress = (auctionId: string): {
  mutate: UseMutateFunction<any, Error, { addressId: string, data: IAddressBase }, unknown>;
  isPending: boolean;
} => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ addressId, data }: { addressId: string, data: IAddressBase }) => editAddress({ addressId, data }),
    onSuccess: () => {
      navigate(ROUTES.PAYMENT.ADDRESS.getListRoute(auctionId), { replace: true });
    },
  });

  return { mutate, isPending };
};

export const useGetAddresses = () : {
  addressData: any;
  refetchAddresses: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<any, Error>>;
} => {
  const { data: addressData, refetch: refetchAddresses } = useQuery({
    queryKey: [QUERY_KEYS.ADDRESSES],
    queryFn: () => getAddresses(),
  });

  return { addressData, refetchAddresses };
};

export const useDeleteAddress = () => {
  const { mutate: deleteData } = useMutation({
    mutationFn: deleteAddress,
  });

  return { deleteData };
};
