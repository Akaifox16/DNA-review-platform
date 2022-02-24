import { WithContext as ReactTags } from "react-tag-input";
import { TagsInputProps, Tag } from '../../lib/type';
import styles from '../../styles/Post.module.scss' ;
const KeyCodes = {
    comma: 188,
    enter: 13
} ;

const TagsInput = ({tags, setTags }: TagsInputProps) => {
    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleDelete = (i: number) => {
        setTags(tags.filter((tag, index) => index !== i));
    };
    const handleAddition = (tag:Tag)=> {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag: Tag , currPos: number, newPos: number) => {
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        setTags(newTags);
    };

    return (
        <div className={styles.tg}>
            <ReactTags 
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                handleTagClick={() => {}}
                inputFieldPosition="bottom"
                autocomplete
            />
        </div>
    );
}

export default TagsInput;