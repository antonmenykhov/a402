<template>
<section class="last">

    <div class="contacts">
        <div class="green-area">
            <iframe scrolling="no" class="iframe" src="/map.html" frameborder="0"></iframe>
        </div>

        <div class="white-half white" id="contacts">
            <h3>Контакты</h3>
            <div class="spacer"></div>
            <el-form label-width="83px">
                <el-form-item label="Телефон:">
                    <a href="tel:89088763416" class="contact-link">
                        <i class="fas fa-phone-alt"></i> +7-908-876-34-16</a>

                </el-form-item>
                <el-form-item label="Почта:">
                    <a class="contact-link">
                        <i class="fas fa-envelope"></i> info@a402.ru</a>
                </el-form-item>
                <el-form-item label="Адрес:">
                    <div class="contact-link">
                        <i class="fas fa-map"></i>Широтная 29, корп. 1/1, офис 402
                    </div>
                </el-form-item>
                <el-form-item label="Viber:">
                    <a href="viber://chat?number=%2B79088763416" class="contact-link"><i class="fab fa-viber"></i> Viber</a>

                </el-form-item>
                <el-form-item label="Whatsapp:">
                    <a href="https://api.whatsapp.com/send/?phone=79088763416&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%0A&app_absent=0" class="contact-link"><i class="fab fa-whatsapp"></i> Whatsapp</a>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="reviews">
        <div class="white-half white">
            <h3>Обратная связь</h3>
            <div class="spacer">

            </div>
            <el-form ref="back" label-width="200px" :rules="rules" :model="back">
                <el-form-item prop="name" label="Имя">
                    <el-input v-model="back.name"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="Телефон">
                    <el-input v-model="back.phone"></el-input>
                </el-form-item>
                <el-form-item prop="quest" label="Интересующий вопрос">
                    <el-select v-model="back.quest">
                        <el-option value="Бухгалтерское обслуживание" label="Бухгалтерское обслуживание">Бухгалтерское обслуживание</el-option>
                        <el-option value="Операции с ООО и ИП" label="Операции с ООО и ИП">Операции с ООО и ИП</el-option>
                        <el-option value="Декларации для физ.лиц" label="Декларации для физ.лиц">Декларации для физ.лиц</el-option>
                        <el-option value="Другой вопрос" label="Другой вопрос">Другой вопрос</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="send" :loading="loading">{{btnText}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="color-half fon" id="reviews">
            <el-carousel>
                <el-carousel-item v-for="item,i in reviews" :key="i">
                    <div class="avatar">{{item.avatar}}</div>
                    <p class="name">{{item.name}}</p>
                    <p class="r-text">{{item.text}}</p>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        send() {
            this.$refs['back'].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    let data = new FormData;
                    data.append('name', this.back.name);
                    data.append('phone', this.back.phone);
                    data.append('quest', this.back.quest);
                    data.append('type', 'call');

                    axios.post('mailer.php', data).then(response => {
                        console.log(response.data);
                        this.loading = false;
                        this.btnText = "Отправлено"
                    })
                } else {

                    return false;
                }
            });
        },
    },
    data() {
        return {
            btnText: "Отправить",
            loading: false,
            back: {
                name: '',
                phone: '',
                quest: ''
            },
            rules: {
                name: [{ required: true, message: 'Имя обязательно', trigger: 'blur' }],
                phone: [{ required: true, message: 'Телефон обязателен', trigger: 'blur' }],
                quest: [{ required: true, message: 'Выберите вопрос', trigger: 'blur' }],
            },
            reviews: [{
                    name: '​Вера Кузнецова',
                    avatar: 'ВК',
                    text: 'С Ольгой сотрудничаем уже несколько лет. Чего за это время только не было. И реорганизация, и отчетность, и форс-мажоры. Профессионал с большой буквы! Компания свеженькая и мало кому известная, но главное какие специалисты в ней работают! Спасибо большое за наше спокойствие и крепкий сон! Теперь рекомендуем всем своим друзьям и знакомым только эту компанию!'
                },
                {
                    name: 'Татегуль Даутова',
                    avatar: 'ТД',
                    text: 'С девочками работаем давно! Компетентные и доброжелательные! Очень нравятся нам их работа!!!'
                },
                {
                    name: '​Вячеслав Кыштымов',
                    avatar: 'ВК',
                    text: 'Выражаю огромную благодарность за компетентную работу компании "Аудитория 402", в частности Марии. Оперативно составили и отправили 3НДФЛ, учитывая, что объём по заполнению был большой. Помогли сократить сумму налога, опираясь на вновь принятые законы в данной сфере. Буду вас рекомендовать!'
                },
                {
                    name: '​Александр Шалимов',
                    avatar: 'АШ',
                    text: 'Профессионалы своего дела!'
                },
                {
                    name: 'Нурлан Исинбеков',
                    avatar: 'НИ',
                    text: 'Все отлично! Обращаюсь постоянно!'
                },
            ]
        }
    },
}
</script>

<style>
.last {
    padding-bottom: 0;
}

.fon .name {
    font-size: 18px;
}

.fon .r-text {
    font-style: italic;
}

.avatar {
    background: wheat;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    font-weight: 600;
    margin-bottom: 10px;
}

.fon {
    background: url('/img/review.jpg') no-repeat center center / cover !important;

    padding: 0 !important;
    align-items: center !important;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
}

.fon .el-carousel {
    background: transparent !important;
    width: 100%;
    height: fit-content !important;
    overflow: hidden;
}

.fon .el-carousel__container {
    height: 400px;
}

.fon .el-carousel__item {
    padding: 60px !important;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content !important
}

.reviews .white .el-button {
    background: #38C0B4;
    color: white;
    font-weight: 600 !important;
}

.reviews .spacer {
    margin-bottom: 20px !important;
}

.reviews .color-half {
    margin-left: 6%;
}

.reviews .white {
    align-items: flex-end;
    padding: 60px 0 60px 60px;
}

.white {
    background: white !important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
    justify-content: center;
}

.white .el-form-item__label {
    font-size: 16px !important;
}

.fon h3,
.white h3 {
    font-size: 30px;
    margin: 15px 0
}

.white .spacer {
    margin: 0 0 0 3px;
    width: 120px;
}

.green-area {
    z-index: 2;
    flex: 1 1 300px;
    height: 550px;
    margin-right: 4%;
    box-sizing: border-box;
    padding: 60px 60px 60px 0;
    position: relative;

}

.white .contact-link {
    font-family: Raleway, sans-serif;
    margin: 0;
    width: max-content;
    color: #333333;
    font-size: 16px;
    font-weight: 500;

}

.green-area::before {
    content: '';
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    width: 53.5%;
    height: 100%;
    z-index: -1;
    background-color: #38C0B4;
}

.reviews,
.contacts {
    display: flex;
    position: relative;
}

.iframe {

    height: 100%;
    width: 100%;
    z-index: 5;

}
</style>
