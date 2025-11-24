// TODO: Replace with real API integration

import { projects, getProjectById } from '@/mock-data/projects';
import { clients, getClientById } from '@/mock-data/clients';

export const getProjects = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return projects;
};

export const getProject = async (id: string) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return getProjectById(id);
};

export const getClients = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return clients;
};

export const getClient = async (id: string) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return getClientById(id);
};

// Add getProjectsByClient export to auth.ts for portal dashboard
export { getProjectsByClient } from '@/mock-data/projects';