export const PRE_REGISTER_CAUTION = Object.freeze({
  HEADING: '사전 등록을 완료하시겠습니까?',
  CONTENT: {
    INFO: {
      TITLE: '사전 등록 경매란?',
      DESCRIPTION:
        '판매자는 상품을 실제 경매에 내놓기 전, 사전 등록 경매를 통해 가상으로 등록할 수 있습니다. 미리 상품의 시장 반응을 분석할 수 있어 경매의 성공 가능성을 예측하는 데 유용합니다.',
    },
    PROGRESS: {
      TITLE: '사전 등록 경매 진행',
      DESCRIPTION:
        '판매자는 상품을 사전 등록 경매로 올리고, 구매자들은 이 상품에 대해 관심을 표현하거나 미리 찜하기를 누를 수 있습니다. 이를 통해 판매자는 해당 상품의 수요와 잠재적인 구매자들의 관심도를 미리 확인할 수 있습니다.',
    },
  },
});

export const REGISTER_CAUTION = Object.freeze({
  HEADING: '경매 등록을 완료하시겠습니까?',
  TITLE: '경매 등록 주의사항',
  CONTENT: {
    PRODUCT_INFO: {
      TITLE: '1. 상품 정보 정확히 기재하기',
      DESCRIPTION: '판매자는 상품의 상태, 기능, 크기 등을 포함한 모든 정보를 정확하고 상세하게 기재해야 합니다.',
    },
    DEFECTS_DISCLOSURE: {
      TITLE: '2. 제품 결함 및 상태 명시',
      DESCRIPTION:
        '상품에 결함이나 문제가 있을 경우, 이를 숨기지 않고 반드시 명시해야 합니다. 결함이 있는 부분이나 사용 흔적은 구체적으로 설명하여 구매자가 예상치 못한 불만을 가지지 않도록 해야 합니다.',
    },
    AUCTION_CLOSING: {
      TITLE: '3. 경매 마감 시간',
      DESCRIPTION:
        '경매의 마감 시간은 자동으로 24시간으로 설정됩니다. 이 시간 동안 입찰자들은 자유롭게 입찰할 수 있으며, 경매 종료 시점에 최고 입찰가가 낙찰자로 결정됩니다.',
    },
    BIDDING_RESTRICTIONS: {
      TITLE: '4. 경매 제한 시간 및 최고 입찰가 공개',
      DESCRIPTION: '최고 입찰가는 낙찰이 확정된 후 공개되므로, 판매자는 이 점을 유의하여 경매를 진행해야 합니다.',
    },
  },
});

export const BID_CAUTION = Object.freeze({
  HEADING: '경매 참여 전 주의사항',
  CONTENT: [
    {
      ID: 1,
      TITLE: '1. 입찰 전 상품 확인',
      DESCRIPTION: '경매에 참여하기 전에 반드시 상품의 상세 정보와 상태를 확인하세요.',
    },
    {
      ID: 2,
      TITLE: '2. 수정 제한 및 규칙 준수',
      DESCRIPTION: '입찰 후 가격 수정은 2번만 가능합니다. 신중하게 입찰 금액을 설정하고, 입찰 전 다시 한 번 확인하세요.',
    },
    {
      ID: 3,
      TITLE: '3. 결제 기한 준수',
      DESCRIPTION: '낙찰 후 24시간 이내에 결제를 완료해야 합니다. 기한 내 결제가 이루어지지 않으면 낙찰이 취소될 수 있습니다.',
    },
    {
      ID: 4,
      TITLE: '4. 환불 및 교환 불가',
      DESCRIPTION: '경매 특성상 낙찰된 상품은 환불 및 교환이 불가합니다. 상품 상세 정보를 충분히 확인한 후 입찰해 주세요.',
    },
    {
      ID: 5,
      TITLE: '5. 부정행위 금지',
      DESCRIPTION: '부정한 방법으로 경매에 참여할 경우 계정이 영구 정지될 수 있습니다. 공정한 경매 문화를 유지하기 위해 협조해 주세요.',
    },
  ],
});

export const EDIT_BID_CAUTION = Object.freeze({
  HEADING: '금액 수정 전 주의사항',
  CONTENT: [
    {
      ID: 1,
      TITLE: '1. 수정 제한 및 규칙 준수',
      DESCRIPTION: '경매 진행 중 입찰 금액을 2회 이상 수정할 수 없습니다. 모든 수정은 신중히 결정해 주세요.',
    },
    {
      ID: 2,
      TITLE: '2. 결제 기한 준수',
      DESCRIPTION: '낙찰 후 24시간 이내에 결제를 완료해야 합니다. 기한 내 결제가 이루어지지 않으면 낙찰이 취소될 수 있습니다.',
    },
    {
      ID: 3,
      TITLE: '3. 환불 및 교환 불가',
      DESCRIPTION: '경매 특성상 낙찰된 상품은 환불 및 교환이 불가합니다. 상품 상세 정보를 충분히 확인한 후 입찰해 주세요.',
    },
    {
      ID: 4,
      TITLE: '4. 부정행위 금지',
      DESCRIPTION: '부정한 방법으로 경매에 참여할 경우 계정이 영구 정지될 수 있습니다. 공정한 경매 문화를 유지하기 위해 협조해 주세요.',
    },
  ],
});
