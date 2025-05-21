import axios from 'axios';

const strapiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
  }
});

export async function getContent(contentType: string) {
  try {
    const response = await strapiClient.get(`/api/${contentType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching content from Strapi:', error);
    return null;
  }
}