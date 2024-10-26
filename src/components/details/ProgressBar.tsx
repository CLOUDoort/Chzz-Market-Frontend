import { queryKeys } from '@/constants/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const totalTime = 24 * 60 ** 2;

interface ProgressBarProps { initialTimeRemaining: number; recordStatus: (cur: string) => void; auctionId: number }

const ProgressBar = ({ initialTimeRemaining, recordStatus, auctionId }: ProgressBarProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(initialTimeRemaining);
  const queryClient = useQueryClient()

  useEffect(() => {
    setTimeRemaining(initialTimeRemaining);

    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          recordStatus('ENDED')
          queryClient.invalidateQueries({ queryKey: [queryKeys.AUCTION_DETAILS, auctionId] })
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTimeRemaining]);

  const progressBarWidth = (timeRemaining / totalTime) * 100;

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const progressBarColor =
    hours < 1 ? 'bg-timeColor1' : hours <= 16 ? 'bg-timeColor2' : 'bg-timeColor3';
  const textColor =
    hours < 1 ? 'text-timeColor1' : hours <= 16 ? 'text-timeColor2' : 'text-timeColor3';

  return (
    <div className="flex flex-col gap-2 p-2 rounded-lg">
      <div className={`text-center text-lg font-bold ${textColor}`}>
        {timeRemaining !== 0 ? formattedTime : '경매 종료'}
      </div>
      <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-lg">
        <div
          className={`${progressBarColor} h-full transition-width duration-1000`}
          style={{ width: `${progressBarWidth}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
