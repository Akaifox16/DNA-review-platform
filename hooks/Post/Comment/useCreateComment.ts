import { useAxios } from "../..";
import { CREATE_COMMENT_QUERY } from "../../../lib/query";
import { Comment, CommentCreateInput } from "../../../lib/type";

const useCreateComment = () => {

    return  (data: CommentCreateInput, token: string) => {
        return useAxios(CREATE_COMMENT_QUERY, { comment: data }, token)
        .then(res => {
            if( res.data.data.createComment === null ){
                console.error( res.data.errors.messages);
                return ;
            }

            return res.data.data.createComment;
        })
    };
}

export default useCreateComment;