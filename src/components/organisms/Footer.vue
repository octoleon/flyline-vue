<template>
  <Container :padded="false">
    <footer class="footer border-top">
      <section class="company">
        <img
          src="@/assets/images/FlylineSVG_Logotype.svg"
          alt="Flyline logo"
          class="company__logo"
        />
        <p style="line-height: 20px;" class="company__slogan">
          Flight Search and RoboTravel Agent <br />
        </p>
      </section>
      <section class="sitemaps">
        <div class="sitemap">
          <h3 class="sitemap__title">Home</h3>
          <ul class="sitemap__links">
            <li class="sitemap__link"><a href="/how-it-works">Features</a></li>
            <li class="sitemap__link"><a href="/faretypes">Fare Types</a></li>
            <li class="sitemap__link">
              <router-link :to="{ name: 'TypeForm' }"
                >Request Early Access</router-link
              >
            </li>
          </ul>
        </div>
        <div class="sitemap">
          <h3 class="sitemap__title">Product</h3>
          <ul class="sitemap__links">
            <li class="sitemap__link">
              <a href="/referral">FlyLine iOS App</a>
            </li>
            <li class="sitemap__link">
              <a href="https://medium.com/flyline">FlyLine Android App</a>
            </li>
            <li class="sitemap__link">
              <a href="https://medium.com/flyline">FlyLine Blog</a>
            </li>
          </ul>
        </div>
        <div class="sitemap">
          <h3 class="sitemap__title">Company</h3>
          <ul class="sitemap__links">
            <li class="sitemap__link">
              <a href="https://www.linkedin.com/company/flyline/">About</a>
            </li>
            <li class="sitemap__link">
              <a href="https://intercom.help/flyline/en">FAQs</a>
            </li>
            <li class="sitemap__link">
              <a href="https://intercom.help/flyline/en">Support</a>
            </li>
          </ul>
        </div>
        <div class="sitemap">
          <h3 class="sitemap__title">Legal</h3>
          <ul class="sitemap__links">
            <li class="sitemap__link"><a href="/terms">Terms of Use</a></li>
            <li class="sitemap__link"><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </section>
      <div class="footer__misc">
        <div class="footer__copyright">
          © 2020 FlyLine. All right reserved.
        </div>
        <div class="footer__social">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="@/assets/images/social/facebook.svg" alt=""
          /></a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="@/assets/images/social/instagram.svg" alt=""
          /></a>
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"
            ><img src="@/assets/images/social/twitter.svg" alt=""
          /></a>
          <a
            href="https://medium.com/flyline"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="@/assets/images/social/medium.svg" alt=""
          /></a>
          <a
            href="https://www.linkedin.com/company/flyline/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="@/assets/images/social/linkedin.svg" alt=""
          /></a>
        </div>
      </div>
    </footer>
  </Container>
</template>

<script>
import Container from "@/components/molecules/Container";

export default {
  name: "Footer",
  components: {
    Container
  }
};
</script>

<style lang="scss">
.border-top {
  border-top: 1px solid #eef0f6;
}
.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 4rem;
  flex-wrap: wrap;

  &__misc {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0 1rem 0;
  }

  &__copyright {
    opacity: 0.6;
    font-family: "Gilroy-Medium";
    font-size: 0.7rem;
  }

  &__social {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;

    > * {
      margin-right: 1.5rem;
    }

    > *:last-child {
      margin-right: 0;
    }

    img {
      height: 0.8rem;
    }
  }
}

.company {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &__logo {
    padding-bottom: 2rem;
  }

  &__slogan {
    opacity: 0.6;
    line-height: 1.3;
    font-weight: 600;
    font-size: 0.7rem;
  }
}

.sitemaps {
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  flex-grow: 1;
  max-width: 60%;

  .sitemap {
    &__links {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__title {
      font-family: "Gilroy-Bold";
      font-size: 1rem;
      padding-bottom: 10px;
    }

    &__link {
      opacity: 0.6;
      font-family: "Gilroy-Medium";
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
      a {
        color: black;
      }
    }
  }
}
</style>
