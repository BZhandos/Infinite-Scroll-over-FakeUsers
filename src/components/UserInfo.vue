<script setup>
defineProps({
    user: {
        type: Object,
        required: true
    }
})

const fullName = (user) => {
    return `${user.title}. ${user.first} ${user.last}`;
}
</script>

<template>
  <div class="user">
      <div class="user-avatar">
          <img :src="user.picture.thumbnail" alt="no img" />
      </div>
      <div class="user-info">
          <p class="user-info__name">{{ fullName(user.name) }}</p>
          <p class="user-info__email"> {{ user.email }}</p>
      </div>

  </div>
</template>

<style scoped>
.user {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    padding: 12px;
    border: 1px solid var(--gray);
    border-radius: 5px;
    margin: 5px;
    color: var(--gray);
    text-align: left;
}
.user-avatar img{
    border-radius: 5px;
}

.user-info__name {
    color: var(--white);
}

.user-info__email {
    text-decoration: underline;
}
</style>
