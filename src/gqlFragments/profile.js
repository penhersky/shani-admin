const profile = {
  short: `
    id
    user {
      id
      name
    }
    firstName
    lastName
    middleName
    createdAt
  `,
  large: `
    id
    user {
      id
      name
      type
    }
    firstName
    lastName
    middleName
    location {
      id
    }
    description
    birthday
    categoriesId
    contacts {
      id
      name
    }
    createdAt
    updatedAt
  `,
};

export default profile;
