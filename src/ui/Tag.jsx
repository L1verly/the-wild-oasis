import styled, { css } from "styled-components";

const Tag = styled.span.attrs((props) => ({
  size: props.size || "small",
}))`
  width: fit-content;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 100px;

  ${(props) => sizes[props.size]}

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

const sizes = {
  small: css`
    font-size: 1.1rem;
    padding: 0.4rem 1.2rem;
  `,
  medium: css`
    font-size: 1.375rem;
    padding: 0.5rem 1.5rem;
  `,
};

export default Tag;
