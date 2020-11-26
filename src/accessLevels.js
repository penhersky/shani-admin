const verify = (state) => {
  switch (state) {
    case 'root':
      return 100;
    case 'moderator':
      return 50;
    case 'junior':
      return 10;

    default:
      return 10;
  }
};

export const allowed = () => {
  const user = JSON.parse(localStorage.getItem('permissions'));
  const level = verify(user.state);
  return level < 50;
};

export default verify;
