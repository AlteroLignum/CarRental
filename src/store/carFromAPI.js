const initialState = {
  models: [
    {
      name: 'Mercedes-Maybach GLS 600 4MATIC',
      year: 2020,
      door: 5,
      mark: 'Mercedes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 0,
      image: 'https://st4.zr.ru/_ah/img/jVCQbMZxYgltNgH1OJAzrw=s800'
    },
    {
      name: 'BMW X6 M',
      year: 2020,
      door: 5,
      mark: 'BMW',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 1,
      image: 'https://st1.zr.ru/_ah/img/khN0pa1zyzPGUy3-jrPkiA=s800'
    },
    {
      name: 'Jeep Grand Cherokee Trackhawk',
      year: 2020,
      door: 5,
      mark: 'Jeep',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 2,
      image: 'https://st3.zr.ru/_ah/img/FOss3w-gLJ_JJ7nKDh_pcA=s800'
    },
    {
      name: 'Aston Martin DBX',
      year: 2020,
      door: 5,
      mark: 'Aston',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 3,
      image: 'https://st2.zr.ru/_ah/img/v-8v63SWk_S_GxskpWcgqw=s800'
    },
    {
      name: 'Lamborghini Urus',
      year: 2020,
      door: 5,
      mark: 'Lamborghini',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 4,
      image: 'https://st4.zr.ru/_ah/img/KY0u75LiyXvrBqBARCj39w=s800'
    },
    {
      name: 'Bentley Bentayga',
      year: 2020,
      door: 5,
      mark: 'Bentley',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 5,
      image: 'https://st2.zr.ru/_ah/img/GSKD1MhI8Jp6NNpMUdOIRQ=s800'
    },
    {
      name: 'Land Rover Range Rover',
      year: 2020,
      door: 5,
      mark: 'Range Rover',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 6,
      image: 'https://st3.zr.ru/_ah/img/1I26AR3e8eajjta_GWjMKA=s800'
    },
    {
      name: 'Mercedes-AMG G 63',
      year: 2020,
      door: 5,
      mark: 'Mercedes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 7,
      image: 'https://st4.zr.ru/_ah/img/8GKjJZ1QZyWZu26RLZCdIQ=s800'
    },
    {
      name: 'Rolls-Royce Cullinan',
      year: 2020,
      door: 5,
      mark: 'Rolls-Royce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 8,
      image: 'https://st4.zr.ru/_ah/img/I6NsQKVvcLzgP4XyzDFD7A=s800'
    },
    {
      name: 'Porsche Cayenne Turbo',
      year: 2020,
      door: 5,
      mark: 'Porsche',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac massa nec elit eleifend suscipit. Phasellus eget tincidunt odio, nec iaculis quam. Ut sapien orci, ultricies nec urna in, ultricies consequat quam. In vel tortor ut lectus semper commodo in sit amet justo. Sed sit amet augue sit amet augue dictum porta. Praesent finibus, tellus sed cursus mollis, eros purus luctus lorem, vitae sodales magna ligula at mi. Nulla augue ex, volutpat in tempor ac, suscipit sit amet tortor. Nulla efficitur, eros ut dignissim sollicitudin, augue diam iaculis arcu, eu volutpat tortor arcu eu nibh. Phasellus pretium scelerisque sodales. Etiam in leo ac nulla lacinia sagittis ac ut eros. Pellentesque nec interdum turpis. Etiam vel nisl dui. Cras facilisis ullamcorper nibh, in varius massa molestie vel. Etiam ultricies ligula at sapien rutrum condimentum.',
      price: 20000,
      fuel: 'Бензин',
      korob: 'Робот',
      id: 0,
      image: 'https://st3.zr.ru/_ah/img/23QQXqiV2ns7v9acx9TfZw=s800'
    }

  ]
}

export const carFromAPI = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
