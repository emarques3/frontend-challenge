import React, { useState } from 'react';
import { Input, UserContainer, Row } from 'domains/user/experience/components/UserForm/styles';
import { useUser } from 'domains/user/data/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import AdditionalInfoRoute from 'pages/AdditionalInfo/route';
import { Navigator } from 'domains/navigation/experience/components/Navigator';

export const UserForm = () => {
  const navigate = useNavigate();
  const { userName, userEmail, setUserInfo } = useUser();

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickNext = () => {
    setUserInfo({
      name,
      email,
    });
    navigate(AdditionalInfoRoute.path);
  };

  return (
    <UserContainer>
      <Row>
        <Input placeholder="First Name" value={name} onChange={onChangeName}></Input>
      </Row>
      <Row>
        <Input placeholder="E-mail" value={email} onChange={onChangeEmail}></Input>
      </Row>
      <Navigator buttons={[{ label: 'Next', onClick: onClickNext }]} />
    </UserContainer>
  );
};
