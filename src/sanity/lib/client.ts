import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

if (!projectId || !dataset) {
    console.error("Sanity configuration missing: projectId or dataset is undefined");
}

export const client = createClient({
    projectId: projectId || 'missing-id',
    dataset: dataset || 'production',
    apiVersion,
    useCdn,
    perspective: 'published',
})
