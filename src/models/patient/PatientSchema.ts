import { Timestamp } from 'firebase/firestore'

interface iPhysicalCondition { 
    date: Timestamp
    blood_pressure: string
    sugar_level: string
    cholesterol: string
}

export interface iPatient { 
    name: string
    email: string
    address: string
    social_number: string
    phone_number: string
    born_date: Timestamp
    gender: string
    active_status: boolean
    notes: string
    physical_condition?: iPhysicalCondition[]
}

export interface iOptionalPatient {
    name?: string
    email?: string
    address?: string
    social_number?: string
    phone_number?: string
    born_date?: Timestamp
    gender?: string
    active_status?: boolean
    notes?: string
    physical_condition?: iPhysicalCondition[]
}