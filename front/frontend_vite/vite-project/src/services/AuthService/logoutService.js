import { API_URL } from '../config';
import { getToken } from './tokenRetrievalService';
import { delUser } from './tokenRetrievalService';

export async function logoutService() {
  const token = getToken();

  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('No se pudo cerrar la sesión');
    }

    return true;

  } finally {
    delUser()
  }
}