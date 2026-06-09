// ── SOI Aviation — Mock Data ──────────────────────────────────────────────────

export const overviewKPIs = {
  revenue:     { value: 4_820_400, delta: +12.4, label: 'Revenue YTD',          unit: '$' },
  margin:      { value: 28.6,      delta: +1.8,  label: 'Gross Margin',          unit: '%' },
  cash:        { value: 1_243_000, delta: -3.1,  label: 'Cash on Hand',          unit: '$' },
  openRFQs:    { value: 47,        delta: +6,    label: 'Open RFQs',             unit: ''  },
  openSOs:     { value: 31,        delta: -2,    label: 'Open Sales Orders',     unit: ''  },
  openPOs:     { value: 22,        delta: +4,    label: 'Open Purchase Orders',  unit: ''  },
  outstanding: { value: 612_800,   delta: +8.2,  label: 'Outstanding Payments',  unit: '$' },
}

export const revenueByMonth = [
  { month: 'Jan', revenue: 310000, margin: 24.1 },
  { month: 'Feb', revenue: 420000, margin: 25.8 },
  { month: 'Mar', revenue: 388000, margin: 26.2 },
  { month: 'Apr', revenue: 510000, margin: 27.0 },
  { month: 'May', revenue: 475000, margin: 27.5 },
  { month: 'Jun', revenue: 620000, margin: 28.6 },
  { month: 'Jul', revenue: 580000, margin: 29.1 },
  { month: 'Aug', revenue: 645000, margin: 28.9 },
  { month: 'Sep', revenue: 590000, margin: 29.4 },
  { month: 'Oct', revenue: 682000, margin: 30.1 },
]

export const pipelineByStage = [
  { stage: 'RFQ',    count: 47, value: 2_840_000 },
  { stage: 'Quote',  count: 28, value: 1_920_000 },
  { stage: 'SO',     count: 31, value: 1_140_000 },
  { stage: 'PO',     count: 22, value: 780_000   },
  { stage: 'Ship',   count: 14, value: 410_000   },
  { stage: 'Invoice',count: 19, value: 612_800   },
]

export const rfqs = [
  { id: 'RFQ-2406-001', customer: 'Royal Saudi Air Force', parts: 'F-15 Inlet Lip Skin Assy', qty: 4,  received: '2024-06-01', due: '2024-06-14', priority: 'High',   status: 'In Review',  value: 184000 },
  { id: 'RFQ-2406-002', customer: 'UAE Air Force',         parts: 'APG-63 Radar LRU',          qty: 2,  received: '2024-06-03', due: '2024-06-17', priority: 'Medium', status: 'Quoted',     value: 96500  },
  { id: 'RFQ-2406-003', customer: 'Pakistan Air Force',    parts: 'J-85 Combustion Liner',     qty: 12, received: '2024-06-05', due: '2024-06-19', priority: 'Low',    status: 'In Review',  value: 42000  },
  { id: 'RFQ-2406-004', customer: 'Hellenic Air Force',    parts: 'F-16 MLG Strut Assembly',   qty: 1,  received: '2024-06-06', due: '2024-06-20', priority: 'High',   status: 'Sourcing',   value: 310000 },
  { id: 'RFQ-2406-005', customer: 'Royal Thai Air Force',  parts: 'F-5 Aileron Actuator',      qty: 6,  received: '2024-06-07', due: '2024-06-21', priority: 'Medium', status: 'New',        value: 58800  },
  { id: 'RFQ-2406-006', customer: 'Turkish Air Force',     parts: 'T700 Turbine Blade Set',    qty: 8,  received: '2024-06-08', due: '2024-06-22', priority: 'High',   status: 'Quoted',     value: 127400 },
  { id: 'RFQ-2406-007', customer: 'Royal Bahrain AF',      parts: 'AIM-120 Fin Assembly',      qty: 24, received: '2024-06-09', due: '2024-06-23', priority: 'Low',    status: 'In Review',  value: 76200  },
  { id: 'RFQ-2406-008', customer: 'South Korean AF',       parts: 'F-35 Avionics Bay Door',    qty: 2,  received: '2024-06-10', due: '2024-06-24', priority: 'High',   status: 'New',        value: 220000 },
]

