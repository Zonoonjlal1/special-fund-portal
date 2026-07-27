export type Language = 'ar' | 'en';

export type SectorId = 
  | 'banking'
  | 'insurance'
  | 'transport'
  | 'mining'
  | 'energy'
  | 'real_estate'
  | 'petrochemicals'
  | 'commerce'
  | 'tourism'
  | 'industrial'
  | 'agricultural'
  | 'engineering'
  | 'services';

export interface SectorInfo {
  id: SectorId;
  nameAr: string;
  nameEn: string;
  iconName: string;
  descriptionAr: string;
  descriptionEn: string;
  count: number;
}

export interface Company {
  id: string;
  nameAr: string;
  nameEn: string;
  sectorId: SectorId;
  sectorNameAr: string;
  sectorNameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  websiteUrl?: string;
  isFeatured?: boolean;
  establishedYear?: string;
  ownershipTypeAr: string;
  ownershipTypeEn: string;
  highlightsAr?: string[];
  highlightsEn?: string[];
}

export interface MandatePillar {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: string;
}

export type PageView = 'home' | 'portfolio' | 'about' | 'partnerships' | 'contact';
