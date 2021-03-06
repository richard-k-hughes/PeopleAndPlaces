import React from 'react';

import './NewPlace.css';
import Input from '../../../shared/components/FormElements/Input/Input';
import { VALIDATOR_REQUIRE } from '../../../shared/util/validators';
import { VALIDATOR_MINLENGTH } from '../../../shared/util/validators';
import Button from '../../../shared/components/FormElements/Button/Button';
import { useForm } from '../../../shared/hooks/form-hook';

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
      address: { value: '', isValid: false }
    },
    false
  );



  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // Placeholder, will need to send to backend
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={`Please enter a valid title.`}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText={`Please enter a valid description (at least 5 characters).`}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText={`Please enter a valid address.`}
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {' '}
        ADD PLACE{' '}
      </Button>
    </form>
  );
};

export default NewPlace;
