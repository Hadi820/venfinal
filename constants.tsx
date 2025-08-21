

import React from 'react';
import { ViewType, TransactionType, PaymentStatus, PocketType, ClientStatus, LeadStatus, ContactChannel, CardType, AssetStatus, PerformanceNoteType, SatisfactionLevel, RevisionStatus, Notification, SocialMediaPost, PostType, PostStatus, PromoCode, SOP, ClientType, ProjectStatusConfig } from './types';
import type { User, Client, Project, Package, TeamMember, Transaction, FinancialPocket, AddOn, Profile, TeamProjectPayment, TeamPaymentRecord, AssignedTeamMember, Lead, NotificationSettings, SecuritySettings, RewardLedgerEntry, Card, Asset, PerformanceNote, ClientFeedback, Contract, Revision } from './types';

// --- ICONS (NEW THEME) ---
// A collection of SVG icon components used throughout the application. Style based on a consistent, modern, and clean line-icon set.
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 10.75l9-8.25 9 8.25" />
        <path d="M4.75 9.75v10.5c0 .55.45 1 1 1h12.5c.55 0 1-.45 1-1v-10.5" />
        <path d="M9.75 21.25v-6.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v6.5" />
    </svg>
);
export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.25" />
        <path d="M3.75 19.75v-2c0-2.21 1.79-4 4-4h2.5c2.21 0 4 1.79 4 4v2" />
        <circle cx="16" cy="8" r="3.25" />
        <path d="M19.25 19.75v-2c0-2.21-1.79-4-4-4h-1.5" />
    </svg>
);
export const FolderKanbanIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 6.75C2.75 5.64543 3.64543 4.75 4.75 4.75H9.25L11.25 6.75H19.25C20.3546 6.75 21.25 7.64543 21.25 8.75V17.25C21.25 18.3546 20.3546 19.25 19.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V6.75Z" />
        <line x1="9.75" y1="12.25" x2="9.75" y2="15.25" />
        <line x1="12.75" y1="10.75" x2="12.75" y2="15.25" />
        <line x1="15.75" y1="13.25" x2="15.75" y2="15.25" />
    </svg>
);
export const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.75" y="7.75" width="18.5" height="13.5" rx="2" />
        <path d="M16.75 7.75V5.75c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2" />
    </svg>
);
export const DollarSignIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.75V21.25" />
        <path d="M17.25 8.75A3.5 3.5 0 0 0 13.75 5.25H9.75a3.5 3.5 0 0 0 0 7h4a3.5 3.5 0 0 1 0 7H6.75" />
    </svg>
);
export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.75" y="4.75" width="18.5" height="16.5" rx="2" />
        <path d="M2.75 9.75h18.5" />
        <path d="M8.75 2.75v4" />
        <path d="M15.25 2.75v4" />
    </svg>
);
export const PackageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 8.75v8.5c0 .55.45 1 1 1h16.5c.55 0 1-.45 1-1v-8.5" />
        <path d="M2.75 8.75L12 4.75l9.25 4" />
        <path d="M12 21.25v-12" />
        <path d="M18.25 12.25l-6.25 4-6.25-4" />
        <path d="M2.75 8.75h18.5" />
    </svg>
);
export const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z" />
        <path d="M18.18 10.63a1.5 1.5 0 00.32-2.07l.55-.95a2 2 0 00-1-3.46l-1.1.2c-1-.7-2.18-1.1-3.45-1.1h-.01c-1.27 0-2.45.4-3.45 1.1l-1.1-.2a2 2 0 00-1 3.46l.55.95c.2.34.36.73.32 1.13 0 .4-.13.79-.32 1.13l-.55.95a2 2 0 001 3.46l1.1-.2c1 .7 2.18 1.1 3.45 1.1h.01c1.27 0 2.45-.4 3.45-1.1l1.1.2a2 2 0 001-3.46l-.55-.95a1.5 1.5 0 00-.32-1.13z" />
    </svg>
);
export const ChartPieIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.75a9.25 9.25 0 109.25 9.25H12v-9.25z" />
        <path d="M12.75 2.75a9.25 9.25 0 11-10 10" />
    </svg>
);
export const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.25" />
        <circle cx="12" cy="12" r="5.25" />
        <circle cx="12" cy="12" r="1.25" />
    </svg>
);
export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
export const LogOutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.75 8.75l3.5 3.25-3.5 3.25" />
    <path d="M8.75 12h10.5" />
    <path d="M8.75 20.25h-4c-1.1 0-2-.9-2-2V5.75c0-1.1.9-2 2-2h4" />
  </svg>
);
export const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.75 18.25A9.25 9.25 0 1121.25 9.75c-2.03 4.2-6.55 7.2-11.75 6.75-1.2-.1-2.35-.45-3.4-1" />
  </svg>
);
export const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.75V1.75" />
      <path d="M12 22.25V21.25" />
      <path d="M4.75 4.75l-.7-.7" />
      <path d="M19.25 19.25l-.7-.7" />
      <path d="M2.75 12H1.75" />
      <path d="M22.25 12H21.25" />
      <path d="M4.75 19.25l-.7.7" />
      <path d="M19.25 4.75l-.7.7" />
  </svg>
);
export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);
export const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2" />
        <line x1="2.75" y1="9.75" x2="21.25" y2="9.75" />
    </svg>
);
export const ClipboardListIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 4.75h3.5c.55 0 1 .45 1 1v14.5c0 .55-.45 1-1 1h-13c-.55 0-1-.45 1-1v-14.5c0-.55.45-1 1-1h3.5" />
        <path d="M12.75 2.75h-1.5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h1.5c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z" />
        <path d="M8.75 12.75h6.5" />
        <path d="M8.75 16.75h6.5" />
    </svg>
);
export const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.75 18.25h4.5" />
        <path d="M12 21.25v-3" />
        <path d="M12 15.25c-3.18 0-5.75-2.57-5.75-5.75 0-3.18 2.57-5.75 5.75-5.75s5.75 2.57 5.75 5.75c0 1.94-.97 3.67-2.45 4.75" />
    </svg>
);
export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);
export const CameraIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 8.75a2 2 0 012-2h3.5l1.5-2.5h5l1.5 2.5h3.5a2 2 0 012 2v10.5a2 2 0 01-2 2h-16.5a2 2 0 01-2-2v-10.5z" />
        <circle cx="12" cy="13.5" r="3.25" />
    </svg>
);
export const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.75 2.75v6.5h6.5" />
        <path d="M14.75 21.25H5.75c-1.1 0-2-.9-2-2V4.75c0-1.1.9-2 2-2h8l5.5 5.5v9c0 1.1-.9 2-2 2z" />
        <path d="M8.75 13.75h6.5" />
        <path d="M8.75 17.75h6.5" />
    </svg>
);
export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 12c1.5-4.5 5-7.25 9.25-7.25s7.75 2.75 9.25 7.25c-1.5 4.5-5 7.25-9.25 7.25s-7.75-2.75-9.25-7.25z" />
        <circle cx="12" cy="12" r="2.25" />
    </svg>
);
export const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.75 3.25a2.121 2.121 0 013 3L8.75 17.25l-4 1 1-4L16.75 3.25z" />
        <path d="M14.75 5.25l3 3" />
    </svg>
);
export const Trash2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 6.75h16.5" />
        <path d="M18.75 6.75v12.5c0 1.1-.9 2-2 2h-9.5c-1.1 0-2-.9-2-2V6.75" />
        <path d="M8.75 6.75V4.75c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2v2" />
        <path d="M9.75 11.75v5.5" />
        <path d="M14.25 11.75v5.5" />
    </svg>
);
export const PrinterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.75 18.25h12.5" />
        <path d="M19.25 12.25v-6.5c0-.55-.45-1-1-1h-12.5c-.55 0-1 .45 1-1v6.5" />
        <path d="M4.75 12.25h1.5c.28 0 .5.22.5.5v7.5c0 .55.45 1 1 1h8.5c.55 0 1-.45 1-1v-7.5c0-.28.22-.5.5-.5h1.5c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-1.5" />
    </svg>
);
export const Share2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
);
export const HistoryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 7.75v-4h4" />
        <path d="M3.56 12.25a9.25 9.25 0 102.19-4.5L2.75 7.75" />
        <path d="M12 7.75v4.5l3 2" />
    </svg>
);
export const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);
export const AlertCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.25" />
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
);
export const MessageSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.25 11.75c0 4.14-3.36 7.5-7.5 7.5h-1l-4.5 3v-3h-1.5c-4.14 0-7.5-3.36-7.5-7.5v-4.5c0-4.14 3.36-7.5 7.5-7.5h6c4.14 0 7.5 3.36 7.5 7.5v1.5z" />
    </svg>
);
export const PhoneIncomingIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 14.25l-3.5 3.5" />
        <path d="M12.25 17.75v-3.5h-3.5" />
        <path d="M21.25 15.25c0 .55-.45 1-1 1-2.02 0-3.92-.78-5.3-2.17s-2.17-3.28-2.17-5.3c0-.55.45-1 1-1 .9 0 1.76.15 2.55.43.34.12.55.51.45.88l-.6 2.1c-.1.36-.45.6-.83.5s-.7-.28-.95-.53c-.76-.76-.76-2 0-2.76.25-.25.38-.6.28-.95l-1.05-3.7c-.1-.36-.48-.57-.85-.45-1.07.35-2.07.86-3 1.57-2.7 2.07-3.88 5.78-2.5 9.25 1.5 3.75 4.88 6.5 8.75 6.5 1.4 0 2.75-.3 4-1 .98-.7 1.6-1.7 1.9-2.88" />
    </svg>
);
export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.25C12 21.25 4.75 15.25 4.75 10C4.75 6.54822 7.29822 3.75 12 3.75C16.7018 3.75 19.25 6.54822 19.25 10C19.25 15.25 12 21.25 12 21.25Z" />
        <circle cx="12" cy="10" r="3.25" />
    </svg>
);
export const QrCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1" />
        <rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1" />
        <rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1" />
        <path d="M17.25 17.25v2c0 .55.45 1 1 1h1" />
        <path d="M20.25 13.75h-2.5" />
    </svg>
);
export const TrendingDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
        <polyline points="17 18 23 18 23 12"></polyline>
    </svg>
);
export const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
);
export const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);
export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.75 14.75v3.5c0 .55.45 1 1 1h16.5c.55 0 1-.45 1-1v-3.5" />
        <path d="M12 15.75v-13" />
        <path d="M8.75 12.75l3.25 3 3.25-3" />
    </svg>
);
export const ListIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
);
export const LayoutGridIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
    </svg>
);
export const CheckSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.75 11.75l2.5 2.5 5-5" />
        <path d="M2.75 5.75c0-1.1.9-2 2-2h14.5c1.1 0 2 .9 2 2v12.5c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2V5.75z" />
    </svg>
);
export const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.25" />
        <path d="M12 7.75v4.5l3 2" />
    </svg>
);
export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.25 3.75L2.75 11.25l7.5 2.5 2.5 7.5 7.5-18.5z" />
        <path d="M10.25 13.75l7.5-7.5" />
    </svg>
);
export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.25a9.25 9.25 0 100-18.5 9.25 9.25 0 000 18.5z" />
        <path d="M8.75 12.25l2.5 2.5 5-5" />
    </svg>
);
export const PiggyBankIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 14.75v4.5c0 .55.45 1 1 1h4" />
        <path d="M19.75 14.75c1.1 0 2 .9 2 2v2.5" />
        <path d="M2.75 12.75c0-4.14 3.36-7.5 7.5-7.5h.5c3.85 0 7.08 2.92 7.45 6.75" />
        <path d="M11.75 14.75h4.5c.55 0 1 .45 1 1v4.5c0 .55-.45 1-1 1h-12c-1.1 0-2-.9-2-2V13.75c0-1 .6-1.87 1.5-2.2" />
        <path d="M15.75 8.75v1.5" />
    </svg>
);
export const UserCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.75 18.75v-2c0-2.21-1.79-4-4-4h-4.5c-2.21 0-4 1.79-4 4v2" />
        <circle cx="8.25" cy="6.75" r="3" />
        <path d="M16.75 11.75l2 2 4-4" />
    </svg>
);
export const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.75" y="11.75" width="16.5" height="9.5" rx="2" />
        <path d="M6.75 11.75V7.75c0-2.76 2.24-5 5-5s5 2.24 5 5v4" />
    </svg>
);
export const Users2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.25" />
        <path d="M3.75 19.75v-2c0-2.21 1.79-4 4-4h2.5c2.21 0 4 1.79 4 4v2" />
        <circle cx="16" cy="8" r="3.25" />
        <path d="M19.25 19.75v-2c0-2.21-1.79-4-4-4h-1.5" />
    </svg>
);
export const BarChart2Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
);
export const CashIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.75" y="6.75" width="18.5" height="10.5" rx="2" />
        <circle cx="12" cy="12" r="2.25" />
    </svg>
);
export const KeyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8.25" cy="15.75" r="4.5" />
        <path d="M12.75 11.25l5-5" />
        <path d="M15.75 9.25l2-2" />
    </svg>
);
export const SmileIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.25" />
        <path d="M8.75 14.75s1.5 2 3.25 2 3.25-2 3.25-2" />
        <circle cx="9.25" cy="9.75" r=".5" fill="currentColor" />
        <circle cx="14.75" cy="9.75" r=".5" fill="currentColor" />
    </svg>
);
export const ThumbsUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 10v12" />
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 3 1.88Z" />
    </svg>
);
export const MehIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.25" />
        <path d="M8.75 15.75h6.5" />
        <circle cx="9.25" cy="9.75" r=".5" fill="currentColor" />
        <circle cx="14.75" cy="9.75" r=".5" fill="currentColor" />
    </svg>
);
export const FrownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9.25" />
        <path d="M15.25 15.75s-1.5-2-3.25-2-3.25 2-3.25 2" />
        <circle cx="9.25" cy="9.75" r=".5" fill="currentColor" />
        <circle cx="14.75" cy="9.75" r=".5" fill="currentColor" />
    </svg>
);
export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);
export const GalleryHorizontalIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="2" />
        <circle cx="8.75" cy="8.75" r="1.5" />
        <path d="M21.25 14.75l-4.5-4.5-9 9" />
    </svg>
);
export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

