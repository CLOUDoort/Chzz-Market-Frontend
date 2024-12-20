import type { IAuctionItem } from '@/@types/AuctionItem';
import { ParticipantCount, Price, ROUTES } from '@/shared';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../../entities/product/ui/ProductItem';

const OngoingProduct = ({ product }: { product: IAuctionItem }) => {
  const navigate = useNavigate();
  const handleProductClick = () => navigate(ROUTES.AUCTION.getItemRoute(product.auctionId));

  return (
    <ProductItem product={product} onClick={handleProductClick}>
      <Price title='시작가' price={product.minPrice} />
      <ParticipantCount count={product.participantCount} />
    </ProductItem>
  );
};

export default OngoingProduct;
