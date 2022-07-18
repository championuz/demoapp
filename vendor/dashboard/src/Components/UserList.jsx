import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const UserList = () => {
  return (
    <List>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='Sender_name' />
            <TextField source='Track_ID' />
            <EmailField source='Email' />
            <TextField source='Date' />
            <TextField source='package_name' />
            <TextField source='Location' />
            <TextField source='Shipment_status' />
        </Datagrid>
    </List>
  )
}

export default UserList