import { filter } from 'lodash';

export const positions = [
  {
    name: 'root',
    id: 'root',
    value: 100,
  },
  {
    name: 'moderator',
    id: 'moderator',
    value: 50,
  },
  {
    name: 'junior',
    id: 'junior',
    value: 10,
  },
];

const verify = (state) => {
  switch (state) {
    case positions[0].name:
      return positions[0].value;
    case positions[1].name:
      return positions[1].value;
    case positions[2].name:
      return positions[2].value;
    default:
      return 10;
  }
};

export const getLevel = (state = null) => {
  const user = JSON.parse(localStorage.getItem('permissions'));
  return verify(state ?? user.state);
};

export const allowedEdit = () => getLevel() < 50;

export const getPositions = () =>
  filter(positions, (pos) => getLevel() >= pos.value);
