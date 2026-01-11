import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: 'ly0w7068', // <--- Replace with your ID
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: false, // Set to false for fresh data, true for faster caching
})