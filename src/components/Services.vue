<template>
  <section class="services">
    <div class="container" id="services">
      <h2>Аудитория 402</h2>

      <div class="spacer"></div>

      <div class="service-wrapper">
        <div class="color-half" id="buh">
          <i class="fas fa-balance-scale"></i>
          <h3>Бухгалтерское сопровождение</h3>
          <p>
            Мы предоставляем услуги по ведению бухгалтерского учета Юридическим
            лицам и Индивидуальным предпринимателям на различных системах
            налогообложения, сдаем всю необходимую отчетность в контролирующие
            органы, представляем интересы клиентов в налоговой, консультируем в
            области налогообложения и выборе оптимальной системы
            налогообложения.
          </p>
        </div>
        <div class="white-half calc-wrapper" id="calc">
          <h3>Калькулятор бухгалтерского сопровождения</h3>
          <el-form label-width="200px">
            <el-form-item label="Форма организации">
              <el-radio-group @change="calc" v-model="formOrg" fill="#1EA69A">
                <el-radio-button label="1">ООО</el-radio-button>
                <el-radio-button label="2">ИП</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Система налогообложения">
              <el-select @change="calc" v-model="sno">
                <el-option value="1" label="УСН доходы-расходы"
                  >УСН доходы-расходы</el-option
                >
                <el-option value="2" label="УСН доходы">УСН доходы</el-option>
                <el-option value="3" v-if="formOrg == 1" label="ОСНО"
                  >ОСНО</el-option
                >
                <el-option value="4" v-if="formOrg == 2" label="Патент"
                  >Патент</el-option
                >
              </el-select>
            </el-form-item>
            <el-form-item label="Сфера деятельности">
              <el-select @change="calc" fill="#1EA69A" v-model="vid">
                <el-option :disabled="sDisabled" :value="1" label="Услуги"
                  >Услуги</el-option
                >
                <el-option :disabled="sDisabled" :value="1.2" label="Торговля"
                  >Торговля</el-option
                >
                <el-option
                  :disabled="sDisabled"
                  :value="1.4"
                  label="Производство"
                  >Производство</el-option
                >
              </el-select>
            </el-form-item>
            <el-form-item label="Количество операций">
              <el-input-number
                :disabled="oDisabled"
                @change="calc"
                :step="5"
                :min="0"
                controls-position="right"
                v-model="oNumber"
              >
              </el-input-number>
            </el-form-item>
            <el-form-item label="Количество сотрудников">
              <el-input-number
                :disabled="eDisabled"
                @change="calc"
                :step="1"
                :min="0"
                controls-position="right"
                v-model="eNumber"
              >
              </el-input-number>
            </el-form-item>
            <transition name="fade">
              <div v-if="price" class="price">
                Стоимость сопровождения составит:<br />
                <span>{{ animatedNumber }}</span
                >{{ ed }}
              </div>
            </transition>
            <el-form-item class="zakaz" v-if="price">
              <el-button @click="dialog = true">Заказать </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="service-wrapper center">
        <div class="white-half">
          <el-collapse v-model="ooo" accordion>
            <el-collapse-item name="1" title="Заполнение форм заявлений">
              <table>
                <tr>
                  <td>
                    Р21001 Заявление регистрации физического лица в качестве ИП
                  </td>
                  <td>1300</td>
                </tr>
                <tr>
                  <td>
                    Р24001 Заявление о внесении изменений в сведения об ИП,
                    содержащиеся в ЕГРИП
                  </td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>
                    Р26001 Заявление о регистрации прекращения деятельности в
                    качестве ИП
                  </td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>
                    Р11001 Заявление о регистрации ЮЛ при создании (+ за каждого
                    учредителя)
                  </td>
                  <td>2000 (+300)</td>
                </tr>
                <tr>
                  <td>
                    Р12003 Заявление о регистрации ЮЛ, создаваемого путём
                    реорганизации
                  </td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Р13014 Заявление о регистрации изменений</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Р15001 Уведомление о ликвидации ЮЛ</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>
                    Р16001 Заявление о регистрации ЮЛ в связи с его ликвидацией
                  </td>
                  <td>2000</td>
                </tr>
              </table>
            </el-collapse-item>
            <el-collapse-item
              name="2"
              title="Полный пакет документов для регистрационных действий"
            >
              <table>
                <tr>
                  <td>Создание ООО</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>
                    Внесение изменений в сведения о ЮЛ, содержащиеся в ЕГРЮЛ
                  </td>
                  <td>3000</td>
                </tr>
                <tr>
                  <td>Внесение изменений в учредительные документы ЮЛ</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td>
                    Передача доли в уставном капитале участнику или третьему
                    лицу (через нотариуса)
                  </td>
                  <td>от 6000</td>
                </tr>
                <tr>
                  <td>Создание некоммерческой организации</td>
                  <td>15000</td>
                </tr>
                <tr>
                  <td>
                    Внесение изменений в сведения о некоммерческой организации
                  </td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>Электронная отправка</td>
                  <td>800</td>
                </tr>
                <tr>
                  <td>Сопровождение ликвидации ООО</td>
                  <td>от 22000</td>
                </tr>
              </table>
            </el-collapse-item>
            <el-collapse-item
              name="3"
              title='Регистрация "под ключ" (включает электронную отпраку, консультацию по выбору СНО)'
            >
              <table>
                <tr>
                  <td>Регистрация ИП</td>
                  <td>6500</td>
                </tr>
                <tr>
                  <td>Изменение ИП</td>
                  <td>2000</td>
                </tr>
                <tr>
                  <td>Ликвидация ИП</td>
                  <td>от 5000</td>
                </tr>
                <tr>
                  <td>Регистрация ООО</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>Внесение изменений в ЕГРЮЛ</td>
                  <td>3700</td>
                </tr>
                <tr>
                  <td>Внесение изменений в устав</td>
                  <td>4800</td>
                </tr>
                <tr>
                  <td>Реорганизация</td>
                  <td>от 17000</td>
                </tr>
                <tr>
                  <td>Уменьшение УК</td>
                  <td>15000</td>
                </tr>
                <tr>
                  <td>
                    Ликвидация "под ключ" с проведением всех необходимых сверок
                  </td>
                  <td>от 22000</td>
                </tr>
              </table>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="color-half" id="ooo">
          <i class="fas fa-stamp"></i>
          <h3>Операции с ООО и ИП</h3>
          <p>
            Мы предоставляем услуги по созданию, внесению изменений и ликвидации
            Обществ с ограниченной ответственностью и Индивидуальных
            предпринимателей.
          </p>
        </div>
      </div>
      <div class="service-wrapper">
        <div class="color-half" id="ndfl">
          <i class="fas fa-file-invoice-dollar"></i>
          <h3>Декларации для физ. лиц</h3>
          <p>
            Мы заполняем декларации по форме 3-НДФЛ для получения имущественного
            вычета (возврата 13% с покупки жилой недвижимости), социального
            вычета (лечение, обучение), инвестиционного вычета, а также при
            получении дохода и продаже имущества.
          </p>
        </div>
        <div class="white-half right-half">
          <el-collapse v-model="ndfl" accordion>
            <el-collapse-item
              name="1"
              title="3-НДФЛ (включая заявление на возврат)"
            >
              <table>
                <tr>
                  <td>Имущественный вычет (при приобретении жилья)</td>
                  <td>от 1000</td>
                </tr>
                <tr>
                  <td>Стандартный вычет</td>
                  <td>от 1000</td>
                </tr>
                <tr>
                  <td>Социальный вычет (лечение, обучение)</td>
                  <td>от 1000</td>
                </tr>
                <tr>
                  <td>Продажа имущества/получение дохода</td>
                  <td>от 1000</td>
                </tr>
                <tr>
                  <td>Отправка через личный кабинет</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Отправка почтой</td>
                  <td>500</td>
                </tr>
              </table>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialog" title="Заказать сопровождение">
      <el-form :rules="rules" ref="sForm" :model="sForm">
        <el-form-item prop="name" label="Имя">
          <el-input v-model="sForm.name"> </el-input>
        </el-form-item>
        <el-form-item prop="phone" label="Телефон">
          <el-input v-model="sForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="Почта">
          <el-input v-model="sForm.mail"> </el-input>
        </el-form-item>
        <el-button :loading="loading" @click="send">Отправить</el-button>
      </el-form>
    </el-dialog>
  </section>
