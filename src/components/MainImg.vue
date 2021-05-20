<template>
<header>
    <el-carousel :interval="5000" height="86vh">
        <el-carousel-item  v-for="slide,i in slides" :key="i">
            <div class="container" style="height:100%">
                <div class="slide">
                    <h2>{{slide.h2}}</h2>
                    <p>{{slide.p}}</p>
                    <a href="#" v-scroll-to="slide.link" class="el-button">Подробнее</a>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
</header>
</template>

<script>
export default {
    data() {
        return {
            slides: [{
                    'h2': 'Бухгалтерское сопровождение',
                    'p': 'Ведем бухгалтерию предприятий под ключ. Работаем удаленно со всеми регионами страны',
                    'link': '#buh'
                },
                {
                    'h2': 'Регистрация и ликвидация ООО и ИП',
                    'p': 'Поможем правильно заполнить и подать все документы для регистрации ООО и ИП. Сократим количество посещений налоговой',
                    'link': '#ooo'
                },
                {
                    'h2': 'Декларации для физических лиц по форме 3-НДФЛ',
                    'p': 'Заполним декларации с учетом действующего законодательства. Подскажем возможные пути сокращения налоговой базы',
                    'link': '#ndfl'
                },
            ]
        }
    },
}
</script>

<style>
a{
    text-decoration: unset;
}
.slide .el-button{
    width: 150px;
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    background: #1ea69a;
    border: none;
    color: white;
    transition: all .3s;
}
.slide .el-button:hover{
    color: #1ea69a;
    background: white;
}
.slide {
    margin-left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

}

.slide h2 {
    color: white;
    font-size: 40px;
    margin: 10px 0;
}
.slide p{
     color: white;
     font-size: 20px;
}

header .el-carousel {
    background: rgba(0, 0, 0, 0.25);
    height: 86vh!important;
}
header .el-carousel__container{
    height: 86vh!important;
}

header {
    position: relative;
    background: url('/img/1.jpg') no-repeat center center /cover;
    width: 100%;
    height: 86vh;
    
}
.side-menu .logo{
    margin: 5px 0  20px 20px ;
    box-sizing: border-box;
}
</style>
