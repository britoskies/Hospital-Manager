import app from "../../services/firebase/firebase";
import { iAppointments } from "./ApptSchema";
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


const Appointments = {

    db: getFirestore(app),

    findAll() {
        return useCollection<DocumentData | iAppointments>(
            query(collection(this.db, 'appointments'))
        );
    },

    findById(apptId: string) {
        return useDocument<DocumentData | iAppointments>(
            doc(this.db, 'appointments', apptId)
        );
    },

    async deleteById(apptId: string) {
        await deleteDoc(doc(this.db, 'appointments', apptId));
    },

    async updateById(apptId: string, data: Object | iAppointments) {
        await updateDoc(doc(this.db, 'appointments', apptId), data);
    },

    async create(data: Object | iAppointments) {

        function instanceOfPatient(object: any): object is iAppointments {
            return (
                'patient_id' in object &&
                'doctor_id' in object &&
                'date' in object &&
                'treatment' in object
            );
        }

        if (!instanceOfPatient(data)) {
            alert("Cannot leave empty fields");
            return;
        }

        await addDoc(collection(this.db, 'appointments'), data);
    }
}

export default Appointments;