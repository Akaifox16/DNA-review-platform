import { GetStaticPaths, GetStaticProps } from "next";
import { useAxios } from "../../hooks";
import { ALLUSER_QUERY, USER_QUERY } from "../../lib/query";
import { Response } from "../../lib/type";
import { User } from "../../lib/type/type";

type Props = User

const Slug = ({id, name, email, bio, contact, likes, dislikes }: Props) => {
    return (
        <div>
            {id} {email}
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: {data: {ranking}} }: Response = await useAxios(ALLUSER_QUERY, {}, '');
    const paths = ranking.map(user => ({
        params: {
            slug: user.name.replace(/\s/g, '-')
        }
    }));

    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if(params !== undefined){
        console.log(params)

        const { data: {data: { userById }} }: Response = await useAxios(USER_QUERY, {id: params.slug}, '');
        const { id, name, email, bio, contact, likes, dislikes } = userById
            
        return {
            props:{
                id,
                name, 
                email, 
                bio, 
                contact, 
                likes, 
                dislikes
            }
        }

    }
    
    return {
        props:{
            // params
        }
    }
}

export default Slug;