// --- NAVIGATION ---
export const NAV_ITEMS = [
    { view: ViewType.DASHBOARD, label: 'Dasbor', icon: HomeIcon },
    { view: ViewType.PROSPEK, label: 'Prospek', icon: TargetIcon },
    { view: ViewType.BOOKING, label: 'Booking', icon: ClipboardListIcon },
    { view: ViewType.CLIENTS, label: 'Klien', icon: UsersIcon },
    { view: ViewType.PROJECTS, label: 'Proyek', icon: FolderKanbanIcon },
    { view: ViewType.TEAM, label: 'Freelancer', icon: BriefcaseIcon },
    { view: ViewType.FINANCE, label: 'Keuangan', icon: DollarSignIcon },
    { view: ViewType.CALENDAR, label: 'Kalender', icon: CalendarIcon },
    { view: ViewType.SOCIAL_MEDIA_PLANNER, label: 'Perencana Sosmed', icon: Share2Icon },
    { view: ViewType.PACKAGES, label: 'Paket', icon: PackageIcon },
    { view: ViewType.ASSETS, label: 'Aset', icon: CameraIcon },
    { view: ViewType.CONTRACTS, label: 'Kontrak', icon: FileTextIcon },
    { view: ViewType.PROMO_CODES, label: 'Kode Promo', icon: LightbulbIcon },
    { view: ViewType.SOP, label: 'SOP', icon: BookOpenIcon },
    { view: ViewType.CLIENT_REPORTS, label: 'Laporan Klien', icon: ChartPieIcon },
    { view: ViewType.SETTINGS, label: 'Pengaturan', icon: SettingsIcon },
];

// --- MOCK DATA ---

// -- IDs for consistency
const CLIENT_1_ID = 'CLI001'; // Budi & Sinta
const CLIENT_2_ID = 'CLI002'; // PT Sejahtera Abadi
const CLIENT_3_ID = 'CLI003'; // Rina Wijaya (old)
const CLIENT_4_ID = 'CLI004'; // Dewi & Rian
const CLIENT_5_ID = 'CLI005'; // Farhan & Aisyah
const CLIENT_6_ID = 'CLI006'; // Agung & Bella
const CLIENT_7_ID = 'CLI007'; // Yoga & Citra
const CLIENT_8_ID = 'CLI008'; // Meriah Selalu EO
const CLIENT_9_ID = 'CLI009'; // Keluarga Basuki
const CLIENT_10_ID = 'CLI010'; // Kevin & Adinda
const CLIENT_11_ID = 'CLI011'; // Acara Wisuda ITB
const CLIENT_12_ID = 'CLI012'; // Restoran "Rasa Nusantara"
const CLIENT_13_ID = 'CLI013'; // PT Cipta Kreasi
const CLIENT_14_ID = 'CLI014'; // Dian & Bima
const CLIENT_15_ID = 'CLI015'; // Food Festival JKT
const CLIENT_16_ID = 'CLI016'; // Sarah & Ivan
const CLIENT_17_ID = 'CLI017'; // Kopi Senja
const CLIENT_18_ID = 'CLI018'; // Ultah Rafi
const CLIENT_19_ID = 'CLI019'; // Andi & Gita

const TEAM_1_ID = 'TM001'; // Andi Pratama (Photo)
const TEAM_2_ID = 'TM002'; // Citra Lestari (Video)
const TEAM_3_ID = 'TM003'; // Doni Firmansyah (Editor)
const TEAM_4_ID = 'TM004'; // Eka Saputra (Photo 2)
const TEAM_5_ID = 'TM005'; // Fira Anjani (MUA)
const TEAM_6_ID = 'TM006'; // Galih Wicaksono (Drone)

const PKG_1_ID = 'PKG001'; // Silver Wedding
const PKG_2_ID = 'PKG002'; // Gold Wedding
const PKG_3_ID = 'PKG003'; // Corporate
const PKG_4_ID = 'PKG004'; // Engagement

const PROJ_1_ID = 'PRJ001'; // Budi & Sinta
const PROJ_2_ID = 'PRJ002'; // PT SA
const PROJ_3_ID = 'PRJ003'; // Rina Wijaya (old)
const PROJ_4_ID = 'PRJ004'; // Dewi & Rian
const PROJ_5_ID = 'PRJ005'; // Farhan & Aisyah
const PROJ_6_ID = 'PRJ006'; // TechCorp (Cancelled)
const PROJ_7_ID = 'PRJ007'; // Agung & Bella
const PROJ_8_ID = 'PRJ008'; // Yoga & Citra
const PROJ_9_ID = 'PRJ009'; // Meriah Selalu EO
const PROJ_10_ID = 'PRJ010'; // Keluarga Basuki
const PROJ_11_ID = 'PRJ011'; // Kevin & Adinda
const PROJ_12_ID = 'PRJ012'; // Wisuda ITB
const PROJ_13_ID = 'PRJ013'; // Rasa Nusantara
const PROJ_14_ID = 'PRJ014'; // PT Cipta Kreasi
const PROJ_15_ID = 'PRJ015'; // Dian & Bima
const PROJ_16_ID = 'PRJ016'; // Food Festival JKT
const PROJ_17_ID = 'PRJ017'; // Sarah & Ivan
const PROJ_18_ID = 'PRJ018'; // Kopi Senja
const PROJ_19_ID = 'PRJ019'; // Ultah Rafi
const PROJ_20_ID = 'PRJ020'; // Andi & Gita

const ADDON_1_ID = 'ADDON001'; // Same Day Edit
const ADDON_2_ID = 'ADDON002'; // Drone
const ADDON_3_ID = 'ADDON003'; // MUA
const ADDON_4_ID = 'ADDON004'; // Extra Album

const PROMO_1_ID = 'PROMO001'; // VENA10 (Used by Agung & Bella)
const PROMO_2_ID = 'PROMO002'; // AKHIRTAHUN (Active)
const PROMO_3_ID = 'PROMO003'; // EXPO2022 (Expired)

const CONTRACT_1_ID = 'CTR001'; // Budi & Sinta
const CONTRACT_2_ID = 'CTR002'; // Agung & Bella

const REV_1_ID = 'REV001'; // Revision for Farhan & Aisyah

