import { Card, Input, Select, SelectItem, Button } from "@nextui-org/react";
import { useState } from "react";

const ConfirmationForm = () => {
    const [guests, setGuests] = useState([1,2,3,4,5,6,7,8,10])
    const [totalGuest, setTotalGuest] = useState(1)
    const [name, setName ] = useState("")
    // console.log(totalGuest)

    const sendInfo = async () => {
        console.log(name, totalGuest)
    }
    return (
        <div className="relative w-full items-center content-center justify-center  flex flex-column">
            <div className="flex flex-wrap items-center  justify-center py-6 align-center p-2 w-full">
                <Input className="m-2" onChange={e => setName(e.target.value)} type="text" label="Nombre completo" />
                <Select
                    isRequired
                    label="Numero de Invitados"
                    placeholder="Selecciona el numero de invitados"
                    onChange={(e)=> setTotalGuest(e.target.value)}
                    // defaultSelectedKeys={[totalGuest]}
                    className="m-2"
                >
                    {guests.map((guest) => (
                        <SelectItem key={guest}>
                            {guest}
                        </SelectItem>
                    ))}
                </Select>
                <Button onClick={sendInfo} radius="full" className="bg-gradient-to-tr from-[#C1CD9A] to-[#4E6C42] text-white shadow-lg m-2">
                    Confirmar Asistencia
                </Button>
            </div>
        </div>
    )
}


export default ConfirmationForm;