import { useState, useEffect } from 'react'
import { Usuario } from './Usuario';
import { projectFirestore as db } from '../firebase/config';

export const Container = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        db.collection('usuarios')
        .onSnapshot(snap => {
            const documents = [];
            snap.forEach(doc => {
                documents.push({ id: doc.id, ...doc.data() })
            });
            setUsuarios(documents);
        })
    }, [usuarios])
  return (
    <div>
        {
        usuarios.map((usuario) => (
            <Usuario key={usuario.id} usuario={usuario} />
        ))
        }
    </div>
  )
}