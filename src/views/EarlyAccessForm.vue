<template>
  <div class="page--new">
    <Navbar />
    <Container>
      <div style="flex-basis: 100%;">
        <div
          class="typeform-widget typeform-widget--custom"
          data-url="https://form.typeform.com/to/NA4kCEYW"
          data-transparency="50"
          data-hide-headers="true"
          data-hide-footer="true"
        ></div>
      </div>

      <div class="typeform-brand--custom">
        powered by
        <a
          href="https://admin.typeform.com/signup?utm_campaign=NA4kCEYW&utm_source=typeform.com-01E9KDKEEFZT8DY5N3907M0M2K-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"
          style="color: #999"
          target="_blank"
          >Typeform
        </a>
      </div>
    </Container>
    <Container class="eaf-footer">
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
  },
  created() {
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
  },
  mounted() {
    if (this.isMobile()) {
      setTimeout(() => {
        window.Intercom("shutdown");
      }, 3000);
    }
  },
  methods: {
    isMobile() {
      if (screen.width <= 576) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  &--new {
    margin-bottom: 40px;

    .container {
      margin-top: 20px;
    }
  }
}

.typeform-widget--custom {
  width: 960px;
  height: 500px;
  margin: auto;
}

.typeform-brand--custom {
  width: 960px;
  margin: auto;
  position: relative;
  top: -47px;
  left: 30px;
  font-family: Sans-Serif;
  font-size: 12px;
  color: #999;
  padding-top: 5px;
  z-index: -1;
}

@media only screen and (max-width: 576px) {
  .eaf-footer {
    display: none;
  }

  .typeform-brand--custom {
    display: none;
  }

  .typeform-widget--custom {
    width: 100vw;
    height: 80vh;
    margin: auto;
  }
}
</style>
