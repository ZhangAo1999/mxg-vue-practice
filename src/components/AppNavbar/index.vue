<template>
    <div>
        <el-menu :collapse="isCollapse" class="navbar" 
            router text-color="azure"
            background-color="#150029">
            <li class="el-menu-item title" style="padding-left: 20px; color: azure; background-color: #210040;">
                <img src="../../assets/logo.png" width="40px">
                <span>会员管理系统</span>
            </li>
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/member/">
                <i class="el-icon-user-solid"></i>
                <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item index="/supplier/">
                <i class="el-icon-s-cooperation"></i>
                <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item index="/goods/">
                <i class="el-icon-s-goods"></i>
                <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item index="/staff/">
                <i class="el-icon-user"></i>
                <span slot="title">员工管理</span>
            </el-menu-item>
            <li class="el-menu-item openCloseButton" style="background-color: #210040;">
                <button type="button" class="el-button el-button--text" 
                    style="width: 100%;"
                    @click="change">
                    <center>
                        <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
                    </center>
                </button>
            </li>
            
        </el-menu>
    </div>
</template>

<style scoped>
    .navbar:not(.el-menu--collapse) {
        position: fixed;
        width: 180px;
        height: 100%;
        overflow: hidden;
        background-color: #150029;
        box-shadow: 4px 0 6px 2px #45434780;
        min-height: 100vh;
        z-index: 6;
        top: 0;
    }
    .navbar {
        position: fixed;
        width: 70px;
        height: 100%;
        overflow: hidden;
        background-color: #150029;
        top: 0;
        box-shadow: 4px 0px 6px 2px #45434780;
        min-height: 100vh;
        z-index: 6;
    }
    .title {
        margin-left: -10px;
        background-color: #210040;
    }
    .openCloseButton {
        
        position: absolute;
        width: 100%;
        bottom: 0px;
    }
</style>

<script>
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        change() {
            this.$emit('open_close', ! this.isCollapse);
            this.isCollapse = ! this.isCollapse
        }
    },
}
</script>