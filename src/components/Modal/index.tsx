import { Modal as ReactModal } from "react-native";

import { Button } from "@components/Button";

import { Container, ModalButtons, ModalText, ModalView } from "./styles";

interface ModalProps {
  showModal: boolean
  onHideModal: (showModal: boolean) => void
  onConfirmModal: () => void
}

export function Modal({ showModal, onHideModal, onConfirmModal }: ModalProps) {
  return (
    <ReactModal
      animationType="fade"
      transparent
      visible={showModal}
      onRequestClose={() => onHideModal(false)}
    >
      <Container>
        <ModalView>
          <ModalText>
            Deseja realmente excluir o registro da refeição?
          </ModalText>
          <ModalButtons>
            <Button
              text="Cancelar"
              type="SECONDARY"
              onPress={() => onHideModal(false)}
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
            <Button
              text="Sim, excluir"
              onPress={onConfirmModal}
              style={{ flexGrow: 1, flexShrink: 0, flexBasis:0 }}
            />
          </ModalButtons>
        </ModalView>
      </Container>
    </ReactModal>
  )
}
