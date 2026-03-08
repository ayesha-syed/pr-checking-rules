import React, { useState } from 'react';
import styled from 'styled-components';
import { Trash2 } from 'lucide-react';

const ProfileContainer = styled.div`
  padding: 24px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-width: 400px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`;

const ProfileEmail = styled.p`
  font-size: 14px;
  color: #0066FF;
  margin: 0 0 16px 0;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const SaveButton = styled.button`
  flex: 1;
  padding: 10px;
  background: #0033CC;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  outline: none;
`;

const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
`;

export function UserProfile() {
  const [name, setName] = useState('John Smith');
  const [email, setEmail] = useState('john@example.com');

  return (
    <ProfileContainer>
      <ProfileImage src="https://via.placeholder.com/80?text=User" />

      <ProfileName>{name}</ProfileName>

      <ProfileEmail>{email}</ProfileEmail>

      <FormGroup>
        <FormInput 
          type="text" 
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <FormInput 
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <ActionButtons>
        <SaveButton>Save</SaveButton>

        <DeleteButton>
          <Trash2 size={20} />
        </DeleteButton>
      </ActionButtons>
    </ProfileContainer>
  );
}

export default UserProfile;
