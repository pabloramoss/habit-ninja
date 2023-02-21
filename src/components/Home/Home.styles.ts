import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrapper {
    display: flex;
    gap: 2rem;
    padding: 8rem 0;
  }
  .wrapper__content {
    max-width: 600px;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .wrapper__content--title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .wrapper__content--subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .wrapper__content--text {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: grey;
  }
  .wrapper__content--image {
    height: 100%;
    width: 100%;
  }
`;
