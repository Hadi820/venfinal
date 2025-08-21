import { useState, useEffect } from 'react';
import { supabaseService } from '../lib/supabase-helpers';
import { 
  User, Client, Package, AddOn, Project, TeamMember, Transaction, Card, 
  FinancialPocket, TeamProjectPayment, TeamPaymentRecord, Lead, RewardLedgerEntry,
  Asset, ClientFeedback, Contract, Notification, SocialMediaPost, PromoCode, SOP, Profile
} from '../types';

export const useSupabaseData = () => {
  // State for all data
  const [users, setUsers] = useState<User[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [addOns, setAddOns] = useState<AddOn[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [pockets, setPockets] = useState<FinancialPocket[]>([]);
  const [teamProjectPayments, setTeamProjectPayments] = useState<TeamProjectPayment[]>([]);
  const [teamPaymentRecords, setTeamPaymentRecords] = useState<TeamPaymentRecord[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [rewardLedgerEntries, setRewardLedgerEntries] = useState<RewardLedgerEntry[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [clientFeedback, setClientFeedback] = useState<ClientFeedback[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [socialMediaPosts, setSocialMediaPosts] = useState<SocialMediaPost[]>([]);
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [sops, setSops] = useState<SOP[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load all data on mount
  useEffect(() => {
    const loadAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load all data in parallel
        const [
          usersData,
          clientsData,
          packagesData,
          addOnsData,
          projectsData,
          teamMembersData,
          transactionsData,
          cardsData,
          pocketsData,
          teamProjectPaymentsData,
          teamPaymentRecordsData,
          leadsData,
          rewardLedgerEntriesData,
          assetsData,
          clientFeedbackData,
          contractsData,
          notificationsData,
          socialMediaPostsData,
          promoCodesData,
          sopsData,
          profileData
        ] = await Promise.all([
          supabaseService.getUsers(),
          supabaseService.getClients(),
          supabaseService.getPackages(),
          supabaseService.getAddOns(),
          supabaseService.getProjects(),
          supabaseService.getTeamMembers(),
          supabaseService.getTransactions(),
          supabaseService.getCards(),
          supabaseService.getFinancialPockets(),
          supabaseService.getTeamProjectPayments(),
          supabaseService.getTeamPaymentRecords(),
          supabaseService.getLeads(),
          supabaseService.getRewardLedgerEntries(),
          supabaseService.getAssets(),
          supabaseService.getClientFeedback(),
          supabaseService.getContracts(),
          supabaseService.getNotifications(),
          supabaseService.getSocialMediaPosts(),
          supabaseService.getPromoCodes(),
          supabaseService.getSOPs(),
          supabaseService.getProfile()
        ]);

        // Set all state
        setUsers(usersData);
        setClients(clientsData);
        setPackages(packagesData);
        setAddOns(addOnsData);
        setProjects(projectsData);
        setTeamMembers(teamMembersData);
        setTransactions(transactionsData);
        setCards(cardsData);
        setPockets(pocketsData);
        setTeamProjectPayments(teamProjectPaymentsData);
        setTeamPaymentRecords(teamPaymentRecordsData);
        setLeads(leadsData);
        setRewardLedgerEntries(rewardLedgerEntriesData);
        setAssets(assetsData);
        setClientFeedback(clientFeedbackData);
        setContracts(contractsData);
        setNotifications(notificationsData);
        setSocialMediaPosts(socialMediaPostsData);
        setPromoCodes(promoCodesData);
        setSops(sopsData);
        setProfile(profileData);

      } catch (err) {
        console.error('Error loading data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  // CRUD operations that update both state and database
  const createCrudOperations = <T extends { id: string }>(
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    service: {
      create: (item: Omit<T, 'id'>) => Promise<T>;
      update: (id: string, updates: Partial<T>) => Promise<T>;
      delete: (id: string) => Promise<void>;
    }
  ) => {
    const handleError = (error: any, context: string) => {
      console.error(`Error in ${context}:`, error);
      setError(`Error in ${context}: ${error.message}`);
      throw error;
    };

    return {
      add: async (item: Omit<T, 'id'>) => {
        try {
          const newItem = await service.create(item as any);
          setter(prev => [...prev, newItem]);
          return newItem;
        } catch (err) {
          handleError(err, 'add');
        }
      },
      update: async (id: string, updates: Partial<T>) => {
        try {
          const updatedItem = await service.update(id, updates);
          setter(prev => prev.map(item => (item.id === id ? updatedItem : item)));
          return updatedItem;
        } catch (err) {
          handleError(err, 'update');
        }
      },
      remove: async (id: string) => {
        try {
          await service.delete(id);
          setter(prev => prev.filter(item => item.id !== id));
        } catch (err) {
          handleError(err, 'remove');
        }
      },
    };
  };

  const userCrud = createCrudOperations(setUsers, { create: supabaseService.createUser, update: supabaseService.updateUser, delete: supabaseService.deleteUser });
  const clientCrud = createCrudOperations(setClients, { create: supabaseService.createClient, update: supabaseService.updateClient, delete: supabaseService.deleteClient });
  const packageCrud = createCrudOperations(setPackages, { create: supabaseService.createPackage, update: supabaseService.updatePackage, delete: supabaseService.deletePackage });
  const addOnCrud = createCrudOperations(setAddOns, { create: supabaseService.createAddOn, update: supabaseService.updateAddOn, delete: supabaseService.deleteAddOn });
  const projectCrud = createCrudOperations(setProjects, { create: supabaseService.createProject, update: supabaseService.updateProject, delete: supabaseService.deleteProject });
  const teamMemberCrud = createCrudOperations(setTeamMembers, { create: supabaseService.createTeamMember, update: supabaseService.updateTeamMember, delete: supabaseService.deleteTeamMember });
  const transactionCrud = createCrudOperations(setTransactions, { create: supabaseService.createTransaction, update: supabaseService.updateTransaction, delete: supabaseService.deleteTransaction });
  const cardCrud = createCrudOperations(setCards, { create: supabaseService.createCard, update: supabaseService.updateCard, delete: supabaseService.deleteCard });
  const pocketCrud = createCrudOperations(setPockets, { create: supabaseService.createFinancialPocket, update: supabaseService.updateFinancialPocket, delete: supabaseService.deleteFinancialPocket });
  const teamProjectPaymentCrud = createCrudOperations(setTeamProjectPayments, { create: supabaseService.createTeamProjectPayment, update: supabaseService.updateTeamProjectPayment, delete: supabaseService.deleteTeamProjectPayment });
  const teamPaymentRecordCrud = createCrudOperations(setTeamPaymentRecords, { create: supabaseService.createTeamPaymentRecord, update: supabaseService.updateTeamPaymentRecord, delete: supabaseService.deleteTeamPaymentRecord });
  const leadCrud = createCrudOperations(setLeads, { create: supabaseService.createLead, update: supabaseService.updateLead, delete: supabaseService.deleteLead });
  const rewardLedgerEntryCrud = createCrudOperations(setRewardLedgerEntries, { create: supabaseService.createRewardLedgerEntry, update: supabaseService.updateRewardLedgerEntry, delete: supabaseService.deleteRewardLedgerEntry });
  const assetCrud = createCrudOperations(setAssets, { create: supabaseService.createAsset, update: supabaseService.updateAsset, delete: supabaseService.deleteAsset });
  const clientFeedbackCrud = createCrudOperations(setClientFeedback, { create: supabaseService.createClientFeedback, update: supabaseService.updateClientFeedback, delete: supabaseService.deleteClientFeedback });
  const contractCrud = createCrudOperations(setContracts, { create: supabaseService.createContract, update: supabaseService.updateContract, delete: supabaseService.deleteContract });
  const notificationCrud = createCrudOperations(setNotifications, { create: supabaseService.createNotification, update: supabaseService.updateNotification, delete: supabaseService.deleteNotification });
  const socialMediaPostCrud = createCrudOperations(setSocialMediaPosts, { create: supabaseService.createSocialMediaPost, update: supabaseService.updateSocialMediaPost, delete: supabaseService.deleteSocialMediaPost });
  const promoCodeCrud = createCrudOperations(setPromoCodes, { create: supabaseService.createPromoCode, update: supabaseService.updatePromoCode, delete: supabaseService.deletePromoCode });
  const sopCrud = createCrudOperations(setSops, { create: supabaseService.createSOP, update: supabaseService.updateSOP, delete: supabaseService.deleteSOP });

  const profileCrud = {
    create: async (profileData: Omit<Profile, 'id' | 'user_id'>) => {
      try {
        const newProfile = await supabaseService.createProfile(profileData);
        setProfile(newProfile);
        return newProfile;
      } catch (err) {
        console.error("Error creating profile:", err);
        setError(`Error creating profile: ${err.message}`);
        throw err;
      }
    },
    update: async (updates: Partial<Profile>) => {
      if (!profile || !profile.id) {
        throw new Error("Profile not loaded or does not have an ID. Cannot update.");
      }
      try {
        const updatedProfile = await supabaseService.updateProfile(profile.id, updates);
        setProfile(updatedProfile);
        return updatedProfile;
      } catch (err) {
        console.error("Error updating profile:", err);
        setError(`Error updating profile: ${err.message}`);
        throw err;
      }
    },
  };


  return {
    // Data
    users, clients, packages, addOns, projects, teamMembers, transactions, cards,
    pockets, teamProjectPayments, teamPaymentRecords, leads, rewardLedgerEntries,
    assets, clientFeedback, contracts, notifications, socialMediaPosts, promoCodes,
    sops, profile,
    
    // Raw setters (if needed, though direct use is discouraged)
    setUsers, setClients, setPackages, setAddOns, setProjects, setTeamMembers,
    setTransactions, setCards, setPockets, setTeamProjectPayments,
    setTeamPaymentRecords, setLeads, setRewardLedgerEntries, setAssets,
    setClientFeedback, setContracts, setNotifications, setSocialMediaPosts,
    setPromoCodes, setSops, setProfile,

    // CRUD operations
    userCrud, clientCrud, packageCrud, addOnCrud, projectCrud, teamMemberCrud,
    transactionCrud, cardCrud, pocketCrud, teamProjectPaymentCrud,
    teamPaymentRecordCrud, leadCrud, rewardLedgerEntryCrud, assetCrud,
    clientFeedbackCrud, contractCrud, notificationCrud, socialMediaPostCrud,
    promoCodeCrud, sopCrud, profileCrud,
    
    // Loading states
    loading,
    error,
  };
};