export const MOCK_DP_PROOF_BASE64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8QFS0ZFR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADkQAAIBAgMECQIFAwUAAAAAAAABAgMRBCExBRJBUWFxEyKBkaGxwTIzQlLR8BRi4VOCorLC0uHx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/xQAIxEBAQACAgICAgMBAAAAAAAAAAECERIhAzFBURMicQQyYf/aAAwDAQACEQMRAD8A+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByzqyWiW/YDSBjzrq/vvbqBnAAAAAAAAAAAAAAAAAAAAAAABnN2VwGNStFa9/IDSAyU0/YgAAAAAAADNSTdl9QGUYqPrYDA6C6vyYCojrFPyAwBg6Ee/wYypaJNdVcDSAAAAAAAAAAAAAAAAAAAAAAAADKUrJsDXrVbqy2eiA1U5qL0a27ANiEk1dAYgZzlZNiIrJWBgAAAAAAAAAAAGlGpyvl6gbwAMqk1BXf0AxpVOdX6bANwAAAAAMpyUU5SdlFb2Bq0avOubZtA3QAAAAAAAAAAAAAAAAAAAAAABlKVk2BrVKnMubqBoKpyySlt2gbsZKSutgMQVqktF3ehkldJdwMAAAAAAAAAAAAg6s5S2WWK3dAarpyhqrNb94GyqsXtWj3AbAI1KslsV3uA13VnLRKy3bgYqlKers+7YDaVKK33e8wyoqKskB6AAAAAADKcrJsDWlU5ubqBoQq8rSls2gboIZVIy1i0wMAAAAAAAAAAAAAAAAAAAAAAAAr1Zc0m/oBupUeWKT36gbsZKSutgMQVqkrJvq9CMVZJdwMAAAAAAAAAAAAAAAi6s5S2WWK3dAaqpTjqrNb94Gwq0XtWj3AbQIVZyeiUV3A1XOcl+WK7gYKnKWrs+7cDYVKMVuu95koqKskB6AAAAABlOVk2BrSqczbf0A0adTlaltRuAjOlGavFpoDAAAAAAAAAAAAAAAAAAAAAAAAAKVSSitfEDVlUc3o9OwGlCpySSlsa3Ab0ZKSutgPQAAAAAArYjEcsVFfmkBySnKpOy2yfIDoUKSgrLZbcDKMVFWSAwAABWq/p9SW0U9O+xM1s0K3I7S9l7AN0AAAAAAACjUblUaW1uyA6EYqKSWwAAAAAAAAAAAAUalN03zR2bNyMa9SrFRWiWwqGzGSim5bEBiM07pMDk+mU4vng7PcdjOrRoY5S9molL6MDoAAAAAAAAAAAABWxFbkjaKvJ7ANaFNy+1bN9QNCUlTjaOyOwHNTp8u8wMAAAAAAAAAAAAAAAAAAAAAAAAjUlaLfQDWqvmcu/QDQoz5JJPZsA3U7q62MBlOVopt9DOn+nU29Wve9xLNc0cJSltSj7gYTwVFbIr3AxlgKL3Nd3A56uBW3Jp33M1s0a8qbtLeBvAAAAAAAIVKnNPlWxbgZ0KXLFN7XqAAAAAAAAAAAAAAFGvT5lzewDcRnTU4uL2MCnGpzKz2rZcDRAr16PK+ZbHoBvRlzipeAGQAAAAAAAAAAAAa9afKrlOq7u7AwAAAAAAAAAAAAAAAAAAAAAAAAAAADVrq8GuqA0qUuSSb2MDejJSSktjAyqT5IuXYc85ubvJ3YwYgAByVMPCa1WvUBzVMBOOz3dGaaMqkZWa2MDeoYpS0lpLp0A3AAAAAAAAMqceVXAygAAAAAAAAAAAAAAAACpJ80o7u/uY1cQqS1WreBupSlN80twOhCOSKj2AxgAAAAAIyipaNAMJ0JxeaDXUDaq1o01d+5HNUnKbvJ3fUDGEYxVooDAAAAAAAAAAAAP//Z';

export const MOCK_USERS: User[] = [
    { id: 'USR001', email: 'admin@vena.pictures', password: 'admin', fullName: 'Vena Admin', role: 'Admin' },
    { id: 'USR002', email: 'member@vena.pictures', password: 'member', fullName: 'Vena Member', role: 'Member', permissions: [ViewType.CLIENTS, ViewType.PROJECTS, ViewType.CALENDAR, ViewType.SOCIAL_MEDIA_PLANNER] },
];

export const MOCK_CARDS: Card[] = [
    { id: 'CARD_CASH', cardHolderName: 'Kas Perusahaan', bankName: 'Tunai', cardType: CardType.TUNAI, lastFourDigits: 'CASH', balance: 14000000, colorGradient: 'from-slate-100 to-slate-300' },
    { id: 'CARD001', cardHolderName: 'Vena Pictures', bankName: 'WBank', cardType: CardType.DEBIT, lastFourDigits: '3090', expiryDate: '12/26', balance: 85500000, colorGradient: 'from-blue-500 to-sky-400' },
    { id: 'CARD002', cardHolderName: 'Vena Pictures', bankName: 'VISA', cardType: CardType.KREDIT, lastFourDigits: '8872', expiryDate: '08/25', balance: -28000000, colorGradient: 'from-gray-700 to-gray-900' },
    { id: 'CARD003', cardHolderName: 'Vena Pictures', bankName: 'M-Bank', cardType: CardType.DEBIT, lastFourDigits: '5561', expiryDate: '01/27', balance: 24050000, colorGradient: 'from-orange-500 to-amber-400' },
];

export const MOCK_CLIENTS: Client[] = [
    { id: CLIENT_1_ID, name: 'Budi & Sinta', email: 'budi.sinta@email.com', phone: '081234567890', whatsapp: '6281234567890', instagram: '@budi.sinta.wedding', since: '2023-05-15', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), portalAccessId: 'portal-budi-sinta-1a2b' },
    { id: CLIENT_2_ID, name: 'PT Sejahtera Abadi', email: 'hrd@sejahtera.co.id', phone: '021-555-0123', whatsapp: '62215550123', since: '2023-02-20', status: ClientStatus.ACTIVE, clientType: ClientType.VENDOR, lastContact: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(), portalAccessId: 'portal-sejahtera-abadi-3c4d' },
    { id: CLIENT_3_ID, name: 'Rina Wijaya', email: 'rina.w@email.com', phone: '087654321098', whatsapp: '6287654321098', instagram: '@rinawijaya', since: '2022-11-10', status: ClientStatus.INACTIVE, clientType: ClientType.DIRECT, lastContact: '2023-01-15T10:00:00Z', portalAccessId: 'portal-rina-wijaya-5e6f' },
    { id: CLIENT_4_ID, name: 'Dewi & Rian', email: 'dewi.rian@email.com', phone: '081298765432', whatsapp: '6281298765432', since: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date().toISOString(), portalAccessId: 'portal-dewi-rian-7g8h' },
    { id: CLIENT_5_ID, name: 'Farhan & Aisyah', email: 'farhan.aisyah@email.com', phone: '085712345678', whatsapp: '6285712345678', since: '2023-08-01', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), portalAccessId: 'portal-farhan-aisyah-9i0j' },
    { id: CLIENT_6_ID, name: 'Agung & Bella (The Senjaya)', email: 'agung.senjaya@email.com', phone: '081333444555', whatsapp: '6281333444555', instagram: '@thesenjayastory', since: '2023-09-20', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), portalAccessId: 'portal-agung-bella-1k2l' },
    { id: CLIENT_7_ID, name: 'Yoga & Citra', email: 'yoga.citra@email.com', phone: '081223344556', whatsapp: '6281223344556', since: '2023-11-01', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 8)).toISOString(), portalAccessId: 'portal-yoga-citra' },
    { id: CLIENT_8_ID, name: 'EO Meriah Selalu', email: 'info@meriahselalu.com', phone: '022-203-1234', whatsapp: '62222031234', since: '2023-10-15', status: ClientStatus.ACTIVE, clientType: ClientType.VENDOR, lastContact: new Date(new Date().setDate(new Date().getDate() - 35)).toISOString(), portalAccessId: 'portal-meriah-selalu' },
    { id: CLIENT_9_ID, name: 'Keluarga Basuki', email: 'basuki.family@email.com', phone: '087812349876', whatsapp: '6287812349876', since: '2023-11-10', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), portalAccessId: 'portal-keluarga-basuki' },
    { id: CLIENT_10_ID, name: 'Kevin & Adinda', email: 'kevin.adinda@email.com', phone: '085698765432', whatsapp: '6285698765432', since: '2023-09-05', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(), portalAccessId: 'portal-kevin-adinda' },
    { id: CLIENT_11_ID, name: 'Acara Wisuda ITB', email: 'kemahasiswaan@itb.ac.id', phone: '022-250-0935', whatsapp: '62222500935', since: '2023-11-20', status: ClientStatus.LEAD, clientType: ClientType.VENDOR, lastContact: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), portalAccessId: 'portal-wisuda-itb' },
    { id: CLIENT_12_ID, name: 'Restoran Rasa Nusantara', email: 'marketing@rasanusantara.id', phone: '021-722-5555', whatsapp: '62217225555', since: '2023-10-25', status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(), portalAccessId: 'portal-rasa-nusantara' },
    { id: CLIENT_13_ID, name: 'PT Cipta Kreasi', email: 'contact@ciptakreasi.com', phone: '021-888-9990', whatsapp: '62218889990', since: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.VENDOR, lastContact: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), portalAccessId: 'portal-cipta-kreasi' },
    { id: CLIENT_14_ID, name: 'Dian & Bima', email: 'dian.bima@wedding.com', phone: '081234567891', whatsapp: '6281234567891', since: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), portalAccessId: 'portal-dian-bima' },
    { id: CLIENT_15_ID, name: 'Food Festival JKT', email: 'info@foodfestjkt.com', phone: '087712345678', whatsapp: '6287712345678', since: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.VENDOR, lastContact: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), portalAccessId: 'portal-foodfest-jkt' },
    { id: CLIENT_16_ID, name: 'Sarah & Ivan', email: 'sarah.ivan@email.com', phone: '085587654321', whatsapp: '6285587654321', since: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(), portalAccessId: 'portal-sarah-ivan' },
    { id: CLIENT_17_ID, name: "Grand Opening 'Kopi Senja'", email: 'marketing@kopisenja.id', phone: '021-777-6665', whatsapp: '62217776665', since: new Date(new Date().setDate(new Date().getDate() - 8)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), portalAccessId: 'portal-kopi-senja' },
    { id: CLIENT_18_ID, name: 'Acara Ulang Tahun Rafi', email: 'mama.rafi@email.com', phone: '081198765432', whatsapp: '6281198765432', since: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), portalAccessId: 'portal-ultah-rafi' },
    { id: CLIENT_19_ID, name: 'Andi & Gita', email: 'andi.gita@email.com', phone: '081288899900', whatsapp: '6281288899900', since: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(), status: ClientStatus.ACTIVE, clientType: ClientType.DIRECT, lastContact: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), portalAccessId: 'portal-andi-gita' }
];

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
    { id: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', email: 'andi.p@freelance.com', phone: '081111111111', standardFee: 1500000, noRek: 'WBank 111222333', rewardBalance: 250000, rating: 4.8, performanceNotes: [{ id: 'PN001', date: new Date(new Date().setDate(new Date().getDate() - 70)).toISOString(), note: 'Hasil foto di acara PT SA sangat tajam dan komposisinya bagus.', type: PerformanceNoteType.PRAISE }], portalAccessId: 'freelancer-andi-pratama' },
    { id: TEAM_2_ID, name: 'Citra Lestari', role: 'Videografer', email: 'citra.l@freelance.com', phone: '082222222222', standardFee: 2000000, noRek: 'M-Bank 444555666', rewardBalance: 500000, rating: 4.9, performanceNotes: [{ id: 'PN002', date: new Date(new Date().setDate(new Date().getDate() - 65)).toISOString(), note: 'Video highlight acara PT SA selesai lebih cepat dari deadline.', type: PerformanceNoteType.PRAISE }], portalAccessId: 'freelancer-citra-lestari' },
    { id: TEAM_3_ID, name: 'Doni Firmansyah', role: 'Editor', email: 'doni.f@freelance.com', phone: '083333333333', standardFee: 1000000, noRek: 'WBank 777888999', rewardBalance: 150000, rating: 4.5, performanceNotes: [{ id: 'PN003', date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), note: 'Sedikit terlambat dalam pengumpulan draf pertama untuk revisi pernikahan Farhan & Aisyah.', type: PerformanceNoteType.LATE_DEADLINE }], portalAccessId: 'freelancer-doni-firmansyah' },
    { id: TEAM_4_ID, name: 'Eka Saputra', role: 'Fotografer', email: 'eka.s@freelance.com', phone: '084444444444', standardFee: 1250000, noRek: 'C-Bank 123123123', rewardBalance: 0, rating: 4.2, performanceNotes: [], portalAccessId: 'freelancer-eka-saputra' },
    { id: TEAM_5_ID, name: 'Fira Anjani', role: 'MUA & Asisten', email: 'fira.a@freelance.com', phone: '085555555555', standardFee: 750000, noRek: 'WBank 456456456', rewardBalance: 50000, rating: 4.7, performanceNotes: [], portalAccessId: 'freelancer-fira-anjani' },
    { id: TEAM_6_ID, name: 'Galih Wicaksono', role: 'Pilot Drone', email: 'galih.w@freelance.com', phone: '086666666666', standardFee: 1000000, noRek: 'M-Bank 789789789', rewardBalance: 100000, rating: 4.6, performanceNotes: [], portalAccessId: 'freelancer-galih-wicaksono' },
];

