import { FC, Fragment } from "react";
import styled from "styled-components";
import FlexContainer from "@/shared/flex-container";
import Link from "next/link";
import { Movie, GenreGroups } from "types";

//these components could be move to their own files if they get bigger, but for now I'll keep them here
export const HomeWrapper = styled(FlexContainer)`
  padding-top: 10px;
  padding-left: 5px;
  flex-direction: column;
`;

interface MovieBoxProps {
  backdrop: string;
  slug: string;
  title: string;
}

const MovieImg = styled.img`
  max-width: 250px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const MovieBox: FC<MovieBoxProps> = ({ backdrop, title, slug }) => {
  return (
    <Link href={`/details/${slug}`}>
      <MovieImg src={backdrop} alt={title} />
    </Link>
  );
};

const MovieRowContainer = styled(FlexContainer)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  column-gap: 5px;
  align-items: center;
  margin-bottom: 25px;
`;

const MoviesContainer = styled(FlexContainer)`
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
`;

const MovieList: FC<{ movies: Movie[]; genre: string }> = ({
  movies,
  genre,
}) => {
  const movieBoxes = () => {
    if (movies?.length > 0)
      return movies.map(({ backdrop, title, slug }) => (
        <MovieBox
          key={genre + title}
          backdrop={backdrop}
          slug={slug}
          title={title}
        />
      ));

    return null;
  };
  return <MovieRowContainer>{movieBoxes()}</MovieRowContainer>;
};

const GenreText = styled.h2`
  margin: 7px 0;
`;

const MovieRow = styled.div`
  margin: 15px 0;
  overflow-y: hidden;
`;

export const Movies: FC<{ groups: GenreGroups }> = ({ groups }) => {
  const rows = () => {
    if (groups)
      return Object.keys(groups).map((genre) => (
        <MovieRow key={genre}>
          <GenreText>{genre}</GenreText>
          <MovieList movies={groups[genre]} genre={genre} />
        </MovieRow>
      ));
    return null;
  };

  return <MoviesContainer>{rows()}</MoviesContainer>;
};
