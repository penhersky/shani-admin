import { GET_LIST, GET_ONE } from 'react-admin';
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
                        images {
                          id
                          Location
                          active
                        }
                        provider
                        type
                        active
                        profile {
                          id
                          firstName
                          lastName
                          middleName
                          location
                          description
                          birthday
                          categoriesId
                          contacts {
                            id
                            profile
                            name
                            value
                            icon
                            show
                          }
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
                        user
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
                      ${String(resourceName).toLocaleLowerCase()}s {
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
            data: response?.data[`get${resourceName}s`][`${lowName}s`],
            total: response?.data[`get${resourceName}s`]?.totalItems,
            page: response?.data[`get${resourceName}s`]?.page,
          };
        },
      };

    default:
      return gql``;
  }
};

export default buildQuery;
