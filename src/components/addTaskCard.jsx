import React, {useState} from 'react';
import { Dialog } from 'primereact/dialog';

const handleChange = () => {

}

function AddTaskCard(props) {
  return ( 
    <form>
      <input type='text' placeholder='' onChange={handleChange} />
    </form>
  );
}
 
export default AddTaskCard;