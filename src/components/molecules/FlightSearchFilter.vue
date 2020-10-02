<template>
  <Row>
    <MockInput :dropdown="true" label="Flight" text="Round trip">
      <IconTakeoff slot="icon" />
    </MockInput>
    <MockInput label="Dates" text="Mar 15 - Mar 25">
      <IconCalendar slot="icon" />
    </MockInput>
    <MockInput :dropdown="true" label="Class" text="Economy">
      <IconStar slot="icon" />
    </MockInput>
    <MockInput :dropdown="true" label="Passengers" text="1 adult">
      <IconUser slot="icon" />
    </MockInput>
    <Button type="primary" class="flight__search">Search</Button>
  </Row>
</template>

<script>
import Button from "@/components/atoms/Button";
import Row from "@/components/molecules/Grid/Row";
import MockInput from "@/components/molecules/MockInput";
import IconUser from "@/components/atoms/icons/IconUser";
import IconStar from "@/components/atoms/icons/IconStar";
import IconTakeoff from "@/components/atoms/icons/IconTakeoff";
import IconCalendar from "@/components/atoms/icons/IconCalendar";

export default {
  name: "FlightSearchFilter",
  components: {
    Row,
    MockInput,
    IconUser,
    IconStar,
    IconTakeoff,
    IconCalendar,
    Button
  }
};
</script>
