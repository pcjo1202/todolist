import styled from 'styled-components'

export const AddInputContainer = styled.form`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const AddInput = styled.input`
  width: ${({ isOpen }) => (isOpen ? `15rem` : `0`)};
  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  padding: 0.5rem 1rem;
  margin-left: 3rem;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  ::placeholder {
    color: #fff;
  }
  outline: none;
  transition: all 0.3s ease;
`

export const ToggleWrapper = styled.div`
  width: auto;
  padding: 1.5rem 0.5rem;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? `7%` : `50%`)};
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`
export const ToggleBtn = styled.div`
  width: 2rem;
  height: 0.2rem;
  background-color: #4d4d4d;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2rem;
    height: 0.2rem;
    background-color: #4d4d4d;
    transform: translate(-50%, -50%) rotate(90deg);
  }
  transform: ${({ isOpen }) => (isOpen ? `rotate(45deg)` : null)};
  transition: all 0.3s ease-in-out;
`
export const AddBox = styled.div`
  position: relative;
  display: flex;
  justify-content: cennter;
  align-items: center;
  gap: 0.5rem;
  width: ${({ isOpen }) => (isOpen ? `100%` : `4rem`)};
  height: ${({ isOpen }) => (isOpen ? `100%` : `70%`)};

  /* padding: 1rem; */
  border-radius: ${({ isOpen }) => (isOpen ? null : '2rem')};
  background-color: ${({ isOpen }) => (isOpen ? `#e87b7b` : `#b6ace0`)};
  transition: all 0.3s ease-in-out;
`
