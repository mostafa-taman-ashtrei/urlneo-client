import classNames from 'classnames';

interface InputComponentProps {
    className?: string
    type: string
    placeholder: string
    value: string
    setValue: (str: string) => void
    error: string | undefined
}

const InputComponent: React.FC<InputComponentProps> = ({
    className, type, placeholder, value, setValue, error,
}) => {
    return <div className={className}>
        <input
            className={classNames(
                "transition duration-600 px-3 py-2 w-full bg-gray-900  rounded-full  focus:bg-gray-800 hover:bg-gray-700",
                { 'bg-red-600 hover:bg-red-500 ': error },
            )}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />

        <small className="font-medium text-red-600">{error}</small>
    </div>
}

export default InputComponent;