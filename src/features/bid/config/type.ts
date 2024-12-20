import { PaginationData } from '../../../@types/AuctionList';

export interface IBidPostData {
  auctionId: number;
  bidAmount: number;
}

export interface IBidder {
  isWinningBidder: boolean;
  bidderNickname: string;
  bidAmount: number;
}

export interface IBidderList extends PaginationData<IBidder> {}
