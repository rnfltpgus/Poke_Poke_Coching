import React from 'react';

import styled from 'styled-components';

const StudyWarningNotice = () => {
  return (
    <StudyWarningNoticeWrap>
      <div className='study-warning-title'>🚨 StudyWarningNotice</div>
      <div className='study-warning-description'>
        자세에 문제가 있습니다! 자세를 바르게 해주세요.
      </div>
    </StudyWarningNoticeWrap>
  );
};

export default StudyWarningNotice;

const StudyWarningNoticeWrap = styled.div`
  .study-warning-title {
    margin: 2rem;
    font-size: 2rem;
    font-weight: bold;
    justify-content: center;
    text-align: center;
  }

  .study-warning-description {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1.5rem;
    justify-content: center;
    text-align: center;
  }
`;
