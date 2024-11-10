import { Input, Image, Select, SelectItem, Button, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from "react";

const ConfirmationForm = () => {
    const [full, setFull] = useState(null)
    const [confirmGuests, setConfirmGuests] = useState(1)
    const [response, setResponse] = useState(null)
    const [confirmed, setConfirmed] = useState(false)


    const { data: names, isLoading, error } = useQuery(['names'], async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL + '/invitations/names'}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    const mutation = useMutation(async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL + '/invitations/confirm'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: full.id,
                totalConfirmed: confirmGuests,
            }),
        });
        if (!response.ok) {
            setResponse(response.data.message)
            throw new Error('Network response was not ok');
        }
        return response.json();
    });

    const sendInfo = async () => {
        try {
            await mutation.mutateAsync(); // Call the mutation
            console.log('Information sent successfully');
            setResponse("Muchas gracias por tu confirmacion!!!")
            setConfirmed(true)
        } catch (error) {
            console.error('Error sending information:', error);
        }
    }
    // console.log(names)
    return (
        <div className="relative max-w-[400px] flex-col h-auto border rounded-lg shadow-md my-2 shadow-[#4E6C42] items-center content-center justify-center  flex">
            {response ?
                <div className="my-4 p-5 rounded-lg">
                    {response}
                    <Image src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDhra290aTE0cWZ3NHE2bDQxc2xzZ3kya3ByMHRhbHoxdDQ2c3UxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h85sDYSl23vvoI3SiB/giphy.webp" />
                </div>

                :
                <div className="flex flex-wrap items-center  justify-center py-6 align-center p-2 w-full">
                    <Autocomplete
                        label="Nombre de Invitado"
                        className="max-w-xs my-2"
                        onSelectionChange={(e) => setFull(names.find((x) => x?.id === e))}
                    >
                        {names?.map((guest) => (
                            <AutocompleteItem key={guest.id} value={guest.id}>
                                {guest?.fullName}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                    {full && full.totalGuests > 1 && (
                        <Autocomplete
                            label="Confirme total de invitados"
                            className="max-w-xs my-2"
                            onSelectionChange={(e) => setConfirmGuests(e)}
                        >
                            {Array.from({ length: full.totalGuests }, (_, index) => index + 1).map((number) => (
                                <AutocompleteItem key={number} value={number}>
                                    {number}
                                </AutocompleteItem>
                            ))}
                        </Autocomplete>
                    )}

                    <Button isDisabled={confirmed} onClick={sendInfo} radius="full" className="bg-gradient-to-tr from-[#C1CD9A] to-[#4E6C42] text-white shadow-lg m-2">
                        Confirmar Asistencia
                    </Button>
                </div>

            }

        </div>
    )
}


export default ConfirmationForm;