<template>
<div id="app">
    <Top-line />
    <Bottom-line />
    <Main-img />
    <Services />
    <Contacts />
    <Footer />
</div>
</template>

<script>
import BottomLine from './components/BottomLine.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'
import MainImg from './components/MainImg.vue'
import Services from './components/Services.vue'
import TopLine from './components/TopLine.vue'
export default {
    components: { TopLine, BottomLine, MainImg, Services, Contacts, Footer },
    name: 'app',

}
</script>

<style>
body {
    margin: 0;
}



#app {
    font-family: "Raleway", Helvetica, Arial, sans-serif;
    -webkit-text-size-adjust: none;
    color: rgb(49, 49, 49)
}

@media (max-width: 1000px) {
    .service-wrapper {
        flex-direction: column;
        flex-wrap: unset;
    }

    .center {
        flex-direction: column-reverse;
    }

    .green-area {
        padding: 0;
        margin-right: 0;
        flex: 1 1 400px;
    }

    .reviews .color-half {
        margin-left: 0;
    }

    .reviews .white {
        padding: 60px;
    }

    .fon .el-carousel__container {
        height: 500px;
    }

    .logo {
        margin-left: 5px;
    }

}

@media (max-width: 840px) {

    .contacts,
    .reviews {
        flex-direction: column-reverse;
    }

    #contacts,
    .reviews .white {
        align-items: center;
    }

    .slide {
        margin-left: 0;
        align-items: center;
        text-align: center;
        padding: 0 60px;
    }
}

@media (max-width: 740px) {
    .menu {
        display: none;
    }

    .burger-button {
        display: flex;
    }
}



@media (max-width: 500px) {
    .slide h2 {
        font-size: 30px;
    }

    .slide p {
        font-size: 18px;
    }

    .services h2 {
        font-size: 25px;
    }

    .color-half {
        padding: 30px;
    }

    .white-half,
    .color-half {
        flex: unset
    }

    .service-wrapper .fas {
        font-size: 40px;
    }

    .service-wrapper h3 {
        font-size: 25px;
    }

    .el-collapse-item__header {
        height: auto !important;
        padding: 10px;
    }

    .top-line .container {
        justify-content: center;
        align-items: center;
    }

    .top-line .right {
        display: none;
    }

    .top-line .half {
        flex: unset
    }

    .fon .el-carousel__item {
        padding: 20px !important;
    }

}

@media (max-width: 425px) {

    .reviews .el-form-item,
    .calc-wrapper .el-form-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 22px;
        justify-content: center;
        align-items: center;
        

    }
    .reviews .el-form-item{
      max-width: 200px;
    }

    .reviews .el-form-item__label,
    .calc-wrapper .el-form-item__label {
        padding: 0 !important;
        height: auto !important;
        justify-content: center;
        margin-bottom: 4px;
    }

    .reviews .el-form-item__content,
    .calc-wrapper .el-form-item__content {
        margin-left: 0 !important;
    }

    .white .contact-link {
        width: auto !important;
    }

    .fon .el-carousel__container {
        height: 450px !important;
        text-align: center;
    }

    .fon h3,
    .white h3 {
        text-align: center;
    }

    .el-radio-group {
        display: flex !important;
        flex-wrap: wrap !important;
        justify-content: center !important;
    }

    .spacer {
        width: 70%;
    }

    .slide {
        padding: 0 20px;
    }

    .fon .el-carousel__indicators--horizontal {
        display: none !important;
    }
}

@media (max-width:340px) {
    .logo-img {
        display: none;
    }

    .el-dialog {
        margin-right: 5px !important;
        margin-left: 5px !important;
        max-width: unset !important;
    }
}
</style>
