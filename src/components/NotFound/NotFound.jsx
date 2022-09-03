import { WarningContainer, WarningMessage } from './NotFound.styled';

const NotFound = () => {
  return (
    <WarningContainer>
      <WarningMessage>This page doesn't exist. Sorry :(</WarningMessage>
    </WarningContainer>
  );
};

export default NotFound;
