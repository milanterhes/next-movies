import { FC } from "react";
import { searchMovies } from "utils/searchMovies";
import { GetStaticPaths, GetStaticProps } from "next";
import { groupMoviesByGenre } from "utils/groupMoviesByGenre";
import { GenreGroups } from "types";
import { HomeWrapper, Movies } from "components/home/";
import styled from "styled-components";

export const getStaticProps: GetStaticProps = async ({
  params: { searchTerm },
}) => {
  const movies = await searchMovies(
    typeof searchTerm === "object" ? searchTerm[0] : searchTerm
  );
  return {
    props: {
      groups: groupMoviesByGenre(movies),
      searchTerm,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

const SearchTitle = styled.h4`
  justify-self: center;
  align-self: center;
`;

const Home: FC<{ groups: GenreGroups; searchTerm: string }> = ({
  groups,
  searchTerm,
}) => {
  return (
    <HomeWrapper>
      <SearchTitle>Search: "{searchTerm}"</SearchTitle>
      <Movies groups={groups} />
    </HomeWrapper>
  );
};

export default Home;