export const salesOrders = [
  { id: 'SO-2406-014', customer: 'Royal Saudi Air Force', po: 'RSAF-24-8801', value: 184000, ordered: '2024-06-05', required: '2024-07-01', status: 'In Process',  shipped: 0 },
  { id: 'SO-2406-015', customer: 'UAE Air Force',         po: 'UAEAF-0412',  value: 96500,  ordered: '2024-06-06', required: '2024-06-28', status: 'Picking',     shipped: 0 },
  { id: 'SO-2406-016', customer: 'Hellenic Air Force',    po: 'HAF-2024-331',value: 310000, ordered: '2024-06-07', required: '2024-07-15', status: 'Awaiting PO', shipped: 0 },
  { id: 'SO-2406-017', customer: 'Turkish Air Force',     po: 'TURAF-8124',  value: 127400, ordered: '2024-06-08', required: '2024-07-05', status: 'Ready Ship',  shipped: 0 },
  { id: 'SO-2406-018', customer: 'Pakistan Air Force',    po: 'PAF-24-0092', value: 42000,  ordered: '2024-05-28', required: '2024-06-20', status: 'Shipped',     shipped: 1 },
  { id: 'SO-2405-041', customer: 'South Korean AF',       po: 'ROKAF-55120', value: 220000, ordered: '2024-05-15', required: '2024-06-30', status: 'In Process',  shipped: 0 },
]

export const purchaseOrders = [
  { id: 'PO-2406-088', vendor: 'CAS Aerospace',   part: 'F-15 Inlet Lip Skin',   qty: 4,  cost: 148000, issued: '2024-06-05', eta: '2024-06-25', status: 'Confirmed'  },
  { id: 'PO-2406-089', vendor: 'NanoTech Systems', part: 'APG-63 Radar LRU',      qty: 2,  cost: 76000,  issued: '2024-06-06', eta: '2024-06-28', status: 'In Transit' },
  { id: 'PO-2406-090', vendor: 'RedSun Parts',     part: 'T700 Turbine Blade Set',qty: 8,  cost: 98000,  issued: '2024-06-07', eta: '2024-07-02', status: 'Confirmed'  },
  { id: 'PO-2406-091', vendor: 'CAS Aerospace',    part: 'F-16 MLG Strut Assy',   qty: 1,  cost: 245000, issued: '2024-06-08', eta: '2024-07-10', status: 'Pending'    },
  { id: 'PO-2406-092', vendor: 'NanoTech Systems', part: 'J-85 Combustion Liner', qty: 12, cost: 33600,  issued: '2024-06-09', eta: '2024-06-30', status: 'Received'   },
  { id: 'PO-2406-093', vendor: 'RedSun Parts',     part: 'F-5 Aileron Actuator',  qty: 6,  cost: 46900,  issued: '2024-06-10', eta: '2024-07-05', status: 'Confirmed'  },
]

export const shipments = [
  { id: 'SHP-2406-022', so: 'SO-2406-015', customer: 'UAE Air Force',       awb: '176-48821042', carrier: 'FedEx', dispatched: '2024-06-11', eta: '2024-06-14', status: 'In Transit' },
  { id: 'SHP-2406-023', so: 'SO-2405-041', customer: 'South Korean AF',     awb: 'KE-3392-8841', carrier: 'Korean Air Cargo', dispatched: '2024-06-10', eta: '2024-06-13', status: 'Delivered'  },
  { id: 'SHP-2406-024', so: 'SO-2406-018', customer: 'Pakistan Air Force',  awb: '235-19002411', carrier: 'Emirates SkyCargo', dispatched: '2024-06-09', eta: '2024-06-12', status: 'Delivered'  },
  { id: 'SHP-2406-025', so: 'SO-2406-017', customer: 'Turkish Air Force',   awb: 'Pending',      carrier: 'TBC',   dispatched: null,           eta: '2024-06-18', status: 'Ready'     },
]

export const payments = [
  { id: 'PAY-2406-031', customer: 'UAE Air Force',        invoice: 'INV-2406-019', amount: 96500,  due: '2024-06-28', status: 'Pending',   method: 'Wire' },
  { id: 'PAY-2406-032', customer: 'Pakistan Air Force',   invoice: 'INV-2406-018', amount: 42000,  due: '2024-06-20', status: 'Overdue',   method: 'Wire' },
  { id: 'PAY-2406-033', customer: 'South Korean AF',      invoice: 'INV-2405-041', amount: 220000, due: '2024-07-15', status: 'Pending',   method: 'SWIFT' },
  { id: 'PAY-2406-034', customer: 'Royal Saudi Air Force',invoice: 'INV-2406-014', amount: 184000, due: '2024-07-01', status: 'Pending',   method: 'Wire' },
  { id: 'PAY-2405-028', customer: 'Hellenic Air Force',   invoice: 'INV-2405-039', amount: 70300,  due: '2024-06-10', status: 'Received',  method: 'SWIFT' },
]

