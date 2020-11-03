<template>
    <div class="login-container">
        <el-form ref="form" :model="form" label-width="80px" class="login-form">
            <el-form-item>
                <h1 class="login-title">会员管理系统</h1>
            </el-form-item>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" plain>登录</el-button>
                <el-button type="warning" @click="onReset" plain>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      },
      onReset () {
        this.$refs['form'].resetFields();
      }
    }
  }
</script>

<style>
    .login-form {
        width: 350px;
        /* 上下160px, 左右自动居中 */
        margin: 160px auto;
        background-color: #0022bb50;
        /* 从上开始顺时针（上右下左） */
        padding:60px 60px 40px 10px;
        border-radius: 20px;
        opacity: 0.96;
        border: white 0.4px solid;
    }
    .login-form .el-form-item__label {
        color: #adb2ff;
        font-size: 18px;
    }
    .login-form .el-button {
        color: #0f3ebe;
        font-size: 18px;
        opacity: 0.75;
        width: 120px;
        height: 40px;
    }
    .login-form .el-input__inner {
        color: #0f3ebe;
        font-size: 18px;
        opacity: 0.88;
    }
    .login-form .el-form-item__content {
        display: flex;
        justify-content: space-between;
    }
    .login-title {
        color: #dbcdff;
        margin: 0 0;
    }
    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/login.jpg');
        background-size: cover;
        overflow-y: hidden;
    }
</style>