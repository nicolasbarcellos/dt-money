import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: -8rem;
  padding: 0 1.6rem;

  @media(max-width: 460px) {
    grid-template-columns: 1fr;
  }

  > div {
    background: var(--white);
    padding: 2.4rem 3.2rem;
    border-radius: 0.5rem;
    color: var(--heading);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;


    h3 {
      line-height: 2.4rem;
      font-weight: 400;
    }
  }

  strong {
    display: block;
    font-size: 3.6rem;
    line-height: 5.4rem;
    font-weight: 500;
    margin-top: 1.6rem;
    white-space: nowrap
  }

  & .highlight-background {
    background: var(--green);
    color: var(--white);
  }
`;
