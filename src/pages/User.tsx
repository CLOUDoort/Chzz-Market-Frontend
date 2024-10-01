import UserOrder from '@/components/user/UserOrder';
import UserOrderList from '@/components/user/UserOrderList';
import UserProfile from '@/components/user/UserProfile';
import { useProfile } from '@/hooks/useProfile';

const User = () => {
  const { profileData } = useProfile();

  return (
    <div className="flex flex-col">
      <UserProfile nickname={profileData?.nickname} bio={profileData?.bio} />
      <UserOrder participationCount={profileData?.participationCount} preRegisterCount={profileData?.preRegisterCount} registeredAuctionCount={profileData?.registeredAuctionCount} />
      <UserOrderList />
    </div>
  );
};

export default User;
 