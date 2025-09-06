import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

export class DailyQuote extends Contract {
  // Global state to store the daily quote
  quote = GlobalState<string>({ key: "quote", initialValue: "Start your day with a smile!" });

  // Global state to store last updated date (e.g., "2025-09-06")
  lastUpdated = GlobalState<string>({ key: "lastUpdated", initialValue: "" });

  // Update the daily quote (for simplicity, anyone can update)
  setQuote(newQuote: string, today: string): string {
    
    return newQuote;
  }

  // Get the current quote
  getQuote(): string {
    return this.quote.value;
  }
}
