import styled from "styled-components";

export const Container = styled.section`
  max-width: var(--container);
  margin: 0 auto;
  max-width: 100%;
  padding: 7rem 1.6rem 2rem;
  overflow: auto;

  table {
    max-width: 100%;
    width: 100%;
    border-spacing: 0 1rem;

    @media (max-width: 460px) {
      margin-top: -3rem;
    }

    th {
      color: var(--text);
      text-align: start;
      font-weight: normal;
      line-height: 2.4rem;
      padding: 1.6rem 3.2rem;
    }

    td {
      background: var(--white);
      padding: 1.6rem 3.2rem;
      border: 0;
      color: var(--text);
      border-radius: 0.5rem;

      &:first-child {
        color: var(--heading);
      }
    }
  }

  .date {
    display: flex;
    align-items: center;

    .icon {
      margin-left: auto;
    }

    svg {
      cursor: pointer;
      color: #e62e4d;
      display: block;
    }
  }
`;

interface PriceProps {
  type: string;
}

export const PriceField = styled.td<PriceProps>`
  color: ${(props) =>
    props.type === "withdraw" ? "var(--red)" : "var(--green)"} !important}
  white-space: nowrap;
`;
