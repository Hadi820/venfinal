
import React, { useState, useEffect } from 'react';
import { ViewType, Client, Project, TeamMember, Transaction, Package, AddOn, TeamProjectPayment, Profile, FinancialPocket, TeamPaymentRecord, Lead, RewardLedgerEntry, User, Card, Asset, ClientFeedback, Contract, RevisionStatus, NavigationAction, Notification, SocialMediaPost, PromoCode, SOP } from './types';
import { HomeIcon, FolderKanbanIcon, UsersIcon, DollarSignIcon, PlusIcon } from './constants';
import { useSupabaseData } from './hooks/useSupabaseData';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Booking from './components/Booking';
import Clients from './components/Clients';
import { Projects } from './components/Projects';
import { Freelancers } from './components/Freelancers';
import Finance from './components/Finance';
import Packages from './components/Packages';
import Assets from './components/Assets';
import Settings from './components/Settings';
import { CalendarView } from './components/CalendarView';
import Login from './components/Login';
import PublicBookingForm from './components/PublicBookingForm';
import PublicPackages from './components/PublicPackages';
import PublicFeedbackForm from './components/PublicFeedbackForm';
import PublicRevisionForm from './components/PublicRevisionForm';
import PublicLeadForm from './components/PublicLeadForm';
import Header from './components/Header';
import SuggestionForm from './components/SuggestionForm';
import ClientReports from './components/ClientKPI';
import GlobalSearch from './components/GlobalSearch';
import Contracts from './components/Contracts';
import ClientPortal from './components/ClientPortal';
import FreelancerPortal from './components/FreelancerPortal';
import SocialPlanner from './components/SocialPlanner';
import PromoCodes from './components/PromoCodes';
import SOPManagement from './components/SOP';

const AccessDenied: React.FC<{onBackToDashboard: () => void}> = ({ onBackToDashboard }) => (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <h2 className="text-2xl font-bold text-brand-danger mb-2">Akses Ditolak</h2>
        <p className="text-brand-text-secondary mb-6">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        <button onClick={onBackToDashboard} className="button-primary">Kembali ke Dashboard</button>
    </div>
);