export const MOCK_PACKAGES: Package[] = [
    { id: PKG_1_ID, name: 'Paket Pernikahan Silver', price: 12000000, physicalItems: [{ name: 'Album Cetak Eksklusif 20x30cm 20 Halaman', price: 850000 }, { name: 'Cetak Foto 16R + Bingkai Minimalis (2pcs)', price: 400000 }], digitalItems: ['Semua file foto (JPG) hasil seleksi', '1 Video highlight (3-5 menit)'], processingTime: '30 hari kerja', photographers: '2 Fotografer', videographers: '1 Videografer' },
    { id: PKG_2_ID, name: 'Paket Pernikahan Gold', price: 25000000, physicalItems: [{ name: 'Album Cetak Premium 25x30cm 30 Halaman', price: 1500000 }, { name: 'Cetak Foto 20R + Bingkai Premium (2pcs)', price: 750000 }, { name: 'Box Kayu Eksklusif + Flashdisk 64GB', price: 500000 }], digitalItems: ['Semua file foto (JPG) tanpa seleksi', '1 Video sinematik (5-7 menit)', 'Video Teaser 1 menit untuk sosmed'], processingTime: '45 hari kerja', photographers: '2 Fotografer', videographers: '2 Videografer' },
    { id: PKG_3_ID, name: 'Paket Acara Korporat', price: 8000000, physicalItems: [], digitalItems: ['Dokumentasi foto (JPG)', '1 Video dokumentasi (10-15 menit)'], processingTime: '14 hari kerja', photographers: '1 Fotografer', videographers: '1 Videografer' },
    { id: PKG_4_ID, name: 'Paket Lamaran', price: 5000000, physicalItems: [], digitalItems: ['Semua file foto (JPG) hasil seleksi', '1 Video highlight (1-2 menit)'], processingTime: '14 hari kerja', photographers: '1 Fotografer' },
];

export const MOCK_ADDONS: AddOn[] = [
    { id: ADDON_1_ID, name: 'Same Day Edit Video', price: 2500000 },
    { id: ADDON_2_ID, name: 'Aerial Drone Shot', price: 1500000 },
    { id: ADDON_3_ID, name: 'Jasa MUA Profesional', price: 1000000 },
    { id: ADDON_4_ID, name: 'Extra Album Cetak', price: 750000 },
];

const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date(); nextWeek.setDate(nextWeek.getDate() + 7);
const nextMonth = new Date(); nextMonth.setDate(nextMonth.getDate() + 30);
const twoMonthsLater = new Date(); twoMonthsLater.setDate(twoMonthsLater.getDate() + 60);

