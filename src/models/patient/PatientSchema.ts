import { Timestamp } from 'firebase/firestore'

interface iPrescription { 
    id: number
    medicine: string
    dosis: string
    period: string
}

interface iDiagnoses { 
    id: number
    date: Timestamp
    symptoms: string
    diagnosis: string
    prescription: iPrescription[]
}

export interface iPatient { 
    name: string
    email: string
    address: string
    social_number: number
    phone_number: number
    born_date: Timestamp
    gender: string
    active_status: boolean
    notes: string
    diagnoses?: iDiagnoses[]
}

export interface iOptionalPatient {
    name?: string
    email?: string
    address?: string
    social_number?: number
    phone_number?: number
    born_date?: Timestamp
    gender?: string
    active_status?: boolean
    notes: string
    diagnoses?: iDiagnoses[]
}