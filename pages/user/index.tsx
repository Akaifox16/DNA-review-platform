import { useEffect, useState } from "react";
import { useLayout, useUsername } from "../../hooks";

const UserPage = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        setName(useUsername());
    }, [])

    return (
        <div>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
            <p>Welcome {name}.</p>
        </div>
    );
}

UserPage.getLayout = useLayout();

export default UserPage;