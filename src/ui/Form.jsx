import styled, { css } from "styled-components";

const Form = styled.form.attrs((props) => ({
  type: props.type || "regular",
}))`
  overflow: hidden;
  font-size: 1.4rem;
  ${(props) => types[props.type]}
`;

const types = {
  regular: css`
    padding: 2.4rem 4rem;

    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
  `,
  modal: css`
    width: 80rem;
  `,
};

export default Form;
