import { FC } from "react";
import { searchMovies } from "utils/searchMovies";
import { GetStaticPaths, GetStaticProps } from "next";
import { groupMoviesByGenre } from "utils/groupMoviesByGenre";
import { GenreGroups } from "types";
import { HomeWrapper, Movies } from "components/home/";

export const getStaticProps: GetStaticProps = async () => {
  const movies = await searchMovies();
  return {
    props: {
      groups: groupMoviesByGenre(movies),
    },
    revalidate: 60,
  };
};

const Home: FC<{ groups: GenreGroups }> = ({ groups }) => {
  return (
    <HomeWrapper>
      <Movies groups={groups} />
    </HomeWrapper>
  );
};

export default Home;
