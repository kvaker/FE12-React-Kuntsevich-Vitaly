import React from 'react';
import { useField} from "formik";

const Checkboxes = (props) => {
    const [field, meta, helpers] = useField(props);

    return (
        <>
            <input {...field} value={props.value} type="radio" />
            {(meta.touched && meta.error) &&
            <div>
                {meta.error}
            </div>
            }
        </>
    )
}

export default Checkboxes