export const colectIDsAndDocs = doc =>{
    return {id:doc.id, ...doc.data()};
}