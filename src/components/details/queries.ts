import { IAuctionDetails, IPreAuctionDetails } from "AuctionDetails";
import { API_END_POINT } from "@/constants/api";
import { httpClient } from "@/api/axios";
import { queryKeys } from "@/constants/queryKeys";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const useConvertToAuction = (): {
  mutate: UseMutateFunction<any, Error, number, unknown>;
} => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (productId: number) => {
      const response = await httpClient.post(
        `${API_END_POINT.AUCTIONS}/start`,
        productId,
      );
      return response.data;
    },
    onSuccess: (_, productId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRE_AUCTION_DETAILS, productId],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUCTION_LOST],
      });
    },
  });

  return { mutate };
};

export const useLikeAuctionItem = (): {
  mutate: UseMutateFunction<any, Error, number, unknown>;
} => {
  const likeAuctionItem = async (auctionId: number) => {
    const response = await httpClient.post(
      `${API_END_POINT.PRE_AUCTION}/${auctionId}/likes`,
    );
    return response.data;
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: likeAuctionItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRE_AUCTION_DETAILS],
      });
    },
  });

  return { mutate };
};

export const useCancelBid = (): {
  mutate: UseMutateFunction<any, Error, number, unknown>;
} => {
  const queryClient = useQueryClient();

  const cancelBid = async (bidId: number) => {
    const response = await httpClient.patch(
      `${API_END_POINT.BID}/${bidId}/cancel`,
    );
    return response.data;
  };

  const { mutate } = useMutation({
    mutationFn: cancelBid,
    onSuccess: (_, bidId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.BIDDER_LIST, bidId],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUCTION_DETAILS],
      });
    },
  });

  return { mutate };
};

export const useGetAuctionDetails = (auctionId: number) => {
  const getAuctionDetails = async (): Promise<IAuctionDetails> => {
    const response = await httpClient.get(
      `${API_END_POINT.AUCTIONS}/${auctionId}`,
    );

    return response.data;
  };

  const { data: auctionDetails } = useSuspenseQuery({
    queryKey: [queryKeys.AUCTION_DETAILS, auctionId],
    queryFn: getAuctionDetails,
  });

  return {
    auctionDetails,
  };
};

export const useGetPreAuctionDetails = (preAuctionId: number) => {
  if (!preAuctionId) return { preAuctionDetails: undefined };

  const getPreAuctionDetails = async (): Promise<IPreAuctionDetails> => {
    const response = await httpClient.get(
      `${API_END_POINT.PRE_AUCTION}/${preAuctionId}`,
    );

    return response.data;
  };

  const { data: preAuctionDetails } = useSuspenseQuery({
    queryKey: [queryKeys.PRE_AUCTION_DETAILS, preAuctionId],
    queryFn: getPreAuctionDetails,
  });

  return {
    preAuctionDetails,
  };
};

export const useDeletePreAuction = (): {
  mutate: UseMutateFunction<any, Error, number, unknown>;
} => {
  const queryClient = useQueryClient();

  const deletePreAuction = async (preAuctionId: number) => {
    const response = await httpClient.delete(
      `${API_END_POINT.PRE_AUCTION}/${preAuctionId}`,
    );
    return response.data;
  };

  const { mutate } = useMutation({
    mutationFn: deletePreAuction,
    onSuccess: (_, preAuctionId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.PRE_AUCTION_DETAILS, preAuctionId],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.AUCTION_LOST],
      });
    },
  });

  return { mutate };
};
