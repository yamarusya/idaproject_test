<template>
  <div :class="$style.list">
    <div 
      v-for="product in allProducts"
      :id="`card${product.id}`"
      :key="product.id"
      :class="$style.card"
    >
        <div :class="$style.cardContainer">
        <img :class="$style.icon" src="../../assets/deleteIcon.svg" @click="remove(product.id)"/>
        <img :class="$style.picture" :src="product.picture">
        <div :class="$style.cardDescription">
          <h3>{{ product.name }}</h3>
          <span> {{ cropDescription(product.description) }} </span>
          <h3> {{ priceMask(product.price) }} руб.</h3>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  computed: {
      allProducts(){
          return this.$store.getters.allProducts
      }
  },
  methods: {
    remove(id){
      document.querySelector(`#card${id}`).classList.toggle(`newclass`);
      setTimeout(()=>{ this.$store.dispatch('removeProduct', id) }, 2500)
    },

    cropDescription(description){
      if (description.length > 200) {
        return description.substr(0, 200) + '...';
      }
      else return description
    },

    priceMask(price){
      if (price > 999){
        const newPrice = parseInt(String(price).replace(/\s+/g, ""))
        price = String((newPrice).toLocaleString('ru-RU'))
      }
      return price
    },
  }
}
</script>

<style lang="scss" module>
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card{
    width: 332px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin: 16px;
    transition: 3;
    .picture{
      margin-top: -20px;
      box-sizing: content-box;
      width: 100%;
      z-index: 1;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
    &:hover{
      box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.1), 0px 6px 10px rgba(44, 48, 70, 0.02);
      .icon{
        visibility: visible;
      }
    }
  .icon{
    visibility: hidden;
    position: relative;
    margin: -20px -20px 0 0;
    float: right;
    z-index: 5;
  }
  &Description{
    box-sizing: border-box;
    word-wrap: break-word;
    text-overflow: ellipsis;
    padding: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}
</style>
