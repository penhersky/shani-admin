const location = {
  short: `
    id
    user {
      name
    }
    name
    lat
    lng
  `,
  large: `
    id
    user {
      id
      name
      type
    }
    name
    lat
    lng
    createdAt
    updatedAt
  `,
};

export default location;
