import React from "react";
import styled from "styled-components";
import { Container } from "@/styles/CommonStyles";
import BestArticlesSection from "./components/BestArticlesSection";
import AllArticlesSection from "./components/AllArticlesSection";
import { GetStaticProps } from "next";
import { Article, ArticleListResponse } from "@/types/articleTypes";

const PageContainer = styled(Container)`
  gap: 40px;
`;

// 데이터 prefetching은 페이지 로딩 전에 필요한 데이터를 미리 가져오는 과정이기 때문에 페이지 수준에서 수행한 후에 해당 데이터를 필요로 하는 컴포넌트에 prop으로 전달
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?orderBy=recent`
  );
  const data: ArticleListResponse = await response.json();

  return {
    props: {
      initialArticles: data.list,
    },
  };
};

interface BoardsPageProps {
  initialArticles: Article[];
}

export default function BoardsPage({ initialArticles }: BoardsPageProps) {
  return (
    <PageContainer>
      <BestArticlesSection />
      <AllArticlesSection initialArticles={initialArticles} />
    </PageContainer>
  );
}
