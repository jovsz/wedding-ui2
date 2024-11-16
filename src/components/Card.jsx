import { GiLoveLetter } from "react-icons/gi";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";


export default function CardComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
      color="secondary"
        radius="full" onPress={onOpen}><GiLoveLetter className="text-2xl text-white " /></Button>
      <Modal
       backdrop="opaque"
       radius="lg"

      classNames={{
        body: "py-6",
        backdrop: "bg-[#DEC1DB]/50 backdrop-opacity-40",
        // base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        // header: "border-b-[1px] border-[#292f46]",
        // footer: "border-t-[1px] border-[#292f46]",
        // closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      isOpen={isOpen} 
      onOpenChange={onOpenChange}
      size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex font-thin flex-col gap-1 p-2">¡Gracias por tu generoso apoyo!
              Gracias de corazón por tu donación. Tu generosidad hace que nuestro día sea aún más especial. ¡Estamos muy agradecidos por tenerte a nuestro lado!</ModalHeader>
              <ModalBody>
                <div className="card bg-gradient-to-tr from-[#C1CD9A] to-[#4E6C42] border-2 rounded-lg px-4">
                  <div className="visa_logo w-[200px] h-[80px]" />
                  <div className="visa_info">
                    <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
                    <p>4586 7985 9271 6388</p>
                  </div>
                  <div className="visa_crinfo py-2">
                    <p>Rebeca García Nevarez</p>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}