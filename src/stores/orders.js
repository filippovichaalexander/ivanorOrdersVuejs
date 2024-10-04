import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", {
  state: () => ({
    orders: [],
    order: {},
  }),
  actions: {
    async fetchTodos() {
      try {
        const response = await fetch(
          "https://msk.ivanor.ru/front/service/test-api/v1",
          {
            headers: {
              _token: "b56b4ebd92297a670b44b86e2dad235c",
            },
          }
        );
        const res = await response.json();
        this.todos = res.orders;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    setOrder(orderId) {
      this.order = orders.filter((o) => {
        return o.id === orderId;
      });
    },
    filterOrderByNumber(orderNumber) {
      orders.filter((o) => {
        return o.title === orderNumber.toLowerCase();
      });
    },
  },
  filterOrderByDateAndStatus(dateRange, selectedStatuses) {
    orders.filter((o) => {
      return (
        dateRange.include(order.created.description) &&
        o.status === selectedStatuses
      );
    });
  },
  getters: {
    getTodos: (state) => state.orders,
  },
});
