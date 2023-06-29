import React, { useState } from 'react';
import { Input, UserContainer, Row } from 'domains/user/experience/components/UserForm/styles';
import { useUser } from 'domains/user/data/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';
import { Navigator } from 'domains/navigation/experience/components/Navigator';

export const UserForm = () => {
  const navigate = useNavigate();
  const { userName, userEmail, userPassword, setUserInfo } = useUser();

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);

  const isValidEmail = (enteredEmail) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(enteredEmail);
  };

  const canProceed = !!name && isValidEmail(email) && !!password;

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickNext = () => {
    if (canProceed) {
      setUserInfo({
        name,
        email,
        password,
      });
      navigate(AdditionalInfoRoute.path);
    }
    return false;
  };

  return (
    <UserContainer>
      <Row>
        <Input placeholder="First Name" value={name} onChange={onChangeName}></Input>
      </Row>
      <Row>
        <Input placeholder="E-mail" value={email} onChange={onChangeEmail}></Input>
      </Row>
      <Row>
        <Input
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          type="password"
        ></Input>
      </Row>
      <Navigator buttons={[{ label: 'Next', onClick: onClickNext, disabled: !canProceed }]} />
    </UserContainer>
  );
};
