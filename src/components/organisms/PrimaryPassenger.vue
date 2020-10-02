<template>
  <div class="passenger">
    <h3 class="passenger__header">Primary passenger</h3>
    <Callout
      text="Use all first names and last names exactly as they appear in your passport or ID to avoid boarding complications"
      type="warning"
    />
    <Card
      class="passenger__details-card"
      v-for="n in numberOfPerson"
      :key="n"
      :dismissable="numberOfPerson > 1"
    >
      <Form :card="true">
        <Row>
          <FormField label="Title">
            <select class="form__input">
              <option value="Mr">Mr</option>
              <option value="Mr">Miss</option>
              <option value="Mr">Mrs</option>
            </select>
          </FormField>
          <FormField label="Given name">
            <input type="text" class="form__input" />
          </FormField>
          <FormField label="Surname">
            <input type="text" class="form__input" />
          </FormField>
          <FormField label="Nationality">
            <select class="form__input">
              <option value="serbian">Serbian</option>
            </select>
          </FormField>
        </Row>
        <Row>
          <FormField label="Birth date">
            <input type="date" class="form__input" />
          </FormField>
          <FormField label="Passport / ID number">
            <input type="text" class="form__input" />
          </FormField>
          <FormField label="Expire date">
            <input type="date" class="form__input" />
          </FormField>
        </Row>
      </Form>
    </Card>

    <Button class="passenger__add" @click="++numberOfPerson"
      >+ Add another passenger</Button
    >
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";
import Row from "@/components/molecules/Grid/Row";
import Form from "@/components/molecules/Form/Form";
import Callout from "@/components/molecules/Callout";
import FormField from "@/components/molecules/Form/FormField";

export default {
  name: "PrimaryPassenger",
  props: {
    title: String
  },
  data() {
    return {
      openDetails: false,
      numberOfPerson: 1
    };
  },
  components: {
    Row,
    Card,
    Form,
    Button,
    Callout,
    FormField
  },
  methods: {
    toggleViewDetails() {
      this.openDetails = !this.openDetails;
      this.$emit("toggleDetails", this.openDetails);
    }
  }
};
</script>

<style lang="scss">
.passenger {
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

  &__add {
    color: #00aeef;
    width: 100%;
    height: 3rem;
    border-radius: 5rem !important;
    border-style: dashed;
    border-color: #00aeef;
  }
}
</style>