export const companies = {
  SOI: {
    name: 'SOI Aviation',
    role: 'Prime Distributor',
    country: 'USA',
    revenue: 4_820_400,
    openRFQs: 47,
    openSOs: 31,
    openPOs: 22,
    contacts: ['Greg Gaba — CEO', 'Nyssa Gaba'],
    description: 'Prime defense aviation parts distributor supplying government air forces across EMEA and Asia-Pacific. Specialises in F-15, F-16, F-35, and legacy platform sustainment.',
    monthlyRevenue: [280000, 390000, 355000, 480000, 440000, 580000, 545000, 610000, 555000, 640000],
  },
  CAS: {
    name: 'CAS Aerospace',
    role: 'Preferred Supplier',
    country: 'New Zealand',
    spend: 1_240_000,
    openPOs: 8,
    onTime: '94%',
    contacts: ['insert contacts here'],
    description: 'Certified OEM-authorized distributor of structural airframe components for Boeing and Lockheed platforms. Holds FAA Repair Station Certificate.',
    monthlyRevenue: [95000, 110000, 88000, 124000, 105000, 140000, 133000, 145000, 128000, 152000],
  },
  NanoTech: {
    name: 'NanoTech',
    role: 'Preferred Supplier',
    country: 'UK',
    spend: 680_000,
    openPOs: 6,
    onTime: '88%',
    contacts: ['insert contacts here'],
    description: 'Avionics and radar system specialist supplying LRUs and avionic sub-assemblies for APG-series radar systems. AS9100D certified.',
    monthlyRevenue: [48000, 62000, 55000, 74000, 68000, 82000, 77000, 91000, 84000, 96000],
  },
  RedSun: {
    name: 'RedSun Aviation',
    role: 'Approved Supplier',
    country: 'Singapore',
    spend: 390_000,
    openPOs: 8,
    onTime: '81%',
    contacts: ['insert contacts here'],
    description: 'Regional parts broker and distributor serving Middle East air forces. Specialises in engine components and consumables for J-series and T-series turbines.',
    monthlyRevenue: [28000, 35000, 30000, 42000, 38000, 48000, 45000, 52000, 48000, 58000],
  },
}

export const decisionQueue = [
  { id: 'DQ-001', type: 'Quote Approval',    subject: 'RFQ-2406-004 — HAF F-16 MLG Strut', urgency: 'High',   assignee: 'Maria Delacroix', due: '2024-06-13', value: 310000 },
  { id: 'DQ-002', type: 'Vendor Selection',  subject: 'J-85 Combustion Liner — 3 bids in', urgency: 'Medium', assignee: 'Tariq Rahman',   due: '2024-06-14', value: 33600  },
  { id: 'DQ-003', type: 'Payment Approval',  subject: 'CAS Aerospace Invoice #CA-8841',     urgency: 'High',   assignee: 'Maria Delacroix', due: '2024-06-12', value: 148000 },
  { id: 'DQ-004', type: 'Shipping Release',  subject: 'SO-2406-017 — TURAF T700 Blades',   urgency: 'High',   assignee: 'Tariq Rahman',   due: '2024-06-13', value: 127400 },
  { id: 'DQ-005', type: 'Contract Review',   subject: 'ROKAF Frame Agreement Renewal',      urgency: 'Low',    assignee: 'James Harrington', due: '2024-06-20', value: 0     },
  { id: 'DQ-006', type: 'Quote Approval',    subject: 'RFQ-2406-008 — ROKAF F-35 Door',    urgency: 'Medium', assignee: 'Maria Delacroix', due: '2024-06-16', value: 220000 },
]

export const projects = [
  { id: 'PRJ-001', name: 'RSAF F-15 Sustainment Contract', phase: 'Execution', progress: 62, owner: 'James Harrington', deadline: '2024-09-30', budget: 2_400_000, spent: 1_488_000 },
  { id: 'PRJ-002', name: 'ROKAF F-35 Parts Pipeline Setup', phase: 'Planning',   progress: 28, owner: 'Tariq Rahman',    deadline: '2024-12-01', budget: 800_000,   spent: 224_000   },
  { id: 'PRJ-003', name: 'NanoTech Supplier Qualification', phase: 'Review',     progress: 85, owner: 'Maria Delacroix', deadline: '2024-06-30', budget: 120_000,   spent: 102_000   },
  { id: 'PRJ-004', name: 'ERP Integration — Pentagon 2000', phase: 'Execution', progress: 44, owner: 'Tariq Rahman',    deadline: '2024-10-15', budget: 350_000,   spent: 154_000   },
]

