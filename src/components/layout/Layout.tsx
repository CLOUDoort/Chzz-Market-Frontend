import { ReactNode, forwardRef } from 'react';

import BackArrowIcon from '@/assets/icons/back_arrow.svg';
import { useNavigate } from 'react-router';

interface HeaderProps {
  title: string;
  handleBack?: () => void;
  option?: ReactNode
}

const Header = ({
  title,
  handleBack,
  option
}: HeaderProps) => {
  const navigate = useNavigate();
  if (!handleBack) handleBack = () => navigate(-1);

  return (
    <header className='w-full min-h-[3.375rem] h-[3.375rem] px-8 py-4 shadow-bottom'>
      <div className='relative flex items-center justify-center w-full h-full'>
        {title !== '치즈 마켓' && (
          <button
            className='absolute left-2'
            aria-label='뒤로 가기'
            onClick={handleBack}
          >
            <img src={BackArrowIcon} alt='뒤로가기 아이콘' className='size-5' />
          </button>
        )}
        <h2 className='text-heading2 text-gray1'>{title}</h2>
        {option}
      </div>
    </header>
  );
};

const Main = forwardRef<
  HTMLDivElement,
  { children: ReactNode; style?: React.CSSProperties }
>(({ children, style }, ref) => {
  return (
    <main
      className='relative flex flex-col flex-grow w-full min-h-0 p-5 overflow-y-scroll'
      style={style}
      ref={ref}
    >
      {children}
    </main>
  );
});

Main.displayName = 'Main';

const Footer = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'single' | 'double' | 'like';
}) => {
  const style = {
    single: 'w-full h-full',
    double: 'flex items-center justify-center h-full gap-3',
    like: 'flex items-center justify-between h-full',
  };

  return (
    <footer className='w-full min-h-[5rem] h-[5rem] px-[1.25rem] py-[1rem] shadow-top'>
      <div className={style[type]}>{children}</div>
    </footer>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col justify-center w-full h-full border-x border-gray3'>
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;

export default Layout;