</template>

<script>
import gsap from "gsap";
import axios from "axios";
export default {
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    price: function(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },
  methods: {
    send() {
      this.$refs["sForm"].validate((valid) => {
        if (valid) {
          this.loading = true;
          let data = new FormData();
          data.append("name", this.sForm.name);
          data.append("phone", this.sForm.phone);
          data.append("mail", this.sForm.mail);
          data.append("form", this.formOrgF);
          data.append("sno", this.snoF);
          data.append("type", "calc");
          data.append("vid", this.vidF);
          data.append("oNum", this.oNumber);
          data.append("eNum", this.eNumber);
          data.append("price", this.price);
          axios.post("mailer.php", data).then((response) => {
            console.log(response.data);
            this.loading = false;
            this.dialog = false;
          });
        } else {
          return false;
        }
      });
    },
    calc() {
      let eKoef = 850;
      let oKoef = 88;
      let snoKoef = 1;
      let sKoef = this.vid;
      if (this.oNumber == 0) {
        this.eDisabled = true;
        this.eNumber = 0;
      } else {
        this.eDisabled = false;
      }
      if (isNaN(this.eNumber)) {
        this.eNumber = 0;
      }
      if (isNaN(this.oNumber)) {
        this.oNumber = 0;
      }
      if (this.sno == 4 && this.formOrg === "1") {
        this.sno = "3";
      }
      if (this.sno == 3 && this.formOrg === "2") {
        this.sno = "4";
      }
      if (this.formOrg === "1") {
        if (this.sno == 1) {
          snoKoef = 1;
        }
        if (this.sno == 2) {
          snoKoef = 0.9;
        }
        if (this.sno == 3) {
          snoKoef = 1.4;
        }
      }
      if (this.formOrg === "2") {
        if (this.sno == 1) {
          snoKoef = 0.9;
        }
        if (this.sno == 2) {
          snoKoef = 0.8;
        }
        if (this.sno == 4) {
          snoKoef = 0.8;
        }
      }
      this.price = this.oNumber * oKoef * snoKoef * sKoef;
      this.price = Math.ceil(this.price);
      this.ed = " рублей/месяц";
      if (this.formOrg === "1") {
        this.formOrgF = "ООО";
        if (this.sno == 1) {
          this.snoF = "УСН доходы-расходы";
          if (this.oNumber === 0) {
            this.price = 3000;
            this.ed = " рублей/квартал";
          } else {
            if (this.price < 7000) {
              this.price = 7000 + eKoef * this.eNumber;
              this.ed = " рублей/месяц";
            } else {
              this.price += eKoef * this.eNumber;
            }
          }
        }
        if (this.sno == 2) {
          this.snoF = "УСН доходы";
          if (this.oNumber === 0) {
            this.price = 3000;
            this.ed = " рублей/квартал";
          } else {
            if (this.price < 6000) {
              this.price = 6000 + eKoef * this.eNumber;
              this.ed = " рублей/месяц";
            } else {
              this.price += eKoef * this.eNumber;
            }
          }
        }
        if (this.sno == 3) {
          this.snoF = "ОСНО";
          if (this.oNumber === 0) {
            this.price = 3500;
            this.ed = " рублей/квартал";
          } else {
            if (this.price < 8000) {
              this.price = 8000 + eKoef * this.eNumber;
              this.ed = " рублей/месяц";
            } else {
              this.price += eKoef * this.eNumber;
            }
          }
        }
      }
      if (this.formOrg === "2") {
        this.formOrgF = "ИП";
        if (this.sno == 1) {
          this.snoF = "УСН доходы-расходы";
          if (this.oNumber === 0) {
            this.price = 3000;
            this.ed = " рублей/год";
          } else {
            if (this.price < 5000) {
              this.price = 5000 + eKoef * this.eNumber;
              this.ed = " рублей/месяц";
            } else {
              this.price += eKoef * this.eNumber;
            }
          }
        }
        if (this.sno == 2) {
          this.snoF = "УСН доходы";
          if (this.oNumber === 0) {
            this.price = 3000;
            this.ed = " рублей/год";
          } else {
            if (this.price < 5000) {
              this.price = 5000 + eKoef * this.eNumber;
              this.ed = " рублей/месяц";
            } else {
              this.price += eKoef * this.eNumber;
            }
          }
        }
        if (this.sno == 4) {
          this.snoF = "Патент";
          if (this.oNumber === 0) {
            this.price = 5000;
            this.ed = " рублей/квартал";
          } else {
            if (this.price < 5000) {
              this.price = 5000 + eKoef * this.eNumber;
              this.ed = " рублей/месяц";
            } else {
              this.price += eKoef * this.eNumber;
            }
          }
        }
      }
      if (this.vid == 1) {
        this.vidF = "Услуги";
      }
      if (this.vid == 1.2) {
        this.vidF = "Торговля";
      }
      if (this.vid == 1.4) {
        this.vidF = "Производство";
      }
    },
  },
  data() {
    return {
      sForm: {
        name: "",
        phone: "",
        mail: "",
      },
      rules: {
        name: [{ required: true, message: "Имя обязательно", trigger: "blur" }],
        phone: [
          { required: true, message: "Телефон обязателен", trigger: "blur" },
        ],
      },
      tweenedNumber: 0,
      dialog: false,
      ed: null,
      price: null,
      sDisabled: false,
      oDisabled: false,
      eDisabled: true,
      eNumber: 0,
      oNumber: 0,
      vid: 1,
      sno: "1",
      formOrg: "",
      ooo: "0",
      ndfl: "1",
      loading: false,
      vidF: "",
      snoF: "",
      formOrgF: "",
    };
  },
};
</script>

