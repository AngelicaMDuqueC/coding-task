import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormFeedback
} from 'reactstrap';
import { FaUser } from 'react-icons/fa';

const UserGitHub = ({ invalid, name, textholder, textLabel }) => (
  <FormGroup>
    <Label htmlFor='username'>{textLabel}</Label>
    <InputGroup>
      <Input
        invalid={invalid}
        innerRef={name}
        type='text'
        name={textholder}
        id={textholder}
        placeholder={textholder}
      />
      <InputGroupAddon addonType='append'>
        <InputGroupText>
          <FaUser />
        </InputGroupText>
      </InputGroupAddon>
      {{ invalid } && <FormFeedback>{`That ${name} is invalid`}</FormFeedback>}
    </InputGroup>
  </FormGroup>
);

export default UserGitHub;
