import axios from 'axios';

const strapiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
  }
});

export async function getContent(contentType: string) {
  try {
    // Add query parameter to populate all related fields
    const response = await strapiClient.get(`/${contentType}?populate=*`);
    
    // Strapi v4 returns data in a nested structure
    return response.data.data?.attributes || null;
  } catch (error) {
    console.error('Error fetching content from Strapi:', error);
    return null;
  }
}