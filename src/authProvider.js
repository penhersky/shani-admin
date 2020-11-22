const LOGIN = (email, pass) => `
  query {
    adminLogin(email: "${email}", password: "${pass}") {
    result
    message
    redirectTo
    admin {
      id
      name
      email
      imageUrl
      state
      createdAt
    }
    token
  }
}
`;

const provider = {
  login: async ({ username, password }) => {
    try {
      const data = await fetch(`${process.env.REACT_APP_ACCOUNT_SERVER_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: LOGIN(username, password),
        }),
      }).then((r) => r.json());
      localStorage.setItem('token', data?.data?.adminLogin?.token);
      localStorage.setItem(
        'permissions',
        JSON.stringify(data?.data?.adminLogin?.admin),
      );
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
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
