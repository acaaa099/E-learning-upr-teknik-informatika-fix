const API_URL =
  'http://localhost:3000/auth';

// ======================
// REGISTER
// ======================

export async function registerUser(
  name,
  email,
  password
) {

  const response = await fetch(
    `${API_URL}/register`,
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/json'
      },

      body: JSON.stringify({
        name,
        email,
        password
      })
    }
  );

  return response.json();
}

// ======================
// LOGIN
// ======================

export async function loginUser(
  email,
  password
) {

  const response = await fetch(
    `${API_URL}/login`,
    {
      method: 'POST',

      headers: {
        'Content-Type':
          'application/json'
      },

      body: JSON.stringify({
        email,
        password
      })
    }
  );

  return response.json();
}

// ======================
// TOKEN
// ======================

export function saveToken(token) {

  localStorage.setItem(
    'token',
    token
  );

}

export function getToken() {

  return localStorage.getItem(
    'token'
  );

}

export function logout() {

  localStorage.removeItem(
    'token'
  );

  location.reload();

}