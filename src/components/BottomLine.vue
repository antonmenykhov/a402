<template>
<div class="bottomline">
    <div class="container">
        <div class="bottom-line">
            <div class="logo">
                <div class="logo-img"></div>
                <div class="logo-text">
                    <h1 class="main">Аудитория<span>402</span></h1>
                    <div class="second">Налоговая и бухгалтерская помощь</div>
                </div>
            </div>
            <div @click="burger=true" class="burger-button">
                <i class="el-icon-menu"></i>
            </div>
            <div class="menu">
                <a href="#" v-scroll-to="'#'+item.link" v-for="item,i in menu" :key="i" class="menu-item">{{item.name}}</a>
            </div>
        </div>
    </div>
    <transition name="slide">
        <div v-show="burger" class="drawer">
            

                <div class="side-menu">
                    <button @click="burger=false" type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button>
                    <a class="logo">
                        <div class="logo-img"></div>
                        <div class="logo-text">
                    <h1 class="main">Аудитория<span>402</span></h1>
                    <div class="second">Налоговая и бухгалтерская помощь</div>
                </div>
                    </a>
                    <a @click="burger=false" href="#" v-scroll-to="'#'+item.link" v-for="item,i in menu" :key="i" class="menu-item">{{item.name}}</a>

                </div>
            
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            burger: false,
            menu: [{
                    'name': 'Услуги',
                    'link': 'services'
                },
                {
                    'name': 'Калькулятор БУ',
                    'link': 'calc'
                },
                {
                    'name': 'Отзывы',
                    'link': 'reviews'
                },
                {
                    'name': 'Контакты',
                    'link': 'contacts'
                },
            ]
        }
    },
}
</script>

<style>
.burger-button{
    display: none;
    color: #1ea69a;
    cursor: pointer;
    font-size: 25px;
    margin-right: 20px;
}
.slide-enter-active,
.slide-leave-active {
    transition: opacity .3s;
}

.slide-enter,
.slide-leave-to

/* .fade-leave-active до версии 2.1.8 */
    {
    opacity: 0;
}

.drawer {
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.411);
}

.side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    padding: 50px 10px;
    z-index: 9999;
}

.side-menu .menu-item {
    margin: 5px 30px
}

.side-menu .logo {
    margin: 5px 30px
}
.main {
    margin: 0
}

.menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.menu-item {
    text-transform: uppercase;
    margin: 0 10px;
    font-weight: normal;
    color: #333333;
    transition: all .2;
}

.menu-item:hover {
    color: #1ea69a;
}

.bottom-line {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.logo-img {
    background: url('/img/logo.png') no-repeat center center / cover;
    height: 50px;
    width: 50px;
    margin-right: 10px;
}

.logo-text .main {
    font-size: 24px;
    font-weight: 500;
    color: #1ea69a;
}

.logo-text .main span {
    color: rgb(49, 49, 49);
    font-size: 30px;
}

.logo-text .second {
    letter-spacing: 0ch;
    font-size: 12px;
    text-align: center;
}
</style>
