import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Card,
  Typography,
  Divider,
  Button,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
} from '@material-ui/core';
import { useQueryWithStore, useUpdate, useNotify } from 'react-admin';
import RefreshIcon from '@material-ui/icons/Refresh';
import SaveIcon from '@material-ui/icons/Save';

import cartoucheDark from './cartoucheDark.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    background: `url(${cartoucheDark})`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    borderBottom: '1px solid rgba(255, 255, 255, 0.116)',
  },
  input: {
    width: 300,
    margin: '10px 0',
  },
  buttons: {
    width: 'max-content',
    margin: 5,
  },
}));

const Settings = (props: any) => {
  const classes = useStyles();
  const notify = useNotify();

  const [active, setActive] = React.useState(true);
  const [style, setStyle] = React.useState('default');
  const [status, setStatus] = React.useState('default');

  const { loaded, data } = useQueryWithStore({
    type: 'getOne',
    resource: 'Settings',
    payload: { id: '45' },
  });
  const [update, { loading, error, data: updated }] = useUpdate(
    'Settings',
    data?.id,
    {
      active,
      status,
      style,
    },
  );

  React.useEffect(() => {
    if (data?.id) {
      setActive(data.active);
      setStyle(data.style);
      setStatus(data.status);
    }
  }, [data]);

  React.useEffect(() => {
    if (error) {
      notify('updated Error', 'error');
    }
    if (updated) {
      setActive(updated.active);
      setStyle(updated.style);
      setStatus(updated.status);
      notify('Updated Successfully', 'info');
    }
  }, [updated, error, notify]);

  const onChangeStyle = (e: any) => setStyle(e.target.value);
  const onChangeStatus = (e: any) => setStatus(e.target.value);

  const onSaveSettings = () => {
    update();
  };
  return (
    <Card className='settings d-margin'>
      <div className={classes.container}>
        <Box width='3em' className='icon' margin='0 10px'>
          <SettingsIcon style={{ fontSize: '50px', color: '#5B54FE' }} />
        </Box>
        <Box textAlign='right' margin='0 10px'>
          <Typography color='textSecondary' style={{ fontSize: 20 }}>
            Application Settings
          </Typography>
        </Box>
      </div>
      <Divider />
      {loaded ? (
        <form>
          <TextField
            value={status}
            label='Status'
            className={classes.input}
            onChange={onChangeStatus}
          />
          <TextField
            value={style}
            label='Style'
            className={classes.input}
            onChange={onChangeStyle}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={active}
                color='primary'
                onChange={() => setActive(!active)}
              />
            }
            label='Active'
          />
        </form>
      ) : null}
      <Divider />
      <ButtonGroup
        size='large'
        color='primary'
        className={classes.buttons}
        disabled={loading}
      >
        <Button color='primary' onClick={onSaveSettings}>
          <SaveIcon />
        </Button>
        <Button
          color='primary'
          onClick={() => {
            setActive(data.active);
            setStyle(data.style);
            setStatus(data.status);
          }}
        >
          <RefreshIcon />
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default Settings;
