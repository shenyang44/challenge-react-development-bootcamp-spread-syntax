const discount = {
    rate: 0.5,
    reason: 'New Year Sales'
}

const products = [
    {
        name: 'Laptop',
        price: 800
    },
    {
        name: 'Keyboard',
        price: 160
    },
    {
        name: 'Mouse',
        price: 70
    }
]

const updatedProducts = products.map(product => {
    const { name, price } = product
    return (
        product = {
            name,
            price,
            ...discount,
            newprice: price * discount.rate
        }
    )
})

console.log(updatedProducts)