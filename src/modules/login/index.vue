<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

function login() {
  if (username.value == 'admin' && password.value == '123456') {
    const fakeToken = 'fake-jwt-token';
    localStorage.setItem('app_access_token', fakeToken);
    router.push('/');
  } else {
    alert('Sai thông tin đăng nhập');
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="title">Đăng nhập</h1>
      <input v-model="username" placeholder="Tên đăng nhập" class="login-input" />
      <input v-model="password" type="password" placeholder="Mật khẩu" class="login-input" />
      <button @click="login" class="login-button">Đăng nhập</button>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #4ca1af);
  font-family: 'Segoe UI', sans-serif;
}

.login-box {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  width: 300px;
}

.title {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 24px;
}

.login-input {
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  transition: all 0.3s;
}

.login-input::placeholder {
  color: #eee;
}

.login-input:focus {
  background: rgba(255, 255, 255, 0.3);
}

.login-button {
  background-color: #00c6ff;
  background-image: linear-gradient(45deg, #00c6ff, #0072ff);
  border: none;
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.login-button:hover {
  background-image: linear-gradient(45deg, #0072ff, #00c6ff);
}
</style>
