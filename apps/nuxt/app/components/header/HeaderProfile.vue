<script setup lang="ts">
import type { CurrentUser } from '@auth/models/current-user/currentUser.model'
import { useAuthStore } from '@auth/stores/auth.store'

const authStore = useAuthStore()
const { t } = useI18n()
const currentUser = computed<CurrentUser | null>(() => authStore.currentUser)

function onLogout() {
  void authStore.logout()
}
</script>

<template>
  <div />
</template>