const BottomNavBar: React.FC<{ activeView: ViewType; handleNavigation: (view: ViewType) => void }> = ({ activeView, handleNavigation }) => {
    const navItems = [
        { view: ViewType.DASHBOARD, label: 'Beranda', icon: HomeIcon },
        { view: ViewType.PROJECTS, label: 'Proyek', icon: FolderKanbanIcon },
        { view: ViewType.CLIENTS, label: 'Klien', icon: UsersIcon },
        { view: ViewType.FINANCE, label: 'Keuangan', icon: DollarSignIcon },
    ];

    return (
        <nav className="bottom-nav xl:hidden">
            <div className="flex justify-around items-center h-16">
                {navItems.map(item => (
                    <button
                        key={item.view}
                        onClick={() => handleNavigation(item.view)}
                        className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${activeView === item.view ? 'text-brand-accent' : 'text-brand-text-secondary'}`}
                    >
                        <item.icon className="w-6 h-6 mb-1" />
                        <span className="text-[10px] font-bold">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
};

const FloatingActionButton: React.FC<{ onAddClick: (type: string) => void }> = ({ onAddClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { label: 'Transaksi', type: 'transaction', icon: <DollarSignIcon className="w-5 h-5" /> },
        { label: 'Proyek', type: 'project', icon: <FolderKanbanIcon className="w-5 h-5" /> },
        { label: 'Klien', type: 'client', icon: <UsersIcon className="w-5 h-5" /> },
    ];

    return (
        <div className="fixed bottom-20 right-5 z-40 xl:hidden">
             {isOpen && (
                <div className="flex flex-col items-end gap-3 mb-3">
                    {actions.map(action => (
                         <div key={action.type} className="flex items-center gap-2">
                             <span className="text-sm font-semibold bg-brand-surface text-brand-text-primary px-3 py-1.5 rounded-lg shadow-md">{action.label}</span>
                             <button
                                onClick={() => { onAddClick(action.type); setIsOpen(false); }}
                                className="w-12 h-12 rounded-full bg-brand-surface text-brand-text-primary shadow-lg flex items-center justify-center"
                            >
                                {action.icon}
                            </button>
                         </div>
                    ))}
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 ${isOpen ? 'rotate-45 bg-brand-danger' : 'bg-brand-accent'}`}
            >
                <PlusIcon className="w-8 h-8" />
            </button>
        </div>
    );
};


const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem('isAuthenticated');
    return stored === 'true';
  });
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  });
  const [activeView, setActiveView] = useState<ViewType>(ViewType.DASHBOARD);
  const [notification, setNotification] = useState<string>('');
  const [initialAction, setInitialAction] = useState<NavigationAction | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const initialHash = window.location.hash || (window.location.pathname && window.location.pathname !== '/' ? `#${window.location.pathname}${window.location.search}` : '');
  const [route, setRoute] = useState(initialHash);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Use Supabase data and CRUD operations
  const {
    users, clients, packages, addOns, projects, teamMembers, transactions, cards, pockets,
    teamProjectPayments, teamPaymentRecords, leads, rewardLedgerEntries, assets, clientFeedback,
    contracts, notifications, socialMediaPosts, promoCodes, sops, profile, setProfile,
  userCrud, clientCrud, packageCrud, addOnCrud, projectCrud, teamMemberCrud, setClientFeedback,
    transactionCrud, cardCrud, pocketCrud, teamProjectPaymentCrud,
    teamPaymentRecordCrud, leadCrud, rewardLedgerEntryCrud, assetCrud,
    clientFeedbackCrud, contractCrud, notificationCrud, socialMediaPostCrud,
    promoCodeCrud, sopCrud, profileCrud,
    loading, error,
  } = useSupabaseData();

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // If the app was opened via a plain path (Netlify direct link like /portal/abc),
  // convert pathname to the internal hash format so existing routing logic works.
  useEffect(() => {
    if (!window.location.hash) {
      const path = window.location.pathname || '';
      const search = window.location.search || '';
      // list of public routes the app handles via hash
      const knownPrefixes = [
        '/portal/',
        '/freelancer-portal/',
        '/public-packages',
        '/public-booking',
        '/public-lead-form',
        '/feedback',
        '/suggestion-form',
        '/revision-form'
      ];
      const matches = knownPrefixes.some(p => path.startsWith(p));
      if (matches) {
        setRoute(`#${path}${search}`);
      }
    }
  }, []);

  // Restore auth state on mount (if needed)
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('currentUser');
    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Show loading screen while data is being fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-brand-bg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto mb-4"></div>
          <p className="text-brand-text-secondary">Memuat data...</p>
        </div>
      </div>
    );
  }

  // Show error screen if data loading failed
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-brand-bg">
        <div className="text-center max-w-md mx-auto p-6">
          <h1 className="text-2xl font-bold text-brand-danger mb-4">Error Loading Data</h1>
          <p className="text-brand-text-secondary mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="button-primary"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  // Use default profile if none exists
  const currentProfile = profile || {
  id: 'DEFAULT_PROFILE',
  user_id: 'DEFAULT_USER',
    fullName: 'Vena Pictures',
    email: 'admin@vena.pictures',
    phone: '+62 895-4061-81407',
    companyName: 'Vena Pictures',
    website: 'https://vena.pictures',
    address: 'Jl. Contoh No. 123, Jakarta',
    bankAccount: 'BCA 1234567890 a.n. Vena Pictures',
    authorizedSigner: 'Vena Pictures',
    bio: 'Vendor fotografi dan videografi profesional',
    incomeCategories: ['DP Proyek', 'Pelunasan Proyek'],
    expenseCategories: ['Gaji Freelancer', 'Peralatan'],
    projectTypes: ['Pernikahan', 'Prewedding'],
    eventTypes: ['Meeting Klien', 'Survey Lokasi'],
    assetCategories: ['Kamera', 'Lensa'],
    sopCategories: ['Fotografi', 'Editing'],
    projectStatusConfig: [
      { id: 'status_1', name: 'Dikonfirmasi', color: '#10b981', subStatuses: [], note: 'Proyek telah dikonfirmasi' },
      { id: 'status_2', name: 'Editing', color: '#8b5cf6', subStatuses: [], note: 'Proses editing' },
      { id: 'status_3', name: 'Selesai', color: '#eab308', subStatuses: [], note: 'Proyek selesai' }
    ],
    notificationSettings: { newProject: true, paymentConfirmation: true, deadlineReminder: true },
    securitySettings: { twoFactorEnabled: false },
    briefingTemplate: 'Halo tim! Briefing untuk proyek [NAMA_PROYEK].',
    termsAndConditions: 'Syarat dan ketentuan akan diatur di sini.'
  };
  const showNotification = (message: string, duration: number = 3000) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, duration);
  };

  const handleLoginSuccess = (user: User) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    setActiveView(ViewType.DASHBOARD);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  };

  const handleMarkAsRead = async (notificationId: string) => {
    await notificationCrud.update(notificationId, { isRead: true });
  };
  
  const handleMarkAllAsRead = async () => {
    const unreadIds = notifications.filter(n => !n.isRead).map(n => n.id);
    await Promise.all(unreadIds.map(id => notificationCrud.update(id, { isRead: true })));
  };

  const handleNavigation = (view: ViewType, action?: NavigationAction, notificationId?: string) => {
    setActiveView(view);
    setInitialAction(action || null);
    setIsSidebarOpen(false); // Close sidebar on navigation
    setIsSearchOpen(false); // Close search on navigation
    if (notificationId) {
        handleMarkAsRead(notificationId);
    }
  };

  const handleUpdateRevision = async (projectId: string, revisionId: string, updatedData: { freelancerNotes: string, driveLink: string, status: RevisionStatus }) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const updatedRevisions = (project.revisions || []).map(r => {
        if (r.id === revisionId) {
            return {
                ...r,
                freelancerNotes: updatedData.freelancerNotes,
                driveLink: updatedData.driveLink,
                status: updatedData.status,
                completedDate: updatedData.status === RevisionStatus.COMPLETED ? new Date().toISOString() : r.completedDate,
            };
        }
        return r;
    });

    await projectCrud.update(projectId, { revisions: updatedRevisions });
    showNotification("Update revisi telah berhasil dikirim.");
  };

    const handleClientConfirmation = async (projectId: string, stage: 'editing' | 'printing' | 'delivery') => {
        let updates: Partial<Project> = {};
        if (stage === 'editing') updates.isEditingConfirmedByClient = true;
        if (stage === 'printing') updates.isPrintingConfirmedByClient = true;
        if (stage === 'delivery') updates.isDeliveryConfirmedByClient = true;

        await projectCrud.update(projectId, updates);
        showNotification("Konfirmasi telah diterima. Terima kasih!");
    };
    
    const handleClientSubStatusConfirmation = async (projectId: string, subStatusName: string, note: string) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        const confirmed = [...(project.confirmedSubStatuses || []), subStatusName];
        const notes = { ...(project.clientSubStatusNotes || {}), [subStatusName]: note };

        const updatedProject = await projectCrud.update(projectId, {
            confirmedSubStatuses: confirmed,
            clientSubStatusNotes: notes
        });

    if (updatedProject) {
      await notificationCrud.add({
        title: 'Catatan Klien Baru',
        message: `Klien ${updatedProject.clientName} memberikan catatan pada sub-status "${subStatusName}" di proyek "${updatedProject.projectName}".`,
        timestamp: new Date().toISOString(),
        isRead: false,
        icon: 'comment',
        link: {
          view: ViewType.PROJECTS,
          action: { type: 'VIEW_PROJECT_DETAILS', id: projectId }
        }
      });
    }
    
        showNotification(`Konfirmasi untuk "${subStatusName}" telah diterima.`);
    };
    
    const handleSignContract = async (contractId: string, signatureDataUrl: string, signer: 'vendor' | 'client') => {
        const updates = signer === 'vendor' ? { vendorSignature: signatureDataUrl } : { clientSignature: signatureDataUrl };
        await contractCrud.update(contractId, updates);
        showNotification('Tanda tangan berhasil disimpan.');
    };
    
    const handleSignInvoice = async (projectId: string, signatureDataUrl: string) => {
        await projectCrud.update(projectId, { invoiceSignature: signatureDataUrl });
        showNotification('Invoice berhasil ditandatangani.');
    };
    
    const handleSignTransaction = async (transactionId: string, signatureDataUrl: string) => {
        await transactionCrud.update(transactionId, { vendorSignature: signatureDataUrl });
        showNotification('Kuitansi berhasil ditandatangani.');
    };
    
    const handleSignPaymentRecord = async (recordId: string, signatureDataUrl: string) => {
        await teamPaymentRecordCrud.update(recordId, { vendorSignature: signatureDataUrl });
        showNotification('Slip pembayaran berhasil ditandatangani.');
    };


  const hasPermission = (view: ViewType) => {
    if (!currentUser) return false;
    if (currentUser.role === 'Admin') return true;
    if (view === ViewType.DASHBOARD) return true;
    return currentUser.permissions?.includes(view) || false;
  };
  
  const renderView = () => {
    if (!hasPermission(activeView)) {
        return <AccessDenied onBackToDashboard={() => setActiveView(ViewType.DASHBOARD)} />;
    }
    switch (activeView) {
      case ViewType.DASHBOARD:
        return <Dashboard 
          projects={projects} 
          clients={clients} 
          transactions={transactions} 
          teamMembers={teamMembers}
          cards={cards}
          pockets={pockets}
          handleNavigation={handleNavigation}
          leads={leads}
          teamProjectPayments={teamProjectPayments}
          packages={packages}
          assets={assets}
          clientFeedback={clientFeedback}
          contracts={contracts}
          currentUser={currentUser}
          projectStatusConfig={currentProfile.projectStatusConfig}
        />;
      case ViewType.PROSPEK:
        return <Leads
            leads={leads} leadCrud={leadCrud}
            clients={clients} clientCrud={clientCrud}
            projects={projects} projectCrud={projectCrud}
            packages={packages} addOns={addOns}
            transactions={transactions} transactionCrud={transactionCrud}
            userProfile={currentProfile} showNotification={showNotification}
            cards={cards} cardCrud={cardCrud}
            pockets={pockets} pocketCrud={pocketCrud}
            promoCodes={promoCodes} promoCodeCrud={promoCodeCrud}
        />;
      case ViewType.BOOKING:
        return <Booking
            leads={leads}
            clients={clients}
            projects={projects}
            packages={packages}
            handleNavigation={handleNavigation}
            showNotification={showNotification}
        />;
      case ViewType.CLIENTS:
        return <Clients
          clients={clients} clientCrud={clientCrud}
          projects={projects} projectCrud={projectCrud}
          packages={packages} addOns={addOns}
          transactions={transactions} transactionCrud={transactionCrud}
          userProfile={currentProfile}
          showNotification={showNotification}
          initialAction={initialAction} setInitialAction={setInitialAction}
          cards={cards} cardCrud={cardCrud}
          pockets={pockets} pocketCrud={pocketCrud}
          contracts={contracts}
          handleNavigation={handleNavigation}
          clientFeedback={clientFeedback}
          promoCodes={promoCodes} promoCodeCrud={promoCodeCrud}
          onSignInvoice={handleSignInvoice}
          onSignTransaction={handleSignTransaction}
        />;
      case ViewType.PROJECTS:
        return <Projects 
          projects={projects} projectCrud={projectCrud}
          clients={clients}
          packages={packages}
          teamMembers={teamMembers}
          teamProjectPayments={teamProjectPayments} teamProjectPaymentCrud={teamProjectPaymentCrud}
          transactions={transactions} transactionCrud={transactionCrud}
          initialAction={initialAction} setInitialAction={setInitialAction}
         profile={currentProfile}
          showNotification={showNotification}
          cards={cards}
          cardCrud={cardCrud}
        />;
      case ViewType.TEAM:
        return (
          <Freelancers
            teamMembers={teamMembers} teamMemberCrud={teamMemberCrud}
            teamProjectPayments={teamProjectPayments} teamProjectPaymentCrud={teamProjectPaymentCrud}
            teamPaymentRecords={teamPaymentRecords} teamPaymentRecordCrud={teamPaymentRecordCrud}
            transactions={transactions} transactionCrud={transactionCrud}
            userProfile={currentProfile}
            showNotification={showNotification}
            initialAction={initialAction}
            setInitialAction={setInitialAction}
            projects={projects} projectCrud={projectCrud}
            rewardLedgerEntries={rewardLedgerEntries} rewardLedgerEntryCrud={rewardLedgerEntryCrud}
            pockets={pockets} pocketCrud={pocketCrud}
            cards={cards} cardCrud={cardCrud}
            onSignPaymentRecord={handleSignPaymentRecord}
          />
        );
      case ViewType.FINANCE:
        return <Finance 
          transactions={transactions} transactionCrud={transactionCrud}
          pockets={pockets} pocketCrud={pocketCrud}
          projects={projects}
          profile={currentProfile}
          cards={cards} cardCrud={cardCrud}
          teamMembers={teamMembers}
          rewardLedgerEntries={rewardLedgerEntries}
        />;
      case ViewType.PACKAGES:
        return <Packages packages={packages} packageCrud={packageCrud} addOns={addOns} addOnCrud={addOnCrud} projects={projects} />;
      case ViewType.ASSETS:
        return <Assets assets={assets} assetCrud={assetCrud} profile={currentProfile} showNotification={showNotification} />;
      case ViewType.CONTRACTS:
        return <Contracts 
            contracts={contracts} contractCrud={contractCrud}
            clients={clients} projects={projects} profile={currentProfile}
            showNotification={showNotification}
            initialAction={initialAction} setInitialAction={setInitialAction}
            packages={packages}
            onSignContract={handleSignContract}
        />;
      case ViewType.SOP:
        return <SOPManagement sops={sops} sopCrud={sopCrud} profile={currentProfile} showNotification={showNotification} />;
      case ViewType.SETTINGS:
        return <Settings 
          profile={currentProfile} setProfile={setProfile}
          profileCrud={profileCrud}
          transactions={transactions} projects={projects}
          users={users} userCrud={userCrud}
          currentUser={currentUser}
        />;
      case ViewType.CALENDAR:
        return <CalendarView projects={projects} projectCrud={projectCrud} teamMembers={teamMembers} profile={currentProfile} />;
      case ViewType.CLIENT_REPORTS:
        return <ClientReports 
            clients={clients}
            leads={leads}
            projects={projects}
            feedback={clientFeedback}
            clientFeedbackCrud={clientFeedbackCrud}
            showNotification={showNotification}
        />;
      case ViewType.SOCIAL_MEDIA_PLANNER:
        return <SocialPlanner posts={socialMediaPosts} socialMediaPostCrud={socialMediaPostCrud} projects={projects} showNotification={showNotification} />;
      case ViewType.PROMO_CODES:
        return <PromoCodes promoCodes={promoCodes} promoCodeCrud={promoCodeCrud} projects={projects} showNotification={showNotification} />;
      default:
        return <Dashboard 
          projects={projects} 
          clients={clients} 
          transactions={transactions} 
          teamMembers={teamMembers}
          cards={cards}
          pockets={pockets}
          handleNavigation={handleNavigation}
          leads={leads}
          teamProjectPayments={teamProjectPayments}
          packages={packages}
          assets={assets}
          clientFeedback={clientFeedback}
          contracts={contracts}
          currentUser={currentUser}
          projectStatusConfig={currentProfile.projectStatusConfig}
        />;
    }
  };
  
  // ROUTING FOR PUBLIC PAGES
  if (route.startsWith('#/public-packages')) {
    return <PublicPackages packages={packages} userProfile={currentProfile} showNotification={showNotification} />;
  }
  if (route.startsWith('#/public-booking')) {
    return <PublicBookingForm 
  clientCrud={clientCrud}
  clients={clients}
        projectCrud={projectCrud}
        packages={packages}
        addOns={addOns}
        transactionCrud={transactionCrud}
        userProfile={currentProfile}
        cards={cards}
        cardCrud={cardCrud}
        pockets={pockets}
        pocketCrud={pocketCrud}
        promoCodes={promoCodes}
        promoCodeCrud={promoCodeCrud}
        showNotification={showNotification}
        leadCrud={leadCrud}
    />;
  }
  if (route.startsWith('#/public-lead-form')) {
    return <PublicLeadForm 
        leadCrud={leadCrud}
        userProfile={currentProfile}
        showNotification={showNotification}
    />;
  }
  if (route.startsWith('#/feedback')) {
    return <PublicFeedbackForm setClientFeedback={setClientFeedback} />;
  }
  if (route.startsWith('#/suggestion-form')) {
    return <SuggestionForm leadCrud={leadCrud} />;
  }
  if (route.startsWith('#/revision-form')) {
    return <PublicRevisionForm projects={projects} teamMembers={teamMembers} onUpdateRevision={handleUpdateRevision} />;
  }
  if (route.startsWith('#/portal/')) {
    const accessId = route.split('/portal/')[1];
    // Provide a compatible setClientFeedback function expected by the portal.
    // The portal will call setClientFeedback(updater) where updater is a function
    // that receives previous feedback array and returns a new array including the new entry.
    const portalSetClientFeedback: React.Dispatch<React.SetStateAction<ClientFeedback[]>> = (action) => {
      try {
        if (typeof action === 'function') {
          const updated = (action as (prev: ClientFeedback[]) => ClientFeedback[])(clientFeedback || []);
          // persist any new items that don't exist in current clientFeedback
          const newItems = (updated || []).filter(u => !(clientFeedback || []).some(existing => existing.id === u.id));
          newItems.forEach(item => clientFeedbackCrud.add(item));
        } else if (Array.isArray(action)) {
          const items: ClientFeedback[] = action as ClientFeedback[];
          const newItems = items.filter(u => !(clientFeedback || []).some(existing => existing.id === u.id));
          newItems.forEach(item => clientFeedbackCrud.add(item));
        }
      } catch (err) {
        console.error('Failed to persist client feedback from portal', err);
      }
    };

    return <ClientPortal 
        accessId={accessId} 
        clients={clients} 
        projects={projects} 
        contracts={contracts} 
        transactions={transactions}
        setClientFeedback={portalSetClientFeedback}
        showNotification={showNotification} 
        profile={currentProfile}
        packages={packages}
        onClientConfirmation={handleClientConfirmation}
        onClientSubStatusConfirmation={handleClientSubStatusConfirmation}
        onSignContract={handleSignContract}
    />;
  }
  if (route.startsWith('#/freelancer-portal/')) {
    const accessId = route.split('/freelancer-portal/')[1];
    return <FreelancerPortal 
        accessId={accessId} 
        teamMembers={teamMembers} 
        projects={projects} 
        teamProjectPayments={teamProjectPayments}
        teamPaymentRecords={teamPaymentRecords}
        rewardLedgerEntries={rewardLedgerEntries}
        showNotification={showNotification}
        onUpdateRevision={handleUpdateRevision}
        sops={sops}
     profile={currentProfile}
    />;
  }
  
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} users={users} />;
  }

  return (
    <div className="flex h-screen bg-brand-bg text-brand-text-primary">
      <Sidebar 
        activeView={activeView} 
        setActiveView={(view) => handleNavigation(view)} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
        handleLogout={handleLogout}
        currentUser={currentUser}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
            pageTitle={activeView} 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            setIsSearchOpen={setIsSearchOpen}
            notifications={notifications}
            handleNavigation={handleNavigation}
            handleMarkAllAsRead={handleMarkAllAsRead}
            currentUser={currentUser}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8 pb-24 xl:pb-8">
            {renderView()}
        </main>
      </div>
      {notification && (
        <div className="fixed top-5 right-5 bg-brand-accent text-white py-2 px-4 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {notification}
        </div>
      )}
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        clients={clients}
        projects={projects}
        teamMembers={teamMembers}
        handleNavigation={handleNavigation}
      />
      <BottomNavBar activeView={activeView} handleNavigation={handleNavigation} />
      {/* <FloatingActionButton onAddClick={(type) => console.log('Add', type)} /> */}
    </div>
  );
};

export default App;
