// models/trade.model.ts
export interface Trade {
    tradeId: number;
    totalprice?: string;
    bookingName?: string;
    bookingDate: Date;
    travelDetail?: string;
  }
  