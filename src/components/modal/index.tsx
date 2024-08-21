import CustomText from '@components/text';
import React, { ReactNode } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface ModalComponentProps {
  visible: boolean;
  onClose?: () => void;
  title: string;
  children: ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  title,
  children,
}) => {
  const handleOutsideClick = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='slide'
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleOutsideClick}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <CustomText style={styles.modalTitle}>{title}</CustomText>
              <View style={styles.modalContent}>{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalComponent;