export const MOCK_PROJECTS: Project[] = [
    { id: PROJ_1_ID, projectName: 'Pernikahan Budi & Sinta', clientId: CLIENT_1_ID, clientName: 'Budi & Sinta', projectType: 'Pernikahan', packageId: PKG_1_ID, packageName: 'Paket Pernikahan Silver', addOns: [{ id: ADDON_2_ID, name: 'Aerial Drone Shot', price: 1500000 }], date: nextMonth.toISOString(), deadlineDate: new Date(nextMonth.getTime() + 30 * 24*60*60*1000).toISOString(), location: 'Gedung Serbaguna, Bandung', progress: 50, status: 'Editing', activeSubStatuses: ['Color Grading Video'], totalCost: 13500000, amountPaid: 6000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1500000, subJob: 'Candid Photographer' }, { memberId: TEAM_4_ID, name: 'Eka Saputra', role: 'Fotografer', fee: 1250000, subJob: 'Main Photographer' }, { memberId: TEAM_2_ID, name: 'Citra Lestari', role: 'Videografer', fee: 2000000 }, { memberId: TEAM_3_ID, name: 'Doni Firmansyah', role: 'Editor', fee: 1000000 }, { memberId: TEAM_6_ID, name: 'Galih Wicaksono', role: 'Pilot Drone', fee: 1000000 }], driveLink: 'https://docs.google.com/document/d/example1/edit', finalDriveLink: '', image: 'https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?q=80&w=300' },
    { id: PROJ_2_ID, projectName: 'Gathering Tahunan PT SA', clientId: CLIENT_2_ID, clientName: 'PT Sejahtera Abadi', projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() - 46)).toISOString(), location: 'Hotel Grand Hyatt, Jakarta', progress: 100, status: 'Selesai', totalCost: 8000000, amountPaid: 8000000, paymentStatus: PaymentStatus.LUNAS, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1500000, reward: 250000 }, { memberId: TEAM_2_ID, name: 'Citra Lestari', role: 'Videografer', fee: 2000000, reward: 250000 }], finalDriveLink: 'https://www.dropbox.com/sh/example2/AAD_example' },
    { id: PROJ_3_ID, projectName: 'Sesi Foto Keluarga Wijaya', clientId: CLIENT_3_ID, clientName: 'Rina Wijaya', projectType: 'Keluarga', packageId: PKG_4_ID, packageName: 'Paket Lamaran', addOns: [], date: '2023-01-20T17:00:00.000Z', deadlineDate: '2023-02-03T17:00:00.000Z', location: 'Studio Vena, Jakarta', progress: 100, status: 'Selesai', totalCost: 5000000, amountPaid: 5000000, paymentStatus: PaymentStatus.LUNAS, team: [{ memberId: TEAM_4_ID, name: 'Eka Saputra', role: 'Fotografer', fee: 1250000 }], finalDriveLink: 'https://www.dropbox.com/sh/example3/AAD_example' },
    { id: PROJ_4_ID, projectName: 'Lamaran Dewi & Rian', clientId: CLIENT_4_ID, clientName: 'Dewi & Rian', projectType: 'Lamaran', packageId: PKG_4_ID, packageName: 'Paket Lamaran', addOns: [], date: nextWeek.toISOString(), deadlineDate: new Date(nextWeek.getTime() + 14 * 24*60*60*1000).toISOString(), location: 'Kediaman Mempelai, Yogyakarta', progress: 10, status: 'Dikonfirmasi', totalCost: 5000000, amountPaid: 2000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], dpProofUrl: MOCK_DP_PROOF_BASE64, image: 'https://images.unsplash.com/photo-1618231622393-277e979140b9?q=80&w=300' },
    { id: PROJ_5_ID, projectName: 'Akad Nikah Farhan & Aisyah', clientId: CLIENT_5_ID, clientName: 'Farhan & Aisyah', projectType: 'Pernikahan', packageId: PKG_1_ID, packageName: 'Paket Pernikahan Silver', addOns: [], date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 15)).toISOString(), location: 'Masjid Istiqlal, Jakarta', progress: 80, status: 'Revisi', totalCost: 12000000, amountPaid: 12000000, paymentStatus: PaymentStatus.LUNAS, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1500000, reward: 100000 }, { memberId: TEAM_3_ID, name: 'Doni Firmansyah', role: 'Editor', fee: 1000000, reward: 50000 }], revisions: [{id: REV_1_ID, date: new Date().toISOString(), adminNotes: 'Tolong revisi color grading video highlight, buat lebih warm. Referensi: video pernikahan Andini.', deadline: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(), freelancerId: TEAM_3_ID, status: RevisionStatus.PENDING }] },
    { id: PROJ_6_ID, projectName: 'Product Launch Event TechCorp', clientId: 'CLI-TEMP-001', clientName: 'TechCorp Inc.', projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() - 40)).toISOString(), location: 'SCBD, Jakarta', progress: 0, status: 'Dibatalkan', totalCost: 8000000, amountPaid: 0, paymentStatus: PaymentStatus.BELUM_BAYAR, team: [], notes: 'Klien membatalkan acara karena alasan internal.' },
    { id: PROJ_7_ID, projectName: 'Resepsi Agung & Bella', clientId: CLIENT_6_ID, clientName: 'Agung & Bella (The Senjaya)', projectType: 'Pernikahan', packageId: PKG_2_ID, packageName: 'Paket Pernikahan Gold', addOns: [{ id: ADDON_1_ID, name: 'Same Day Edit Video', price: 2500000 }, { id: ADDON_3_ID, name: 'Jasa MUA Profesional', price: 1000000 }], date: twoMonthsLater.toISOString(), deadlineDate: new Date(twoMonthsLater.getTime() + 45 * 24*60*60*1000).toISOString(), location: 'Ritz-Carlton, Bali', progress: 90, status: 'Cetak', activeSubStatuses: ['QC Album', 'Desain Box'], confirmedSubStatuses: ['Seleksi Foto', 'Approval Desain Album'], totalCost: 25650000, amountPaid: 25650000, paymentStatus: PaymentStatus.LUNAS, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1750000 }, { memberId: TEAM_2_ID, name: 'Citra Lestari', role: 'Videografer', fee: 2250000 }, { memberId: TEAM_5_ID, name: 'Fira Anjani', role: 'MUA & Asisten', fee: 750000 }], promoCodeId: PROMO_1_ID, discountAmount: 2850000, printingCost: 2750000, transportCost: 3500000, printingDetails: [{id: 'PRINT001', type: 'Cetak Album', details: 'Album Premium 25x30cm 30 Hal.', cost: 1500000}, {id: 'PRINT002', type: 'Cetak Foto', details: 'Cetak Foto 20R + Bingkai (2pcs)', cost: 750000}, {id: 'PRINT003', type: 'Flashdisk', details: 'Box Kayu Eksklusif + Flashdisk 64GB', cost: 500000}] },
    { id: PROJ_8_ID, projectName: 'Wedding Yoga & Citra', clientId: CLIENT_7_ID, clientName: 'Yoga & Citra', projectType: 'Pernikahan', packageId: PKG_2_ID, packageName: 'Paket Pernikahan Gold', addOns: [{ id: ADDON_2_ID, name: 'Aerial Drone Shot', price: 1500000 }], date: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 135)).toISOString(), location: 'InterContinental, Dago Pakar', progress: 60, status: 'Editing', activeSubStatuses: ['Color Grading Video'], totalCost: 26500000, amountPaid: 10000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1500000 }, { memberId: TEAM_2_ID, name: 'Citra Lestari', role: 'Videografer', fee: 2000000 }, { memberId: TEAM_3_ID, name: 'Doni Firmansyah', role: 'Editor', fee: 1000000 }, { memberId: TEAM_6_ID, name: 'Galih Wicaksono', role: 'Pilot Drone', fee: 1000000 }], image: 'https://images.unsplash.com/photo-1511285560921-5069a8444f1e?q=80&w=300' },
    { id: PROJ_9_ID, projectName: 'Gala Dinner Meriah Selalu', clientId: CLIENT_8_ID, clientName: 'EO Meriah Selalu', projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() - 16)).toISOString(), location: 'Trans Luxury Hotel, Bandung', progress: 100, status: 'Selesai', totalCost: 8000000, amountPaid: 8000000, paymentStatus: PaymentStatus.LUNAS, team: [{ memberId: TEAM_4_ID, name: 'Eka Saputra', role: 'Fotografer', fee: 1250000 }], finalDriveLink: 'https://www.dropbox.com/sh/example4/AAD_example' },
    { id: PROJ_10_ID, projectName: 'Sesi Foto Keluarga Basuki', clientId: CLIENT_9_ID, clientName: 'Keluarga Basuki', projectType: 'Keluarga', packageId: PKG_4_ID, packageName: 'Paket Lamaran', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 21)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 35)).toISOString(), location: 'Taman Hutan Raya Djuanda', progress: 15, status: 'Dikonfirmasi', totalCost: 5000000, amountPaid: 2500000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1250000 }], image: 'https://images.unsplash.com/photo-1609220136746-8cde19869685?q=80&w=300' },
    { id: PROJ_11_ID, projectName: 'Prewedding Kevin & Adinda', clientId: CLIENT_10_ID, clientName: 'Kevin & Adinda', projectType: 'Prewedding', packageId: PKG_1_ID, packageName: 'Paket Pernikahan Silver', addOns: [{ id: ADDON_3_ID, name: 'Jasa MUA Profesional', price: 1000000 }], date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString(), location: 'Kawah Putih, Ciwidey', progress: 90, status: 'Cetak', activeSubStatuses: ['Proses Cetak'], totalCost: 13000000, amountPaid: 13000000, paymentStatus: PaymentStatus.LUNAS, team: [{ memberId: TEAM_1_ID, name: 'Andi Pratama', role: 'Fotografer', fee: 1500000 }, { memberId: TEAM_5_ID, name: 'Fira Anjani', role: 'MUA & Asisten', fee: 750000 }], image: 'https://images.unsplash.com/photo-1532703108232-2051b4a39546?q=80&w=300' },
    { id: PROJ_12_ID, projectName: 'Dokumentasi Wisuda ITB', clientId: CLIENT_11_ID, clientName: 'Acara Wisuda ITB', projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 180)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 194)).toISOString(), location: 'Sasana Budaya Ganesha, Bandung', progress: 5, status: 'Persiapan', totalCost: 8000000, amountPaid: 0, paymentStatus: PaymentStatus.BELUM_BAYAR, team: [] },
    { id: PROJ_13_ID, projectName: 'Foto Menu Rasa Nusantara', clientId: CLIENT_12_ID, clientName: 'Restoran Rasa Nusantara', projectType: 'Produk', packageId: PKG_4_ID, packageName: 'Paket Lamaran', addOns: [], date: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate())).toISOString(), location: 'Studio Vena, Jakarta', progress: 75, status: 'Editing', activeSubStatuses: ['Seleksi Foto'], totalCost: 5000000, amountPaid: 2000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [{ memberId: TEAM_4_ID, name: 'Eka Saputra', role: 'Fotografer', fee: 1250000 }, { memberId: TEAM_3_ID, name: 'Doni Firmansyah', role: 'Editor', fee: 1000000 }], image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=300' },
    { id: PROJ_14_ID, projectName: 'Annual Award Night 2024', clientId: CLIENT_13_ID, clientName: 'PT Cipta Kreasi', projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 45)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 59)).toISOString(), location: 'Ballroom Hotel Indonesia Kempinski', progress: 15, status: 'Dikonfirmasi', totalCost: 8000000, amountPaid: 4000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=300' },
    { id: PROJ_15_ID, projectName: 'Pernikahan Dian & Bima', clientId: CLIENT_14_ID, clientName: 'Dian & Bima', projectType: 'Pernikahan', packageId: PKG_1_ID, packageName: 'Paket Pernikahan Silver', addOns: [{ id: ADDON_1_ID, name: 'Same Day Edit Video', price: 2500000 }], date: new Date(new Date().setDate(new Date().getDate() + 75)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 105)).toISOString(), location: 'Gedung Kriya, TMII', progress: 5, status: 'Persiapan', totalCost: 14500000, amountPaid: 0, paymentStatus: PaymentStatus.BELUM_BAYAR, team: [], image: 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=300' },
    { id: PROJ_16_ID, projectName: 'Dokumentasi Food Fest JKT', clientId: CLIENT_15_ID, clientName: 'Food Festival JKT', projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 25)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 39)).toISOString(), location: 'Plaza Tenggara, GBK', progress: 15, status: 'Dikonfirmasi', totalCost: 8000000, amountPaid: 4000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], image: 'https://images.unsplash.com/photo-1579214736239-9a75d71a1138?q=80&w=300' },
    { id: PROJ_17_ID, projectName: 'Prewedding Sarah & Ivan', clientId: CLIENT_16_ID, clientName: 'Sarah & Ivan', projectType: 'Prewedding', packageId: PKG_4_ID, packageName: 'Paket Lamaran', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 35)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 49)).toISOString(), location: 'Orchid Forest Cikole', progress: 15, status: 'Dikonfirmasi', totalCost: 5000000, amountPaid: 2000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], image: 'https://images.unsplash.com/photo-1541241031941-6512b98e2150?q=80&w=300' },
    { id: PROJ_18_ID, projectName: "Grand Opening 'Kopi Senja'", clientId: CLIENT_17_ID, clientName: "Grand Opening 'Kopi Senja'", projectType: 'Korporat', packageId: PKG_3_ID, packageName: 'Paket Acara Korporat', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 18)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 32)).toISOString(), location: 'Jl. Panglima Polim, Jakarta Selatan', progress: 10, status: 'Persiapan', totalCost: 8000000, amountPaid: 4000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=300' },
    { id: PROJ_19_ID, projectName: 'Ulang Tahun Rafi ke-5', clientId: CLIENT_18_ID, clientName: 'Acara Ulang Tahun Rafi', projectType: 'Ulang Tahun', packageId: PKG_4_ID, packageName: 'Paket Lamaran', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 28)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 42)).toISOString(), location: 'The Playground Kemang', progress: 15, status: 'Dikonfirmasi', totalCost: 5000000, amountPaid: 2000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], image: 'https://images.unsplash.com/photo-1517352358-748259649520?q=80&w=300' },
    { id: PROJ_20_ID, projectName: 'Pernikahan Andi & Gita', clientId: CLIENT_19_ID, clientName: 'Andi & Gita', projectType: 'Pernikahan', packageId: PKG_1_ID, packageName: 'Paket Pernikahan Silver', addOns: [], date: new Date(new Date().setDate(new Date().getDate() + 50)).toISOString(), deadlineDate: new Date(new Date().setDate(new Date().getDate() + 80)).toISOString(), location: 'Surabaya', progress: 10, status: 'Dikonfirmasi', totalCost: 12000000, amountPaid: 5000000, paymentStatus: PaymentStatus.DP_TERBAYAR, team: [], dpProofUrl: MOCK_DP_PROOF_BASE64, image: 'https://images.unsplash.com/photo-1515934751635-481eff0483b2?q=80&w=300' }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 'TRN001', date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), description: 'DP Proyek Pernikahan Budi & Sinta', amount: 6000000, type: TransactionType.INCOME, projectId: PROJ_1_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN002', date: new Date(new Date().setDate(new Date().getDate() - 35)).toISOString(), description: 'Pembelian Lensa Kamera Sony GM 50mm f1.2', amount: 28000000, type: TransactionType.EXPENSE, category: 'Peralatan', method: 'Kartu', cardId: 'CARD002' },
    { id: 'TRN003', date: new Date(new Date().setDate(new Date().getDate() - 61)).toISOString(), description: 'Pelunasan Gathering PT SA', amount: 8000000, type: TransactionType.INCOME, projectId: PROJ_2_ID, category: 'Pelunasan Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN004', date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(), description: 'DP Proyek Lamaran Dewi & Rian', amount: 2000000, type: TransactionType.INCOME, projectId: PROJ_4_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD003' },
    { id: 'TRN005', date: new Date(new Date().setDate(new Date().getDate() - 18)).toISOString(), description: 'Pelunasan Akad Nikah Farhan & Aisyah', amount: 6000000, type: TransactionType.INCOME, projectId: PROJ_5_ID, category: 'Pelunasan Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN006', date: new Date(new Date().setDate(new Date().getDate() - 50)).toISOString(), description: 'Pembayaran Fee Freelancer - Acara PT SA', amount: 3500000, type: TransactionType.EXPENSE, projectId: PROJ_2_ID, category: 'Gaji Freelancer', method: 'Sistem', cardId: 'CARD001' },
    { id: 'TRN007', date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), description: 'Biaya Transportasi - Proyek Agung & Bella', amount: 3500000, type: TransactionType.EXPENSE, projectId: PROJ_7_ID, category: 'Transportasi', method: 'Sistem', cardId: 'CARD001' },
    { id: 'TRN008', date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), description: 'Biaya Cetak Album - Proyek Agung & Bella', amount: 2750000, type: TransactionType.EXPENSE, projectId: PROJ_7_ID, category: 'Cetak Album', method: 'Sistem', cardId: 'CARD001', printingItemId: 'PRINT001' },
    { id: 'TRN009', date: '2023-11-02', description: 'DP Proyek Wedding Yoga & Citra', amount: 10000000, type: TransactionType.INCOME, projectId: PROJ_8_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN010', date: new Date(new Date().setDate(new Date().getDate() - 32)).toISOString(), description: 'Pelunasan Gala Dinner Meriah Selalu', amount: 8000000, type: TransactionType.INCOME, projectId: PROJ_9_ID, category: 'Pelunasan Proyek', method: 'Transfer Bank', cardId: 'CARD003' },
    { id: 'TRN011', date: new Date(new Date().setDate(new Date().getDate() - 28)).toISOString(), description: 'Pembayaran Fee Freelancer - Gala Dinner', amount: 1250000, type: TransactionType.EXPENSE, projectId: PROJ_9_ID, category: 'Gaji Freelancer', method: 'Sistem', cardId: 'CARD003' },
    { id: 'TRN012', date: '2023-11-11', description: 'DP Sesi Foto Keluarga Basuki', amount: 2500000, type: TransactionType.INCOME, projectId: PROJ_10_ID, category: 'DP Proyek', method: 'Tunai', cardId: 'CARD_CASH' },
    { id: 'TRN013', date: new Date(new Date().setDate(new Date().getDate() - 26)).toISOString(), description: 'Pelunasan Prewedding Kevin & Adinda', amount: 13000000, type: TransactionType.INCOME, projectId: PROJ_11_ID, category: 'Pelunasan Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN014', date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), description: 'Pembayaran Fee Freelancer - Prewedding Kevin', amount: 2250000, type: TransactionType.EXPENSE, projectId: PROJ_11_ID, category: 'Gaji Freelancer', method: 'Sistem', cardId: 'CARD001' },
    { id: 'TRN015', date: '2023-10-26', description: 'DP Foto Menu Rasa Nusantara', amount: 2000000, type: TransactionType.INCOME, projectId: PROJ_13_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD003' },
    { id: 'TRN016', date: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString(), description: 'DP Proyek Annual Award Night 2024', amount: 4000000, type: TransactionType.INCOME, projectId: PROJ_14_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN017', date: new Date(new Date().setDate(new Date().getDate() - 19)).toISOString(), description: 'DP Proyek Dokumentasi Food Fest JKT', amount: 4000000, type: TransactionType.INCOME, projectId: PROJ_16_ID, category: 'DP Proyek', method: 'Tunai', cardId: 'CARD_CASH' },
    { id: 'TRN018', date: new Date(new Date().setDate(new Date().getDate() - 11)).toISOString(), description: 'DP Proyek Prewedding Sarah & Ivan', amount: 2000000, type: TransactionType.INCOME, projectId: PROJ_17_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN019', date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(), description: "DP Proyek Grand Opening 'Kopi Senja'", amount: 4000000, type: TransactionType.INCOME, projectId: PROJ_18_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN020', date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), description: 'DP Proyek Ulang Tahun Rafi ke-5', amount: 2000000, type: TransactionType.INCOME, projectId: PROJ_19_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN021', date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(), description: 'DP Proyek Pernikahan Andi & Gita', amount: 5000000, type: TransactionType.INCOME, projectId: PROJ_20_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD003' },
    { id: 'TRN022', date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), description: 'DP Akad Nikah Farhan & Aisyah', amount: 6000000, type: TransactionType.INCOME, projectId: PROJ_5_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN023', date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), description: 'DP Resepsi Agung & Bella', amount: 10000000, type: TransactionType.INCOME, projectId: PROJ_7_ID, category: 'DP Proyek', method: 'Transfer Bank', cardId: 'CARD001' },
    { id: 'TRN024', date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), description: 'Pelunasan Resepsi Agung & Bella', amount: 15650000, type: TransactionType.INCOME, projectId: PROJ_7_ID, category: 'Pelunasan Proyek', method: 'Transfer Bank', cardId: 'CARD001' }
];

