import React from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin'

const UpdatePackage = () => {
  return (
    <Edit>
        <SimpleForm>
            <TextInput source='Sender_name' />
            <TextInput source='Email' />
            <TextInput source='Date' />
            <TextInput source='package_name' />
            <TextInput source='Location' />
            <TextInput source='Shipment_status' />
        </SimpleForm>
    </Edit>
  )
}

export default UpdatePackage;