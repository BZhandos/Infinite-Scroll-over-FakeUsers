<script setup>

</script>

<template>
    <div class="loader-wrapper">
        <div class="loader-wrapper__sign"></div>
    </div>
</template>

<style scoped>
.loader-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
}
.loader-wrapper__sign {
    border: 7px solid #f3f3f3;
    border-radius: 50%;
    border-top: 7px solid var(--gray);
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
