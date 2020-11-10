<template>
    <div>
        <el-menu :collapse="isCollapse" class="navbar" 
            router="true" text-color="azure"
            background-color="#150029">
            <li class="el-menu-item title" style="padding-left: 20px; color: azure; background-color: #210040;">
                <img src="../../assets/logo.png" width="40px">
                <span>BaoDing University</span>
            </li>
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/problem/">
                <i class="el-icon-s-grid"></i>
                <span slot="title">问题</span>
            </el-menu-item>
            <el-menu-item index="/contest/">
                <i class="el-icon-trophy"></i>
                <span slot="title">练习	&amp; 比赛</span>
            </el-menu-item>
            <el-menu-item index="/status/">
                <i class="el-icon-data-line"></i>
                <span slot="title">状态</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">排名</span>
                </template>
                <el-menu-group></el-menu-group>
                <el-menu-item index="/acm-rank/">
                <span slot="title">ACM排名</span>
                </el-menu-item>
                <el-menu-item index="/oi-rank/">
                <span slot="title">OI排名</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-info"></i>
                <span slot="title">关于</span>
                </template>
                <el-menu-group></el-menu-group>
                <el-menu-item index="/about/">
                <span slot="title">评分器</span>
                </el-menu-item>
                <el-menu-item index="/FAQ/">
                <span slot="title">常见问题</span>
                </el-menu-item>
            </el-submenu>
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