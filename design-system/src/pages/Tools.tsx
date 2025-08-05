import { useState, useEffect, useRef, useCallback } from 'react';
import { PageHeader, AppLayout } from '@/components/layout';
import { DataTable } from '@/components/ui/data-table/data-table';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { IconButton } from '@/components/ui/button/icon-button';
import { Icon } from '@/components/ui/icon/icon';
import { Avatar } from '@/components/ui/avatar/avatar';
import { Combobox } from '@/components/ui/combobox/combobox';
import { toast } from 'sonner';
import { Sheet, SheetContent, SheetClose } from '@/components/ui/sheet/sheet';
import { DataList, DataListItem, DataListLabel, DataListValue } from '@/components/ui/data-list/data-list';

// Tool data type
export type ToolData = {
  id: string
  name: string
  category: string
  serialNumber: string
  manufacturer: string
  status: string
  location: string
  lastUpdated: string
  serviceDate?: string
  serviceInterval?: string
  assignedTo?: {
    type: 'person' | 'container' | 'vehicle';
    name: string;
    initials?: string;
  };
}

// Tool photo mapping
const toolPhotos: Record<string, string> = {
  'Rotary hammer': '/tools/ronix-2112-electric-drill-450w-keyed-10mm-0-3300rpm.jpg',
  'Hammer drill': '/tools/Cordless-Hammer-Drill.png',
  'Impact driver': '/tools/T7384.webp',
  'Hammer': '/tools/shopping.webp',
  'Wrench set': '/tools/shopping (1).webp',
  'Power mixer': '/tools/shopping (2).webp',
  'Hand saw': '/tools/shopping (3).webp',
  'Staple gun': '/tools/shopping (4).webp',
  'Screwdriver set': '/tools/shopping (5).webp',
  'Nail gun': '/tools/shopping (6).webp',
  'Circular saw': '/tools/shopping (7).webp',
  'Drill press': '/tools/shopping (8).webp',
  'Angle grinder': '/tools/R6957126-01.webp',
  'Jigsaw': '/tools/2979529_2bb2e9234213.jpg',
  'Sander': '/tools/shopping.webp',
  'Chisel set': '/tools/shopping (1).webp',
  'Pliers set': '/tools/shopping (2).webp',
  'Socket set': '/tools/shopping (3).webp',
  'Level': '/tools/shopping (4).webp',
  'Tape measure': '/tools/shopping (5).webp',
  'Cordless drill': '/tools/shopping (6).webp',
  'Table saw': '/tools/shopping (7).webp',
  'Router': '/tools/shopping (8).webp',
  'Planer': '/tools/R6957126-01.webp',
  'Belt sander': '/tools/2979529_2bb2e9234213.jpg',
  'Miter saw': '/tools/shopping.webp',
  'Air compressor': '/tools/shopping (1).webp',
  'Welding machine': '/tools/shopping (2).webp',
  'Generator': '/tools/shopping (3).webp',
  'Pressure washer': '/tools/shopping (4).webp',
  'Concrete mixer': '/tools/shopping (5).webp',
  'Scaffolding set': '/tools/shopping (6).webp',
  'Safety harness': '/tools/shopping (7).webp',
  'Hard hat': '/tools/shopping (8).webp',
  'Safety glasses': '/tools/R6957126-01.webp',
  'Work gloves': '/tools/2979529_2bb2e9234213.jpg',
  'Steel toe boots': '/tools/shopping.webp',
  'Ear protection': '/tools/shopping (1).webp',
  'Respirator': '/tools/shopping (2).webp',
  'Fire extinguisher': '/tools/shopping (3).webp',
}

// Helper function to calculate time ago
const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Created today';
  } else if (diffInDays === 1) {
    return 'Created 1 day ago';
  } else if (diffInDays < 30) {
    return `Created ${diffInDays} days ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return months === 1 ? 'Created 1 month ago' : `Created ${months} months ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return years === 1 ? 'Created 1 year ago' : `Created ${years} years ago`;
  }
};

// Helper function to get badge variant for category
const getCategoryBadgeVariant = (category: string) => {
  switch (category) {
    case "Power tools":
      return "greenIcon";
    case "Hand tools":
      return "yellowIcon";
    case "Fastening tools":
      return "redIcon";
    default:
      return "default";
  }
};

// Category options for tools with badge rendering
const categoryOptions = [
  { 
    value: "Power tools", 
    label: "Power tools",
    render: () => (
      <Badge variant={getCategoryBadgeVariant("Power tools")}>
        Power tools
      </Badge>
    )
  },
  { 
    value: "Hand tools", 
    label: "Hand tools",
    render: () => (
      <Badge variant={getCategoryBadgeVariant("Hand tools")}>
        Hand tools
      </Badge>
    )
  },
  { 
    value: "Fastening tools", 
    label: "Fastening tools",
    render: () => (
      <Badge variant={getCategoryBadgeVariant("Fastening tools")}>
        Fastening tools
      </Badge>
    )
  },
  { 
    value: "None", 
    label: "None",
    render: () => (
      <Badge variant={getCategoryBadgeVariant("None")}>
        None
      </Badge>
    )
  }
];

