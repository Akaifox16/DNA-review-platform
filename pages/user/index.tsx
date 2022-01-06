import { ReactElement, useEffect, useState } from "react";
import { Layout } from "../../components";
import { useStorage } from "../../hooks";

const UserPage = () => {
    const { getItem } = useStorage()
    const [name,setName] = useState("")
    
    useEffect(() => {
        const token = getItem('token')
        setName(JSON.parse(token).username)
    }, [])

    return (
        <div>
            Welcome {name}.
        </div>
    );
}

UserPage.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            { page }
        </Layout>
    )
}

export default UserPage;