export const people = [
  {
    name: 'Alexis Snyder',
    title: 'Global Chief of Staff',
    dept: 'Executive',
    company: 'SOI',
    email: 'alexis@soiaviation.com',
    active: true
  },
  {
    name: 'Ramin Akhavi',
    title: 'Global Operations Manager',
    dept: 'Operations',
    company: 'SOI',
    email: 'ramin@soiaviation.com',
    active: true
  },
  {
    name: 'Shreya Maddhali',
    title: 'Global IT Systems Manager',
    dept: 'IT',
    company: 'SOI',
    email: 'shreya@soiaviation.com',
    active: true
  },
  {
    name: 'Melissa Hokama',
    title: 'SOI Executive Assistant',
    dept: 'Executive',
    company: 'SOI',
    email: 'melissa@soiaviation.com',
    active: true
  },
  {
    name: 'Floreska Angeles',
    title: 'SOI Procurement Manager',
    dept: 'Operations',
    company: 'SOI',
    email: 'floreska@soiaviation.com',
    active: true
  },
  {
    name: 'Dina Alipio',
    title: 'SOI Purchasing Manager',
    dept: 'Operations',
    company: 'SOI',
    email: 'dina@soiaviation.com',
    active: true
  },
  {
    name: 'Cameron Branch',
    title: 'SOI Procurement Specialist',
    dept: 'Operations',
    company: 'SOI',
    email: 'cameron@soiaviation.com',
    active: true
  },
  {
    name: 'Mark Morente',
    title: 'SOI Accounting Lead',
    dept: 'Finance',
    company: 'SOI',
    email: 'mark@soiaviation.com',
    active: true
  },
  {
    name: 'Cody Calderon',
    title: 'SOI Warehouse Lead',
    dept: 'Operations',
    company: 'SOI',
    email: 'cody@soiaviation.com',
    active: true
  }, 
    {
    name: 'Keaw Kosalanan',
    title: 'N/A',
    dept: 'N/A',
    company: 'CAS',
    email: 'keaw@customaero.co.nz',
    active: true
  },
    {
    name: 'Ting Pan',
    title: 'N/A',
    dept: 'N/A',
    company: 'CAS',
    email: 'ting@customaero.co.nz',
    active: true
  },
    {
    name: 'Amy Nguyen',
    title: 'N/A',
    dept: 'N/A',
    company: 'CAS',
    email: 'amy@customaero.co.nz',
    active: true
  },
    {
    name: 'Yukine Okada',
    title: 'N/A',
    dept: 'N/A',
    company: 'CAS',
    email: 'yukine@customaero.co.nz',
    active: true
  }
]

export const calendarEvents = [
  { date: '2024-06-12', title: 'HAF Quote Review Call',       type: 'Meeting',   time: '09:00',  with: 'Hellenic Air Force' },
  { date: '2024-06-12', title: 'CAS Payment Approval',        type: 'Deadline',  time: '17:00',  with: 'Maria Delacroix'   },
  { date: '2024-06-13', title: 'TURAF Shipping Release',      type: 'Deadline',  time: '12:00',  with: 'Tariq Rahman'      },
  { date: '2024-06-14', title: 'Vendor Bid Review — J-85',    type: 'Meeting',   time: '14:00',  with: 'Tariq Rahman'      },
  { date: '2024-06-16', title: 'ROKAF F-35 Quote Deadline',   type: 'Deadline',  time: '17:00',  with: 'Maria Delacroix'   },
  { date: '2024-06-17', title: 'UAE Air Force — Delivery Conf',type: 'Meeting',  time: '11:00',  with: 'Yuki Tanaka'       },
  { date: '2024-06-20', title: 'ROKAF Frame Agreement Review',type: 'Meeting',   time: '10:00',  with: 'James Harrington'  },
  { date: '2024-06-20', title: 'PAF Payment Due',             type: 'Deadline',  time: '17:00',  with: 'Finance'           },
  { date: '2024-06-25', title: 'CAS PO-2406-088 ETA',         type: 'Delivery',  time: 'All day',with: 'CAS Aerospace'     },
  { date: '2024-06-28', title: 'UAE Invoice Due',             type: 'Deadline',  time: '17:00',  with: 'Finance'           },
  { date: '2024-06-30', title: 'NanoTech Qualification Review',type: 'Meeting',  time: '13:00',  with: 'Maria Delacroix'   },
]
