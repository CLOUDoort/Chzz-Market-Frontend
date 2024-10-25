import { UseMutateFunction, useMutation } from '@tanstack/react-query';

import { API_END_POINT } from '@/constants/api';
import type { IBidPostData } from '@/@types/Bid';
import { httpClient } from '@/api/axios';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@/constants/routes';

export const usePostBid = (
  auctionId: number
): {
  mutate: UseMutateFunction<void, Error, IBidPostData, unknown>;
} => {
  const postBid = async (bidData: IBidPostData) => {
    await httpClient.post(API_END_POINT.BID, bidData);
  };

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: postBid,
    onSuccess: () => {
      toast.success('입찰 성공!');
      navigate(ROUTES.getAuctionItemRoute(auctionId));
    },
  });

  return { mutate };
};
