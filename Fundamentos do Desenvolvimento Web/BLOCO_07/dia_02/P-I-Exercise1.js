const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${Object.values(order.order.delivery.deliveryPerson).join('')}, entrega para: ${Object.values(order.name).join('')}, Telefone: ${Object.values(order.phoneNumber).join('')}, ${Object.values(order.address.street).join('')}, Nº: ${Object.values(order.address.number).join('')}, AP: ${Object.values(order.address.apartment).join('')}`);
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = '50,00';
  console.log(`Olá ${Object.values(order.name).join('')}, o total do seu pedido de muzzarella, calabresa e ${Object.values(order.order.drinks.coke.type).join('')} é de R$${Object.values(order.payment.total).join('')}.`);

}

orderModifier(order);