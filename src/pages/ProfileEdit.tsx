import Layout from '@/components/layout/Layout';
import Button from '@/components/common/Button';
import FormField from '@/components/common/form/FormField';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';
import { useEditProfile } from '@/hooks/useProfile';
import { UserProfile } from '@/@types/user';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constants/queryKeys';
import { nicknameCheck } from '@/components/login/queries';

const ProfileEdit = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const { control, watch, handleSubmit, handleEditProfile, originalNickname } = useEditProfile();
  const nickname = watch('nickname');

  const { refetch: checkNickname } = useQuery({
    queryKey: [queryKeys.NICKNAME, nickname],
    queryFn: () => nicknameCheck(nickname),
    enabled: false,
  });

  const handleSubmitClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    }
  };

  const onSubmit = (data: UserProfile) => {
    if (isNicknameChecked || nickname === originalNickname) {
      handleEditProfile(data);
    } else {
      // 에러 띄우기 닉네임 중복 확인을 해주세요.
      alert('닉네임바꿔');
    }
  };

  const onNicknameCheck = async () => {
    if (nickname === originalNickname) {
      setIsNicknameChecked(true);
      // 띄우기
      alert('닉네임 변경 안됨');
      return;
    }

    const { data } = await checkNickname();
    const { isAvailable } = data;
    setIsNicknameChecked(isAvailable);
    
    if (isAvailable) {
      // 사용 가능한 닉네임입니다. 띄워주기
      alert('사용 가능')
    } else {
      // 이미 사용중인 닉네임입니다. 띄워주기
      alert('이미 사용 중')
    }
  };

  return (
    <Layout>
      <Layout.Header title="프로필 수정" handleBack={() => navigate('/user')} />
      <Layout.Main>
        <form
          ref={formRef}
          className="flex flex-col px-4 py-6 space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="pb-4 text-lg font-bold">프로필 정보</h2>
          <div className='flex items-end gap-4'>
            <div className='flex-1 w-4/5'>
              <FormField
                label="닉네임 *"
                name="nickname"
                control={control}
                render={(field) => (
                  <Input
                    id="닉네임 *"
                    type="text"
                    placeholder="닉네임을 입력해주세요 (공백 제외 15글자 이내)"
                    className="focus-visible:ring-cheeseYellow"
                    {...field}
                  />
                )}
              />
            </div>
            <div>
              <Button type='button' className='h-10' onClick={onNicknameCheck}>중복확인</Button>
            </div>
          </div>
          <FormField
            label="자기소개"
            name="bio"
            control={control}
            render={(field) => (
              <Textarea
                id="자기소개"
                placeholder="자기소개를 입력해주세요"
                className="focus-visible:ring-cheeseYellow"
                {...field}
              />
            )}
          />
          <FormField
            label="링크"
            name="link"
            control={control}
            render={(field) => (
              <Input
                id="링크"
                type="text"
                placeholder="링크를 입력해주세요"
                className="focus-visible:ring-cheeseYellow"
                {...field}
              />
            )}
          />
        </form>
      </Layout.Main>
      <Layout.Footer type="single">
        <Button
          type="submit"
          className="w-full h-[47px] rounded-lg"
          color="cheeseYellow"
          onClick={handleSubmitClick}
        >
          프로필 수정 완료
        </Button>
      </Layout.Footer>
    </Layout>
  );
};

export default ProfileEdit;
