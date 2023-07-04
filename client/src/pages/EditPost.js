import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate, useParams } from 'react-router-dom'

function EditPost() {
 const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false)

   useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  });
    
    async function UpdatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id)

        if (files?.[0]) {
            data.set('file', files?.[0])
        }

        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to={ '/post/'+ id} />
    }
  return (
   <div className='flex justify-center items-center'>   
          <form
              className="flex flex-col w-[800px] my-10"
              onSubmit={UpdatePost}>
               <input type="title"
                  placeholder={'Title'}
            className='bg-slate-700 my-1 text-white p-2'
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
            className='bg-slate-700 my-1 text-white p-2'     
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
              <ReactQuill value={content}
                  className='my-2'
                    onChange={setContent}
                />
        <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
              <button className="font-bold my-2 bg-neutral-950 text-white p-2 text-xl"
                  type='submit'>Update Post</button>
      </form>
      </div>
  )
}
export default EditPost