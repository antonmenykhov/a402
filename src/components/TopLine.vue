<template>
<div class="top-line">
    <div class="container">
        <div class="half">
            <a href="tel:89088763416" class="contact-link">
                <i class="fas fa-phone-alt"></i> +7-(908)-876-34-16</a>
            <a class="contact-link">
                <i class="fas fa-envelope"></i> info@a402.ru</a>
        </div>
        <div class="half right">
            <a href="viber://chat?number=%2B79088763416" class="contact-link"><i class="fab fa-viber"></i> Viber</a>
            <a href="https://api.whatsapp.com/send/?phone=79088763416&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%0A&app_absent=0" class="contact-link"><i class="fab fa-whatsapp"></i> Whatsapp</a>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.contact-icon:hover{
    color: #1ea69a;
}
.contact-link {
    font-size: 13px;
    letter-spacing: 0em;
    margin: 15px 10px;
    transition: all .2s;
    color: #b5b5b5;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-family: Lato;
    font-weight: 400;

}



.contact-link:hover {
    color: #1ea69a;
}


.contact-link i {
    font-size: 13px;
    margin-right: 4px;
   
}

.top-line {
    background: #2a2f33;
    color: #b5b5b5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.top-line .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.half {
    flex: 1 1 300px;
    display: flex;
    flex-wrap: wrap;
}
.right{
    width: auto;
    flex: unset
}
.fa-viber, .fa-whatsapp{
    font-size: 15px!important;
}
</style>
