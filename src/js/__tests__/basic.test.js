import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('create object', async () => {
  const sample = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const data = await GameSavingLoader.load();
  await expect(data).toEqual(sample);
});
