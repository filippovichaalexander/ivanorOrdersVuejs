<template>
  <div class="div">
    <div class="firstSection">
      <input
        v-model="orderNumber"
        type="text"
        class="order-number"
        placeholder="Введите номер заказа"
      />
      <button @click="SearchOrderByNumber">Найти</button>
    </div>
    <div class="secondSection">
      <div class="date-range">
        <input type="date" v-model="dateFrom" @input="updateDateRange" />
        <input type="date" v-model="dateTo" @input="updateDateRange" />
      </div>
      <div class="status-checkboxes">
        <label v-for="status in statuses" :key="status">
          <input type="checkbox" :value="status" v-model="selectedStatuses" />
          {{ status }}
        </label>
      </div>
      <button @click="SearchOrderByDateAndStatus">Найти</button>
    </div>
  </div>
</template>
<script scoped>
import useOrdersStore from "../stores/orders";

const ordersStore = useOrdersStore;

const orderNumber = ref("");

const dateFrom = ref(null);
const dateTo = ref(null);
const dateRange = ref([]);

const statuses = ref[("выполнен", "зарезервирован", "отменён")];
let selectedStatuses = ref([]);

const SearchOrderByNumber = (orderNumber) => {
  ordersStore.filterOrderByNumber(orderNumber);
};

const updateDateRange = () => {
  if (dateFrom.value && dateTo.value) {
    if (dateFrom.value <= dateTo.value) {
      const start = new Date(dateFrom.value);
      const end = new Date(dateTo.value);
      const range = [];
      while (start <= end) {
        range.push(new Date(start).toISOString().slice(0, 10));
        start.setDate(start.getDate() + 1);
      }
      dateRange.value = range;
    } else {
      dateRange.value = [];
    }
  } else {
    dateRange.value = [];
  }
};

const SearchOrderByDateAndStatus = () => {
  ordersStore.filterOrderByDateAndStatus(dateRange, selectedStatuses);
};
</script>
