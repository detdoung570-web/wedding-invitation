export interface WeddingInfo {
  groomNameKhmer: string;
  brideNameKhmer: string;
  weddingDate: string; // ISO format
  displayDateEn: string;
  displayDateKh: string;
  dayNumber: string;
  monthYearEn: string;
  venueName: string;
  venueAddress: string;
  mapUrl: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  subcaption?: string;
  description?: string;
}

export interface GuestWish {
  id: string;
  name: string;
  message: string;
  relationship: string;
  date: string;
}
