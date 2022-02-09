import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { RATINGS, PRICE_SLIDER, RATINGS_SLIDER } from "../utils/constants";
import styles from "./Filters.module.scss";

export default function Filters({ price, setPrice, rating, setRating }) {
  return (
    <div className={styles.filters}>
      <div>
        <h4>Filter by price</h4>
        <Slider
          min={PRICE_SLIDER.MIN}
          max={PRICE_SLIDER.MAX}
          value={price}
          marks={{ 750: 750, 1000: 1000, 1250: 1250, 1500: 1500 }}
          step={50}
          onChange={setPrice}
          onAfterChange={setPrice}
          aria-labelledby="Price slider"
          trackStyle={{ backgroundColor: "#82edc9" }}
          handleStyle={{
            backgroundColor: "#82edc9",
            borderColor: "#82edc9",
            outline: "none",
          }}
          style={{ width: "200px" }}
        />
      </div>
      <div>
        <h4>Filter by rating</h4>
        <Slider
          min={RATINGS_SLIDER.MIN}
          max={RATINGS_SLIDER.MAX}
          value={rating}
          marks={RATINGS}
          onChange={setRating}
          onAfterChange={setRating}
          trackStyle={{ backgroundColor: "#82edc9" }}
          handleStyle={{
            backgroundColor: "#82edc9",
            borderColor: "#82edc9",
            outline: "none",
          }}
          style={{ width: "300px" }}
        />
      </div>
    </div>
  );
}
