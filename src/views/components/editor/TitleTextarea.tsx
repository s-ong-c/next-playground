import TextareaAutosize from 'react-textarea-autosize';
import palette from '../../../styles/palette';
import styled from 'styled-components';

const TitleTextarea = styled(TextareaAutosize)`
  padding: 0;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  font-family: 'Gugi', sans-serif;
  color: ${palette.typo2};
  &::placeholder {
    color: ${palette.typo2};
  }
`;

export default TitleTextarea;
