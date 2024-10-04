<template>
  <div>
    <p>Имя клиента: {{ order.client.firstname }}</p>
    <p>Фамилия клиента: {{ order.client.lasstname }}</p>
    <p>телефон клиента: {{ order.client.phone }}</p>
    <p>Данные по магазину: {{ order.name }}</p>
    <p>Статус оплаты: {{ order.payment.properties.status }}</p>
    <div>
      <p>Заказ:</p>
      <div v-for="product in order.items" :key="product.id" class="product">
        <ul>
          <li>{{ product.items.title }}</li>
          <li>{{ product.items.quantity }}</li>
          <li>{{ product.items.price }}</li>
          <li>{{ product.items.status }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>
