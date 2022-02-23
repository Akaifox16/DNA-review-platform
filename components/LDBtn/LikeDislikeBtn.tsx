import { UpdownButton, UpdownButtonProps } from '@lyket/react';
import { useState } from 'react';
import { useAxios, useUsername } from '../../hooks';
import { LDtype, LikeDislikeProps, Response } from "../../lib/type";

enum State {
    Like = 1,
    Dislike = -1,
    Nuetral = 0
}

const LikeDislikeBtn = ({   owner, id,
                            likes, dislikes, 
                            like, dislike, 
                            undislike, unlike, 
                            type}:LikeDislikeProps) => {
    const name = useUsername();
    const [state, setState] = useState<State>(
        likes.includes(name)
        ? State.Like
        : dislikes.includes(name)
        ? State.Dislike
        : State.Nuetral
    )
    const input = type === LDtype.Comment
                    ? {cid: id}
                    : {pid: id}

    const clickUp = () => {
        if(state === State.Like){
            useAxios(unlike, input, owner)
            .then(res => {
                setState(State.Nuetral)
            })
        }else{
            useAxios(like, input, owner)
            .then(res => {
                setState(State.Like)
            })
        }
    }
    const clickDown = () => {
        if(state === State.Dislike){
            useAxios(undislike, input, owner)
            .then(res => {
                setState(State.Nuetral)
            })
        }else{
            useAxios(dislike, input, owner)
            .then(res => {
                setState(State.Dislike)
            })
        }
    }

    return (
        <div>
            <button 
            onClick={e => {
                clickUp();
            }}>+</button>
            <span>{likes.length - dislikes.length}</span>
            <button
            onClick={e => {
                clickDown();
            }}>-</button>
        </div>
    );
}

export default LikeDislikeBtn;