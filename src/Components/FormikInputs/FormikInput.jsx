import React from "react";
import { useField } from "formik";

const FormikInput = (props) => {
    const [field, meta, helpers] = useField(props);
    return (
        <React.Fragment>
            <input {...field} placeholder={props.placeholder}/>
            {(meta.touched && meta.error) &&
            <div className={"input_error"}>
                {meta.error}
            </div>
            }
        </React.Fragment>
    )
}

export default FormikInput