export const MOCK_LEADS: Lead[] = [
    { id: 'LEAD001', name: 'Calon Klien - Erika', contactChannel: ContactChannel.INSTAGRAM, location: 'Surabaya', status: LeadStatus.DISCUSSION, date: new Date().toISOString(), notes: 'Menanyakan paket prewedding untuk bulan Desember.' },
    { id: 'LEAD002', name: 'Bapak Hendra (Korporat)', contactChannel: ContactChannel.WEBSITE, location: 'Jakarta', status: LeadStatus.FOLLOW_UP, date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), notes: 'Butuh penawaran resmi untuk acara ulang tahun perusahaan.' },
    { id: 'LEAD003', name: 'Dewi & Rian', contactChannel: ContactChannel.WEBSITE, location: 'Yogyakarta', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 11)).toISOString(), notes: `Dikonversi secara otomatis dari formulir pemesanan publik. Proyek: Lamaran Dewi & Rian. Klien ID: ${CLIENT_4_ID}` },
    { id: 'LEAD004', name: 'Andini (Referensi)', contactChannel: ContactChannel.REFERRAL, location: 'Bogor', status: LeadStatus.REJECTED, date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), notes: 'Jadwal bentrok dengan acara lain.' },
    { id: 'LEAD005', name: 'Acara Wisuda ITB', contactChannel: ContactChannel.PHONE, location: 'Bandung', status: LeadStatus.FOLLOW_UP, date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), notes: 'Menanyakan ketersediaan tim untuk dokumentasi wisuda semester depan.' },
    { id: 'LEAD006', name: 'PT Cipta Kreasi', contactChannel: ContactChannel.WEBSITE, location: 'Jakarta', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 16)).toISOString(), notes: `Dikonversi. Proyek: Annual Award Night 2024. Klien ID: ${CLIENT_13_ID}` },
    { id: 'LEAD007', name: 'Dian & Bima', contactChannel: ContactChannel.INSTAGRAM, location: 'Jakarta', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 6)).toISOString(), notes: `Dikonversi. Proyek: Pernikahan Dian & Bima. Klien ID: ${CLIENT_14_ID}` },
    { id: 'LEAD008', name: 'Pak Tono (Food Fest)', contactChannel: ContactChannel.REFERRAL, location: 'Jakarta', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 21)).toISOString(), notes: `Dikonversi. Proyek: Dokumentasi Food Fest JKT. Klien ID: ${CLIENT_15_ID}` },
    { id: 'LEAD009', name: 'Sarah & Ivan', contactChannel: ContactChannel.WEBSITE, location: 'Bandung', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 13)).toISOString(), notes: `Dikonversi. Proyek: Prewedding Sarah & Ivan. Klien ID: ${CLIENT_16_ID}` },
    { id: 'LEAD010', name: 'Kopi Senja', contactChannel: ContactChannel.PHONE, location: 'Jakarta', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 9)).toISOString(), notes: `Dikonversi. Proyek: Grand Opening 'Kopi Senja'. Klien ID: ${CLIENT_17_ID}` },
    { id: 'LEAD011', name: 'Ibu Anita (Mama Rafi)', contactChannel: ContactChannel.WHATSAPP, location: 'Jakarta', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(), notes: `Dikonversi. Proyek: Ulang Tahun Rafi ke-5. Klien ID: ${CLIENT_18_ID}` },
    { id: 'LEAD012', name: 'Andi & Gita', contactChannel: ContactChannel.WEBSITE, location: 'Surabaya', status: LeadStatus.CONVERTED, date: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(), notes: `Dikonversi secara otomatis dari formulir pemesanan publik. Proyek: Pernikahan Andi & Gita. Klien ID: ${CLIENT_19_ID}` }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 'NOTIF001', title: 'Prospek Baru Masuk', message: 'Anda memiliki prospek baru dari Instagram: Calon Klien - Erika.', timestamp: new Date().toISOString(), isRead: false, icon: 'lead', link: { view: ViewType.PROSPEK } },
    { id: 'NOTIF002', title: 'Deadline Mendekat', message: 'Proyek "Akad Nikah Farhan & Aisyah" memiliki deadline dalam 15 hari.', timestamp: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), isRead: true, icon: 'deadline', link: { view: ViewType.PROJECTS, action: { type: 'VIEW_PROJECT_DETAILS', id: PROJ_5_ID } } },
    { id: 'NOTIF003', title: 'Pembayaran DP Diterima', message: 'Pembayaran DP untuk proyek "Lamaran Dewi & Rian" telah dikonfirmasi.', timestamp: new Date(new Date().setDate(new Date().getDate() - 9)).toISOString(), isRead: false, icon: 'payment', link: { view: ViewType.CLIENTS, action: { type: 'VIEW_CLIENT_DETAILS', id: CLIENT_4_ID } } },
    { id: 'NOTIF004', title: 'Revisi Selesai', message: 'Doni Firmansyah telah menyelesaikan revisi untuk proyek "Akad Nikah Farhan & Aisyah".', timestamp: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), isRead: true, icon: 'revision', link: { view: ViewType.PROJECTS, action: { type: 'VIEW_PROJECT_DETAILS', id: PROJ_5_ID } } },
];

