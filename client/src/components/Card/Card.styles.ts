import styled from "styled-components";

export const CardMain = styled.div`
  // border: 1px solid grey;
  border-radius: 15px;
  padding-bottom: 1rem;
  margin: 10px;
  box-shadow: 0 2px 4px rgb(33 32 31 / 15%);
  transition: box-shadow .3s ease;
  cursor: default;

  &:hover {
    box-shadow: 6px 6px 20px 0 rgb(117 115 111 / 20%);
  }
`

export const CardImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid black;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px 15px 0 0;
  }
`

export const CardDescriptionContainer = styled.div`
  padding: 0 0.5rem;
`

export const CardBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`
