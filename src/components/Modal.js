import React from 'react';
import styled from 'styled-components';
import Portal from './Portal';

const Modal = ({
  backGroundColor,
  className,
  visible,
  closable,
  backGroundClosable,
  onClose,
  children,
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <Portal elementId='modal'>
      <ModalOverlay visible={visible} backGroundColor={backGroundColor} />
      <ModalWrapper
        className={className}
        onClick={backGroundClosable ? onMaskClick : null}
        tabIndex={-1}
        visible={visible}>
        <ModalInner tabIndex={0} className='modal-inner'>
          {closable && (
            <button className='modal-close' onClick={close}>
              x
            </button>
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) =>
    props.backGroundColor ? 'rgba(249, 60, 60, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
  z-index: 999;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  height: 300px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
`;

export default Modal;
