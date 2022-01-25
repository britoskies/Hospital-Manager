import app from "../../services/firebase/firebase";
import { iPatient, iOptionalPatient } from "./PatientSchema";
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import {
    getFirestore,
    collection,
    query,
    DocumentData,
    doc,
    deleteDoc,
    addDoc,
    updateDoc
} from "firebase/firestore";



const Patients = {

    db: getFirestore(app),
        
    findAll() { 
        return useCollection<DocumentData | iPatient>(
            query(collection(this.db, 'patients'))
        );
    },

    findById(patientId: string) { 
        return useDocument<DocumentData | iPatient>(
            doc(this.db, 'patients', patientId)
        );
    },

    async deleteById(patientId: string) {
        await deleteDoc(doc(this.db, 'patients', patientId));
    },

    async updateById(patientId: string, data: Object|iOptionalPatient) { 
        await updateDoc(doc(this.db, 'patients', patientId), data);
    },

    async create(data: Object | iPatient) { 

        function instanceOfPatient(object: any): object is iPatient {
            return (
                'name' in object &&
                'email' in object &&
                'address' in object &&
                'social_number' in object &&
                'phone_number' in object &&
                'born_date' in object &&
                'gender' in object &&
                'active_status' in object &&
                'diagnoses' in object
            );
        }

        if (!instanceOfPatient(data)) {
            alert("Cannot leave empty fields");
            return;
        }
        
        await addDoc(collection(this.db, 'patients'), data);
    }
}

export default Patients;