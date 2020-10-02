<template>
  <div class="airport">
    <p class="airport__date">{{ datetime | moment("ddd, MMM DD") }}</p>
    <p class="airport__time">{{ datetime | moment("HH:MM") }}</p>
    <p class="airport__city">{{ city }}</p>
  </div>
</template>

<script>
export default {
  name: "Airport",
  props: ["datetime", "city"]
};
</script>

<style scoped lang="scss">
p {
  margin-bottom: 0;
}
.airport__date {
  opacity: 0.4;
  font-family: Gilroy;
  font-size: 0.7rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.67;
  letter-spacing: normal;
  color: #bbc4dc;
}
.airport__time {
  font-family: Gilroy;
  font-size: 2.2rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.89;
  letter-spacing: normal;
  color: #3a3f5c;
}
.airport__city {
  font-family: Gilroy;
  font-size: 0.7rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.29;
  letter-spacing: normal;
  color: #bbc4dc;
}
</style>
