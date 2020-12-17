import * as React from 'react';

import Layout from '../components/common/Layout';
import styled from 'styled-components';

const HomePageBlock = styled.div``;
export interface HomePageProps {}

function HomePage() {
  return (
    <HomePageBlock>
      <Layout>
        <Layout.Left>여기가 홈화11면</Layout.Left>
        <Layout.Main>여기가 홈화면</Layout.Main>
        <Layout.Right>여기가 홈화면</Layout.Right>
      </Layout>
    </HomePageBlock>
  );
}

export default HomePage;
