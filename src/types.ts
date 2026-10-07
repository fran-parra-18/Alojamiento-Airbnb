export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  /** YYYY-MM-DD */
  date: string;
  rating: number;
}

export interface ReservationRequest {
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  notes: string;
}
