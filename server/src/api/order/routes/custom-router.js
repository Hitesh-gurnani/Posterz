module.exports={
    routes:[
        {
            method:'GET',
            path:'/orders/customOrder',
            handler:'order.customOrderController'
        },
        {
            method:'GET',
            path:'/orders',
            handler:'order.create'
        }
    ]
}