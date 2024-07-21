<script setup>
import UserInfo from "./UserInfo.vue";
import { RandomUserService } from "../requests/randomUser.service";
import { onMounted, ref, onUnmounted } from "vue";
import DefaultLoader from "./defaultLoader.vue";

const API = new RandomUserService();

const page = ref(1)
const userList = ref([])
const isThrottling = ref(false)
const isLoading = ref(true)

onMounted(()=> {
    window.addEventListener('scroll', scrollListener);
    getUserList();
})
onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener);
});

const scrollListener = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (!isThrottling.value) {
            isThrottling.value = true;
            onScrolledToEnd();
            setTimeout(() => {
                isThrottling.value = false;
            }, 500);
        }
    }
};
const onScrolledToEnd = () => {
    page.value += 1
    getUserList();
};

const getUserList = () => {
    isLoading.value = true
    API.fetchRandomUsers(page.value).then(users => {
        if (users) {
            userList.value.push(...users);
        } else {
            console.log('Failed to fetch users.');
        }
        isLoading.value = false
    });
}

</script>

<template>
  <div>Scroll to see more</div>
  <div class="user-wrapper" v-if="userList.length">
      <template v-for="user in userList" :key="user.login.uuid">
          <UserInfo :user="user"/>
      </template>
  </div>
  <default-loader v-show="isLoading"/>
</template>

<style scoped>
.user-wrapper {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 16px;
}
</style>
