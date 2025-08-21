import { supabaseService } from './supabase-helpers';
import React from 'react';
import { 
  User, Client, Package, AddOn, Project, TeamMember, Transaction, Card, 
  FinancialPocket, TeamProjectPayment, TeamPaymentRecord, Lead, RewardLedgerEntry,
  Asset, ClientFeedback, Contract, Notification, SocialMediaPost, PromoCode, SOP, Profile
} from '../types';

// Sync functions that handle both local state and database updates
// Accept a generic service type to avoid circular typeof reference in types
export const createSyncedSetters = (supabaseService: any) => {
  return {
    // Users
    createUser: async (user: Omit<User, 'id'>, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
      const newUser = await supabaseService.createUser(user);
      setUsers(prev => [...prev, newUser]);
      return newUser;
    },

    updateUser: async (id: string, updates: Partial<User>, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
      const updatedUser = await supabaseService.updateUser(id, updates);
      setUsers(prev => prev.map(u => u.id === id ? updatedUser : u));
      return updatedUser;
    },

    deleteUser: async (id: string, setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
      await supabaseService.deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
    },

    // Clients
    createClient: async (client: Omit<Client, 'id'>, setClients: React.Dispatch<React.SetStateAction<Client[]>>) => {
      const newClient = await supabaseService.createClient(client);
      setClients(prev => [newClient, ...prev]);
      return newClient;
    },

    updateClient: async (id: string, updates: Partial<Client>, setClients: React.Dispatch<React.SetStateAction<Client[]>>) => {
      const updatedClient = await supabaseService.updateClient(id, updates);
      setClients(prev => prev.map(c => c.id === id ? updatedClient : c));
      return updatedClient;
    },

    deleteClient: async (id: string, setClients: React.Dispatch<React.SetStateAction<Client[]>>) => {
      await supabaseService.deleteClient(id);
      setClients(prev => prev.filter(c => c.id !== id));
    },

    // Projects
    createProject: async (project: Omit<Project, 'id'>, setProjects: React.Dispatch<React.SetStateAction<Project[]>>) => {
      const newProject = await supabaseService.createProject(project);
      setProjects(prev => [newProject, ...prev]);
      return newProject;
    },

    updateProject: async (id: string, updates: Partial<Project>, setProjects: React.Dispatch<React.SetStateAction<Project[]>>) => {
      const updatedProject = await supabaseService.updateProject(id, updates);
      setProjects(prev => prev.map(p => p.id === id ? updatedProject : p));
      return updatedProject;
    },

    deleteProject: async (id: string, setProjects: React.Dispatch<React.SetStateAction<Project[]>>) => {
      await supabaseService.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
    },

    // Transactions
    createTransaction: async (transaction: Omit<Transaction, 'id'>, setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>) => {
      const newTransaction = await supabaseService.createTransaction(transaction);
      setTransactions(prev => [newTransaction, ...prev].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      return newTransaction;
    },

    updateTransaction: async (id: string, updates: Partial<Transaction>, setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>) => {
      const updatedTransaction = await supabaseService.updateTransaction(id, updates);
      setTransactions(prev => prev.map(t => t.id === id ? updatedTransaction : t));
      return updatedTransaction;
    },

    deleteTransaction: async (id: string, setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>) => {
      await supabaseService.deleteTransaction(id);
      setTransactions(prev => prev.filter(t => t.id !== id));
    },

    // Cards
    createCard: async (card: Omit<Card, 'id'>, setCards: React.Dispatch<React.SetStateAction<Card[]>>) => {
      const newCard = await supabaseService.createCard(card);
      setCards(prev => [...prev, newCard]);
      return newCard;
    },

    updateCard: async (id: string, updates: Partial<Card>, setCards: React.Dispatch<React.SetStateAction<Card[]>>) => {
      const updatedCard = await supabaseService.updateCard(id, updates);
      setCards(prev => prev.map(c => c.id === id ? updatedCard : c));
      return updatedCard;
    },

    deleteCard: async (id: string, setCards: React.Dispatch<React.SetStateAction<Card[]>>) => {
      await supabaseService.deleteCard(id);
      setCards(prev => prev.filter(c => c.id !== id));
    },

    // Add more sync functions as needed for other entities...
  };
};