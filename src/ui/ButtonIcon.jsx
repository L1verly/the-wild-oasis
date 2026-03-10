import styled, { css } from "styled-components";

const sizes = {
  small: css`
    & svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,
  large: css`
    & svg {
      width: 4.4rem;
      height: 4.4rem;
    }
  `,
};

const ButtonIcon = styled.button.attrs((props) => ({
  size: props.size || "small",
}))`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  ${(props) => sizes[props.size]}

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