// Assignment options for tools
const assignmentOptions = [
  {
    type: 'person' as const,
    name: 'Kasper Andersen',
    initials: 'KA'
  },
  {
    type: 'person' as const,
    name: 'Sarah Johnson',
    initials: 'SJ'
  },
  {
    type: 'person' as const,
    name: 'Mike Chen',
    initials: 'MC'
  },
  {
    type: 'person' as const,
    name: 'Emma Wilson',
    initials: 'EW'
  },
  {
    type: 'person' as const,
    name: 'David Brown',
    initials: 'DB'
  },
  {
    type: 'person' as const,
    name: 'Lisa Garcia',
    initials: 'LG'
  },
  {
    type: 'person' as const,
    name: 'Tom Anderson',
    initials: 'TA'
  },
  {
    type: 'person' as const,
    name: 'Rachel Green',
    initials: 'RG'
  },
  {
    type: 'person' as const,
    name: 'Alex Thompson',
    initials: 'AT'
  },
  {
    type: 'person' as const,
    name: 'Maria Rodriguez',
    initials: 'MR'
  },
  {
    type: 'person' as const,
    name: 'James Wilson',
    initials: 'JW'
  },
  {
    type: 'person' as const,
    name: 'Sophie Chen',
    initials: 'SC'
  },
  {
    type: 'person' as const,
    name: 'Carlos Martinez',
    initials: 'CM'
  },
  {
    type: 'person' as const,
    name: 'Amanda Lee',
    initials: 'AL'
  },
  {
    type: 'person' as const,
    name: 'Robert Taylor',
    initials: 'RT'
  },
  {
    type: 'container' as const,
    name: 'Container in Strandlodsvej'
  },
  {
    type: 'container' as const,
    name: 'Workshop A'
  },
  {
    type: 'container' as const,
    name: 'Toolbox B'
  },
  {
    type: 'container' as const,
    name: 'Site Office'
  },
  {
    type: 'container' as const,
    name: 'Maintenance Shed'
  },
  {
    type: 'container' as const,
    name: 'Welding Station'
  },
  {
    type: 'container' as const,
    name: 'Construction Yard'
  },
  {
    type: 'container' as const,
    name: 'Safety Equipment'
  },
  {
    type: 'container' as const,
    name: 'PPE Storage'
  },
  {
    type: 'vehicle' as const,
    name: 'Mercedes A200'
  },
  {
    type: 'vehicle' as const,
    name: 'Ford Transit'
  },
  {
    type: 'vehicle' as const,
    name: 'Volkswagen Caddy'
  },
  {
    type: 'vehicle' as const,
    name: 'Toyota Hilux'
  },
  {
    type: 'vehicle' as const,
    name: 'Nissan Navara'
  },
  {
    type: 'vehicle' as const,
    name: 'Chevrolet Silverado'
  },
  {
    type: 'vehicle' as const,
    name: 'Ford F-150'
  },
  {
    type: 'vehicle' as const,
    name: 'Dodge Ram'
  },
  {
    type: 'vehicle' as const,
    name: 'GMC Sierra'
  }
];

