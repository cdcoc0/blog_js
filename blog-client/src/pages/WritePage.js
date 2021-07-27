import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';

const WritePage = () => {
    return (
        <>
            <Responsive>카테고리</Responsive>
            <Editor />
            <Responsive>
                <TagBox />
            </Responsive>
        </>
    );
};

export default WritePage;