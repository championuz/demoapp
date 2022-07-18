import React from 'react'
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

const AddPackage = () => {
  return (
    <Create>
    <SimpleForm>
        <TextInput source='Sender_name' />
        <TextInput source='Email' />
        <TextInput source='Date' />
        <TextInput source='package_name' />
        <TextInput source='Location' />
        <TextInput source='Shipment_status' />
    </SimpleForm>
</Create>
  )
}

export default AddPackage