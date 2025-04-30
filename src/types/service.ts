
export interface ServiceType {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  priceRange: string;
  timeframe: string;
  includedFeatures?: string[];
  recommendedFor?: string[];
}