// Dummy data for tools table
const dummyTools: ToolData[] = [
  {
    id: '1',
    name: 'Rotary hammer',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2024-12-27',
    serviceDate: '13-06-2024',
    serviceInterval: '365 days',
    assignedTo: {
      type: 'container',
      name: 'Container in Strandlodsvej'
    }
  },
  {
    id: '2',
    name: 'Hammer drill',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'In Use',
    location: 'Site B',
    lastUpdated: '2024-12-26',
    serviceDate: '13-06-2024',
    serviceInterval: '365 days',
    assignedTo: {
      type: 'person',
      name: 'Kasper Andersen',
      initials: 'KA'
    }
  },
  {
    id: '3',
    name: 'Impact driver',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2024-12-25',
    serviceDate: '13-06-2024',
    serviceInterval: '365 days',
    assignedTo: {
      type: 'person',
      name: 'Kasper Andersen',
      initials: 'KA'
    }
  },
  {
    id: '4',
    name: 'Hammer',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'In Use',
    location: 'Site C',
    lastUpdated: '2024-12-20',
    assignedTo: {
      type: 'vehicle',
      name: 'Mercedes A200'
    }
  },
  {
    id: '5',
    name: 'Wrench set',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Warehouse B',
    lastUpdated: '2024-12-15'
  },
  {
    id: '6',
    name: 'Power mixer',
    category: 'None',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2024-12-05',
    assignedTo: {
      type: 'person',
      name: 'Kasper Andersen',
      initials: 'KA'
    }
  },
  {
    id: '7',
    name: 'Hand saw',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'In Use',
    location: 'Site A',
    lastUpdated: '2024-11-15'
  },
  {
    id: '8',
    name: 'Staple gun',
    category: 'Fastening tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Warehouse B',
    lastUpdated: '2024-10-20',
    assignedTo: {
      type: 'person',
      name: 'Kasper Andersen',
      initials: 'KA'
    }
  },
  {
    id: '9',
    name: 'Screwdriver set',
    category: 'Fastening tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2024-09-10'
  },
  {
    id: '10',
    name: 'Nail gun',
    category: 'Fastening tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'In Use',
    location: 'Site B',
    lastUpdated: '2024-08-05',
    assignedTo: {
      type: 'person',
      name: 'Kasper Andersen',
      initials: 'KA'
    }
  },
  {
    id: '11',
    name: 'Circular saw',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Makita',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2024-06-20',
    assignedTo: {
      type: 'vehicle',
      name: 'Ford Transit'
    }
  },
  {
    id: '12',
    name: 'Drill press',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'DeWalt',
    status: 'In Use',
    location: 'Workshop A',
    lastUpdated: '2024-05-12',
    assignedTo: {
      type: 'container',
      name: 'Workshop A'
    }
  },
  {
    id: '13',
    name: 'Angle grinder',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Milwaukee',
    status: 'Available',
    location: 'Warehouse B',
    lastUpdated: '2024-03-15',
    assignedTo: {
      type: 'person',
      name: 'Sarah Johnson',
      initials: 'SJ'
    }
  },
  {
    id: '14',
    name: 'Jigsaw',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Ryobi',
    status: 'In Use',
    location: 'Site C',
    lastUpdated: '2024-02-28',
    assignedTo: {
      type: 'person',
      name: 'Mike Chen',
      initials: 'MC'
    }
  },
  {
    id: '15',
    name: 'Sander',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Black & Decker',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2024-01-18',
    assignedTo: {
      type: 'vehicle',
      name: 'Volkswagen Caddy'
    }
  },
  {
    id: '16',
    name: 'Chisel set',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Stanley',
    status: 'In Use',
    location: 'Site A',
    lastUpdated: '2023-12-31',
    assignedTo: {
      type: 'person',
      name: 'Emma Wilson',
      initials: 'EW'
    }
  },
  {
    id: '17',
    name: 'Pliers set',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Klein Tools',
    status: 'Available',
    location: 'Toolbox B',
    lastUpdated: '2023-12-30',
    assignedTo: {
      type: 'container',
      name: 'Toolbox B'
    }
  },
  {
    id: '18',
    name: 'Socket set',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Snap-on',
    status: 'Available',
    location: 'Workshop A',
    lastUpdated: '2023-12-29',
    assignedTo: {
      type: 'person',
      name: 'David Brown',
      initials: 'DB'
    }
  },
  {
    id: '19',
    name: 'Level',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Stabila',
    status: 'Available',
    location: 'Site A',
    lastUpdated: '2023-12-28',
    assignedTo: {
      type: 'vehicle',
      name: 'Toyota Hilux'
    }
  },
  {
    id: '20',
    name: 'Tape measure',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Stanley',
    status: 'In Use',
    location: 'Site B',
    lastUpdated: '2023-12-27',
    assignedTo: {
      type: 'person',
      name: 'Lisa Garcia',
      initials: 'LG'
    }
  },
  {
    id: '21',
    name: 'Cordless drill',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Bosch',
    status: 'Available',
    location: 'Site Office',
    lastUpdated: '2023-12-26',
    assignedTo: {
      type: 'container',
      name: 'Site Office'
    }
  },
  {
    id: '22',
    name: 'Table saw',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'SawStop',
    status: 'In Use',
    location: 'Workshop A',
    lastUpdated: '2023-12-25',
    assignedTo: {
      type: 'person',
      name: 'Tom Anderson',
      initials: 'TA'
    }
  },
  {
    id: '23',
    name: 'Router',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Porter-Cable',
    status: 'Available',
    location: 'Warehouse A',
    lastUpdated: '2023-12-24',
    assignedTo: {
      type: 'vehicle',
      name: 'Nissan Navara'
    }
  },
  {
    id: '24',
    name: 'Planer',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'DeWalt',
    status: 'In Use',
    location: 'Workshop B',
    lastUpdated: '2023-12-23',
    assignedTo: {
      type: 'person',
      name: 'Rachel Green',
      initials: 'RG'
    }
  },
  {
    id: '25',
    name: 'Belt sander',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Makita',
    status: 'Available',
    location: 'Maintenance Shed',
    lastUpdated: '2023-12-22',
    assignedTo: {
      type: 'container',
      name: 'Maintenance Shed'
    }
  },
  {
    id: '26',
    name: 'Miter saw',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'DeWalt',
    status: 'In Use',
    location: 'Site C',
    lastUpdated: '2023-12-21',
    assignedTo: {
      type: 'person',
      name: 'Alex Thompson',
      initials: 'AT'
    }
  },
  {
    id: '27',
    name: 'Air compressor',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Ingersoll Rand',
    status: 'Available',
    location: 'Workshop A',
    lastUpdated: '2023-12-20',
    assignedTo: {
      type: 'vehicle',
      name: 'Chevrolet Silverado'
    }
  },
  {
    id: '28',
    name: 'Welding machine',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Lincoln Electric',
    status: 'In Use',
    location: 'Welding Station',
    lastUpdated: '2023-12-19',
    assignedTo: {
      type: 'container',
      name: 'Welding Station'
    }
  },
  {
    id: '29',
    name: 'Generator',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Honda',
    status: 'Available',
    location: 'Site A',
    lastUpdated: '2023-12-18',
    assignedTo: {
      type: 'person',
      name: 'Maria Rodriguez',
      initials: 'MR'
    }
  },
  {
    id: '30',
    name: 'Pressure washer',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Karcher',
    status: 'In Use',
    location: 'Site B',
    lastUpdated: '2023-12-17',
    assignedTo: {
      type: 'vehicle',
      name: 'Ford F-150'
    }
  },
  {
    id: '31',
    name: 'Concrete mixer',
    category: 'Power tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Yanmar',
    status: 'Available',
    location: 'Construction Yard',
    lastUpdated: '2023-12-16',
    assignedTo: {
      type: 'container',
      name: 'Construction Yard'
    }
  },
  {
    id: '32',
    name: 'Scaffolding set',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Werner',
    status: 'In Use',
    location: 'Site C',
    lastUpdated: '2023-12-15',
    assignedTo: {
      type: 'person',
      name: 'James Wilson',
      initials: 'JW'
    }
  },
  {
    id: '33',
    name: 'Safety harness',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: '3M',
    status: 'Available',
    location: 'Safety Storage',
    lastUpdated: '2023-12-14',
    assignedTo: {
      type: 'vehicle',
      name: 'Dodge Ram'
    }
  },
  {
    id: '34',
    name: 'Hard hat',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'MSA',
    status: 'In Use',
    location: 'Site A',
    lastUpdated: '2023-12-13',
    assignedTo: {
      type: 'person',
      name: 'Sophie Chen',
      initials: 'SC'
    }
  },
  {
    id: '35',
    name: 'Safety glasses',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Uvex',
    status: 'Available',
    location: 'Safety Equipment',
    lastUpdated: '2023-12-12',
    assignedTo: {
      type: 'container',
      name: 'Safety Equipment'
    }
  },
  {
    id: '36',
    name: 'Work gloves',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Mechanix',
    status: 'In Use',
    location: 'Site B',
    lastUpdated: '2023-12-11',
    assignedTo: {
      type: 'person',
      name: 'Carlos Martinez',
      initials: 'CM'
    }
  },
  {
    id: '37',
    name: 'Steel toe boots',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Timberland',
    status: 'Available',
    location: 'PPE Storage',
    lastUpdated: '2023-12-10',
    assignedTo: {
      type: 'vehicle',
      name: 'GMC Sierra'
    }
  },
  {
    id: '38',
    name: 'Ear protection',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Howard Leight',
    status: 'In Use',
    location: 'Site C',
    lastUpdated: '2023-12-09',
    assignedTo: {
      type: 'person',
      name: 'Amanda Lee',
      initials: 'AL'
    }
  },
  {
    id: '39',
    name: 'Respirator',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: '3M',
    status: 'Available',
    location: 'PPE Storage',
    lastUpdated: '2023-12-08',
    assignedTo: {
      type: 'container',
      name: 'PPE Storage'
    }
  },
  {
    id: '40',
    name: 'Fire extinguisher',
    category: 'Hand tools',
    serialNumber: '23hf230m12084sx',
    manufacturer: 'Kidde',
    status: 'Available',
    location: 'Safety Station',
    lastUpdated: '2023-12-15',
    assignedTo: {
      type: 'person',
      name: 'Robert Taylor',
      initials: 'RT'
    }
  }
];

