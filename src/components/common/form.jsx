import React, { PureComponent } from "react";
import Input from "./input";
import TextArea from "./textarea";
import Dropzone from "react-dropzone";
import SelectInput from "./selectInput";
import Checkbox from "./checkbox";
import Joi from "joi-browser";
import _ from "lodash";
class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: {}, errors: {} };
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter(event) {
    let values = { ...this.state.data };
    const { nand, disabled } = this.state;
    values = _.chain(values)
      .pick(nand)
      .pickBy(v => v !== "")
      .value();
    if (_.isEmpty(values)) {
      const { childNodes } = event.currentTarget;
      const nodes = [...childNodes];
      const input = nodes.find(el => el.name !== undefined);
      const inputName = nand.find(el => el === input.name);
      const disable = nand.filter(el => el !== inputName);
      let data = { ...disabled };
      data[input.name] = false;
      disable.forEach((el, i) => {
        data[el] = true;
      });
      this.setState({ disabled: data });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  xor;

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.config[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
      if (item.path.length == 0) {
        item.context.peers.forEach(el => {
          errors[el] = item.message;
        });
      }
    }
    return errors;
  };

  renderInput = (name, label, desc, type = "text") => {
    const { errors, data, disabled } = this.state;
    return (
      <Input
        className={disabled[name] ? "disabled" : "error"}
        disabled={disabled[name] ? true : false}
        label={label}
        name={name}
        desc={desc}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        onMouseEnter={this.onMouseEnter}
        error={errors[name]}
      />
    );
  };

  renderTextArea = (name, label, desc, type = "text") => {
    const { errors, data } = this.state;
    return (
      <TextArea
        label={label}
        name={name}
        desc={desc}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelectInput = (name, label, desc, options) => {
    const { errors, data, disabled } = this.state;
    return (
      <SelectInput
        className={disabled[name] ? "disabled" : ""}
        disabled={disabled[name] ? true : false}
        label={label}
        value={data[name]}
        desc={desc}
        name={name}
        options={options}
        onChange={this.handleChange}
        onMouseEnter={this.onMouseEnter}
        error={errors[name]}
      />
    );
  };

  renderCheckbox = (name, label, type = "checkbox") => {
    const { errors, data } = this.state;
    return (
      <Checkbox
        label={label}
        name={name}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = label => {
    return <button className="ui blue">{label}</button>;
  };

  renderDropZone = label => {
    const { errors, data } = this.state;
    return (
      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps, acceptedFiles }) => (
          <section>
            <div className="dropzone ui select" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>{label}</p>
            </div>
          </section>
        )}
      </Dropzone>
    );
  };
}

export default Form;
