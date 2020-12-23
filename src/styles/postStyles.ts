import { css } from 'styled-components';
import palette from './palette';

const postStyles = css`
  blockquote {
    padding: 1.125rem;
    border-left: 8px solid ${palette.primaryDark};
    background: ${palette.typo2};
    font-size: inherit;
  }
  blockquote + blockquote {
    padding-top: 0px;
  }
`;

export default postStyles;
