import { FallbackProps } from 'react-error-boundary';
import Button from '../Button';
import NoData from '../EmptyFallback';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  if (!error) return null;
  const renderUI = error.response.data.status === 404;
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-3'>
      {renderUI ? (
        <NoData />
      ) : (
        <>
          <span className='text-heading1 text-cheeseYellow'>Error</span>
          <Button type='button' color='cheeseYellow' onClick={resetErrorBoundary}>
            다시 시도하기
          </Button>
        </>
      )}
    </div>
  );
};

export default ErrorFallback;
