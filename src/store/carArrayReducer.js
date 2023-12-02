

const initialState = {
  models: ['Audi R8', 'Kia Sportage', 'Lexus RX', 'BMW X6', 'Mazda CX-9'],
  description: [
    [
      {
        name: 'Audi R8',
        year: 2020,
        door: 2,
        mark: 'Volkswagen',
        price: 20000,
        fuel: 'Бензин',
        korob: 'Робот',
        id: 0,
      },],
    [
      {
        name: 'Kia Sportage',
        year: 2021,
        door: 5,
        mark: 'Kia Motors',
        price: 5000,
        fuel: 'Бензин',
        korob: 'Робот',
        id: 1,
      },],
    [
      {
        name: 'Lexus RX',
        year: 2021,
        door: 5,
        mark: 'Toyota Motor',
        price: 10000,
        fuel: 'Бензин',
        korob: 'Робот',
        id: 2,
      },],
    [
      {
        name: 'BMW X6',
        year: 2022,
        door: 5,
        mark: 'BMW',
        price: 15000,
        fuel: 'Бензин',
        korob: 'Робот',
        id: 3,
      },],
    [
      {
        name: 'Mazda CX-9',
        year: 2020,
        door: 5,
        mark: 'Mazda',
        price: 9000,
        fuel: 'Бензин',
        korob: 'Автомат',
        id: 4,
      },],

  ]
}

export const carArrayReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state
  }
}