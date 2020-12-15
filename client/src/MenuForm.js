import { Form } from "semantic-ui-react";
import { useState } from "react";

export default (props) => {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    props.addMenu({ name });
    setName("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label={"Menu"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Form.Button type="Submit">Add Menu</Form.Button>
    </Form>
  );
};