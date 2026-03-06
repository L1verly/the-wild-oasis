import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const sizes = {
  small: css`
    width: 2.4rem;
    padding: 0.4rem;
  `,
  regular: css`
    padding: 1rem;
    width: 6.2rem;
    margin: 4.8rem auto;
  `,
};

const Spinner = styled.div.attrs((props) => ({
  size: props.size || "regular",
}))`
  ${(props) => sizes[props.size]}

  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-brand-600);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: ${rotate} 1s infinite linear;
`;

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FullPageSpinner = () => (
  <FullPage>
    <Spinner />
  </FullPage>
);

export default Spinner;
