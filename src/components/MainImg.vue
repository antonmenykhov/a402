<template>
<header>
    <el-carousel height="90vh">
        <el-carousel-item v-for="slide,i in slides" :key="i">
            <div class="container" style="height:100%">
                <div class="slide">
                    <h2>{{slide.h2}}</h2>
                    <p>{{slide.p}}</p>
                    <el-button>Подробнее</el-button>
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
                    'h2': 'Бухгалтерское обслуживание',
                    'p': 'Loremds fsdfm dsk sd kds klsdjlfkjdsf dsaklfjsdf sdkf jskdl fjds fdsl fjdsj fdslkf jsdf sdlfdf ds f  fdsfds',
                    'link': ''
                },
                {
                    'h2': 'Регистрация и ликвидация ООО и ИП',
                    'p': 'Loremds fsdfm dsk sd kds klsdjlfkjdsf dsaklfjsdf sdkf jskdl fjds fdsl fjdsj fdslkf jsdf sdlfdf ds f  fdsfds',
                    'link': ''
                },
                {
                    'h2': 'Декларации для физических лиц по форме 3-НДФЛ',
                    'p': 'Loremds fsdfm dsk sd kds klsdjlfkjdsf dsaklfjsdf sdkf jskdl fjds fdsl fjdsj fdslkf jsdf sdlfdf ds f  fdsfds',
                    'link': ''
                },
            ]
        }
    },
}
</script>

<style>
.slide {
    margin-left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

}

.slide h2 {
    color: white;
    font-size: 35px;
}

.el-carousel {
    background: rgba(0, 0, 0, 0.185);
}

header {
    position: relative;
    background: url('/img/1.jpg') no-repeat center center /cover;
    width: 100%;
    height: 90vh;
}
</style>
