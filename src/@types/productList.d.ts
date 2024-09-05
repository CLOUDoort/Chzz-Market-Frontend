export interface OngoingProductListItem {
  id: number;
  name: string;
  cdnPath: string | null;
  timeRemaining: number;
  minPrice: number;
  participantCount: number;
  isParticipating: boolean;
}

export interface OngoingProductListData {
  hasNext: boolean;
  items: OngoingProductListItem[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
}

export interface PreEnrollProductListItem {
  id: number;
  name: string;
  cdnPath: string;
  likeCount: number;
  isLiked: boolean;
}

export interface PreEnrollProductListData {
  hasNext: boolean;
  items: PreEnrollProductListItem[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
}
