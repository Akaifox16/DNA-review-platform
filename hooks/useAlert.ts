import { useState } from "react"

type alertProps = {
    success: boolean
    show: boolean
    message: string
}

const useAlert = () => {
    const [alert, setAlert] = useState<alertProps>(
        {
            success: false,
            show: false,
            message: ""
        }
    );

    return {alert, setAlert};
}

export default useAlert