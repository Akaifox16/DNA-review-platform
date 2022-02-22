import { useRouter } from "next/router";
import { useAxios } from "..";
import { CREATE_POST_QUERY } from "../../lib/query";
import { PostInput } from "../../lib/type";


const useCreatePost = () => {
    const router = useRouter();

    return (data: PostInput, token: string) => {

        // console.log('login');
        useAxios(CREATE_POST_QUERY, {post: data}, token)
        .then(res => {
            console.log(res)
            if( res.data.data.createPost === null){
                console.error(res.data.errors.messages);
                return ;
            }

            router.push(`/post/${data.slug}`);
        });
    };
}

export default useCreatePost;