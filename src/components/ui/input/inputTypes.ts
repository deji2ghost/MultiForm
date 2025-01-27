export interface inputTypesProps{
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    name: string;
    checked?: boolean
    id?: string
}