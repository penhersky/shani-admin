const admin = {
  short: `
    id
    profile {
      user {
        name
      }
    }
    name
    value
    show
  `,
  large: `
    id
    profile {
      user {
        id
        name
      }
    }
    name
    value
    icon
    show
    createdAt
    updatedAt
  `,
};

export default admin;
