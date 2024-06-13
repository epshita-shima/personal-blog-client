import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateBlogPost = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [content,setContent]=useState([{title,value, makeBy:'shima',
      updateBy:'',
      makeDate:new Date(),
      updateDate:'',}])
    console.log(JSON.stringify(content))
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
      ];
    console.log(value)
    const module={
       toolbar: toolbarOptions
    }
    const handleEditorChange = (content) => {
        setValue(content);
      };
    const handleSubmit = async () => {
      setContent({title:title,value:value,category:'Algorithms', makeBy:'shima',
        updateBy:'',
        makeDate:new Date(),
        updateDate:'',})
      };
  return (
    <div className='w-11/12 mx-auto p-12'>
     <div>
        <div className='mb-2'>
            Create Blog
        </div>
     <div>
     <input
        type="text"
        placeholder="Post Title"
        value={title}
        className='border border-1 mb-2 p-6'
        onChange={(e) => setTitle(e.target.value)}
      />
     <ReactQuill modules={module} className='' theme="snow" value={value} onChange={handleEditorChange}  />
     <button className='btn bg-neutral-600 p-2 mt-4 text-white' onClick={handleSubmit}>Save Post</button>
     </div>
     </div>
    </div>
  )
}

export default CreateBlogPost
