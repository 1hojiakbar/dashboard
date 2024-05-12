import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 93vh;
  overflow: hidden;
  overflow-y: scroll;
  .title {
    align-self: flex-start;
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const SegmentWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 14px;

  .end {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    width: max-content;
    right: 0;
  }

  .btn-hover {
    color: rgb(77, 77, 77);
  }

  .btn-hover:hover {
    color: rgb(0, 72, 144);
  }
`;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 26px;
  row-gap: 37px;
`;

const ChartCount = styled.strong`
  color: rgb(0, 0, 0);
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
`;

const ChartTitle = styled.strong`
  color: rgb(77, 77, 77);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: -0.15px;
  text-align: left;
`;

const ChartDataText = styled.strong`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 12.61px;
  letter-spacing: 0px;
  text-align: left;
  white-space: nowrap;
`;

export {
  Container,
  SegmentWrapper,
  MainWrapper,
  ChartCount,
  ChartTitle,
  ChartDataText,
};
