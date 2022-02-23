import { useRouter } from "next/router";
import { useAxios } from "..";
import { EDIT_POST_QUERY } from "../../lib/query";
import { PostInput } from "../../lib/type";

const useEditPost = () => {
    const router = useRouter();

    return (pid:string, data: PostInput, token: string) => {
        return useAxios(EDIT_POST_QUERY, {pid , post: data}, token)
        .then(res => {
            if(res.data.data.updatePost === null){
                console.error(res.data.errors.messages);
                return ;
            }

            router.back();
        })
    }
};

export default useEditPost;