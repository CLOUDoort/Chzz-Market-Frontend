import type { IPreAuctionItem } from '@/@types/AuctionItem';
import ROUTES from '@/constants/routes';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import LikeCount from '../common/atomic/LikeCount';
import Price from '../common/atomic/Price';
import ProductItem from '../common/item/ProductItem';
import { useToggleAuctionListHeart } from './queries';

const PreAuctionProduct = ({ product }: { product: IPreAuctionItem }) => {
  const navigate = useNavigate();
  const { mutate: toggleAuctionListHeart } = useToggleAuctionListHeart();
  const handleProductClick = () => navigate(ROUTES.getPreAuctionItemRoute(product.productId))
  const confirmDelete = () => toggleAuctionListHeart(product.productId)

  return (
    <ProductItem product={product} onClick={handleProductClick}>
      <Price title='시작가' price={product.minPrice} />
      <LikeCount count={product.likeCount} />
      <Button onClick={(event) => {
        event.stopPropagation();
        confirmDelete();
      }} color={product.isLiked ? 'black' : 'white'} type='button' size='small'>
        {product.isLiked ? '좋아요 취소' : '좋아요'}
      </Button>
    </ProductItem>
  );
};

export default PreAuctionProduct;
