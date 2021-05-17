<template>
  <div class="bottomline">
      <div class="container">
          <div class="bottom-line">
              <div class="logo">
                  <div class="logo-img"></div>
                  <div class="logo-text">
                      <div class="main">Аудитория<span>402</span></div>
                      <div class="second">Какой то слоган будет здесь</div>
                  </div>
              </div>
              <div class="menu">
                  <div v-for="item,i in menu" :key="i" class="menu-item">{{item.name}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                'name':'Сопровождение',
                'link': 'sopr'
            },
             {
                'name':'Сопровождение',
                'link': 'sopr'
            },
             {
                'name':'Сопровождение',
                'link': 'sopr'
            },
             {
                'name':'Сопровождение',
                'link': 'sopr'
            },
            ]
        }
    },
}
</script>

<style>
.menu{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.menu-item{
    text-transform: uppercase;
    margin: 0 10px;
    font-weight: normal;
}
.bottom-line{
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.logo{
    display: flex;
    align-items: center;
    margin: 10px 0;
}
.logo-img{
    background: url('/img/logo.png') no-repeat center center / cover;
    height: 50px;
    width: 50px;
    margin-right: 10px;
}
.logo-text .main{
    font-size: 24px;
    font-weight: 500;
    color: #1ea69a;;
}
.logo-text .main span{
    color: rgb(49, 49, 49);
    font-size: 30px;
}
</style>