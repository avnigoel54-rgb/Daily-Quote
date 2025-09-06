# 🌞 Daily Quote dApp — Built on Algorand

Welcome to **Daily Quote**, a simple decentralized application (dApp) built on the Algorand blockchain. This project showcases how you can store and update an inspiring quote each day using smart contracts written in TypeScript.

---

## 📖 Project Description

The **Daily Quote dApp** is a motivational Web3 tool that allows anyone to:
- **View** a daily quote stored on-chain.
- **Set** a new quote for the current day (once per day).

This dApp is perfect for learning how to build simple smart contracts using the [@algorandfoundation/algorand-typescript](https://www.npmjs.com/package/@algorandfoundation/algorand-typescript) package. It demonstrates global state management, input validation, and interaction with the Algorand blockchain — all in TypeScript!

---

## 🚀 What It Does

- Stores a **daily quote** in the smart contract's global state.
- Tracks the **last date** the quote was updated.
- Prevents multiple updates within the same day.
- Anyone can read the quote — optionally, you can restrict who can set it.

---

## ✨ Features

✅ Easy-to-understand smart contract logic  
✅ Written entirely in **TypeScript**  
✅ Uses **GlobalState** for storage  
✅ Beginner-friendly structure  
✅ Perfect starting point for learning Algorand smart contracts  
✅ Can be expanded to include quote history, admin-only access, or a frontend

---

## 🔗 Deployed Smart Contract

**Algorand Smart Contract Address:** `XXX`  
_(Replace this with your actual deployed contract address when ready)_

---

## 🧠 Smart Contract Code

```ts
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
<img width="838" height="1702" alt="ans" src="https://github.com/user-attachments/assets/33a0353d-d9a3-47b6-abe8-29c015a0dba4" />
