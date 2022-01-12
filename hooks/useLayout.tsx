import { ReactElement } from "react"
import { Layout } from "../components"

const useLayout = () => {
    return  (page: ReactElement) => (
        <Layout>
            { page }
        </Layout>
    )
}

export default useLayout