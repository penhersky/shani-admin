import * as React from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import {
  CreateButton,
  ExportButton,
  ListBase,
  Pagination,
  Title,
  TopToolbar,
  useListContext,
} from 'react-admin';

import GridList from './GridList';

const ListActions = () => (
  <TopToolbar>
    <CreateButton basePath='/image' />
    <ExportButton />
  </TopToolbar>
);

const ImageList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <ListBase
      perPage={20}
      sort={{ field: 'reference', order: 'ASC' }}
      {...props}
    >
      <ImageListView isSmall={isSmall} />
    </ListBase>
  );
};

const ImageListView = ({ isSmall }) => {
  const { defaultTitle } = useListContext();
  return (
    <>
      <Title defaultTitle={defaultTitle} />
      <ListActions />
      <Box display='flex'>
        <Box
          width={isSmall ? 'auto' : 'calc(100% - 16em)'}
          style={{ backgroundColor: '#444444', borderRadius: 5, padding: 16 }}
        >
          <GridList />
          <Pagination rowsPerPageOptions={[10, 20, 40]} />
        </Box>
      </Box>
    </>
  );
};
export default ImageList;
