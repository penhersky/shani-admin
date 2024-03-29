import { omit } from 'lodash';
import { GET_LIST, GET_ONE, UPDATE } from 'react-admin';
import gql from 'graphql-tag';

const buildQuery = (raFetchType, resourceName, params, lowName) => {
  switch (raFetchType) {
    case GET_ONE:
      return {
        query: gql`query get${resourceName}($id: ID!) {
                    get${resourceName}(id: $id) {
                      user {
                        id
                        name
                        email
                        provider
                        type
                        active
                        firstName
                        lastName
                        middleName
                        description
                        birthday
                        categoriesId
                        createdAt
                        images {
                          id
                          Location
                          active
                        }
                        location {
                          id
                          name
                          lat
                          lng
                        }
                        contacts {
                          id
                          name
                          value
                          icon
                          show
                        }
                        accountType {
                          id
                          status
                          from
                          to
                        }
                      }
                      security {
                        id
                        accessToken
                        refreshToken
                        createdAt
                        updatedAt
                      }
                    }
                  }`,
        variables: { id: params?.id },
        parseResponse: (response) => {
          return {
            data: {
              id: response?.data[`get${resourceName}`].user.id,
              user: response?.data[`get${resourceName}`].user,
              security: response?.data[`get${resourceName}`].security,
            },
          };
        },
      };

    case GET_LIST:
      return {
        query: gql`query get${resourceName}s ($paginate: Paginate!) {
                    get${resourceName}s(paginate: $paginate) {
                      result
                      totalItems
                      page
                      limit
                      totalPages
                      users {
                        id
                        name
                        email
                        images {
                          Location
                          active
                        }
                        active
                        createdAt
                      }
                    }
                  }`,
        variables: {
          paginate: {
            page: params.pagination.page,
            limit: params.pagination.perPage,
            sort: params.sort.order,
            sortKey: params.sort.field,
          },
        },
        parseResponse: (response) => {
          return {
            data: response?.data[`get${resourceName}s`][`users`],
            total: response?.data[`get${resourceName}s`]?.totalItems,
            page: response?.data[`get${resourceName}s`]?.page,
          };
        },
      };
    case UPDATE:
      return {
        query: gql`
          mutation updateUser($id: ID!, $user: UpdateUser!) {
            updateUser(id: $id, user: $user) {
              id
              name
              email
              provider
              type
              active
            }
          }
        `,
        variables: {
          id: params?.id,
          user: {
            ...omit(params?.data.user, [
              'id',
              'updatedAt',
              'createdAt',
              'images',
              'accountType',
              '__typename',
              'location',
              'contacts',
            ]),
          },
        },
        parseResponse: (response) => {
          return {
            data: { user: response?.data[`update${resourceName}`] },
          };
        },
      };

    default:
      return gql``;
  }
};

export default buildQuery;
