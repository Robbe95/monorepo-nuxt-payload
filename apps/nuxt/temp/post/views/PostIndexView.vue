<script setup lang="ts">
import { usePostsQuery } from '@post/api/queries/usePosts.query'

const posts = usePostsQuery()
</script>

<template>
  <div>
    {{ posts.data }}
  </div>
</template>
