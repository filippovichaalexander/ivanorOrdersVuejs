<template>
  <div>
    <p>{{ order.dateTime }}</p>
    <p :class="payment">{{ order.status }}</p>
    <p>{{ order.shipmenttype }}</p>
    <p>{{ order.shipmentDate }}</p>
    <p>{{ order.paymentType }}</p>
    <p>{{ order.shipmentAddress }}</p>
    <p>{{ order.fullName }}</p>
    <p>{{ order.orderPrice }}</p>
    <p>{{ order.itemsAmount }}</p>
    <p>{{ order.operator }}</p>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  order: {
    type: () => {},
    required: true,
  },
});
const payment = computed(() => {
  if (props.payment === "выполнен") {
    return "grey-green";
  } else if (props.payment === "зарезервирован") {
    return "green";
  } else {
    return "red";
  }
});
</script>
<style scoped>
.grey-green {
  color: rgb(72, 88, 72);
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
