<template>
  <div class="booking">
    <div class="booking__badge">
      <Badge :label="'CHEAPEST'" :type="'CHEAPEST'" />
    </div>
    <div class="booking__item">
      <span class="booking__item__title">Class</span>
      <span class="booking__item__value">Economy</span>
    </div>
    <div class="booking__item">
      <span class="booking__item__title">Passengers</span>
      <span class="booking__item__value booking__item__value--passenger"
        >1 Adult</span
      >
    </div>
    <div class="booking__item">
      <span class="booking__item__title">Price</span>
      <span class="booking__item__value booking__item__value--price"
        >${{ result.price }}</span
      >
    </div>
    <div class="booking__book">
      <button class="booking__book__button">
        <span>Book</span>
        <img
          alt="Vue logo"
          class="booking__book__button__arrow"
          src="../../../assets/images/arrow-left.svg"
        />
      </button>
    </div>
  </div>
</template>

<script>
import Badge from "@/components/atoms/Airport";
export default {
  name: "Airport",
  components: {
    Badge
  },
  props: ["result"]
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 0;
}
.booking {
  flex: 1;
  padding: 30px;
}
.booking__item {
  position: relative;
}
.booking__item__title {
  font-family: Gilroy;
  font-size: 0.7rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: normal;
  color: #bbc4dc;
}
.booking__item__value {
  position: absolute;
  right: 0;
  opacity: 0.8;
  font-family: Gilroy;
  font-size: 0.7rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: normal;
  text-align: right;
  color: #3a3f5c;
}
.booking__item__value--price {
  font-size: 1.5rem;
  line-height: 1.33;
}
.booking__item__value--passenger {
  font-weight: 600;
}
.booking__badge {
  display: flex;
  flex-direction: row-reverse;
}
.booking__book__button {
  padding: 14px 30px;
  background-color: #e8efff;
  color: #00aeef;
  border-radius: 27px;
  width: 100%;
  text-align: left;

  font-family: Gilroy;
  font-size: 0.8rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
}
.booking__book {
  position: relative;
  margin-top: 20px;
}
.booking__book__button__arrow {
  position: absolute;
  right: 35px;
  bottom: 16px;
}
</style>
