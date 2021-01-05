const account = {
  short: `
    id
    name
    image 
    icon
    visible
    createdAt
    updatedAt
  `,
  large: `
    id
    name
    icon
    image
    description
    parent
    visible
    children {
      id
      name
      visible
      icon
    }
    parent
    createdAt
    updatedAt
  `,
};

export default account;
