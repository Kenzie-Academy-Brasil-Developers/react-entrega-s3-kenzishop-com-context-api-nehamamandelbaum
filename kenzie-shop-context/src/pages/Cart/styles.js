import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0px 110px;
  background: #f5f5f5;
  margin-bottom: 50px;

  h1 {
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    font-family: "Inter", sans-serif;
    color: #809bce;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
`;
