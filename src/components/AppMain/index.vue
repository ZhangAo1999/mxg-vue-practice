<template>
    <div>
        <div class="main">
            <div class="text">
                <!-- AppHeader -->
                <app-header></app-header>
                <div class="text1">
                    <app-link></app-link>
                    <div style="margin-top:20px"></div>
                    <router-view></router-view>
                    <div style="margin-top:50px"></div>
                    <div>
                        <center style="font-size:14px">
                            会员管理系统<br/>
                            Powered by <a href="https://github.com/ZhangAo1999/mxg-vue-practice">梦学谷练习</a>
                            &nbsp;&nbsp;&nbsp;
                            Version: 20201112-1.0
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../AppHeader'
    import AppLink from './Link'

    export default {
        props: ['list'],
        components: {AppHeader, AppLink}
    }
</script>