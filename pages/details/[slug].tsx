import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { Movie } from "types";
import { getMovie } from "utils/getMovie";
import {
  DetailsPageContainer,
  DetailsPoster,
  DetailsContainer,
  DetailsTitle,
  DetailsRatingContainer,
  DetailsDataContainer,
  DetailsDescription,
  EmptyStar,
  FilledStar,
  DetailsTitleText,
  DetailsTopRowContainer,
} from "@/components/details";

const textFallback = (str: string | undefined) => (!str ? "Unknown" : str);

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const movie = await getMovie(typeof slug === "object" ? slug[0] : slug);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movie,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Details: FC<{ movie: Movie }> = ({ movie }) => {
  if (!movie) return <div>Loading...</div>;

  const stars = () => {
    const starsArr = [];
    for (let i = 1; i <= 5; i++) {
      starsArr.push(
        i < movie.imdb_rating / 2 ? (
          <FilledStar key={"filled-star" + i} />
        ) : (
          <EmptyStar key={"empty-star" + i} />
        )
      );
    }
    return starsArr;
  };

  const data = () => {
    const releaseYear = movie.released_on
      ? new Date(movie.released_on).getFullYear()
      : "Unknown";

    const cast =
      movie.cast && movie.cast.length > 0 ? movie.cast.join(", ") : "Unknown";

    const firstLine = `${releaseYear} | ${textFallback(
      movie.length
    )} | ${textFallback(movie.director)}`;

    const secondLine = `cast: ${cast}`;

    return (
      <span>
        {firstLine} <br />
        {secondLine}
      </span>
    );
  };

  return (
    <DetailsPageContainer>
      <DetailsPoster
        src={movie.poster}
        alt={"poster of the movie: " + movie.title}
      />
      <DetailsContainer>
        <DetailsTopRowContainer>
          <DetailsTitle>
            <DetailsTitleText>
              {movie.title} ({movie.imdb_rating})
            </DetailsTitleText>
          </DetailsTitle>
          <DetailsRatingContainer>{stars()}</DetailsRatingContainer>
        </DetailsTopRowContainer>
        <DetailsDataContainer>{data()}</DetailsDataContainer>
        <DetailsDescription>
          Movie Description{" "}
          <span
            style={{
              marginLeft: 10 /*the mockup has some space between these*/,
            }}
          >
            {textFallback(movie.overview)}
          </span>
        </DetailsDescription>
      </DetailsContainer>
    </DetailsPageContainer>
  );
};

export default Details;
