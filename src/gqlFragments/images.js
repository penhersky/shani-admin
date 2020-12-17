const image = {
  short: `
    id
    Location
    active
    user {
      id
      name
      email
    }
  `,
  large: `
    id
    Etag
    Location
    Key
    active
    createdAt
    updatedAt
    user {
      id
      name
      email
    }
  `,
};

export default image;
