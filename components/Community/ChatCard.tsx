import ReactMarkdown from "react-markdown";

type Props ={
    owner: string
    content: string
}

const ChatCard = ({ owner, content }:Props) => {
    return (
        <div>
            <h4>{ owner }</h4>
            <ReactMarkdown 
                        children={ `${content}` }
                        components= {{
                            img: ({node, src, ...props}) => 
                                                            <img 
                                                            src={src as string}
                                                            width={700} 
                                                            
                                                            />
                                                            
                        }}
                    />
        </div>
    );
}

export default ChatCard;