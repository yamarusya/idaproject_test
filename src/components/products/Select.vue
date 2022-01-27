<template>
    <div :class="$style.selectWrapper">
        <div :class="$style.selectContainer">
            <div :class="$style.select" @click="selectOpen = !selectOpen">
            {{ sort }}
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
                </svg>
            </div>
            <div v-if="selectOpen" :class="$style.options">
            <div v-for="(option, index) in sortOptions.filter(option => option !== sort)" :key="index" :class="$style.option" @click="selectOpen = false, sort=option">
                <span> {{ option }} </span>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Select',
  data(){
    return {
      selectOpen: false,
      sort: 'По умолчанию',
      sortOptions: ['По умолчанию', 'По цене ↑', 'По цене ↓', 'По названию']
    }
  },
  watch: {
    sort: {
      handler(newValue){
        this.sortProducts(newValue)
      }
    }
  },
  methods: {
    sortProducts(sortValue){
        this.$store.dispatch('sortProducts', sortValue)
    }
  }
}
</script>

<style lang="scss" module>
.selectWrapper{
  display: flex;
}
.selectContainer{
    width: 120px;
    border: black 1px solid;
    box-sizing: content-box;
    border: none;
    font-size: 12px;
    line-height: 15px;
    color: #B4B4B4;
  .select{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    border: black 1px solid;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 4px;
    padding: 0 8px;
  }
  .options{
    position: absolute;
    width: 120px;
    border-radius: 4px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  .option{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    &:hover{
      background: rgb(198, 198, 236);
      color: black;
    }
  }
}
</style>