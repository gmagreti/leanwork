import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  overflow-x: auto;
  overflow-y: auto;
  border: 5px solid var(--background);
  box-shadow: rgba(17, 17, 26, 0.5) 0px 4px 16px,
    rgba(17, 17, 26, 0.5) 0px 8px 24px, rgba(17, 17, 26, 0.5) 0px 16px 56px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      color: var(--text-title);
      text-align: left;
      line-height: 1.5;
    }

    td {
      padding: 1rem 0.75rem;
      border: 0;
      background: var(--shape);
      color: var(--text-description);
      border-radius: 0.25rem;
    }
    @media (max-width: 1085px) {
      padding: 10px 20px;

      th {
        min-width: 200px;
        font-size: 14px;
        font-weight: 400;
        padding: 10px 0;
        text-align: left;
        line-height: 0.5;
      }

      td {
        min-width: 200px;
        font-size: 14px !important;
        padding: 0px !important;
        border: 0;
        background: var(--shape);
        color: var(--text-description);
        border-radius: 0.25rem;
      }
    }
  }
`;
