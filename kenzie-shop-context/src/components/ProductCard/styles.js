import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 340px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  img {
    width: 300px;
    height: 150px;
    object-fit: contain;
  }
`;

export const ContentContainer = styled.div`
  padding: 20px;
  h3 {
    font-family: "Inter", sans-serif;
  }
  span {
    display: block;
    margin: 10px 0px;
    font-family: "Inter", sans-serif;
    margin-bottom: 15px;
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
`;
