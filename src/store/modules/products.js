export default{
    actions: {
        removeProduct({ commit }, id){
            let products = this.state.products.products
            products = products.filter((product) => { return product.id !== id})
            commit('SAVE_PRODUCTS', products)
        },
        addProduct(ctx, productData){
            productData.id = ++ctx.state.lastId
            const value = productData
            ctx.commit('ADD_PRODUCT', value)
        },
        sortProducts(ctx, sort){ 
            const sortedProducts = ctx.state.products
            if (sort === 'По цене ↑') sortedProducts.sort((a, b) => a.price - b.price)
            if (sort === 'По цене ↓') sortedProducts.sort((a, b) => b.price - a.price)
            if (sort === 'По названию') sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
            if (sort === 'По умолчанию') sortedProducts.sort((a, b) => a.id - b.id)

            ctx.commit('SAVE_PRODUCTS', sortedProducts)
            
        }
    },
    mutations: {
        ADD_PRODUCT(state, productData){
            state.products.push(productData)
        },
        SAVE_PRODUCTS(state, sortedData){
            state.products = sortedData
        }
    },
    state: {
        products: [
            {
                id: 0,
                picture: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/54fb74115517007.Y3JvcCw5MzAsNzI3LDUwMiwzNTA.jpg',
                name: 'Наименование товара',
                description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 10000
            },
            {
                id: 1,
                picture: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/54fb74115517007.Y3JvcCw5MzAsNzI3LDUwMiwzNTA.jpg',
                name: 'Наименование товара',
                description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 10000
            },
            {
                id: 2,
                picture: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/54fb74115517007.Y3JvcCw5MzAsNzI3LDUwMiwzNTA.jpg',
                name: 'А - наименование товара',
                description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 3000
            },
            {
                id: 3,
                picture: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/54fb74115517007.Y3JvcCw5MzAsNzI3LDUwMiwzNTA.jpg',
                name: 'Наименование товара',
                description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                price: 5000
            }
        ],
        lastId: 3
    },
    getters: {
        allProducts(state) {
            return state.products
        }
    }
}