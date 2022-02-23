import { GetStaticPaths } from "next";
import { useAxios } from "../../hooks";
import { ALLUSER_QUERY } from "../../lib/query";
import { Response } from "../../lib/type";

const Slug = () => {
    return (
        <div>
            Enter
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: {data: {users}} }: Response = await useAxios(ALLUSER_QUERY, {}, '');
    const paths = users.map(user => ({
        params: {
            slug: user.name.replace(/\s/g, '-')
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export default Slug;