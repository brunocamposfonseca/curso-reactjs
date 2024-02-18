import styles from "./Form.module.css";
import { categories } from "../Category"
import { useState } from "react";

function Form() {
    const RemoveAcentos = (frase) => {
        return frase
            .normalize('NFD')
            .replace(/[, ]+/g, '-')
            .replace(/--+/g, '-')
            .trim()
            .toLowerCase();
    }

    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ videos, setVideos ] = useState([])
    const [ errors, setErrors ] = useState('')

    const valideUrl = (url) => {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=|youtu\.be\/)[a-zA-Z0-9\-_]+)$/
        if(!regex.test(url) || url.length < 43){
            setErrors('ERRO: URL inválida') 
            return false
        } else {
            return url.substring(32, 43)
        }
    }

    const onSave = (e) => {
        e.preventDefault()

        const urlVideo = valideUrl(url)
        if(urlVideo && category){
            const newVideo = { url, category }
            setVideos([...videos, newVideo]);
            localStorage.setItem('Video', JSON.stringify([...videos, newVideo]))

            setCategory('');
            setUrl('');
        } else {
            setErrors('ERRO: URL inválida!')
            return
        }

        if(!category || category === '-'){ 
            setErrors('ERRO: Escolha uma categoria!')
            return
        } else{
            setErrors('')
        }
    }

    return(
        <selection className={styles.container}>
            <h2>Cadastro de video</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>Video URL</label>
                    <input 
                        text="text"
                        placeholder="Enter the URL of the video"
                        required={true}
                        value={url}
                        onChange={event => setUrl(event.target.value)}
                        minLength="43"
                        maxLength="43"
                    />

                    <label>Categories</label>
                    <select
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                        required={true}
                    >
                        <option value="-">Selection the categorie</option>
                        { categories.map((item) => {
                            return(
                                <option value={RemoveAcentos(item)}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </selection>
    )
}

export default Form;