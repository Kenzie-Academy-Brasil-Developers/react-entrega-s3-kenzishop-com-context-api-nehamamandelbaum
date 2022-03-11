import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 300px;
  }
  h3 {
    font-family: "Inter", sans-serif;
  }
  div {
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 40px;
      text-align: center;
      font-family: "Inter", sans-serif;
    }
    button {
      width: 168px;
      height: 40px;
      background: #95b8d1;
      color: white;
      border: none;
      border-radius: 4px;
      :hover {
        background: #86b9dc;
      }
    }
  }
`;
