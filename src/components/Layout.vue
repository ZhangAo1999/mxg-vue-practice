<template>
    <div class="container">
        <!-- Navbar -->
        <app-navbar @open_close="openClose"></app-navbar>
        <div class="no-navbar">
            <!-- Main -->
            <app-main :list="list"></app-main>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader'
    import AppNavbar from './AppNavbar'
    import AppMain from './AppMain'

    export default {
        data() {
            return {
                list: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
            }
        },
        components: {
            AppHeader,
            AppNavbar,
            AppMain
        },
        methods: {
            openClose (shousuo) {
                if (shousuo) {
                    let no_navbar = document.getElementsByClassName('no-navbar')[0]
                    no_navbar.style.setProperty('transition', '.3s')
                    no_navbar.style.setProperty('margin-left', '65px')
                } else {
                    let no_navbar = document.getElementsByClassName('no-navbar')[0]
                    no_navbar.style.setProperty('transition', '.52s')
                    no_navbar.style.setProperty('margin-left', '180px')
                }
            }
        },
    }
</script>

<style>
    .el-menu{
        border-right-width: 0;
    }
    .container {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .no-navbar {
        position: relative;
        height: 100%;
        margin-left: 180px;
    }
    
    .header {
        position: absolute;
        line-height: 50px;
        width: 100%;
        background-color: #ddeeff;
    }
    .header .headerbar {
        display: flex;
        justify-content: space-between;
        margin: 0 30px;
    }
    /* .main {
        background-color: #f4e2ff;
        height: 100%;
    } */
    .main .text {
        background-color: #7784a6;
        position: absolute;
        width: 102%;
        height: 100%;
        overflow: auto;
    }
    .main .text .text1 {
        position: absolute;
        margin: 20px;
        margin-top:70px;
        margin-bottom: 40px;
        width: 95%;
        background-color: aliceblue;
    }
</style>