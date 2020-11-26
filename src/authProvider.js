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

const clearStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('exp_d_t');
  localStorage.removeItem('permissions');
};

const provider = {
  login: async ({ username, password }) => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_ACCOUNT_SERVER_URL}/graphql`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            query: LOGIN(username, password),
          }),
        },
      ).then((r) => r.json());
      console.log(data);
      if (!data?.data?.adminLogin?.token) return Promise.reject();
      localStorage.setItem('token', data?.data?.adminLogin?.token);
      const date = new Date();
      localStorage.setItem('exp_d_t', date.setHours(date.getHours() + 24));
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
    clearStorage();
    return Promise.resolve();
  },
  checkAuth: () => {
    if (Number(localStorage.getItem('exp_d_t')) < Date.now()) clearStorage();
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
  },
  getIdentity: () => {
    const user = JSON.parse(localStorage.getItem('permissions'));

    return Promise.resolve({
      id: user?.id,
      fullName: user?.name,
      avatar: user?.imageUrl,
    });
  },
};

export default provider;
