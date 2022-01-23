import { useRouter } from "next/router";
import { useAxios, useStorage, useLoginContext } from "..";
import { TOKEN_KEY } from "../../config";
import { CREATE_POST_QUERY } from "../../lib/query";


type PostInput = {
    slug:string
    tags:[]
    comment:[]
    content:string
    owner:string
}

const useCreatePost = (data:PostInput) => {
    const router = useRouter();

    return () => {

        // console.log('login');
        useAxios(CREATE_POST_QUERY, {post: data}, true)
        .then(res => {
            if( res.data.data.createPost === null){
                console.error(res.data.errors.messages);
                return ;
            }

            router.push(`/post/${data.slug}`);
        });
    };
}

export default useCreatePost;