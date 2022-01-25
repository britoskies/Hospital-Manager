import { Timestamp } from 'firebase/firestore'

export interface iAppointments { 
    patient_id: number
    doctor_id: number
    date: Timestamp
    treatment: string
}