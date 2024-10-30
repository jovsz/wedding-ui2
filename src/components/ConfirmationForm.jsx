import { Card, Autocomplete, AutocompleteItem } from "@nextui-org/react";

const ConfirmationForm = () => {
    const animals = [
        { label: 'Dog', value: 'dog' },
        { label: 'Cat', value: 'cat' },
        { label: 'Bird', value: 'bird' },
    ];
    return (
        <Card>
            <Autocomplete
                label="Select an animal"
                className="max-w-xs"
            >
                {animals?.map((animal) => (
                    <AutocompleteItem key={animal?.value} value={animal?.value}>
                        {animal?.label}
                    </AutocompleteItem>
                ))}
            </Autocomplete>

        </Card>
    )
}


export default ConfirmationForm;