<style>
.el-dialog .el-form-item__label {
  height: auto !important;
}

.el-dialog {
  max-width: 300px !important;
  width: auto !important;
}

.zakaz {
  margin-top: 20px;
}

.zakaz .el-button:hover,
.el-dialog .el-button:hover {
  background: #1ea69a;
  color: white;
  border: 1px solid #1ea69a;
}

.services {
  background: rgb(242, 242, 242);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
 {
  opacity: 0;
}

.el-select-dropdown__item.selected {
  color: #1ea69a !important;
}

.price {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}

.price span {
  color: #1ea69a;
  font-weight: 600;
  font-size: 20px;
}

.el-select-dropdown__item {
  font-family: Raleway, sans-serif !important;
}

.calc-wrapper h3 {
  text-align: center;
}

.calc-wrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

td {
  padding-left: 10px;
}

.el-radio-button__inner {
  transition: all 0.2s;
}

.el-radio-button__inner:hover {
  color: #1ea69a !important;
}

.is-active .el-radio-button__inner:hover {
  color: white !important;
}

.el-collapse-item__header {
  font-size: 16px !important;
  line-height: 20px !important;
  transition: all 0.2s;
  padding-left: 10px;
}

.el-collapse-item__header.is-active {
  color: #1ea69a !important;

  transition: all 0.2s;
}

td:last-child {
  width: 80px;
}

table {
  width: 100%;
  border-spacing: 0;
  font-size: 16px;
}

tr:nth-child(even) {
  background: rgb(245, 245, 245);
}

tr:nth-child(odd) {
  background: rgb(224, 224, 224);
}

.el-collapse-item__content {
  padding-bottom: unset !important;
}

.white-half {
  flex: 1 1 400px;
  box-sizing: border-box;
}

.service-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.color-half {
  background: #38c0b4;
  color: white;
  flex: 1 1 400px;
  padding: 80px;
  box-sizing: border-box;
}

.service-wrapper .fas {
  font-size: 60px;
}

.service-wrapper h3 {
  font-size: 30px;
}

.service-wrapper p {
  font-size: 16px;
}

.el-form-item__label {
  line-height: unset !important;
  font-size: 14px !important;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
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
  margin: 20px auto;
}
</style>
