export interface Project {
  id: string;
  name: string;
  type: 'Residential' | 'Commercial';
  location: string;
  size: string;
  estimated_budget: number;
  start_date: string;
  end_date: string;
  status: 'Planning' | 'In Progress' | 'Completed' | 'On Hold';
  feature_image: string;
  tags: string[];
  summary: string;
  completion_percentage: number;
  project_manager: {
    name: string;
    email: string;
    phone: string;
  };
  milestones: {
    id: string;
    title: string;
    date: string;
    status: 'completed' | 'in-progress' | 'upcoming';
    description: string;
  }[];
  photos: string[];
  client_id?: string;
}

export const projects: Project[] = [
  {
    id: 'proj-001',
    name: 'River Oaks Estate Renovation',
    type: 'Residential',
    location: 'River Oaks, Houston, TX',
    size: '8,500 sq ft',
    estimated_budget: 2400000,
    start_date: '2024-01-15',
    end_date: '2024-12-20',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
    tags: ['Luxury', 'Full Renovation', 'Smart Home'],
    summary: 'Complete renovation of a historic River Oaks estate featuring modern amenities while preserving architectural heritage.',
    completion_percentage: 65,
    project_manager: {
      name: 'Michael Rodriguez',
      email: 'm.rodriguez@houinc.com',
      phone: '(281) 915-9596'
    },
    milestones: [
      { id: 'm1', title: 'Design Approval', date: '2024-01-30', status: 'completed', description: 'Final design plans approved by client' },
      { id: 'm2', title: 'Permits Secured', date: '2024-02-20', status: 'completed', description: 'All building permits obtained' },
      { id: 'm3', title: 'Structural Work', date: '2024-06-15', status: 'completed', description: 'Foundation and structural modifications completed' },
      { id: 'm4', title: 'MEP Installation', date: '2024-09-10', status: 'in-progress', description: 'Mechanical, electrical, plumbing systems' },
      { id: 'm5', title: 'Interior Finishes', date: '2024-11-15', status: 'upcoming', description: 'Custom millwork and finishes' },
      { id: 'm6', title: 'Final Walkthrough', date: '2024-12-20', status: 'upcoming', description: 'Client inspection and handover' }
    ],
    photos: [],
    client_id: 'client-001'
  },
  {
    id: 'proj-002',
    name: 'Memorial Office Tower',
    type: 'Commercial',
    location: 'Memorial City, Houston, TX',
    size: '45,000 sq ft',
    estimated_budget: 8500000,
    start_date: '2023-08-01',
    end_date: '2024-10-15',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    tags: ['Office', 'New Build', 'LEED Certified'],
    summary: 'Six-story Class A office building with sustainable design features and modern workspace solutions.',
    completion_percentage: 78,
    project_manager: {
      name: 'Sarah Chen',
      email: 's.chen@houinc.com',
      phone: '(281) 915-9597'
    },
    milestones: [
      { id: 'm1', title: 'Site Preparation', date: '2023-09-01', status: 'completed', description: 'Excavation and foundation work' },
      { id: 'm2', title: 'Structural Frame', date: '2024-02-15', status: 'completed', description: 'Steel frame erected' },
      { id: 'm3', title: 'Building Envelope', date: '2024-05-30', status: 'completed', description: 'Exterior walls and windows installed' },
      { id: 'm4', title: 'Interior Build-out', date: '2024-08-20', status: 'in-progress', description: 'Interior walls, HVAC, electrical' },
      { id: 'm5', title: 'Tenant Improvements', date: '2024-09-30', status: 'upcoming', description: 'Custom tenant spaces' },
      { id: 'm6', title: 'Certificate of Occupancy', date: '2024-10-15', status: 'upcoming', description: 'Final inspections and CO' }
    ],
    photos: [],
    client_id: 'client-002'
  },
  {
    id: 'proj-003',
    name: 'West University Custom Home',
    type: 'Residential',
    location: 'West University, Houston, TX',
    size: '5,200 sq ft',
    estimated_budget: 1850000,
    start_date: '2024-03-01',
    end_date: '2025-02-28',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    tags: ['New Build', 'Modern', 'Energy Efficient'],
    summary: 'Contemporary new construction with clean lines, open floor plan, and cutting-edge sustainable systems.',
    completion_percentage: 42,
    project_manager: {
      name: 'David Thompson',
      email: 'd.thompson@houinc.com',
      phone: '(281) 915-9598'
    },
    milestones: [
      { id: 'm1', title: 'Foundation Complete', date: '2024-04-15', status: 'completed', description: 'Slab and foundation systems' },
      { id: 'm2', title: 'Framing Complete', date: '2024-06-30', status: 'completed', description: 'Structural framing and roof' },
      { id: 'm3', title: 'Rough-in Inspections', date: '2024-08-15', status: 'in-progress', description: 'Plumbing, electrical, HVAC rough-in' },
      { id: 'm4', title: 'Drywall & Paint', date: '2024-10-30', status: 'upcoming', description: 'Interior finishes begin' },
      { id: 'm5', title: 'Cabinetry & Fixtures', date: '2024-12-20', status: 'upcoming', description: 'Custom millwork installation' },
      { id: 'm6', title: 'Final Completion', date: '2025-02-28', status: 'upcoming', description: 'Landscaping and final punch list' }
    ],
    photos: [],
    client_id: 'client-003'
  },
  {
    id: 'proj-004',
    name: 'Heights Retail Center',
    type: 'Commercial',
    location: 'Houston Heights, Houston, TX',
    size: '22,000 sq ft',
    estimated_budget: 4200000,
    start_date: '2023-11-01',
    end_date: '2024-09-30',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
    tags: ['Retail', 'Mixed-Use', 'Historic District'],
    summary: 'Adaptive reuse of historic building into modern retail and dining space while maintaining neighborhood character.',
    completion_percentage: 85,
    project_manager: {
      name: 'Jessica Martinez',
      email: 'j.martinez@houinc.com',
      phone: '(281) 915-9599'
    },
    milestones: [
      { id: 'm1', title: 'Structural Assessment', date: '2023-12-01', status: 'completed', description: 'Historical building evaluation' },
      { id: 'm2', title: 'Code Upgrades', date: '2024-03-15', status: 'completed', description: 'Seismic and fire safety upgrades' },
      { id: 'm3', title: 'Storefront Installation', date: '2024-06-30', status: 'completed', description: 'New retail fronts and entrances' },
      { id: 'm4', title: 'Tenant Fit-outs', date: '2024-08-20', status: 'in-progress', description: 'Individual retail spaces' },
      { id: 'm5', title: 'Parking & Landscaping', date: '2024-09-15', status: 'upcoming', description: 'Site improvements' },
      { id: 'm6', title: 'Grand Opening', date: '2024-09-30', status: 'upcoming', description: 'Tenant move-in ready' }
    ],
    photos: []
  },
  {
    id: 'proj-005',
    name: 'Tanglewood Kitchen Remodel',
    type: 'Residential',
    location: 'Tanglewood, Houston, TX',
    size: '850 sq ft',
    estimated_budget: 185000,
    start_date: '2024-06-01',
    end_date: '2024-10-15',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=1200&h=800&fit=crop',
    tags: ['Kitchen', 'Interior', 'Luxury Finishes'],
    summary: 'High-end kitchen transformation with custom cabinetry, premium appliances, and designer finishes.',
    completion_percentage: 55,
    project_manager: {
      name: 'Michael Rodriguez',
      email: 'm.rodriguez@houinc.com',
      phone: '(281) 915-9596'
    },
    milestones: [
      { id: 'm1', title: 'Demolition', date: '2024-06-10', status: 'completed', description: 'Existing kitchen removal' },
      { id: 'm2', title: 'Plumbing & Electrical', date: '2024-07-05', status: 'completed', description: 'Updated systems' },
      { id: 'm3', title: 'Cabinet Installation', date: '2024-08-20', status: 'in-progress', description: 'Custom cabinetry' },
      { id: 'm4', title: 'Countertops & Backsplash', date: '2024-09-15', status: 'upcoming', description: 'Stone surfaces installed' },
      { id: 'm5', title: 'Appliances & Fixtures', date: '2024-10-05', status: 'upcoming', description: 'Final installations' },
      { id: 'm6', title: 'Final Inspection', date: '2024-10-15', status: 'upcoming', description: 'Project completion' }
    ],
    photos: [],
    client_id: 'client-004'
  },
  {
    id: 'proj-006',
    name: 'Medical Plaza Build-out',
    type: 'Commercial',
    location: 'Texas Medical Center, Houston, TX',
    size: '15,000 sq ft',
    estimated_budget: 3200000,
    start_date: '2024-04-01',
    end_date: '2024-11-30',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
    tags: ['Medical', 'Interior', 'Code Compliance'],
    summary: 'Medical office tenant improvement with specialized infrastructure for diagnostic and treatment facilities.',
    completion_percentage: 48,
    project_manager: {
      name: 'Sarah Chen',
      email: 's.chen@houinc.com',
      phone: '(281) 915-9597'
    },
    milestones: [
      { id: 'm1', title: 'Space Planning', date: '2024-04-20', status: 'completed', description: 'Medical equipment layout approved' },
      { id: 'm2', title: 'Demolition & Rough-in', date: '2024-06-15', status: 'completed', description: 'Core and shell work' },
      { id: 'm3', title: 'MEP Systems', date: '2024-08-10', status: 'in-progress', description: 'Medical-grade systems' },
      { id: 'm4', title: 'Medical Equipment', date: '2024-10-05', status: 'upcoming', description: 'Specialized installations' },
      { id: 'm5', title: 'Finishes & Fixtures', date: '2024-11-10', status: 'upcoming', description: 'Healthcare-rated materials' },
      { id: 'm6', title: 'Occupancy Permit', date: '2024-11-30', status: 'upcoming', description: 'Final health inspections' }
    ],
    photos: []
  },
  {
    id: 'proj-007',
    name: 'Bellaire Luxury Addition',
    type: 'Residential',
    location: 'Bellaire, Houston, TX',
    size: '2,400 sq ft addition',
    estimated_budget: 680000,
    start_date: '2023-09-01',
    end_date: '2024-06-30',
    status: 'Completed',
    feature_image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
    tags: ['Addition', 'Master Suite', 'Outdoor Living'],
    summary: 'Two-story addition featuring master suite, home office, and covered outdoor entertaining space.',
    completion_percentage: 100,
    project_manager: {
      name: 'David Thompson',
      email: 'd.thompson@houinc.com',
      phone: '(281) 915-9598'
    },
    milestones: [
      { id: 'm1', title: 'Foundation', date: '2023-10-15', status: 'completed', description: 'New foundation poured' },
      { id: 'm2', title: 'Framing', date: '2023-12-20', status: 'completed', description: 'Addition framed and roofed' },
      { id: 'm3', title: 'MEP & Drywall', date: '2024-03-15', status: 'completed', description: 'Systems and interior walls' },
      { id: 'm4', title: 'Finishes', date: '2024-05-30', status: 'completed', description: 'Flooring, paint, trim' },
      { id: 'm5', title: 'Outdoor Spaces', date: '2024-06-20', status: 'completed', description: 'Patio and landscaping' },
      { id: 'm6', title: 'Project Complete', date: '2024-06-30', status: 'completed', description: 'Final walkthrough approved' }
    ],
    photos: [],
    client_id: 'client-005'
  },
  {
    id: 'proj-008',
    name: 'Warehouse Conversion',
    type: 'Commercial',
    location: 'EaDo, Houston, TX',
    size: '35,000 sq ft',
    estimated_budget: 5800000,
    start_date: '2024-01-15',
    end_date: '2025-03-31',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    tags: ['Adaptive Reuse', 'Office', 'Creative Space'],
    summary: 'Historic warehouse transformed into modern creative office space with exposed structural elements.',
    completion_percentage: 38,
    project_manager: {
      name: 'Jessica Martinez',
      email: 'j.martinez@houinc.com',
      phone: '(281) 915-9599'
    },
    milestones: [
      { id: 'm1', title: 'Structural Evaluation', date: '2024-02-10', status: 'completed', description: 'Engineering assessment' },
      { id: 'm2', title: 'Environmental Remediation', date: '2024-04-20', status: 'completed', description: 'Asbestos and lead abatement' },
      { id: 'm3', title: 'New Systems', date: '2024-08-30', status: 'in-progress', description: 'Modern HVAC and electrical' },
      { id: 'm4', title: 'Floor Plates', date: '2024-11-15', status: 'upcoming', description: 'Open office layouts' },
      { id: 'm5', title: 'Amenity Spaces', date: '2025-01-30', status: 'upcoming', description: 'Cafe, fitness, collaboration areas' },
      { id: 'm6', title: 'Tenant Ready', date: '2025-03-31', status: 'upcoming', description: 'Building occupancy' }
    ],
    photos: []
  },
  {
    id: 'proj-009',
    name: 'Southampton Exterior Refresh',
    type: 'Residential',
    location: 'Southampton, Houston, TX',
    size: '4,800 sq ft',
    estimated_budget: 145000,
    start_date: '2024-05-01',
    end_date: '2024-08-30',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
    tags: ['Exterior', 'Siding', 'Paint'],
    summary: 'Complete exterior renovation including new siding, windows, roofing, and landscape design.',
    completion_percentage: 70,
    project_manager: {
      name: 'Michael Rodriguez',
      email: 'm.rodriguez@houinc.com',
      phone: '(281) 915-9596'
    },
    milestones: [
      { id: 'm1', title: 'Roof Replacement', date: '2024-05-25', status: 'completed', description: 'New architectural shingles' },
      { id: 'm2', title: 'Siding Installation', date: '2024-06-30', status: 'completed', description: 'James Hardie fiber cement' },
      { id: 'm3', title: 'Window Upgrades', date: '2024-07-20', status: 'in-progress', description: 'Energy-efficient windows' },
      { id: 'm4', title: 'Exterior Paint', date: '2024-08-10', status: 'upcoming', description: 'Premium paint system' },
      { id: 'm5', title: 'Landscape Design', date: '2024-08-25', status: 'upcoming', description: 'New plantings and hardscape' },
      { id: 'm6', title: 'Final Details', date: '2024-08-30', status: 'upcoming', description: 'Gutters, lighting, cleanup' }
    ],
    photos: [],
    client_id: 'client-006'
  },
  {
    id: 'proj-010',
    name: 'Galleria Hospitality Renovation',
    type: 'Commercial',
    location: 'Galleria Area, Houston, TX',
    size: '85,000 sq ft',
    estimated_budget: 12500000,
    start_date: '2023-06-01',
    end_date: '2024-12-31',
    status: 'In Progress',
    feature_image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop',
    tags: ['Hotel', 'Renovation', 'Luxury'],
    summary: 'Full renovation of boutique hotel including guest rooms, lobby, restaurant, and event spaces.',
    completion_percentage: 62,
    project_manager: {
      name: 'Sarah Chen',
      email: 's.chen@houinc.com',
      phone: '(281) 915-9597'
    },
    milestones: [
      { id: 'm1', title: 'Phase 1: Guestrooms', date: '2024-02-28', status: 'completed', description: 'Floors 2-5 renovated' },
      { id: 'm2', title: 'Phase 2: Guestrooms', date: '2024-06-30', status: 'completed', description: 'Floors 6-9 renovated' },
      { id: 'm3', title: 'Public Spaces', date: '2024-09-30', status: 'in-progress', description: 'Lobby and restaurant' },
      { id: 'm4', title: 'Event Spaces', date: '2024-11-15', status: 'upcoming', description: 'Ballroom and meeting rooms' },
      { id: 'm5', title: 'Amenities', date: '2024-12-10', status: 'upcoming', description: 'Fitness center and pool' },
      { id: 'm6', title: 'Grand Reopening', date: '2024-12-31', status: 'upcoming', description: 'Hotel fully operational' }
    ],
    photos: []
  }
];

// Helper functions for filtering and sorting
export const getProjectsByType = (type: 'Residential' | 'Commercial') => {
  return projects.filter(p => p.type === type);
};

export const getProjectsByStatus = (status: Project['status']) => {
  return projects.filter(p => p.status === status);
};

export const getProjectsByClient = (clientId: string) => {
  return projects.filter(p => p.client_id === clientId);
};

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};