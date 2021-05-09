const faker = require('faker');

const randomSeatNum = () => {
  const numSeat = [2, 5, 5, 7, 5, 5];
  const randomIdx = Math.floor(Math.random() * numSeat.length);

  return numSeat[randomIdx];
};

const randomRating = () => Math.ceil(Math.random() * 5);

const carPhotos = ['https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5f467070-7fc7-47f6-b98f-c66fb93c162e?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=5a6240b2441fe1e8a3e3b21fb720ab4c', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5fabe879-b206-41b9-892d-b63c1b02362f?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=e966cda51f5a1bc5d76fde6189a9941d', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5f5109cf-ebc0-4e33-be2d-c20066489829?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=2070a2adb050d751e02e577efc3669ad', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5fc43d3f-ae35-481a-87a6-f78137757238?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=597253c3f307004c51c7019d18f1b4ac', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5db3b368-7c39-4063-9d77-63e8954a5484?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=2f8b7a6683e60d8a47bd03173e6dce0c', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5f99038c-9086-4ef8-95a9-3343d2455e58?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=10558425745810f9934a036791181921', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5ea27652-3c5f-44ef-8c32-888522500487?auto=format&crop=edges&fit=crop&h=533&ixlib=java-1.1.1&w=800&s=7022902d944f0ad8bc0ae9f085bfef33', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5e86ab9d-fa62-499f-b889-8faf9841d1ed?auto=format&crop=edges&fit=crop&h=533&ixlib=java-1.1.1&w=800&s=fd0285ee9669dae6ff2faec2e95b20ff', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5f2fd15d-4870-49cc-848d-b54792056678?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=fce20f4a211676361a17ae325b23fc35', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5fde18b3-60bb-4682-9db1-1d2628b804a8?auto=format&crop=edges&fit=crop&h=533&ixlib=java-1.1.1&w=800&s=ad7ffd9ff128bde7e10c5957bf980d4d', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F600463d8-946d-4652-b1b9-7a11d2f4aa7f?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=80f74044b39d683d12fa6e7757470857', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F6064cfc6-de20-406e-80c2-258619c86e60?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=338e26f32d09bcc09ea352b651c16161', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F604c1733-64ae-470a-a5c1-a34b0a3174d1?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=37320220c57725bc1b8a885ce974ca84', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F6038918c-b1b7-43a2-94cd-4c97a11f8bf5?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=ecd54e6add44c7614858ee63d711651f', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F608c19cd-61ea-47fc-8eb8-8d9c3d1ce29b?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=5e0699afc08b1f5b90caa7f997759f87', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F6080f1a0-80fa-4a18-a409-8fbb3da69e64?auto=format&crop=edges&fit=crop&h=533&ixlib=java-1.1.1&w=800&s=17e457641da6eb2c45a1d18adf8208c2', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5ff1fb72-e61e-4601-bd1b-9326ce642e86?auto=format&crop=edges&fit=crop&h=533&ixlib=java-1.1.1&w=800&s=28ea6dce8ab47dfb0a66e585f32ef31c', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5f83c7e1-7ee7-4885-a8d5-d298f0e97478?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=c5fd6af1fc7a61f7f2721890ee195010', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5fff4251-de75-45aa-a979-f927c00f37c1?auto=format&crop=edges&fit=crop&h=1066&ixlib=java-1.1.1&w=1600&s=5f62150ce25b26db161b3e5bc1c9dd38', 'https://sharetribe.imgix.net/5c6aae77-8bfa-446f-98b8-3c28a36f52c6%2F5f744841-7a96-4140-8f60-798882d8d847?auto=format&crop=edges&fit=crop&h=533&ixlib=java-1.1.1&w=800&s=b2760a8d2206a5c2e1abdf69116f1d44'];

module.exports = {
  up: async (queryInterface) => {
    const carList = [];

    for (let i = 0; i < 20; i += 1) {
      carList.push({
        model: faker.vehicle.model(),
        photo: carPhotos[i],
        seats: randomSeatNum(),
        rating: randomRating(),
        // available : { monday: true, tuesday: false, etc. },
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const carsResult = await queryInterface.bulkInsert('cars', carList);
      console.log('Seeded cars: ', carsResult);
    } catch (err) {
      console.log('ERROR ----: ', err);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bookings', null, {});
    await queryInterface.bulkDelete('cars', null, {});
  },
};
