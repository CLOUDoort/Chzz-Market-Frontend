import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';

import { useGetNotifications } from '@/features/notification/model';
import { notificationData } from '@/mocks/data/notificationData';
import { preAuctionHeartData } from '@/mocks/data/preAuctionHeartData';
import { Heart } from '@/pages/heart';
import { mockedUseNavigate } from '@/shared/test/setupTests';
import userEvent from '@testing-library/user-event';
import LayoutWithNav from '../../../components/navigation/LayoutWithNav';
import { useDeletePreAuctionHeart, useGetPreAuctionHeartList } from '../model';

vi.mock('@/components/heart/queries', () => ({
  useGetPreRegisterHeart: vi.fn(),
  useDeletePreRegisterHeart: vi.fn(),
}));

vi.mock('@/components/notification/queries', () => ({
  useGetNotifications: vi.fn(),
}));

vi.mocked(useGetNotifications).mockReturnValue({
  notifications: notificationData,
});

vi.mocked(useGetPreAuctionHeartList).mockReturnValue({
  preAuctionHeartList: preAuctionHeartData,
});

const mutateMock = vi.fn();
vi.mocked(useDeletePreAuctionHeart).mockReturnValue({
  mutate: mutateMock,
});

describe('내가 찜 한 페이지 테스트', () => {
  const setup = () => {
    const utils = render(
      <MemoryRouter initialEntries={['/notification']}>
        <Routes>
          <Route element={<LayoutWithNav />}>
            <Route path='/notification' element={<Heart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();

    return {
      ...utils,
      user,
    };
  };

  test('뒤로 가기 버튼을 클릭하면 이전 페이지로 이동한다.', async () => {
    const { user } = setup();
    const backBtnElement = screen.getByRole('button', {
      name: /뒤로 가기/,
    });
    await user.click(backBtnElement);
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith(-1);
    });
  });

  test('내가 찜 한 사전 경매 상품 목록이 화면에 렌더링된다.', async () => {
    const { user: _user } = setup();
    const heartProducts = await screen.findAllByRole('figure', {
      name: /내가 찜 한 사전 경매 상품/,
    });
    expect(heartProducts).toHaveLength(3);
  });

  test('항목을 클릭하면 상세 페이지로 이동한다.', async () => {
    const { user } = setup();
    const heartProducts = await screen.findAllByRole('figure', {
      name: /내가 찜 한 사전 경매 상품/,
    });
    expect(heartProducts).toHaveLength(3);

    const firstProduct = heartProducts[0];
    await user.click(firstProduct);

    expect(mockedUseNavigate).toHaveBeenCalledWith('/product/0');
  });

  test('찜 목록에서 제외 버튼을 클릭하면 항목이 삭제된다.', async () => {
    const { user } = setup();
    const buttons = await screen.findAllByRole('button', { name: /찜 목록에서 제외/ });

    const firstButton = buttons[0];
    await user.click(firstButton);

    expect(mutateMock).toHaveBeenCalledWith(0);
  });
});
