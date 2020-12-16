const location = {
  short: `
    id
    profile {
      user {
        name
      }
    }
    name
    lat
    lng
  `,
  large: `
    id
    profile {
      user {
        id
        name
        type
      }
    }
    name
    lat
    lng
    createdAt
    updatedAt
  `,
};

export default location;
