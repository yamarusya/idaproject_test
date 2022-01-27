<template>
  <div :class="$style.container">
      <div :class="$style.header">
        <h2>Добавление товара</h2>
        <Select/>
      </div>
      <div :class="$style.main">
        <div :class="$style.main__aside">
          <AddingForm/>
        </div>
        <div :class="$style.main__content">
          <ProductsList/>
        </div>
      </div>
  </div>
</template>

<script>
import AddingForm from '@/components/products/AddingForm.vue'
import ProductsList from '@/components/products/ProductsList.vue'
import Select from '@/components/products/Select.vue'

export default {
  name: 'Products',
  components: {
    AddingForm,
    ProductsList,
    Select
  }
}
</script>

<style lang="scss" module>
.container{
  padding: 32px;
  transition: left .2s linear;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
}
.main{
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
}
</style>