export const MOCK_SOPS: SOP[] = [
    { id: 'SOP001', title: 'Alur Kerja Fotografi Pernikahan', category: 'Pernikahan', content: '1. Briefing H-7...\n2. Persiapan alat H-1...\n3. Pelaksanaan hari-H...\n4. Backup data setelah acara...\n5. Proses seleksi dan editing...', lastUpdated: new Date().toISOString() },
    { id: 'SOP002', title: 'Protokol Acara Korporat', category: 'Korporat', content: '1. Koordinasi dengan Event Organizer.\n2. Dokumentasi panggung utama dan suasana.\n3. Wawancara singkat dengan manajemen (jika ada).', lastUpdated: '2023-03-15T10:00:00Z' },
    { id: 'SOP003', title: 'Backup dan Penyimpanan Data', category: 'Umum', content: '1. Segera backup semua kartu memori ke 2 hard disk berbeda setelah acara selesai.\n2. Unggah file RAW ke cloud storage dalam waktu 24 jam.\n3. Arsipkan proyek di LTO tape setelah 1 tahun.', lastUpdated: '2023-01-10T10:00:00Z' },
];

export const MOCK_PROMO_CODES: PromoCode[] = [
    { id: PROMO_1_ID, code: 'VENA10', discountType: 'percentage', discountValue: 10, isActive: true, usageCount: 1, maxUsage: 50, createdAt: '2023-09-01T10:00:00Z' },
    { id: PROMO_2_ID, code: 'AKHIRTAHUN', discountType: 'fixed', discountValue: 1000000, isActive: true, usageCount: 0, maxUsage: 10, expiryDate: `${new Date().getFullYear()}-12-31`, createdAt: new Date().toISOString() },
    { id: PROMO_3_ID, code: 'EXPO2022', discountType: 'percentage', discountValue: 15, isActive: false, usageCount: 25, maxUsage: 25, expiryDate: '2022-12-31', createdAt: '2022-10-01T10:00:00Z' },
];

export const MOCK_SOCIAL_MEDIA_POSTS: SocialMediaPost[] = [
    { id: 'SMP001', projectId: PROJ_2_ID, clientName: 'PT Sejahtera Abadi', postType: PostType.INSTAGRAM_FEED, platform: 'Instagram', scheduledDate: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(), caption: 'Throwback to the amazing annual gathering of PT Sejahtera Abadi! #VenaCorporate #EventDocumentation', status: PostStatus.SCHEDULED },
    { id: 'SMP002', projectId: PROJ_3_ID, clientName: 'Rina Wijaya', postType: PostType.INSTAGRAM_STORY, platform: 'Instagram', scheduledDate: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), caption: 'Golden hour with the Wijaya family. ✨ #VenaFamily', status: PostStatus.POSTED, mediaUrl: 'https://www.dropbox.com/s/example/story.jpg?dl=0' },
    { id: 'SMP003', projectId: PROJ_5_ID, clientName: 'Farhan & Aisyah', postType: PostType.INSTAGRAM_REELS, platform: 'Instagram', scheduledDate: new Date(new Date().setDate(new Date().getDate() + 10)).toISOString(), caption: 'A sneak peek from Farhan & Aisyah\'s beautiful wedding day. Soon! #VenaWedding #Teaser', status: PostStatus.DRAFT },
];

export const MOCK_FINANCIAL_POCKETS: FinancialPocket[] = [
    { id: 'POCKET001', name: `Anggaran Operasional ${new Date().toLocaleString('id-ID', { month: 'long', year: 'numeric' })}`, description: 'Dana untuk pengeluaran bulanan.', icon: 'clipboard-list', type: PocketType.EXPENSE, amount: 2000000, goalAmount: 10000000 },
    { id: 'POCKET002', name: 'Tabungan Alat Baru', description: 'Menabung untuk upgrade kamera & drone.', icon: 'piggy-bank', type: PocketType.SAVING, amount: 12000000, goalAmount: 50000000 },
    { id: 'POCKET003', name: 'Dana Pajak Tahunan', description: 'Alokasi dana untuk pembayaran pajak.', icon: 'lock', type: PocketType.LOCKED, amount: 5000000, lockEndDate: `${new Date().getFullYear() + 1}-03-31` },
    { id: 'POCKET004', name: 'Tabungan Hadiah Freelancer', description: 'Total akumulasi hadiah untuk semua freelancer.', icon: 'star', type: PocketType.REWARD_POOL, amount: 1050000 }
];

export const MOCK_ASSETS: Asset[] = [
    { id: 'ASSET001', name: 'Kamera Sony A7 IV', category: 'Kamera', purchaseDate: '2023-01-10', purchasePrice: 35000000, status: AssetStatus.AVAILABLE, serialNumber: 'SN-A74-001' },
    { id: 'ASSET002', name: 'Lensa Sony GM 24-70mm f2.8', category: 'Lensa', purchaseDate: '2023-01-10', purchasePrice: 25000000, status: AssetStatus.IN_USE, notes: 'Digunakan untuk proyek Budi & Sinta' },
    { id: 'ASSET003', name: 'Drone DJI Mavic 3 Pro', category: 'Drone', purchaseDate: '2023-06-15', purchasePrice: 32000000, status: AssetStatus.MAINTENANCE, notes: 'Perbaikan gimbal setelah hard landing.' },
    { id: 'ASSET004', name: 'MacBook Pro M2 Max', category: 'Komputer', purchaseDate: '2023-08-01', purchasePrice: 45000000, status: AssetStatus.IN_USE, notes: 'Digunakan oleh Doni untuk editing.' },
    { id: 'ASSET005', name: 'Lensa Sony GM 50mm f1.2', category: 'Lensa', purchaseDate: new Date(new Date().setDate(new Date().getDate() - 35)).toISOString(), purchasePrice: 28000000, status: AssetStatus.AVAILABLE },
];

export const MOCK_CLIENT_FEEDBACK: ClientFeedback[] = [
    { id: 'FB001', clientName: 'PT Sejahtera Abadi', satisfaction: SatisfactionLevel.VERY_SATISFIED, rating: 5, feedback: 'Tim sangat profesional dan hasilnya melebihi ekspektasi! Video dokumentasinya sangat bagus.', date: new Date(new Date().setDate(new Date().getDate() - 55)).toISOString() },
    { id: 'FB002', clientName: 'Rina Wijaya', satisfaction: SatisfactionLevel.SATISFIED, rating: 4, feedback: 'Hasil fotonya bagus, hanya saja proses seleksinya agak lama. Tapi secara keseluruhan puas.', date: '2023-02-10T10:00:00Z' },
];

export const MOCK_CONTRACTS: Contract[] = [
    { id: CONTRACT_1_ID, contractNumber: `VP/CTR/${new Date(nextMonth).getFullYear()}/001`, clientId: CLIENT_1_ID, projectId: PROJ_1_ID, signingDate: new Date(new Date().setDate(new Date().getDate() - 24)).toISOString(), signingLocation: 'Bandung', createdAt: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), clientName1: 'Budi Santoso', clientAddress1: 'Jl. Mawar No. 1, Bandung', clientPhone1: '081234567890', clientName2: 'Sinta Melati', clientAddress2: 'Jl. Mawar No. 1, Bandung', clientPhone2: '081234567890', shootingDuration: '8 Jam (Akad & Resepsi)', guaranteedPhotos: '300 Foto Edit', albumDetails: '1 Album Cetak Eksklusif 20x30cm 20 Halaman', digitalFilesFormat: 'JPG High-Resolution', otherItems: '1 Video Highlight (3-5 menit), Aerial Drone Shot', personnelCount: '2 Fotografer, 1 Videografer, 1 Pilot Drone', deliveryTimeframe: '30 hari kerja', dpDate: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), finalPaymentDate: new Date(nextMonth.setDate(nextMonth.getDate() - 7)).toISOString(), cancellationPolicy: 'DP yang sudah dibayarkan tidak dapat dikembalikan.', jurisdiction: 'Bandung', vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' },
    { id: CONTRACT_2_ID, contractNumber: `VP/CTR/${new Date(twoMonthsLater).getFullYear()}/002`, clientId: CLIENT_6_ID, projectId: PROJ_7_ID, signingDate: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), signingLocation: 'Jakarta', createdAt: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), clientName1: 'Agung Senjaya', clientAddress1: 'Senjaya Residence, Jakarta Selatan', clientPhone1: '081333444555', clientName2: 'Bella Putri', clientAddress2: 'Senjaya Residence, Jakarta Selatan', clientPhone2: '081333444555', shootingDuration: '10 Jam (Full Day)', guaranteedPhotos: '500+ Foto Edit', albumDetails: '1 Album Cetak Premium 25x30cm 30 Halaman, 2 Album Mini untuk Orang Tua', digitalFilesFormat: 'JPG High-Resolution & RAW (by request)', otherItems: '1 Video Sinematik (5-7 menit), Same Day Edit Video, Jasa MUA', personnelCount: '2 Fotografer, 2 Videografer, 1 Asisten, 1 MUA', deliveryTimeframe: '45 hari kerja', dpDate: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), finalPaymentDate: new Date(twoMonthsLater.setDate(twoMonthsLater.getDate() - 14)).toISOString(), cancellationPolicy: 'DP yang sudah dibayarkan tidak dapat dikembalikan. Pembatalan H-30 dikenakan biaya 50% dari total kontrak.', jurisdiction: 'Denpasar', vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==', clientSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e9LgAAAABJRU5ErkJggg==' },
];

