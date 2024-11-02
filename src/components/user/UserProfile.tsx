import type { IProfileProps } from '@/@types/user';
import { Button } from "@/shared";
import ProfileImage from '@/shared/assets/icons/profile.svg';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ nickname, bio, profileImageUrl, providerType, isLoading }: IProfileProps) => {
  const navigator = useNavigate();
  const userNickname = nickname || null;
  const userBio = bio || null;
  const userProfileImageUrl = profileImageUrl || null;

  if (isLoading) {
    return (
      <div className='flex justify-center items-center sm:h-[10rem] lg:h-[12.5rem]'>
        <div className='w-[2rem] h-[2rem] border-2 border-[#F6F8F8] border-opacity-60 rounded-full size-4 border-b-cheeseYellow animate-spin' />
      </div>
    )
  }

  return (
    <div className="flex pb-8 my-10 border-b lg:gap-5 border-b-gray3">
      {profileImageUrl ? (
        <img src={profileImageUrl} alt='프로필 이미지' className='w-[94px] h-[94px] lg:w-[130px] lg:h-[130px] rounded-full mr-4 object-conver' />
      ) : (
        <img src={ProfileImage} alt='기본 프로필 이미지' className='w-[94px] h-[94px] lg:w-[130px] lg:h-[130px] rounded-full mr-4' />
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-col">
            <p className="text-heading3 web:text-heading2">
              {userNickname}
            </p>
            {providerType === 'KAKAO' ? (
              <div className="flex w-[8rem] web:w-[12rem] mt-[1rem]">
                <div
                  className="flex items-center w-full h-[1.6875rem] web:h-[2rem] gap-1 bg-[#FEEA1C] text-black rounded-2xl cursor-pointer hover:bg-[#F4DC00] focus:ring-2 focus:ring-offset-2 focus:ring-[#F4DC00] focus:outline-none"
                  aria-label="카카오톡과 연결"
                >
                  <div className="flex items-center ml-[0.75rem] w-[1rem] h-[0.90625rem] web:w-[1.5rem] web:h-[1.2rem] web:ml-[1.5rem]">
                    <RiKakaoTalkFill size={24} />
                  </div>
                  <span className="flex-grow text-xs web:text-body1">카카오톡과 연결</span>
                </div>
              </div>
            ) : (
              <div className="flex w-[8rem] web:w-[12rem] mt-[1rem]">
                <div
                  className="flex items-center w-full h-[1.6875rem] web:h-[2rem] gap-2 bg-[#1ec800] text-white text-lg rounded-2xl cursor-pointer hover:bg-[#17b000] focus:ring-2 focus:ring-offset-2 focus:ring-[#17b000] focus:outline-none"
                  aria-label="네이버와 연결"
                >
                  <div className="flex items-center ml-[0.75rem] w-[1rem] h-[0.90625rem] web:w-[1.5rem] web:h-[1.2rem] web:ml-[1.5rem]">
                    <SiNaver />
                  </div>
                  <span className="flex-grow text-xs web:text-body1">네이버와 연결</span>
                </div>
              </div>
            )}
          </div>
          <Button
            type='button'
            className="flex justify-center items-center w-[3.125rem] h-[2.125rem] web:w-[4rem] border-gray2"
            onClick={() =>
              navigator('profile/edit', { state: { userNickname, userBio, userProfileImageUrl } })
            }
          >
            수정
          </Button>
        </div>
        <div className="mt-[0.75rem]">
          {userBio && userBio.trim().length > 0 && (
            <>
              <div className="mb-2 text-body2Bold web:text-heading3">자기소개</div>
              <div className='whitespace-pre-wrap text-sm web:text-body1'>{userBio}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
