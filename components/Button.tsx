import { MouseEventHandler } from "react";

type ButtonProps = {
    name: string
    type: "button" | "submit" | "reset" | undefined
    enable?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = (props:ButtonProps) => {

    return (
        <div>
            <button 
            type = {props.type} 
            onClick = {props.enable ? props.onClick : () => {}} >
                {props.name}
            </button>
        </div>
    );
}

export default Button;