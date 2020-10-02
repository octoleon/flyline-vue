<template>
  <Card title="Download the App" class="download-app">
    <p
      style="width: 380px; font-size: .9rem; font-family: Gilroy-Medium; color: #BBC4DC;"
    >
      To FlyLine to the fullest, use our app. Just enter your phone number and
      we’ll text you a download link.
    </p>
    <ul class="social__icons" style="bottom: 140px;">
      <li style="width: 26px;">
        <router-link to="/notifications"><IconApple /></router-link>
      </li>
      <li style="width: 24px;">
        <router-link to="/notifications"><IconGooglePlus /></router-link>
      </li>
    </ul>
    <Row>
      <div>
        <Form :card="true">
          <Row>
            <div class="input-search">
              <FormField>
                <input
                  type="text"
                  name="first_name"
                  v-model="first_name"
                  class="form__input"
                />
              </FormField>
            </div>
            <div class="send__btn">
              <Button :primary="true" class="form__submit">
                Send App
              </Button>
            </div>
          </Row>
        </Form>
      </div>
    </Row>
  </Card>
</template>

<script>
import Card from "@/components/molecules/Card";
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import Form from "@/components/molecules/Form/Form";
import FormField from "@/components/molecules/Form/FormField";
import IconApple from "@/components/atoms/icons/IconApple";
import IconGooglePlus from "@/components/atoms/icons/IconGooglePlus";

export default {
  name: "DownloadApp",
  components: {
    Row,
    Card,
    Form,
    Button,
    FormField,
    IconGooglePlus,
    IconApple
  }
};
</script>

<style lang="scss">
.download-app {
  width: calc(50% - 7.5px);
  box-shadow: 0 0 5px 0 rgba(43, 57, 94, 0.06);
  position: relative;

  .social__icons {
    position: absolute;
    left: 40%;
  }
}
.input-search {
  width: 60%;
  .field__label--transparent {
    display: none;
  }
  .form__input {
    margin-bottom: 0;
  }
}
.send__btn {
  .form__submit {
    height: 39px;
    width: 100%;
    border-radius: 18px !important;
  }
}
.text__right {
  text-align: right;
}
</style>
