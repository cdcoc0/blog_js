import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import WriteActionButtons from '../components/write/WriteActionButtons';

const WritePage = () => {
    return (
        <>
            <Responsive>카테고리</Responsive>
            <Editor />
            <Responsive>
                <TagBox />
                <WriteActionButtons />
            </Responsive>
        </>
    );
};

export default WritePage;