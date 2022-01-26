import React, {useState} from 'react'; 
const Form = () => {

    const [value, setValue] = useState('');

    return <input value={value} onChange={e => setValue(e.target.value)} />
}

export default Form;