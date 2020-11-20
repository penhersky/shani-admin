const provider = {
  login: ({ username, password }) => {
    console.log(username, password);
    localStorage.setItem('token', 'test_token');
    localStorage.setItem('permissions', {});
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  },
};

export default provider;
