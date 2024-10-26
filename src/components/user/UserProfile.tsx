import { useNavigate } from 'react-router-dom';
import ProfileImage from '@/assets/icons/profile.svg';
import Button from '../common/Button';
import type { IProfileProps } from '@/@types/user';
import naverIcon from '@/assets/icons/btnG_naverIcon.png';
import kakaoImage from '@/assets/icons/kakaotalk_sharing_btn_small.png';
import ButtonSpinner from '../common/loading/ButtonSpinner';

const UserProfile = ({ nickname, bio, profileImageUrl, providerType, isLoading }: IProfileProps) => {
  const navigator = useNavigate();
  const userNickname = nickname || null;
  const userBio = bio || null;
  const userProfileImageUrl = profileImageUrl || null;

  if (isLoading) {
    return <ButtonSpinner />
  }

  return (
    <div className="flex pb-8 my-10 lg:gap-5 border-b border-b-gray3">
      {profileImageUrl ? (
        <img src={profileImageUrl} alt='프로필 이미지' className='w-[94px] h-[94px] lg:w-[130px] lg:h-[130px] rounded-full mr-4 object-conver' />
      ) : (
        <img src={ProfileImage} alt='기본 프로필 이미지' className='w-[94px] h-[94px] lg:w-[130px] lg:h-[130px] rounded-full mr-4' />
      )} 
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex">
            <p className="text-heading2 lg:text-2xl font-bold mr-2 pr-2">
              {userNickname}
            </p>
            {providerType === 'KAKAO' ? (
              <img src={kakaoImage} alt="카카오이미지" className='w-5 h-5 lg:w-7 lg:h-7' />
            ) : (
              <img src={naverIcon} alt="네이버이미지" className='w-5 h-5 lg:w-7 lg:h-7'/>
            )}
          </div>
          <Button
            type='button'
            size='medium'
            className="px-3 py-1 border border-gray2 rounded-md"
            onClick={() =>
              navigator('profile/edit', { state: { userNickname, userBio, userProfileImageUrl } })
            }
          >
            수정
          </Button>
        </div>
        <div className="mt-2">
          {userBio && userBio.trim().length > 0 && (
            <>
              <div className="text-body1 sm:font-semibold lg:text-heading3 mb-2">자기소개</div>
              <div className='sm:text-sm'>{userBio}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
