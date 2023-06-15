import { useField } from "formik";

interface customInput {
  id: string;
  type: string;
  name: string;
  value: string;
  data_icon: string;
  data_label_text: string;
  data_for: string;
  handleChange: (event: React.ChangeEvent<any>) => void;
}

const CustomInput: React.FC<customInput> = (props: customInput) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-field col s12">
      <i
        className={
          meta.touched && meta.error
            ? "material-icons prefix red-text"
            : "material-icons prefix green-text"
        }
      >
        {props.data_icon}
      </i>
      <label htmlFor={props.data_for}>{props.data_label_text}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : "input-correct"}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
export default CustomInput;
