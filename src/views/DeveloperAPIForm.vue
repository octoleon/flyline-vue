<template>
  <div class="page--new">
    <Navbar />
    <Container>
      <div
        class="typeform-widget"
        data-url="https://form.typeform.com/to/Svt1DA9Z"
        data-transparency="50"
        data-hide-headers="true"
        data-hide-footer="true"
        style="width: 100%; height: 500px;"
      ></div>

      <div
        style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"
      >
        powered by
        <a
          href="https://admin.typeform.com/signup?utm_campaign=Svt1DA9Z&utm_source=typeform.com-01E9KDKEEFZT8DY5N3907M0M2K-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"
          style="color: #999"
          target="_blank"
          >Typeform</a
        >
      </div>
    </Container>
    <Container>
      <Footer />
    </Container>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
import Container from "@/components/molecules/Container";
import Footer from "@/components/organisms/Footer";

export default {
  name: "EarlyAccessForm",
  components: {
    Navbar,
    Container,
    Footer
  }
};
(function() {
  var js,
    q,
    d = document,
    gi = d.getElementById,
    ce = d.createElement,
    gt = d.getElementsByTagName,
    id = "typef_orm",
    b = "https://embed.typeform.com/";
  if (!gi.call(d, id)) {
    js = ce.call(d, "script");
    js.id = id;
    js.src = b + "embed.js";
    q = gt.call(d, "script")[0];
    q.parentNode.insertBefore(js, q);
  }
})();
</script>

<style lang="scss">
.page {
  &--new {
    margin-bottom: 40px;

    .container {
      margin-top: 20px;
    }
  }
}
</style>
