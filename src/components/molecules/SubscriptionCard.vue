<template>
  <div class="subscription">
    <div class="cost">
      <span class="cost__value" v-text="price.value"></span>
      <span class="cost__coverage" v-text="price.coverage"></span>
    </div>

    <div class="subscription__details">
      <h3 class="subscription__name" v-text="title"></h3>
      <Row>
        <ul class="features" v-for="($features, i) in chunkedFeatures" :key="i">
          <li class="feature" v-for="feature in $features" :key="feature">
            <span v-text="feature" class="feature__name"></span>
          </li>
        </ul>
      </Row>
    </div>

    <div>
      <Button
        :primary="true"
        v-text="subscriptionActionText"
        class="btn--subscription-action"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import { chunk } from "@/utils";

export default {
  name: "SubscriptionCard",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    },
    price: Object,
    features: Array,
    current: Boolean
  },
  computed: {
    chunkedFeatures() {
      return chunk(this.features, 3);
    },
    subscriptionActionText() {
      return this.current ? "Cancel plan" : "Downgrade";
    }
  },
  components: {
    Row,
    Button
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";

.subscription {
  @include xy-grid();
  @include card-container(
    white,
    #3a3f5c,
    15px,
    solid 0.5px #edeef6,
    13.5px,
    0 0 20px 0 rgba(43, 57, 94, 0.06)
  );

  margin-right: 0;
  flex-direction: row;
  padding: 18px 15px;
  width: calc(50% - 7.5px);
  flex-grow: unset;
  position: relative;
  overflow: unset;

  & > *:last-child {
    position: absolute;
    bottom: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 15px);

    .btn--subscription-action {
      width: 120px;
      height: 40px;
      border-radius: 25px !important;
    }
  }

  .cost {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    background-color: #e3f8fe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__value,
    &__value::before,
    &__coverage {
      color: #00aff5;
      font-family: "Gilroy-Bold";
      font-size: 18px;
    }

    &__value::before {
      content: "$";
    }

    &__coverage {
      font-size: 10px;
      color: #3a3f5c;
    }
  }

  &__details {
    padding-left: 15px;
    position: relative;

    & > .btn--subscription-action {
      position: relative;
    }
  }

  &__name {
    color: #00b3fe;
    text-transform: uppercase;
    font-family: "Gilroy-Bold";
    font-size: 14px;
    padding-top: 8px;
    margin-bottom: 0;
  }

  .features {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 15px;

    .feature__name {
      position: relative;
      color: rgba(58, 63, 92, 0.6);
      font-size: 10px;

      &::before {
        content: "•";
        display: inline-block;
        text-align: center;
        color: #00aeef;
        position: absolute;
        left: -11px;
        top: -4.5px;
        font-size: 25px;
        line-height: 1;
      }
    }

    &:last-child {
      margin-left: 15px;
    }
  }
}
</style>
