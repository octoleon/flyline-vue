<template>
  <div class="trip-setting-card">
    <h4 class="trip-setting-card__title">You’re up to date.</h4>
    <p class="trip-setting-card__text">Time to pack your bags</p>
    <a href="#" class="button view-booking-button">
      <span>View booking</span>
      <span>&rsaquo;</span>
    </a>

    <div class="trip-setting-card__content">
      <div class="trip-setting-card__content__cell">
        <h4 class="trip-setting-card__content__title">Baggage</h4>
        <ul class="trip-setting-card__content__list">
          <li><img src="@/assets/bag-09.svg" /> 1x Personal item</li>
          <li><img src="@/assets/briefcase-24.svg" /> 1x Cabin baggage</li>
          <li><img src="@/assets/shopping-bag.svg" /> 2x Checked baggage</li>
        </ul>
        <a href="#" class="button secondary trip-setting-card__content__button">
          <img src="@/assets/plus.svg" />
          Add baggage
        </a>
      </div>
      <div class="trip-setting-card__content__cell">
        <h4 class="trip-setting-card__content__title">Insurance</h4>
        <ul class="trip-setting-card__content__list">
          <li><img src="@/assets/stop.svg" /> No Insurance</li>
        </ul>
        <a href="#" class="button secondary trip-setting-card__content__button">
          <img src="@/assets/plus.svg" />
          Add Insurance
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripSettingCard"
};
</script>

<style lang="scss">
.trip-setting-card {
  border-radius: 20px;
  overflow: hidden;
  background-color: #ffffff;
  padding: 2.5rem 2rem;
}
.trip-setting-card__title {
  color: #000000;
  font-weight: 600;
}
.trip-setting-card__text {
  color: #818181;
  font-size: 0.7rem;
}

.trip-setting-card .view-booking-button {
  max-width: 60%;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  font-size: 12px;
}

.trip-setting-card__content {
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.trip-setting-card__content__cell {
  padding-right: 15px;
}
.trip-setting-card__content__cell:last-child {
  padding-right: 0px;
}

.trip-setting-card__content__title {
  color: #000000;
  font-weight: 600;
  font-size: 1.2rem;
}
.trip-setting-card__content__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: #808080;
  font-size: 12px;
}
.trip-setting-card__content__list li {
  display: flex;
  align-items: center;
}
.trip-setting-card__content__list li img {
  padding-right: 5px;
}

.trip-setting-card .trip-setting-card__content__button {
  font-size: 12px;
  margin-top: 24px;
  border-radius: 30px;
  background-color: #ebebeb;
  color: #383838;
  display: flex;
  align-items: center;
}
.trip-setting-card .trip-setting-card__content__button img {
  padding-right: 10px;
}
</style>
