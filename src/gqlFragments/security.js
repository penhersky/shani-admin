const security = {
  short: `
    id
    user {
      name
      provider
    }
    accessToken
    refreshToken
  `,
  large: `
    id
    user {
      id
      name
      provider
      type
    }
    accessToken
    refreshToken
    createdAt
    updatedAt
  `,
};

export default security;
