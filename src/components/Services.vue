<template>
<section class="services">
    <div class="container">
        <h2>Центр налоговой помощи</h2>

        <div class="spacer"></div>
        <p class="subheader">В налоговом законодательстве Российской Федерации множетсво проволочек и подводных камней. <br> Именно поэтому, неподготовленному человеку довольно сложно разобраться
            во всех тонкостях. В такой ситуации стоит обратиться за помощью к профессионалам
        </p>

        
    
    <div class="service-wrapper">
        <div class="color-half">
            <i class="fas fa-balance-scale"></i>
                <h3>Бухгалтерское обслуживание</h3>
                <p>Мы предоставляем услуги по
                     ведению бухгалтерского учета Юридическим лицам и
                      Индивидуальным предпринимателям на различных системах
                       налогообложения, сдаем всю необходимую отчетность в 
                       контролирующие органы, представляем интересы клиентов в
                        налоговой, консультируем в области налогообложения и 
                        выборе оптимальной системы налогообложения.
                </p>
        </div>
        <div class="white-half">
            fdsf
        </div>
    </div>
    <div class="service-wrapper">
        <div class="white-half">
            <el-collapse v-model="ooo" accordion>
                <el-collapse-item name="1" title="Заполнение форм заявлений">
                    <table>
                        <tr>
                            <td>Р21001 Заявление регистрации физического лица в качестве ИП</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>Р24001 Заявление о внесении изменений в сведения об ИП, содержащиеся в ЕГРИП</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <td>Р26001 Заявление о регистрации прекращения деятельности в качестве ИП</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Р11001 Заявление о регистрации ЮЛ при создании (+ за каждого учредителя)</td>
                            <td>1500 (+300)</td>
                        </tr>
                        <tr>
                            <td>Р12003 Заявление о регистрации ЮЛ, создаваемого путём реорганизации</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>Р13014 Заявление о регистрации изменений</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>Р15001 Уведомление о ликвидации ЮЛ</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>Р16001 Заявление о регистрации ЮЛ в связи с его ликвидацией</td>
                            <td>1500</td>
                        </tr>
                    </table>
                </el-collapse-item>
                <el-collapse-item name="2" title="Полный пакет документов для регистрационных действий">
                    <table>
                        <tr>
                            <td>Создание ООО</td>
                            <td>4000</td>
                        </tr>
                        <tr>
                            <td>Внесение изменений в сведения о ЮЛ, содержащиеся в ЕГРЮЛ</td>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <td>Внесение изменений в учредительные документы ЮЛ</td>
                            <td>3500</td>
                        </tr>
                        <tr>
                            <td>Передача доли в уставном капитале участнику или третьему лицу (через нотариуса)	</td>
                            <td>от 2600</td>
                        </tr>
                        <tr>
                            <td>Создание некоммерческой организации</td>
                            <td>от 10000</td>
                        </tr>
                        <tr>
                            <td>Внесение изменений в сведения о некоммерческой организации</td>
                            <td>4500</td>
                        </tr>
                        <tr>
                            <td>Электронная отправка</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <td>Сопровождение ликвидации ООО</td>
                            <td>от 20000</td>
                        </tr>
                    </table>
                </el-collapse-item>
                <el-collapse-item name="3" title='Регистрация "под ключ" (включает электронную отпраку, консультацию по выбору СНО)'>
                    <table>
                        <tr>
                            <td>Регистрация ИП</td>
                            <td>3500</td>
                        </tr>
                         <tr>
                            <td>Изменение ИП</td>
                            <td>2000</td>
                        </tr>
                         <tr>
                            <td>Ликвидация ИП</td>
                            <td>от 2000</td>
                        </tr>
                         <tr>
                            <td>Регистрация ООО</td>
                            <td>6500</td>
                        </tr>
                         <tr>
                            <td>Внесение изменений в ЕГРЮЛ</td>
                            <td>3500</td>
                        </tr>
                         <tr>
                            <td>Внесение изменений в устав</td>
                            <td>4500</td>
                        </tr>
                         <tr>
                            <td>Реорганизация</td>
                            <td>от 15000</td>
                        </tr>
                         <tr>
                            <td>Уменьшение УК</td>
                            <td>10000</td>
                        </tr>
                         <tr>
                            <td>Ликвидация "под ключ" с проведением всех необходимых сверок</td>
                            <td>от 20000</td>
                        </tr>
                    </table>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="color-half">
            <i class="fas fa-stamp"></i>
                <h3>Операции с ООО и ИП</h3>
                <p>Мы предоставляем услуги по созданию, внесению изменений и ликвидации Обществ с ограниченной ответственностью и Индивидуальных предпринимателей.
                </p>
        </div>
        
    </div>
    <div class="service-wrapper">
        <div class="color-half">
            <i class="fas fa-file-invoice-dollar"></i>
                <h3>Декларации для физ. лиц</h3>
                <p>Мы заполняем декларации
                     по форме 3-НДФЛ для получения 
                     имущественного вычета 
                     (возврата 13% с покупки жилой недвижимости),
                      социального вычета (лечение, обучение), 
                      инвестиционного вычета, а также при
                       получении дохода и продаже имущества.</p>
        </div>
        <div class="white-half right-half">
            <el-collapse v-model="ndfl" accordion>
                <el-collapse-item name="1" title="3-НДФЛ (включая заявление на возврат)">
                    <table>
                        <tr>
                            <td>Имущественный вычет (при приобретении жилья)</td>
                            <td>от 800</td>
                        </tr>
                        <tr>
                            <td>Стандартный вычет</td>
                            <td>от 800</td>
                        </tr>
                        <tr>
                            <td>Социальный вычет (лечение, обучение)</td>
                            <td>от 800</td>
                        </tr>
                        <tr>
                            <td>Продажа имущества/получение дохода</td>
                            <td>от 650</td>
                        </tr>
                        <tr>
                            <td>Отправка через личный кабинет</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>Отправка почтой</td>
                            <td>350</td>
                        </tr>
                    </table>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            ooo: '0',
            ndfl: '1'
        }
    },
}
</script>

<style>
td{
    padding-left: 10px;
}
.el-collapse-item__header{
    font-size: 16px!important;
    line-height: 20px!important;
    transition: all .2s;
    padding-left: 10px;
}
.el-collapse-item__header.is-active{
    color: #1ea69a!important;
    
    transition: all .2s;
}
table{
    width: 100%;
    border-spacing: 0;
    font-size: 14px;
}
tr:nth-child(even){
    background: rgb(245, 245, 245);
}
.white-half{
    flex: 1 1 500px;
    box-sizing: border-box;
    background: #ebebeb9f;
}
.service-wrapper{
    display: flex;
    flex-wrap: wrap;

}

.color-half{
    background: #1ea69a;
    color: white;
    flex: 1 1 500px;
    padding: 80px;    
    box-sizing: border-box;
}
.service-wrapper  .fas{
    font-size: 60px;
}
.service-wrapper h3{
    font-size: 30px;
}
.service-wrapper p{
    font-size: 20px;
}
.subheader {
    color: #b5b5b5;
    font-size: 16px;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    line-height: 20px;
    margin-bottom: 40px;
}

.services h2 {
    font-size: 30px;
    font-weight: 700;
    color: #333333;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
}

section {
    padding: 40px 0;
}

.spacer {
    border-bottom: 2px solid #1ea69a;
    width: 300px;
    margin: 20px auto
}
</style>
