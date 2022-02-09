import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetStaticProps } from "next";
import {
  PRICE_SLIDER,
  RATINGS_SLIDER,
  RATINGS_TO_VALUE,
} from "../utils/constants";
import Container from "../components/Container";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Filters from "../components/Filters";
import styles from "../styles/Home.module.scss";

const LSTINGS_PER_PAGE = 6;

function Home({ items }) {
  const [searchedResult, setSearchedResult] = useState("");
  const [price, setPrice] = useState(PRICE_SLIDER.DEFAULT);
  const [rating, setRating] = useState(RATINGS_SLIDER.DEFAULT);
  const [page, setPage] = useState(LSTINGS_PER_PAGE);

  const updateSearchTerm = (value) => {
    setSearchedResult(value);
  };

  const filteredItems = Object.values(items).filter((item) => {
    return (
      item.location
        .toLocaleLowerCase()
        .includes(searchedResult.toLocaleLowerCase()) &&
      item.pricesFrom < price &&
      RATINGS_TO_VALUE[item.cqcRating] >= rating
    );
  });

  const paginatedItems = Object.values(items).slice(0, page);

  const loadMore = () => {
    setPage((page) => page + LSTINGS_PER_PAGE);
    paginate();
  };

  const paginate = () => {
    return paginatedItems.slice(0, page * LSTINGS_PER_PAGE);
  };

  const isSearching =
    searchedResult ||
    price !== PRICE_SLIDER.DEFAULT ||
    rating !== RATINGS_SLIDER.DEFAULT;

  return (
    <Container>
      <Header updateSearchTerm={updateSearchTerm} />
      <Main>
        <Filters
          rating={rating}
          setRating={setRating}
          price={price}
          setPrice={setPrice}
        />

        {isSearching ? (
          filteredItems.length !== 0 ? (
            <Grid>
              {filteredItems.map((item, index) => (
                <Card key={`${item}-${index}`} data={item} />
              ))}
            </Grid>
          ) : (
            <h4 className={styles.notFound}>
              0 items found. Please try a different search.
            </h4>
          )
        ) : (
          <InfiniteScroll
            dataLength={paginatedItems.length}
            next={loadMore}
            loader={<h3> Loading...</h3>}
            endMessage={<h4>Nothing more to show</h4>}
            hasMore={true}
          >
            <Grid>
              {paginatedItems.map((item, index) => (
                <Card key={`${item}-${index}`} data={item} />
              ))}
            </Grid>
          </InfiniteScroll>
        )}
      </Main>
      <Footer />
    </Container>
  );
}

export const getStaticProps = async () => {
  const URL =
    "https://lottie-boh-assets.s3.eu-west-2.amazonaws.com/listings.json";

  const res = await fetch(URL);
  const items = await res.json();

  // a quick query to see which ratings exist
  const arrayOfObjects = Object.entries(items).map((key) => ({ ...key[1] }));
  const unique = [...new Set(arrayOfObjects.map((item) => item.cqcRating))];
  // unique:  [ 'Requires Improvement', 'Good', 'Outstanding', 'Not Yet Rated' ]

  return {
    props: { items },
  };
};

export default Home;
