<template>
    <div class="login-container">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
            <el-form-item>
                <h1 class="login-title">会员管理系统</h1>
            </el-form-item>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                                                            <!-- 加.native解决触发不了enter事件的问题。 -->
                <el-input v-model="form.password" type="password" @keydown.enter.native="onSubmit('form')"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')" plain>登录</el-button>
                <el-button type="warning" @click="onReset('form')" plain>重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { login, getUserInfo } from '@/api/login'

export default {
    data() {
      return {
        form: {},
        rules: {
            username: [
                { required: true, message: '账号不能为空', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '密码不能为空', trigger: 'blur' }
            ]
        }
      }
    },
    methods: {
      onSubmit (formName) {
        this.$refs[formName].validate(valid => {
            if (valid) {
                login(this.form.username, this.form.password).then(res => {
                    const resp = res.data
                    if (resp.flag) {
                        getUserInfo(resp.data.token).then(resUser => {
                            const respUser = resUser.data
                            if (respUser.flag) {
                                this.$message.success({
                                    center: true,
                                    message: resp.message + '欢迎您，' + respUser.data.name,
                                    duration: 1200
                                })
                                // 1.保存token, 用户信息
                                localStorage.setItem('user', JSON.stringify(respUser.data))
                                localStorage.setItem('token', resp.data.token)
                                // 2.前往首页
                                this.$router.push('/')
                            } else {
                                this.$message.error({
                                center: true,
                                message: resp.message,
                                duration: 800
                                })
                            }
                        })
                    } else {
                        this.$message.error({
                            center: true,
                            message: resp.message,
                            duration: 800
                        })
                    }
                })
            } else {
                console.log('验证失败！')
            }
        })
      },
      onReset (formName) {
        this.$refs[formName].resetFields();
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
    .login-form .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
        color: #ffa4dc;
    } 
    .login-form .el-form-item__error {
        color: #ffa4dc;
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
        border-color: #409EFF;
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