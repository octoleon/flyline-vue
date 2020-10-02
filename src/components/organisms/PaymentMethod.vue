<template>
  <div class="payment">
    <h3 class="payment__header">Primary payment</h3>
    <Card class="payment__details-card">
      <Form :card="true">
        <Row>
          <FormField label="Email">
            <input type="email" class="form__input" />
          </FormField>
          <FormField label="Phone">
            <select class="form__input" v-model="country_code">
              <option
                v-for="c in countries"
                :value="c.value"
                v-text="`(${c.value}) ${c.name}`"
                :key="c.name"
              ></option>
            </select>
          </FormField>
          <FormField :prefix="country_code">
            <input type="text" class="form__input" />
          </FormField>
        </Row>
        <Row>
          <FormField label="Card owner">
            <input type="date" class="form__input" />
          </FormField>
          <FormField label="Card number">
            <input type="text" class="form__input" />
          </FormField>
        </Row>
        <Row>
          <FormField label="Exp. date">
            <select class="form__input" v-model="expire_date.month">
              <option value="">MM</option>
              <option
                v-for="month in months"
                :value="month"
                v-text="month"
                :key="month"
              ></option>
            </select>
          </FormField>
          <FormField>
            <select class="form__input" v-model="expire_date.year">
              <option value="">YYYY</option>
              <option
                v-for="year in nextFewYears"
                :value="year"
                v-text="year"
                :key="year"
              ></option>
            </select>
          </FormField>
          <FormField label="CCV/CVV">
            <input
              type="text"
              class="form__input"
              placeholder="3 or 4 digit number"
            />
          </FormField>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/molecules/Card";
import Row from "@/components/molecules/Grid/Row";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";

export default {
  name: "PaymentMethod",
  data() {
    return {
      country_code: "+381",
      expire_date: {
        month: null,
        year: null
      }
    };
  },
  computed: {
    nextFewYears() {
      const date = new Date();
      const currentYear = date.getFullYear();
      const years = [];

      for (let year = currentYear; year <= currentYear + 10; year++) {
        years.push(year);
      }

      return years;
    },
    months() {
      const date = new Date();
      const currentYear = date.getFullYear();
      let firstMonth = 1;

      if (this.year === currentYear) {
        firstMonth = date.getMonth() + 1;
      }

      const months = [];

      for (let m = firstMonth; m <= 12; m++) {
        m = m < 10 ? `0${m}` : `${m}`;

        months.push(m);
      }

      return months;
    },
    countries() {
      return [
        {
          name: "Serbia",
          value: "+381",
          img: "@/assets/images/flags/serbia.svg"
        },
        {
          name: "USA",
          value: "+1",
          img: "@/assets/images/flags/serbia.svg"
        },
        {
          name: "Australia",
          value: "+67",
          img: "@/assets/images/flags/serbia.svg"
        }
      ];
    }
  },
  components: {
    Row,
    Card,
    Form,
    FormField
    // ASelect
  },
  methods: {}
};
</script>

<style lang="scss">
.payment {
  font-size: 11px;
  width: 100%;
  margin-right: 15px;
  margin-bottom: 1rem;

  &__header {
    font-family: "Gilroy-Bold";
    font-size: 16px;
    padding-bottom: 10px;
  }

  &__details-card {
    width: 100%;
  }
}
</style>
