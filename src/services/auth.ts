// TODO: Replace with real authentication system

interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'admin';
  client_id?: string;
}

// Mock user database
const mockUsers: Record<string, { password: string; user: User }> = {
  'james@email.com': {
    password: 'demo123',
    user: {
      id: 'user-001',
      name: 'James Anderson',
      email: 'james@email.com',
      role: 'client',
      client_id: 'client-001'
    }
  },
  'admin@houinc.com': {
    password: 'admin123',
    user: {
      id: 'user-admin',
      name: 'Admin User',
      email: 'admin@houinc.com',
      role: 'admin'
    }
  }
};

let currentUser: User | null = null;

export const login = async (email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const userRecord = mockUsers[email];
  
  if (!userRecord) {
    return { success: false, error: 'Invalid email or password' };
  }

  if (userRecord.password !== password) {
    return { success: false, error: 'Invalid email or password' };
  }

  currentUser = userRecord.user;
  localStorage.setItem('user', JSON.stringify(currentUser));
  
  return { success: true, user: currentUser };
};

export const logout = () => {
  currentUser = null;
  localStorage.removeItem('user');
};

export const getCurrentUser = (): User | null => {
  if (currentUser) return currentUser;
  
  const stored = localStorage.getItem('user');
  if (stored) {
    currentUser = JSON.parse(stored);
    return currentUser;
  }
  
  return null;
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

export const isAdmin = (): boolean => {
  const user = getCurrentUser();
  return user?.role === 'admin';
};