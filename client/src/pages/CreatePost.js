import { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom'


function CreatePost() {
      const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('')
    const [content, setConentet] = useState('')
    const [files, setFile] = useState('')
    const [redirect, setRedirect] = useState(false);
    
    
    async function createNewPost(e) { 
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);

        e.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include'
        });
        if (response.ok) {
            setRedirect(true)
        }
    }
    
    if (redirect) {
    return <Navigate to={'/'} />
}
  return (
      <div className='flex justify-center items-center'>
            <form className="flex flex-col w-[800px] my-10" onSubmit={createNewPost}>
                <input type="title"
                    placeholder={'Título'}
                    className='bg-slate-700 my-1 text-white p-2'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input type="summry"
                    placeholder='Sumário'
                    className='bg-slate-700 my-1 text-white p-2'
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                />
                <input type="file"
                    onChange={e => setFile(e.target.files)}
                />
              <ReactQuill className='my-2'
                    value={content}
                    onChange={newValue => setConentet(newValue)}
                />
          <button className="font-bold bg-neutral-950 text-white p-2 text-xl">Criar Post</button>
      </form>
          
    </div>
  )
}
export default CreatePost