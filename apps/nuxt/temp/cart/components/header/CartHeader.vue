<script setup lang="ts">
import type { Price } from '@base/models/price/price.model'
import type { Cart } from '@cart/models/cart/get/cart.model'
import { useCartStore } from '@cart/stores/cart.store'

const { t } = useI18n()

const cartStore = useCartStore()

const amountOfProducts = computed<number>(() => {
  return cartStore.amountOfProducts
})

const totalPrice = computed<Price | null>(() => {
  return cartStore.productsPrice
})

const cart = computed<Cart | null>(() => {
  return cartStore.cart.data ?? null
})

const isCartUpdating = computed<boolean>(() => {
  return cartStore.isCartUpdating
})
</script>

<template>
  <div />
</template>
