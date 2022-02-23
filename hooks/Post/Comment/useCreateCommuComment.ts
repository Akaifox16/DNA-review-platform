import { useAxios } from "../..";
import { CREATE_COMMENT_QUERY } from "../../../lib/query";
import { Comment, CommentCreateInput } from "../../../lib/type";

const useCreateCommuComment = () => {

    return  (data: CommentCreateInput, token: string) => {
        return useAxios(CREATE_COMMENT_QUERY, { comment: data }, token)
        .then(res => {
            if( res.data.data.createCommuComment === null ){
                console.error( res.data.errors.messages);
                return ;
            }

            return res.data.data.createCommuComment;
        })
    };
}

export default useCreateCommuComment;