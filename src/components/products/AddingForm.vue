<template>
  <div :class="$style.wrapper">
    <div :class="$style.container">
      <div v-if="adding" :class="$style.overlay">
        Товар добавлен
      </div>
      <div v-else :class="$style.form">
        <div :class="[productData.name || clicked === 0 ? $style.formGroup : $style.error, $style.formGroup]">
          <label>Наименование товара<sup><div :class="$style.circle"></div></sup></label>
          <input type="text" placeholder="Введите наименование товара" v-model="productData.name" />
          <div :class="$style.errorMess">Введите наименование товара</div>
        </div>

        <div :class="$style.formGroup">
          <label for="productDescription">Описание товара</label>
          <textarea type="text" placeholder="Введите описание товара" v-model="productData.description"/>
        </div>

        <div :class="[productData.picture || clicked === 0 ? $style.formGroup : $style.error, $style.formGroup]">
          <label for="producPictureLink">Ссылка на изображение товара<sup><div :class="$style.circle"></div></sup></label>
          <input type="text" placeholder="Введите ссылку" v-model="productData.picture"/>
          <div :class="$style.errorMess">Введите ссылку</div>
        </div>

        <div :class="[productData.price || clicked === 0 ? $style.formGroup : $style.error, $style.formGroup]">
          <label for="productPrice">Цена товара<sup><div :class="$style.circle"></div></sup></label>
          <input type="text" placeholder="Введите цену товара" v-model="productData.price" @input="priceMask()" />
          <div :class="$style.errorMess">Введите цену товара</div>
        </div>

        <button 
          :disabled="disabled" 
          @click="addProduct()"
        >
          <div :class="$style.buttonContainer" @click="clicked = 1">
            Добавить товар
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddingForm',
  data(){
    return {
      productData: {
        name: '',
        picture: '',
        price: '',
        description: ''
      },
      adding: false,
      clicked: 0
    }
  },
  computed:{
    disabled(){
      return !this.productData.name || !this.productData.picture || !this.productData.price
    }
  },
  methods: {
    priceMask(){
      if (this.productData.price.length>3){
        const Price = parseInt(String(this.productData.price).replace(/\s+/g, ""))
        this.productData.price = Number(Price).toLocaleString('ru-RU')
      }
    },
    addProduct(){
      this.$store.dispatch('addProduct', this.productData)
      this.productData = {
        name: '',
        picture: '',
        price: null,
        description: ''
      },
      this.adding = true
      this.clicked = 0
      setTimeout(()=> this.adding = false, 3000)
    }
  }
}
</script>

<style lang="scss" module>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

$error: #FF8484;
.wrapper{
  display: flex;
  width: 332px;
}
.container{
  @media screen and (min-width: 600px) {
    position: fixed;
  }
  padding: 24px;
  border-radius: 4px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  color: #49485E;
}

.buttonContainer{
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.formGroup{ 
  margin: 5px 0;
  font-size: 12px;
  label{
    display: block;
    font-size: 10px;
  }
  .errorMess{
    visibility: hidden;
  }
  input, textarea{
    width: 284px;
    margin-top: 4px;
    padding: 10px 0 11px 16px;
    background: #FFFEFB;
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #B4B4B4;
  }
  textarea {
    font-family: 'Source Sans Pro', sans-serif;
    resize: none;
    height: 108px;
  }
  .circle{
    display: inline-block;
    background: $error;
    width: 4px;
    height: 4px;
    border-radius: 2px;
  }
}
.error{
  .errorMess{
    color: $error;
    visibility: visible;
    font-size: 12px;
  }
  input{
    border: $error 1px solid;
  }
}
.form{
  display: flex;
  flex-direction: column;
  margin: -5px 0;
}

button{
  margin: 5px 0;
  white-space: normal !important;
  word-wrap: break-word;
  background:#7BAE73;
  border: 0px;
  border-radius: 10px;
  width: 100%;
  height: 36px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: #FFF;
  font-weight: 500;
}
button:active{
  border: 2px solid black;
}
button:disabled{
  background: #DBE2EA;
  color: #B1B5BF;
}
.overlay{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 5;
  transition: 1.5;
  animation: move 2.5s;
  -webkit-animation: move 2.5s;
}

@keyframes move {
  from {
    margin-top: 200%;
  }

  to {
    margin-top: 0%; 
  }
}
            
@-webkit-keyframes move {
  from {
    margin-top: 100%;
  }

  to {
    margin-top: 0%;
  }
}
</style>