export const MOCK_TEAM_PROJECT_PAYMENTS: TeamProjectPayment[] = [
    { id: 'TPP001', projectId: PROJ_2_ID, teamMemberName: 'Andi Pratama', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(), status: 'Paid', fee: 1500000, reward: 250000 },
    { id: 'TPP002', projectId: PROJ_2_ID, teamMemberName: 'Citra Lestari', teamMemberId: TEAM_2_ID, date: new Date(new Date().setDate(new Date().getDate() - 60)).toISOString(), status: 'Paid', fee: 2000000, reward: 250000 },
    { id: 'TPP003', projectId: PROJ_1_ID, teamMemberName: 'Andi Pratama', teamMemberId: TEAM_1_ID, date: nextMonth.toISOString(), status: 'Unpaid', fee: 1500000 },
    { id: 'TPP004', projectId: PROJ_1_ID, teamMemberName: 'Eka Saputra', teamMemberId: TEAM_4_ID, date: nextMonth.toISOString(), status: 'Unpaid', fee: 1250000 },
    { id: 'TPP005', projectId: PROJ_1_ID, teamMemberName: 'Citra Lestari', teamMemberId: TEAM_2_ID, date: nextMonth.toISOString(), status: 'Unpaid' as const, fee: 2000000 },
    { id: 'TPP006', projectId: PROJ_1_ID, teamMemberName: 'Doni Firmansyah', teamMemberId: TEAM_3_ID, date: nextMonth.toISOString(), status: 'Unpaid' as const, fee: 1000000 },
    { id: 'TPP007', projectId: PROJ_1_ID, teamMemberName: 'Galih Wicaksono', teamMemberId: TEAM_6_ID, date: nextMonth.toISOString(), status: 'Unpaid', fee: 1000000 },
    { id: 'TPP008', projectId: PROJ_5_ID, teamMemberName: 'Andi Pratama', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), status: 'Paid', fee: 1500000, reward: 100000 },
    { id: 'TPP009', projectId: PROJ_5_ID, teamMemberName: 'Doni Firmansyah', teamMemberId: TEAM_3_ID, date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), status: 'Paid', fee: 1000000, reward: 50000 },
    { id: 'TPP010', projectId: PROJ_8_ID, teamMemberName: 'Andi Pratama', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(), status: 'Unpaid', fee: 1500000 },
    { id: 'TPP011', projectId: PROJ_8_ID, teamMemberName: 'Citra Lestari', teamMemberId: TEAM_2_ID, date: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(), status: 'Unpaid', fee: 2000000 },
    { id: 'TPP012', projectId: PROJ_8_ID, teamMemberName: 'Doni Firmansyah', teamMemberId: TEAM_3_ID, date: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(), status: 'Unpaid', fee: 1000000 },
    { id: 'TPP013', projectId: PROJ_8_ID, teamMemberName: 'Galih Wicaksono', teamMemberId: TEAM_6_ID, date: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(), status: 'Unpaid', fee: 1000000 },
    { id: 'TPP014', projectId: PROJ_9_ID, teamMemberName: 'Eka Saputra', teamMemberId: TEAM_4_ID, date: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(), status: 'Paid', fee: 1250000 },
    { id: 'TPP015', projectId: PROJ_10_ID, teamMemberName: 'Andi Pratama', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() + 21)).toISOString(), status: 'Unpaid', fee: 1250000 },
    { id: 'TPP016', projectId: PROJ_11_ID, teamMemberName: 'Andi Pratama', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), status: 'Paid', fee: 1500000 },
    { id: 'TPP017', projectId: PROJ_11_ID, teamMemberName: 'Fira Anjani', teamMemberId: TEAM_5_ID, date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), status: 'Paid', fee: 750000 },
    { id: 'TPP018', projectId: PROJ_13_ID, teamMemberName: 'Eka Saputra', teamMemberId: TEAM_4_ID, date: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString(), status: 'Unpaid', fee: 1250000 },
    { id: 'TPP019', projectId: PROJ_13_ID, teamMemberName: 'Doni Firmansyah', teamMemberId: TEAM_3_ID, date: new Date(new Date().setDate(new Date().getDate() - 14)).toISOString(), status: 'Unpaid', fee: 1000000 },
];

export const MOCK_TEAM_PAYMENT_RECORDS: TeamPaymentRecord[] = [
    { id: 'TPR001', recordNumber: 'PAY-FR-001', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() - 50)).toISOString(), projectPaymentIds: ['TPP001'], totalAmount: 1500000, vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' },
    { id: 'TPR002', recordNumber: 'PAY-FR-002', teamMemberId: TEAM_2_ID, date: new Date(new Date().setDate(new Date().getDate() - 50)).toISOString(), projectPaymentIds: ['TPP002'], totalAmount: 2000000, vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' },
    { id: 'TPR003', recordNumber: 'PAY-FR-003', teamMemberId: TEAM_4_ID, date: new Date(new Date().setDate(new Date().getDate() - 28)).toISOString(), projectPaymentIds: ['TPP014'], totalAmount: 1250000, vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' },
    { id: 'TPR004', recordNumber: 'PAY-FR-004', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), projectPaymentIds: ['TPP016'], totalAmount: 1500000, vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' },
    { id: 'TPR005', recordNumber: 'PAY-FR-005', teamMemberId: TEAM_5_ID, date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), projectPaymentIds: ['TPP017'], totalAmount: 750000, vendorSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' },
];

export const MOCK_REWARD_LEDGER_ENTRIES: RewardLedgerEntry[] = [
    { id: 'RLE001', teamMemberId: TEAM_2_ID, date: new Date(new Date().setDate(new Date().getDate() - 50)).toISOString(), description: 'Bonus Kinerja - Proyek PT SA', amount: 250000, projectId: PROJ_2_ID },
    { id: 'RLE002', teamMemberId: TEAM_1_ID, date: new Date(new Date().setDate(new Date().getDate() - 50)).toISOString(), description: 'Bonus Kinerja - Proyek PT SA', amount: 250000, projectId: PROJ_2_ID },
    { id: 'RLE003', teamMemberId: TEAM_2_ID, date: new Date(new Date().setDate(new Date().getDate() - 40)).toISOString(), description: 'Penarikan Saldo Hadiah', amount: -250000 },
];

export const MOCK_USER_PROFILE: Profile = {
    id: 'MOCK_PROFILE_1',
    user_id: 'MOCK_USER_1',
    fullName: 'Vena Admin',
    email: 'admin@vena.pictures',
    phone: '0895-4061-81407',
    companyName: 'Vena Pictures',
    website: 'https://vena.pictures',
    address: 'Jl. Fotografi No. 123, Jakarta Selatan',
    bankAccount: 'WBank - 1234567890 a/n Vena Pictures',
    authorizedSigner: 'Vena Admin',
    idNumber: '3201234567890001',
    bio: 'Layanan fotografi dan videografi profesional untuk momen tak terlupakan Anda. Berbasis di Jakarta, melayani seluruh Indonesia.',
    incomeCategories: ['DP Proyek', 'Pelunasan Proyek', 'Penjualan Cetak', 'Sewa Alat', 'Modal'],
    expenseCategories: ['Gaji Freelancer', 'Transportasi', 'Akomodasi', 'Konsumsi', 'Peralatan', 'Marketing', 'Operasional Kantor', 'Sewa Tempat', 'Cetak Album', 'Penarikan Hadiah Freelancer', 'Transfer Internal', 'Penutupan Anggaran'],
    projectTypes: ['Pernikahan', 'Lamaran', 'Prewedding', 'Korporat', 'Ulang Tahun', 'Produk', 'Keluarga'],
    eventTypes: ['Meeting Klien', 'Survey Lokasi', 'Libur', 'Workshop', 'Acara Internal', 'Lainnya'],
    assetCategories: ['Kamera', 'Lensa', 'Lighting', 'Komputer', 'Drone', 'Aksesoris', 'Lainnya'],
    sopCategories: ['Pernikahan', 'Korporat', 'Umum', 'Editing'],
    projectStatusConfig: [
        { id: 'status_1', name: 'Persiapan', color: '#6366f1', subStatuses: [{name: 'Briefing Internal', note: 'Rapat tim internal untuk membahas konsep.'}, {name: 'Survey Lokasi', note: 'Kunjungan ke lokasi acara jika diperlukan.'}], note: 'Tahap awal persiapan proyek.' },
        { id: 'status_2', name: 'Dikonfirmasi', color: '#3b82f6', subStatuses: [{name: 'Pembayaran DP', note: 'Menunggu konfirmasi pembayaran DP dari klien.'}, {name: 'Penjadwalan Tim', note: 'Mengalokasikan freelancer untuk proyek.'}], note: 'Proyek telah dikonfirmasi oleh klien.' },
        { id: 'status_3', name: 'Editing', color: '#8b5cf6', subStatuses: [{name: 'Seleksi Foto', note: 'Proses pemilihan foto terbaik oleh tim atau klien.'}, {name: 'Color Grading Video', note: 'Penyesuaian warna pada video.'}, {name: 'Music Scoring', note: 'Pemilihan musik latar untuk video.'}], note: 'Proses pasca-produksi.' },
        { id: 'status_4', name: 'Revisi', color: '#14b8a6', subStatuses: [], note: 'Tahap revisi berdasarkan masukan klien.' },
        { id: 'status_5', name: 'Cetak', color: '#f97316', subStatuses: [{name: 'Approval Desain Album', note: 'Menunggu persetujuan final desain album dari klien.'}, {name: 'Proses Cetak', note: 'Album dan foto sedang dalam proses pencetakan.'}, {name: 'QC Album', note: 'Pemeriksaan kualitas hasil cetakan.'}], note: 'Proses pencetakan output fisik.' },
        { id: 'status_6', name: 'Dikirim', color: '#06b6d4', subStatuses: [], note: 'Hasil akhir telah dikirim ke klien.' },
        { id: 'status_7', name: 'Selesai', color: '#10b981', subStatuses: [], note: 'Proyek telah selesai dan semua pembayaran lunas.' },
        { id: 'status_8', name: 'Dibatalkan', color: '#ef4444', subStatuses: [], note: 'Proyek dibatalkan oleh klien atau vendor.' },
    ],
    notificationSettings: { newProject: true, paymentConfirmation: true, deadlineReminder: true },
    securitySettings: { twoFactorEnabled: false },
    briefingTemplate: 'Halo tim,\nBerikut adalah briefing untuk acara besok.\n\nKey Persons:\n- [Nama CP Klien]\n- [Nama WO]\n\nJangan lupa:\n- Bawa baterai cadangan & memory card kosong.\n- Datang 1 jam sebelum acara dimulai.\n- Dress code: Hitam rapi.\n\nSemangat!',
    termsAndConditions: '📜 **Syarat & Ketentuan Umum**\n- Harga yang tertera dapat berubah sewaktu-waktu sebelum adanya kesepakatan.\n\n💰 **Pembayaran**\n- Pemesanan dianggap sah setelah pembayaran Uang Muka (DP) sebesar 50% dari total biaya.\n- Pelunasan wajib dilakukan paling lambat 3 (tiga) hari sebelum tanggal acara.\n\n⏱ **Pembatalan & Perubahan Jadwal**\n- Uang Muka (DP) yang telah dibayarkan tidak dapat dikembalikan (non-refundable) jika terjadi pembatalan dari pihak klien.\n- Perubahan jadwal dapat dilakukan maksimal 1 (satu) kali dengan konfirmasi selambat-lambatnya 14 hari sebelum tanggal acara, tergantung ketersediaan tim.\n\n📦 **Hasil Akhir**\n- Waktu pengerjaan hasil akhir (foto & video) adalah sesuai dengan yang tertera pada detail paket, dihitung setelah semua materi dan data dari klien kami terima.\n- Hak cipta hasil foto dan video tetap menjadi milik Vena Pictures. Klien mendapatkan hak guna pribadi dan non-komersial.\n- Vena Pictures berhak menggunakan hasil foto dan video untuk keperluan portofolio dan promosi dengan seizin klien.',
};