export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  type: 'Residential' | 'Commercial';
  active_projects: string[];
  total_projects_value: number;
  joined_date: string;
}

export const clients: Client[] = [
  {
    id: 'client-001',
    name: 'James & Patricia Anderson',
    email: 'j.anderson@email.com',
    phone: '(713) 555-0101',
    type: 'Residential',
    active_projects: ['proj-001'],
    total_projects_value: 2400000,
    joined_date: '2023-11-15'
  },
  {
    id: 'client-002',
    name: 'Memorial Properties LLC',
    email: 'development@memorialprops.com',
    phone: '(713) 555-0202',
    company: 'Memorial Properties LLC',
    type: 'Commercial',
    active_projects: ['proj-002'],
    total_projects_value: 8500000,
    joined_date: '2023-07-10'
  },
  {
    id: 'client-003',
    name: 'Robert & Lisa Chen',
    email: 'rchen@email.com',
    phone: '(713) 555-0303',
    type: 'Residential',
    active_projects: ['proj-003'],
    total_projects_value: 1850000,
    joined_date: '2024-01-20'
  },
  {
    id: 'client-004',
    name: 'Michael Williams',
    email: 'm.williams@email.com',
    phone: '(713) 555-0404',
    type: 'Residential',
    active_projects: ['proj-005'],
    total_projects_value: 185000,
    joined_date: '2024-04-15'
  },
  {
    id: 'client-005',
    name: 'David & Sarah Martinez',
    email: 'd.martinez@email.com',
    phone: '(713) 555-0505',
    type: 'Residential',
    active_projects: [],
    total_projects_value: 680000,
    joined_date: '2023-08-05'
  },
  {
    id: 'client-006',
    name: 'Jennifer Thompson',
    email: 'j.thompson@email.com',
    phone: '(713) 555-0606',
    type: 'Residential',
    active_projects: ['proj-009'],
    total_projects_value: 145000,
    joined_date: '2024-03-12'
  }
];

export const getClientById = (id: string) => {
  return clients.find(c => c.id === id);
};