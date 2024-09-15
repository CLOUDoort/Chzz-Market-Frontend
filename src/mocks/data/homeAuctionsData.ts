import adidasImage from '@/assets/images/adidas_superstar.jpeg';
import jordanBlackImage from '@/assets/images/jordan_black.jpeg';
import jordanBlueImage from '@/assets/images/jordan_blue.jpeg';
import jordanRedImage from '@/assets/images/jordan_red.jpeg';
import newBalanceImage from '@/assets/images/newbalance_993.jpeg';
import { PreRegisterAuction, RegisterAuction } from 'Auction';

export const bestAuctions: RegisterAuction[] = [
  {
    id: 0,
    name: '[나이키] 에어 조던 로우',
    cdnPath: jordanRedImage,
    timeRemaining: 50_400,
    minPrice: 100_000,
    participantCount: 11,
  },
  {
    id: 1,
    name: '[나이키] 조던 블랙',
    cdnPath: jordanBlackImage,
    timeRemaining: 25_200,
    minPrice: 120_000,
    participantCount: 8,
  },
  {
    id: 2,
    name: '[나이키] 조던 블루',
    cdnPath: jordanBlueImage,
    timeRemaining: 82_800,
    minPrice: 180_000,
    participantCount: 29,
  },
  {
    id: 3,
    name: '[뉴발란스] 993',
    cdnPath: newBalanceImage,
    timeRemaining: 360,
    minPrice: 230_000,
    participantCount: 32,
  },
  {
    id: 4,
    name: '[아디다스] 슈퍼스타',
    cdnPath: adidasImage,
    timeRemaining: 43_200,
    minPrice: 70_000,
    participantCount: 6,
  },
];

export const imminentAuctions: RegisterAuction[] = [
  {
    id: 0,
    name: '[나이키] 조던 블랙',
    cdnPath: jordanBlackImage,
    timeRemaining: 25_200,
    minPrice: 120_000,
    participantCount: 8,
  },
  {
    id: 1,
    name: '[아디다스] 슈퍼스타',
    cdnPath: adidasImage,
    timeRemaining: 43_200,
    minPrice: 70_000,
    participantCount: 6,
  },
  {
    id: 2,
    name: '[나이키] 조던 블루',
    cdnPath: jordanBlueImage,
    timeRemaining: 82_800,
    minPrice: 180_000,
    participantCount: 29,
  },
  {
    id: 3,
    name: '[뉴발란스] 993',
    cdnPath: newBalanceImage,
    timeRemaining: 360,
    minPrice: 230_000,
    participantCount: 32,
  },
  {
    id: 4,
    name: '[나이키] 에어 조던 로우',
    cdnPath: jordanRedImage,
    timeRemaining: 50_400,
    minPrice: 100_000,
    participantCount: 11,
  },
];

export const preRegisterAuctions: PreRegisterAuction[] = [
  {
    id: 0,
    name: '[뉴발란스] 993',
    cdnPath: newBalanceImage,
    minPrice: 230_000,
    likeCount: 45,
  },
  {
    id: 1,
    name: '[나이키] 에어 조던 로우',
    cdnPath: jordanRedImage,
    minPrice: 100_000,
    likeCount: 30,
  },
  {
    id: 2,
    name: '[나이키] 조던 블루',
    cdnPath: jordanBlueImage,
    minPrice: 180_000,
    likeCount: 18,
  },
  {
    id: 3,
    name: '[나이키] 조던 블랙',
    cdnPath: jordanBlackImage,
    minPrice: 120_000,
    likeCount: 12,
  },

  {
    id: 4,
    name: '[아디다스] 슈퍼스타',
    cdnPath: adidasImage,
    minPrice: 70_000,
    likeCount: 1,
  },
];
