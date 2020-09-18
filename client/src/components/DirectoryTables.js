import React from 'react';

function DirectoryTables (props) {

  return (
    <tr key={props.in}>
      <td>{props.contact.role}</td>
      <td>{props.contact.first_name}</td>
      <td>{props.contact.last_name}</td>
      <td>{props.contact.primary_phone}</td>
      <td><a href={"mailto:" + props.contact.personal_email}>{props.contact.personal_email}</a></td>
    </tr>
  )
};

export default DirectoryTables;