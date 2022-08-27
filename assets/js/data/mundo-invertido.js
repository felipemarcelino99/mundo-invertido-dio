import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from './firebase.js'

export async function subscribeToMundoInvertido(subscribe) {
    const db = getFirestore(app) //Pegando o banco de dados
    const mundoInvertidoCollection = collection(db, 'mundo-invertido') //Pegando a collection do firebase
    const docRef = await addDoc(mundoInvertidoCollection, subscribe)
    return docRef.id
}
