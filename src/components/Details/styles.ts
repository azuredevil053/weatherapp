import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Action = styled(motion.button)`
  align-items: center;
  background-color: #2a2a2a;
  border: none;
  border-radius: 100%;
  display: flex;
  flex-flow: column;
  height: 2.5rem;
  justify-content: center;
  margin-left: 20rem;
  margin-top: 2rem;
  position: absolute;
  width: 2.5rem;
  z-index: 10;

  svg {
    color: #f9f9f9;
    font-size: 1.25rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  h3,
  h5 {
    color: #b9d2f6;
    height: 1.25rem;
  }
`;

export const Detail = styled(motion.div)`
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  display: flex;
  gap: 1rem;
  height: 4rem;
  justify-content: space-between;
  padding: 0.75rem;
  width: 9rem;

  svg {
    color: #f9f9f9;
    font-size: 1.75rem;
  }
`;

export const Wrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
  margin-left: 34rem;
  margin-top: 2rem;
  position: absolute;
`;
