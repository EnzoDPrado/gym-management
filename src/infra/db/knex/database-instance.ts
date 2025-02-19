import knex, { Knex } from "knex";  
import { knexConfig } from "./knex-config";

class Database {
  private static instance: Knex | null = null;

  private constructor() {}

  public static getInstance(): Knex {
    if (!Database.instance) {
      Database.instance = knex(knexConfig); 
      console.log("📦 Nova conexão com o banco de dados criada.");
    }
    return Database.instance;
  }
}

const db = Database.getInstance();

export default db;
