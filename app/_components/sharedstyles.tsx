import styled from "styled-components";

const Container = styled.div``;

const Main = styled.main``;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding-left: 0;
  margin: 0 20px 0 20px;
  list-style-type: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const ItemTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;
`;

const ItemSubtitle = styled.p`
  font-size: 14px;
  color: #555;
`;

export { Container, Main, Title, List, Item, ItemWrapper, ItemTitle, ItemSubtitle };