// Helper function to convert assignment options to combobox options
const getComboboxOptions = () => {
  return assignmentOptions.map((option, index) => ({
    value: `${option.type}-${index}`, // Unique identifier
    label: option.name,
    assignmentData: option, // Store the original data for easy access
    avatar: {
      initials: option.initials,
      icon: option.type === 'container' ? 'inventory_2' : 
            option.type === 'vehicle' ? 'directions_car' : 
            option.initials ? undefined : 'person',
      className: option.type === 'container' ? 'bg-yellow' :
                 option.type === 'vehicle' ? 'bg-green' : 'bg-brand'
    }
  }));
};

// Column definitions for tools table
const createColumns = (
  handleAssignTool: (toolId: string, assignment: typeof assignmentOptions[0]) => void,
  toolAssignments: Record<string, typeof assignmentOptions[0]>,
  handleCategoryChange: (toolId: string, category: string) => void,
  toolCategories: Record<string, string>
): ColumnDef<ToolData>[] => [
  {
    accessorKey: "name",
    header: "Name",
    size: 25,
    cell: ({ row }) => {
      const name = row.getValue("name") as string
      const photoPath = toolPhotos[name]
      
      return (
        <div className="flex items-center gap-3">
          <Avatar 
            size="md" 
            src={photoPath}
            alt={`${name} tool photo`}
          />
          <div className="font-medium">{name}</div>
        </div>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    size: 15,
    cell: ({ row }) => {
      const originalCategory = row.getValue("category") as string
      const storedCategory = toolCategories[row.original.id]
      
      // Use stored category if available, otherwise use original category
      const currentCategory = storedCategory || originalCategory
      
      const handleComboboxChange = (value: string) => {
        if (value) {
          handleCategoryChange(row.original.id, value);
        }
      };

      return (
        <div 
          className="w-full max-w-[160px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Combobox
            options={categoryOptions}
            value={currentCategory}
            onValueChange={handleComboboxChange}
            placeholder="Select category"
            searchPlaceholder="Search categories..."
            emptyMessage="No categories found."
            width="w-full"
            className="h-8 text-left"
            variant="ghost"
            content="badge"
                                        renderTrigger={() => (
                              <Badge variant={getCategoryBadgeVariant(currentCategory)}>
                                {currentCategory}
                              </Badge>
                            )}
          />
        </div>
      )
    },
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
    size: 20,
    cell: ({ row }) => {
      const assignedTo = row.getValue("assignedTo") as ToolData['assignedTo']
      const storedAssignment = toolAssignments[row.original.id]
      
      // Use stored assignment if available, otherwise use original assignedTo
      const currentAssignment = storedAssignment || assignedTo
      
      const comboboxOptions = getComboboxOptions();
      
      // Find the current value for the combobox
      const currentValue = currentAssignment 
        ? comboboxOptions.find(opt => 
            (opt.assignmentData as any).name === currentAssignment.name && 
            (opt.assignmentData as any).type === currentAssignment.type
          )?.value || ""
        : "";

      const handleComboboxChange = (value: string) => {
        if (value) {
          const selectedOption = comboboxOptions.find(opt => opt.value === value);
          if (selectedOption) {
            handleAssignTool(row.original.id, (selectedOption as any).assignmentData);
          }
        }
      };

      return (
        <div 
          className="w-full max-w-[200px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Combobox
            options={comboboxOptions}
            value={currentValue}
            onValueChange={handleComboboxChange}
            placeholder="Assign tool"
            searchPlaceholder="Search assignees..."
            emptyMessage="No assignees found."
            width="w-full"
            className="h-8 text-left"
            variant="ghost"
            content="avatar"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "manufacturer",
    header: "Manufacturer",
    size: 12,
    cell: ({ row }) => <div className="text-secondary">{row.getValue("manufacturer")}</div>,
  },
  {
    accessorKey: "serialNumber",
    header: "Serial Number",
    size: 18,
    cell: ({ row }) => <div className="text-sm">{row.getValue("serialNumber")}</div>,
  },
]

export default function ToolsPage() {

  const [toolAssignments, setToolAssignments] = useState<Record<string, typeof assignmentOptions[0]>>({});
  const [toolCategories, setToolCategories] = useState<Record<string, string>>({});
  const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredTools, setFilteredTools] = useState<ToolData[]>(dummyTools);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  // Refs for debouncing
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const filterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to simulate filtering data
  const simulateDataFiltering = useCallback((query: string, filters: string[]) => {
    let filtered = [...dummyTools];
    
    // Apply search filter
    if (query) {
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
        tool.serialNumber.toLowerCase().includes(query.toLowerCase()) ||
        tool.location.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Apply category filters
    if (filters.length > 0) {
      filtered = filtered.filter(tool => filters.includes(tool.category));
    }
    
    return filtered;
  }, []);

  // Debounced search function
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    
    // Clear existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Set loading state
    setIsLoading(true);
    
    // Simulate API call delay
    searchTimeoutRef.current = setTimeout(() => {
      const filtered = simulateDataFiltering(query, selectedFilters);
      setFilteredTools(filtered);
      setIsLoading(false);
    }, 600); // 600ms delay to simulate API call
  }, [selectedFilters, simulateDataFiltering]);

  // Debounced filter function
  const handleFilter = useCallback((filters: string[]) => {
    setSelectedFilters(filters);
    
    // Clear existing timeout
    if (filterTimeoutRef.current) {
      clearTimeout(filterTimeoutRef.current);
    }
    
    // Set loading state
    setIsLoading(true);
    
    // Simulate API call delay
    filterTimeoutRef.current = setTimeout(() => {
      const filtered = simulateDataFiltering(searchQuery, filters);
      setFilteredTools(filtered);
      setIsLoading(false);
    }, 400); // 400ms delay to simulate API call
  }, [searchQuery, simulateDataFiltering]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      if (filterTimeoutRef.current) {
        clearTimeout(filterTimeoutRef.current);
      }
    };
  }, []);

  const actions = [
    <div key="assign" className="contents">
      {/* Mobile: Icon button */}
      <div className="sm:hidden">
        <IconButton
          variant="outline"
          size="sm"
          icon="compare_arrows"
          aria-label="Assign tools"
          onClick={() => console.log('Assign tools clicked')}
        />
      </div>
      {/* Desktop: Button with label */}
      <div className="hidden sm:block">
        <Button
          variant="outline"
          size="sm"
          iconLeft="compare_arrows"
          onClick={() => console.log('Assign tools clicked')}
        >
          Assign tools
        </Button>
      </div>
    </div>,
    <div key="add" className="contents">
      {/* Mobile: Icon button */}
      <div className="sm:hidden">
        <IconButton
          variant="primary"
          size="sm"
          icon="add"
          aria-label="Add tool"
          onClick={() => console.log('Add tool clicked')}
        />
      </div>
      {/* Desktop: Button with label */}
      <div className="hidden sm:block">
        <Button
          variant="primary"
          size="sm"
          iconLeft="add"
          onClick={() => console.log('Add tool clicked')}
        >
          Add tool
        </Button>
      </div>
    </div>
  ];

  // Note: filteredTools is now managed by state and loading simulation

  const handleAssignTool = (toolId: string, assignment: typeof assignmentOptions[0]) => {
    console.log('Assign tool:', toolId, 'to:', assignment);
    setToolAssignments(prev => ({
      ...prev,
      [toolId]: assignment
    }));
    
    // Show success toast
    toast.success('Tool Assigned', {
      description: `${assignment.name} has been assigned to the tool.`
    });
  };

  const handleCategoryChange = (toolId: string, category: string) => {
    console.log('Change category for tool:', toolId, 'to:', category);
    setToolCategories(prev => ({
      ...prev,
      [toolId]: category
    }));
    
    // Show success toast
    toast.success('Category Updated', {
      description: `Tool category has been changed to ${category}.`
    });
  };

  const handleDeleteTool = (toolId: string) => {
    console.log('Delete tool:', toolId);
    // In a real app, you would make an API call here
    // For now, we'll just show a toast and simulate the deletion
    
    // Show success toast
    toast.success('Tool Deleted', {
      description: 'The tool has been successfully deleted.'
    });
  };

  const handleRowClick = (tool: ToolData) => {
    setSelectedTool(tool);
    setSheetOpen(true);
  };



  // Mobile card renderer for tools
  const renderMobileToolCard = (tool: ToolData) => {
    const currentAssignment = toolAssignments[tool.id] || tool.assignedTo;
    const currentCategory = toolCategories[tool.id] || tool.category;
    const photoPath = toolPhotos[tool.name];
    
    return (
      <div className="p-4 space-y-4">
        {/* Top row: Tool info with image */}
        <div className="flex items-center gap-3">
          <Avatar 
            size="md" 
            src={photoPath}
            alt={`${tool.name} tool photo`}
          />
          <div className="space-y-1 flex-1 min-w-0 pt-1">
            <h3 className="ui-sm-semibold text-primary">{tool.name}</h3>
            <p className="body-sm-regular text-secondary">{getTimeAgo(tool.lastUpdated)}</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-weak -mx-4"></div>
        
        {/* Data List - horizontal items */}
        <div className="space-y-3">
          {/* Manufacturer */}
          <div className="flex items-center h-6">
            <span className="label-3xs-medium text-secondary w-1/2">Manufacturer</span>
            <span className="body-sm-regular text-primary w-1/2">{tool.manufacturer}</span>
          </div>
          
          {/* Serial Number */}
          <div className="flex items-center h-6">
            <span className="label-3xs-medium text-secondary w-1/2">Serial number</span>
            <span className="body-sm-regular text-primary w-1/2">{tool.serialNumber}</span>
          </div>
          
          {/* Assigned to */}
          <div className="flex items-center h-6">
            <span className="label-3xs-medium text-secondary w-1/2">Assigned to</span>
            <div className="w-1/2">
              {currentAssignment ? (
                <div className="flex items-center gap-2">
                  <Avatar 
                    size="xs" 
                    initials={currentAssignment.initials}
                    icon={currentAssignment.type === 'container' ? 'inventory_2' : 
                          currentAssignment.type === 'vehicle' ? 'directions_car' : 
                          currentAssignment.initials ? undefined : 'person'}
                    className={currentAssignment.type === 'container' ? 'bg-yellow' :
                              currentAssignment.type === 'vehicle' ? 'bg-green' : 'bg-brand'}
                  />
                  <span className="body-sm-regular text-primary truncate">{currentAssignment.name}</span>
                </div>
              ) : (
                <span className="body-sm-regular text-tertiary">Unassigned</span>
              )}
            </div>
          </div>
          
          {/* Category */}
          <div className="flex items-center h-6">
            <span className="label-3xs-medium text-secondary w-1/2">Category</span>
            <div className="w-1/2">
              <Badge variant={getCategoryBadgeVariant(currentCategory)}>
                {currentCategory}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AppLayout>
      <div className="w-full bg-[var(--background-page)] flex flex-col">
      <PageHeader
        title="Tools"
        badgeCount={48}
        actions={actions}
      />
      
      {/* Tools Table */}
        <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full">
            <DataTable
              columns={createColumns(handleAssignTool, toolAssignments, handleCategoryChange, toolCategories)}
              data={filteredTools}
              searchKey="name"
              searchPlaceholder="Search tools..."
              showBulkActions={true}
              showRowActions={true}
              onRowClick={handleRowClick}
              onRowAction={{
                onView: (tool) => {
                  setSelectedTool(tool);
                  setSheetOpen(true);
                },
                onEdit: (tool) => {
                  console.log("Edit tool:", tool);
                  // In a real app, you would open an edit modal or navigate to edit page
                },
                onDelete: (tool) => {
                  handleDeleteTool(tool.id);
                }
              }}
              filterKey="category"
              filterOptions={[
                { value: "Power tools", label: "Power tools" },
                { value: "Hand tools", label: "Hand tools" },
                { value: "Fastening tools", label: "Fastening tools" },
                { value: "None", label: "None" }
              ]}
              bulkActions={
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" iconLeft="archive">
                    Archive
                  </Button>
                  <Button variant="outline" size="sm" iconLeft="delete">
                    Delete
                  </Button>
                </div>
              }
              mobileCardRenderer={renderMobileToolCard}
              mobileBreakpoint={768}
              isLoading={isLoading}
              onSearchChange={handleSearch}
              onFilterChange={handleFilter}
              searchValue={searchQuery}
              filterValue={selectedFilters}
            />
            </div>
        </div>
      </div>

      {/* Tool Details Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="p-0 flex flex-col h-full w-full sm:w-[600px]">
          {/* Header with Edit, Delete, and Dismiss buttons */}
          <div className="bg-flat flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-weak flex-shrink-0">
            <div className="flex gap-2">
              {/* Mobile: Icon buttons, Desktop: Text buttons */}
              <div className="sm:hidden flex gap-2">
                <IconButton variant="outline" size="sm" icon="edit" aria-label="Edit tool" />
                <IconButton variant="outline" size="sm" icon="delete" aria-label="Delete tool" />
              </div>
              <div className="hidden sm:flex gap-2">
                <Button variant="outline" size="sm" iconLeft="edit">
                  Edit
                </Button>
                <Button variant="outline" size="sm" iconLeft="delete">
                  Delete
                </Button>
              </div>
            </div>
            <SheetClose asChild>
              <IconButton
                variant="outline"
                size="sm"
                icon="close"
                aria-label="Close sheet"
              />
            </SheetClose>
          </div>
          
          {selectedTool && (
            <div className="flex flex-col flex-1 overflow-y-auto">
              {/* Tool Information Section */}
              <div className="p-4 sm:p-6 border-b border-weak">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <Avatar 
                    size="lg" 
                    src={toolPhotos[selectedTool.name]}
                    alt={`${selectedTool.name} tool photo`}
                    className="bg-brand"
                  />
                  <div>
                    <h2 className="ui-base-semibold text-primary">{selectedTool.name}</h2>
                    <p className="body-sm-regular text-secondary">{getTimeAgo(selectedTool.lastUpdated)}</p>
                  </div>
                </div>

                {/* Tool Information using DataList */}
                <DataList orientation="vertical" className="gap-4">
                  <DataListItem className="gap-2">
                    <DataListLabel>Category</DataListLabel>
                    <DataListValue>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-[#325246]"></div>
                        <span className="body-sm-regular">{selectedTool.category}</span>
                      </div>
                    </DataListValue>
                  </DataListItem>
                  <DataListItem className="gap-2">
                    <DataListLabel>Manufacturer</DataListLabel>
                    <DataListValue>{selectedTool.manufacturer}</DataListValue>
                  </DataListItem>
                  <DataListItem className="gap-2">
                    <DataListLabel>Serial number</DataListLabel>
                    <DataListValue>
                      <div className="flex items-center gap-2">
                        <span className="body-sm-regular">{selectedTool.serialNumber}</span>
                        <IconButton variant="outline" size="xs" icon="content_copy" />
                      </div>
                    </DataListValue>
                  </DataListItem>
                  <DataListItem className="gap-2">
                    <DataListLabel>Service date</DataListLabel>
                    <DataListValue>
                      <div className="flex items-center gap-1">
                        <Icon className="text-secondary">calendar_today</Icon>
                        <span className="body-sm-regular">{selectedTool.serviceDate || '13-06-2024'}</span>
                      </div>
                    </DataListValue>
                  </DataListItem>
                  <DataListItem className="gap-2">
                    <DataListLabel>Service interval</DataListLabel>
                    <DataListValue>
                      <div className="flex items-center gap-1">
                        <Icon className="text-secondary">refresh</Icon>
                        <span className="body-sm-regular">{selectedTool.serviceInterval || '365 days'}</span>
                      </div>
                    </DataListValue>
                  </DataListItem>
                  <DataListItem className="gap-2">
                    <DataListLabel>Assigned to</DataListLabel>
                    <DataListValue>
                      {(() => {
                        const currentAssignment = toolAssignments[selectedTool.id] || selectedTool.assignedTo;
                        if (!currentAssignment) {
                          return (
                            <div className="flex items-center gap-2">
                              <IconButton
                                variant="outline"
                                size="xs"
                                icon="add"
                              />
                              <span className="text-tertiary text-sm font-normal">
                                Assign tool
                              </span>
                            </div>
                          );
                        }

                        let avatarIcon: string | undefined;
                        let avatarBgColor = 'bg-brand';

                        switch (currentAssignment.type) {
                          case 'person':
                            avatarIcon = currentAssignment.initials ? undefined : 'person';
                            break;
                          case 'container':
                            avatarIcon = 'inventory_2';
                            avatarBgColor = 'bg-yellow';
                            break;
                          case 'vehicle':
                            avatarIcon = 'directions_car';
                            avatarBgColor = 'bg-green';
                            break;
                          default:
                            avatarIcon = 'help';
                        }

                        return (
                          <div className="flex items-center gap-3">
                            <Avatar 
                              size="xs" 
                              initials={currentAssignment.initials}
                              icon={avatarIcon}
                              className={avatarBgColor}
                            />
                            <span className="body-sm-regular">{currentAssignment.name}</span>
                          </div>
                        );
                      })()}
                    </DataListValue>
                  </DataListItem>
                </DataList>
              </div>

              {/* History Section */}
              <div className="p-4 sm:p-6 border-b border-weak">
                <div className="flex items-center mb-4">
                  <h3 className="ui-base-semibold">History</h3>
                </div>
                                  <div className="bg-flat rounded-md p-2 space-y-2">
                    <div className="bg-white rounded-2xs p-3 flex items-start gap-2 border border-weak">
                      <Icon className="text-secondary mt-0.5">history</Icon>
                      <div className="flex-1">
                        <p className="body-sm-regular">Kasper Andersen</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="body-sm-regular text-secondary">13-06-2024</span>
                          <Icon className="text-secondary">arrow_forward</Icon>
                          <Badge variant="green">In use</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xs p-3 flex items-start gap-2 border border-weak">
                      <Icon className="text-secondary mt-0.5">history</Icon>
                      <div className="flex-1">
                        <p className="body-sm-regular">Kasper Andersen</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="body-sm-regular text-secondary">13-06-2024</span>
                          <Icon className="text-secondary">arrow_forward</Icon>
                          <span className="body-sm-regular text-secondary">13-06-2024</span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="p-4 sm:p-6 border-b border-weak">
                <div className="flex items-center mb-4">
                  <h3 className="ui-base-semibold">Documents</h3>
                </div>
                <div className="bg-flat rounded-md p-2">
                  <div className="bg-white rounded-2xs p-3 flex items-center gap-2 border border-weak">
                    <Icon className="text-secondary">file_copy</Icon>
                    <span className="body-sm-regular flex-1">bosch_.docx</span>
                    <IconButton variant="outline" size="xs" icon="download" />
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="ui-base-semibold">QR code</h3>
                  <Button variant="outline" size="sm" iconLeft="download">
                    Download
                  </Button>
                </div>
                <div className="bg-flat rounded-2xs p-8 flex justify-center">
                  <img 
                    src="/qr-code.png" 
                    alt="QR Code" 
                    className="w-32 h-32 border border-weak rounded-2xs"
                  />
        </div>
      </div>
    </div>
          )}
        </SheetContent>
      </Sheet>
    </AppLayout>
  );
} 