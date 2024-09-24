import { AiOutlineHeart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import JordanBlue from '@/assets/images/jordan_blue.jpeg';
import Layout from '@/components/layout/Layout';
import ProgressBar from '@/components/details/ProgressBar';
import { useNavigate, useParams } from 'react-router-dom';
import { useProgress } from '@/hooks/useProgress';
import Button from '@/components/common/Button';
import { CiCoins1 } from 'react-icons/ci';
import Participants from '@/assets/icons/participants.svg';
import Price from '@/assets/icons/price.svg';
import axios from 'axios';
import { API_END_POINT } from '@/constants/api';
import type { AuctionItem } from '@/mocks/data/auctionDetailPageData';

const Details = () => {
  const { productId } = useParams() as { productId: string }; // URL에서 productId 가져오기
  const [auctionItem, setAuctionItem] = useState<AuctionItem | null>(null); // 경매 데이터를 저장할 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTimerFixed, setIsTimerFixed] = useState(false);
  const [isPreAuction, setIsPreAuction] = useState(false);
  const [interestCount, setInterestCount] = useState(1);
  const [serverCurrentTime, setServerCurrentTime] = useState(
    Math.floor(Date.now() / 1000),
  ); // 서버 시간 예시

  const totalTime = 24 * 60 * 60;

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { formattedTime, progressBarWidth } = useProgress(
    Number(auctionItem?.endDateTime) - 86400,
    serverCurrentTime,
    totalTime,
    isLoading,
  );

  // 세자리 단위로 콤마를 찍어주는 함수
  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `api/v1/auctions/auction/${productId}`,
        );
        console.log(response.data);
        setAuctionItem(response.data.auctionData);
      } catch (error) {
        console.error(error);
        alert('경매 데이터를 가져오는 중 오류가 발생했습니다.');
      }
    };
    fetchData();
    setIsLoading(false);
  }, [productId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setServerCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Layout.Header handleBack={handleBackClick} handleModal={toggleMenu}>
        제품 상세
      </Layout.Header>
      {/* 메인 컨텐츠가 스크롤 가능하도록 수정 */}
      <div className="relative flex flex-col h-screen overflow-hidden">
        <Layout.Main>
          {/* 상품 이미지 영역 */}
          <div className="relative w-full bg-yellow-300">
            <div className="w-full mb-2">
              <img
                src={JordanBlue}
                alt="Jordan Blue"
                className="object-cover w-full h-auto" // Ensures the image maintains its aspect ratio
              />
            </div>
            {/* 타이머 및 프로그레스 바 */}
            {auctionItem && (
              <div
                id="timer-section"
                className={`bg-white z-10 py-1 ${isTimerFixed ? 'fixed top-0 left-0 right-0' : ''}`}
              >
                {isLoading ? (
                  <div className="text-center text-gray-500 font-bold">
                    로딩 중...
                  </div>
                ) : (
                  <ProgressBar
                    auctionStartTime={Number(auctionItem?.endDateTime) - 86400}
                    serverCurrentTime={serverCurrentTime}
                    totalTime={totalTime}
                    isLoading={isLoading}
                  />
                )}
              </div>
            )}
          </div>

          {/* 경매 정보 영역 */}
          <div className="px-4 my-4">
            {/* 경매 아이템 제목 & 시작가 */}
            {auctionItem && (
              <div className="mb-4">
                <p className="text-lg font-bold mb-1">
                  {auctionItem.title || ''}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <span className="mr-1">
                      <img src={Price} alt="Price" />
                    </span>
                    시작가
                    <span className="font-bold p">
                      {numberWithCommas(Number(auctionItem.minPrice))}원
                    </span>
                  </span>
                </p>
              </div>
            )}

            {/* 나의 참여 금액 & 경매 참여인원 */}
            <div className="w-full mb-4 border border-gray-300 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center text-center flex-1 py-4">
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <CiCoins1 className="text-xl mx-1" />
                    <span className="ml-1">나의 참여 금액</span>
                  </div>
                  <p className="text-xl font-bold text-gray-800">
                    {auctionItem?.isParticipating
                      ? `${numberWithCommas(Number(auctionItem.bidAmount))}원`
                      : '참여 전'}
                  </p>
                </div>
                <div className="border-l border-gray-300 h-full" />
                <div className="flex flex-col items-center text-center flex-1 py-4">
                  <div className="flex items-center text-sm text-gray-400 mb-1">
                    <img
                      src={Participants}
                      alt="Participants"
                      className="w-4 h-4 mx-2 mb-1"
                    />
                    <p className="text-sm text-gray-500 mb-1">참여 인원</p>
                  </div>
                  <p className="text-lg font-bold">
                    {auctionItem?.participantCount
                      ? `${auctionItem.participantCount}명`
                      : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 상품 설명 */}
          <div className="px-4 mb-4 overflow-y-auto text-sm text-gray-700">
            <p>{auctionItem?.description}</p>
          </div>
        </Layout.Main>
        {/* 화면 하단에 고정된 Footer */}
        <Layout.Footer type={isPreAuction ? 'double' : 'single'}>
          {isPreAuction ? (
            <>
              <div className="flex items-center flex-1 h-full gap-2">
                <AiOutlineHeart className="text-xl text-gray-500" />
                <span className="text-gray-600">{interestCount}명</span>
              </div>
              <Button
                type="button"
                className="flex-[2] h-full"
                color="cheeseYellow"
              >
                경매로 전환하기
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="w-full h-full"
              color="cheeseYellow"
            >
              경매 참여하기
            </Button>
          )}
        </Layout.Footer>
        {/* 백드롭 */}
        {isMenuOpen && (
          <>
            <div
              className="absolute inset-0 z-40 bg-black bg-opacity-50"
              onClick={closeMenu}
              style={{ top: 0, bottom: 0 }}
            />

            {/* 메뉴 (아코디언) */}
            <div className="absolute top-[10px] right-2 bg-white shadow-lg rounded-md z-50">
              <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200">
                수정하기
              </button>
              <button className="flex items-center w-full px-4 py-2 text-left text-red-600 hover:bg-red-100">
                삭제하기
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Details;
