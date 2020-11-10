<template>
    <div>
        <div class="header">
            <div class="headerbar">
                <div></div>
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-user"></i> 用户<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-postcard" command="info">个人信息</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-setting" command="edit">我的设置</el-dropdown-item>
                        <el-dropdown-item divided icon="el-icon-switch-button" command="quit">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleCommand (command) {
                this.$message(`点击了${command}`)
            }
        },
    }
</script>

<style scoped>
    .el-dropdown-link {
        cursor: pointer;
    }
</style>