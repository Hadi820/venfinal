import { supabase } from './supabase';
import { 
  User, Client, Package, AddOn, Project, TeamMember, Transaction, Card, 
  FinancialPocket, TeamProjectPayment, TeamPaymentRecord, Lead, RewardLedgerEntry,
  Asset, ClientFeedback, Contract, Notification, SocialMediaPost, PromoCode, SOP, Profile
} from '../types';

// Helper function to convert database row to application type
const convertDatabaseToApp = {
  user: (row: any): User => ({
    id: row.id,
    email: row.email,
    password: row.password,
    fullName: row.full_name,
    role: row.role,
    permissions: row.permissions || []
  }),

  client: (row: any): Client => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    whatsapp: row.whatsapp,
    since: row.since,
    instagram: row.instagram,
    status: row.status,
    clientType: row.client_type,
    lastContact: row.last_contact,
    portalAccessId: row.portal_access_id
  }),

  package: (row: any): Package => ({
    id: row.id,
    name: row.name,
    price: row.price,
    physicalItems: row.physical_items || [],
    digitalItems: row.digital_items || [],
    processingTime: row.processing_time,
    defaultPrintingCost: row.default_printing_cost,
    defaultTransportCost: row.default_transport_cost,
    photographers: row.photographers,
    videographers: row.videographers
  }),

  addOn: (row: any): AddOn => ({
    id: row.id,
    name: row.name,
    price: row.price
  }),

  project: (row: any): Project => ({
    id: row.id,
    projectName: row.project_name,
    clientName: row.client_name,
    clientId: row.client_id,
    projectType: row.project_type,
    packageName: row.package_name,
    packageId: row.package_id,
    addOns: row.add_ons || [],
    date: row.date,
    deadlineDate: row.deadline_date,
    location: row.location,
    progress: row.progress,
    status: row.status,
    activeSubStatuses: row.active_sub_statuses || [],
  totalCost: typeof row.total_cost === 'number' ? row.total_cost : Number(row.total_cost ?? 0),
  amountPaid: typeof row.amount_paid === 'number' ? row.amount_paid : Number(row.amount_paid ?? 0),
    paymentStatus: row.payment_status,
    team: row.team || [],
    notes: row.notes,
    accommodation: row.accommodation,
    driveLink: row.drive_link,
    clientDriveLink: row.client_drive_link,
    finalDriveLink: row.final_drive_link,
    startTime: row.start_time,
    endTime: row.end_time,
    image: row.image,
    revisions: row.revisions || [],
    promoCodeId: row.promo_code_id,
    discountAmount: row.discount_amount,
    shippingDetails: row.shipping_details,
    dpProofUrl: row.dp_proof_url,
    printingDetails: row.printing_details || [],
  printingCost: typeof row.printing_cost === 'number' ? row.printing_cost : Number(row.printing_cost ?? 0),
  transportCost: typeof row.transport_cost === 'number' ? row.transport_cost : Number(row.transport_cost ?? 0),
  isEditingConfirmedByClient: row.is_editing_confirmed_by_client,
    isPrintingConfirmedByClient: row.is_printing_confirmed_by_client,
    isDeliveryConfirmedByClient: row.is_delivery_confirmed_by_client,
    confirmedSubStatuses: row.confirmed_sub_statuses || [],
    clientSubStatusNotes: row.client_sub_status_notes || {},
    subStatusConfirmationSentAt: row.sub_status_confirmation_sent_at || {},
    completedDigitalItems: row.completed_digital_items || [],
    invoiceSignature: row.invoice_signature,
    customSubStatuses: row.custom_sub_statuses || []
  }),

  teamMember: (row: any): TeamMember => ({
    id: row.id,
    name: row.name,
    role: row.role,
    email: row.email,
    phone: row.phone,
    standardFee: row.standard_fee,
    noRek: row.no_rek,
    rewardBalance: row.reward_balance,
    rating: row.rating,
    performanceNotes: row.performance_notes || [],
    portalAccessId: row.portal_access_id
  }),

  transaction: (row: any): Transaction => ({
    id: row.id,
    date: row.date,
    description: row.description,
    amount: row.amount,
    type: row.type,
    projectId: row.project_id,
    category: row.category,
    method: row.method,
    pocketId: row.pocket_id,
    cardId: row.card_id,
    printingItemId: row.printing_item_id,
    vendorSignature: row.vendor_signature
  }),

  card: (row: any): Card => ({
    id: row.id,
    cardHolderName: row.card_holder_name,
    bankName: row.bank_name,
    cardType: row.card_type,
    lastFourDigits: row.last_four_digits,
    expiryDate: row.expiry_date,
    balance: row.balance,
    colorGradient: row.color_gradient
  }),

  financialPocket: (row: any): FinancialPocket => ({
    id: row.id,
    name: row.name,
    description: row.description,
    icon: row.icon,
    type: row.type,
    amount: row.amount,
    goalAmount: row.goal_amount,
    lockEndDate: row.lock_end_date,
    members: row.members || [],
    sourceCardId: row.source_card_id
  }),

  teamProjectPayment: (row: any): TeamProjectPayment => ({
    id: row.id,
    projectId: row.project_id,
    teamMemberName: row.team_member_name,
    teamMemberId: row.team_member_id,
    date: row.date,
    status: row.status,
    fee: row.fee,
    reward: row.reward
  }),

  teamPaymentRecord: (row: any): TeamPaymentRecord => ({
    id: row.id,
    recordNumber: row.record_number,
    teamMemberId: row.team_member_id,
    date: row.date,
    projectPaymentIds: row.project_payment_ids || [],
    totalAmount: row.total_amount,
    vendorSignature: row.vendor_signature
  }),

  lead: (row: any): Lead => ({
    id: row.id,
    name: row.name,
    contactChannel: row.contact_channel,
    location: row.location,
    status: row.status,
    date: row.date,
    notes: row.notes,
    whatsapp: row.whatsapp
  }),

  rewardLedgerEntry: (row: any): RewardLedgerEntry => ({
    id: row.id,
    teamMemberId: row.team_member_id,
    date: row.date,
    description: row.description,
    amount: row.amount,
    projectId: row.project_id
  }),

  asset: (row: any): Asset => ({
    id: row.id,
    name: row.name,
    category: row.category,
    purchaseDate: row.purchase_date,
    purchasePrice: row.purchase_price,
    serialNumber: row.serial_number,
    status: row.status,
    notes: row.notes
  }),

  clientFeedback: (row: any): ClientFeedback => ({
    id: row.id,
    clientName: row.client_name,
    satisfaction: row.satisfaction,
    rating: row.rating,
    feedback: row.feedback,
    date: row.date
  }),

  contract: (row: any): Contract => ({
    id: row.id,
    contractNumber: row.contract_number,
    clientId: row.client_id,
    projectId: row.project_id,
    signingDate: row.signing_date,
    signingLocation: row.signing_location,
    clientName1: row.client_name1,
    clientAddress1: row.client_address1,
    clientPhone1: row.client_phone1,
    clientName2: row.client_name2,
    clientAddress2: row.client_address2,
    clientPhone2: row.client_phone2,
    shootingDuration: row.shooting_duration,
    guaranteedPhotos: row.guaranteed_photos,
    albumDetails: row.album_details,
    digitalFilesFormat: row.digital_files_format,
    otherItems: row.other_items,
    personnelCount: row.personnel_count,
    deliveryTimeframe: row.delivery_timeframe,
    dpDate: row.dp_date,
    finalPaymentDate: row.final_payment_date,
    cancellationPolicy: row.cancellation_policy,
    jurisdiction: row.jurisdiction,
    vendorSignature: row.vendor_signature,
    clientSignature: row.client_signature,
    createdAt: row.created_at
  }),

  notification: (row: any): Notification => ({
    id: row.id,
    title: row.title,
    message: row.message,
    timestamp: row.timestamp,
    isRead: row.is_read,
    icon: row.icon,
    link: row.link_view ? {
      view: row.link_view,
      action: row.link_action
    } : undefined
  }),

  socialMediaPost: (row: any): SocialMediaPost => ({
    id: row.id,
    projectId: row.project_id,
    clientName: row.client_name,
    postType: row.post_type,
    platform: row.platform,
    scheduledDate: row.scheduled_date,
    caption: row.caption,
    mediaUrl: row.media_url,
    status: row.status,
    notes: row.notes
  }),

  promoCode: (row: any): PromoCode => ({
    id: row.id,
    code: row.code,
    discountType: row.discount_type,
    discountValue: row.discount_value,
    isActive: row.is_active,
    usageCount: row.usage_count,
    maxUsage: row.max_usage,
    expiryDate: row.expiry_date,
    createdAt: row.created_at
  }),

  sop: (row: any): SOP => ({
    id: row.id,
    title: row.title,
    category: row.category,
    content: row.content,
    lastUpdated: row.last_updated
  }),

  profile: (row: any): Profile => ({
    id: row.id,
    user_id: row.user_id,
    fullName: row.full_name,
    email: row.email,
    phone: row.phone,
    companyName: row.company_name,
    website: row.website || '',
    address: row.address,
    bankAccount: row.bank_account,
    authorizedSigner: row.authorized_signer,
    idNumber: row.id_number,
    bio: row.bio || '',
    incomeCategories: row.income_categories || [],
    expenseCategories: row.expense_categories || [],
    projectTypes: row.project_types || [],
    eventTypes: row.event_types || [],
    assetCategories: row.asset_categories || [],
    sopCategories: row.sop_categories || [],
    projectStatusConfig: row.project_status_config || [],
    notificationSettings: row.notification_settings || { newProject: true, paymentConfirmation: true, deadlineReminder: true },
    securitySettings: row.security_settings || { twoFactorEnabled: false },
    briefingTemplate: row.briefing_template || '',
    termsAndConditions: row.terms_and_conditions,
    contractTemplate: row.contract_template
  })
};

// Helper function to convert application type to database format
const convertAppToDatabase = {
  user: (user: Omit<User, 'id'>): any => ({
    email: user.email,
    password: user.password,
    full_name: user.fullName,
    role: user.role,
    permissions: user.permissions || []
  }),

  client: (client: Omit<Client, 'id'>): any => ({
    name: client.name,
    email: client.email,
    phone: client.phone,
    whatsapp: client.whatsapp,
    since: client.since,
    instagram: client.instagram,
    status: client.status,
    client_type: client.clientType,
    last_contact: client.lastContact,
    portal_access_id: client.portalAccessId
  }),

  package: (pkg: Omit<Package, 'id'>): any => ({
    name: pkg.name,
    price: pkg.price,
    physical_items: pkg.physicalItems || [],
    digital_items: pkg.digitalItems || [],
    processing_time: pkg.processingTime,
    default_printing_cost: pkg.defaultPrintingCost,
    default_transport_cost: pkg.defaultTransportCost,
    photographers: pkg.photographers,
    videographers: pkg.videographers
  }),

  addOn: (addOn: Omit<AddOn, 'id'>): any => ({
    name: addOn.name,
    price: addOn.price
  }),

  project: (project: Partial<Project> | Omit<Project, 'id'>): any => {
    const payload: any = {};
    if (project.projectName !== undefined) payload.project_name = project.projectName;
    if (project.clientName !== undefined) payload.client_name = project.clientName;
    if (project.clientId !== undefined) payload.client_id = project.clientId !== '' ? project.clientId : null;
    if (project.projectType !== undefined) payload.project_type = project.projectType;
    if (project.packageName !== undefined) payload.package_name = project.packageName;
    if (project.packageId !== undefined) payload.package_id = project.packageId !== '' ? project.packageId : null;
    if (project.addOns !== undefined) payload.add_ons = project.addOns || [];
    if (project.date !== undefined) payload.date = project.date !== '' ? project.date : null;
    if (project.deadlineDate !== undefined) payload.deadline_date = project.deadlineDate !== '' ? project.deadlineDate : null;
    if (project.location !== undefined) payload.location = project.location;
    if (project.progress !== undefined) payload.progress = project.progress;
    if (project.status !== undefined) payload.status = project.status;
    if (project.activeSubStatuses !== undefined) payload.active_sub_statuses = project.activeSubStatuses || [];
    if (project.totalCost !== undefined) payload.total_cost = project.totalCost;
    if (project.amountPaid !== undefined) payload.amount_paid = project.amountPaid;
    if (project.paymentStatus !== undefined) payload.payment_status = project.paymentStatus;
    if (project.team !== undefined) payload.team = project.team || [];
    if (project.notes !== undefined) payload.notes = project.notes;
    if (project.accommodation !== undefined) payload.accommodation = project.accommodation;
    if (project.driveLink !== undefined) payload.drive_link = project.driveLink;
    if (project.clientDriveLink !== undefined) payload.client_drive_link = project.clientDriveLink;
    if (project.finalDriveLink !== undefined) payload.final_drive_link = project.finalDriveLink;
    if (project.startTime !== undefined) payload.start_time = project.startTime;
    if (project.endTime !== undefined) payload.end_time = project.endTime;
    if (project.image !== undefined) payload.image = project.image;
    if (project.revisions !== undefined) payload.revisions = project.revisions || [];
    if (project.promoCodeId !== undefined) payload.promo_code_id = project.promoCodeId !== '' ? project.promoCodeId : null;
    if (project.discountAmount !== undefined) payload.discount_amount = project.discountAmount || 0;
    if (project.shippingDetails !== undefined) payload.shipping_details = project.shippingDetails;
    if (project.dpProofUrl !== undefined) payload.dp_proof_url = project.dpProofUrl;
    if (project.printingDetails !== undefined) payload.printing_details = project.printingDetails || [];
    if (project.printingCost !== undefined) payload.printing_cost = project.printingCost || 0;
    if (project.transportCost !== undefined) payload.transport_cost = project.transportCost || 0;
    if (project.isEditingConfirmedByClient !== undefined) payload.is_editing_confirmed_by_client = project.isEditingConfirmedByClient || false;
    if (project.isPrintingConfirmedByClient !== undefined) payload.is_printing_confirmed_by_client = project.isPrintingConfirmedByClient || false;
    if (project.isDeliveryConfirmedByClient !== undefined) payload.is_delivery_confirmed_by_client = project.isDeliveryConfirmedByClient || false;
    if (project.confirmedSubStatuses !== undefined) payload.confirmed_sub_statuses = project.confirmedSubStatuses || [];
    if (project.clientSubStatusNotes !== undefined) payload.client_sub_status_notes = project.clientSubStatusNotes || {};
    if (project.subStatusConfirmationSentAt !== undefined) payload.sub_status_confirmation_sent_at = project.subStatusConfirmationSentAt || {};
    if (project.completedDigitalItems !== undefined) payload.completed_digital_items = project.completedDigitalItems || [];
    if (project.invoiceSignature !== undefined) payload.invoice_signature = project.invoiceSignature;
    if (project.customSubStatuses !== undefined) payload.custom_sub_statuses = project.customSubStatuses || [];

    return payload;
  },

  teamMember: (member: Omit<TeamMember, 'id'>): any => ({
    name: member.name,
    role: member.role,
    email: member.email,
    phone: member.phone,
    standard_fee: member.standardFee,
    no_rek: member.noRek,
    reward_balance: member.rewardBalance,
  // Send NULL for rating when it's not a valid 1..5 number (e.g. 0 or undefined)
  rating: (typeof member.rating === 'number' && Number.isFinite(member.rating) && member.rating >= 1 && member.rating <= 5) ? member.rating : null,
    performance_notes: member.performanceNotes || [],
    portal_access_id: member.portalAccessId
  }),

  transaction: (transaction: Partial<Transaction>): any => {
    const payload: any = {};
    if (transaction.date !== undefined) payload.date = transaction.date;
    if (transaction.description !== undefined) payload.description = transaction.description;
    if (transaction.amount !== undefined) payload.amount = transaction.amount;
    if (transaction.type !== undefined) payload.type = transaction.type;
    if (transaction.projectId !== undefined) payload.project_id = transaction.projectId !== '' ? transaction.projectId : null;
    if (transaction.category !== undefined) payload.category = transaction.category;
    if (transaction.method !== undefined) payload.method = transaction.method;
    if (transaction.pocketId !== undefined) payload.pocket_id = transaction.pocketId !== '' ? transaction.pocketId : null;
    if (transaction.cardId !== undefined) payload.card_id = transaction.cardId !== '' ? transaction.cardId : null;
    if (transaction.printingItemId !== undefined) payload.printing_item_id = transaction.printingItemId !== '' ? transaction.printingItemId : null;
    if (transaction.vendorSignature !== undefined) payload.vendor_signature = transaction.vendorSignature;
    return payload;
  },

  card: (card: Omit<Card, 'id'>): any => ({
    card_holder_name: card.cardHolderName,
    bank_name: card.bankName,
    card_type: card.cardType,
    last_four_digits: card.lastFourDigits,
    expiry_date: card.expiryDate,
    balance: card.balance,
    color_gradient: card.colorGradient
  }),

  financialPocket: (pocket: Omit<FinancialPocket, 'id'>): any => ({
    name: pocket.name,
    description: pocket.description,
    icon: pocket.icon,
    type: pocket.type,
    amount: pocket.amount,
    goal_amount: pocket.goalAmount,
    lock_end_date: pocket.lockEndDate,
    members: pocket.members || [],
    source_card_id: pocket.sourceCardId
  }),

  teamProjectPayment: (payment: Partial<TeamProjectPayment> | Omit<TeamProjectPayment, 'id'>): any => {
    const payload: any = {};
    if ((payment as any).projectId !== undefined) payload.project_id = (payment as any).projectId && (payment as any).projectId !== '' ? (payment as any).projectId : null;
    if ((payment as any).teamMemberName !== undefined) payload.team_member_name = (payment as any).teamMemberName;
    if ((payment as any).teamMemberId !== undefined) payload.team_member_id = (payment as any).teamMemberId && (payment as any).teamMemberId !== '' ? (payment as any).teamMemberId : null;
    if ((payment as any).date !== undefined) payload.date = (payment as any).date !== '' ? (payment as any).date : null;
    if ((payment as any).status !== undefined) payload.status = (payment as any).status;
    if ((payment as any).fee !== undefined) payload.fee = (payment as any).fee;
    if ((payment as any).reward !== undefined) payload.reward = (payment as any).reward;
    return payload;
  },



  teamPaymentRecord: (record: Omit<TeamPaymentRecord, 'id'>): any => {
    // Build payload only with defined fields to support partial updates
    // (avoid sending undefined keys which can null out other columns)
    const payload: any = {};
    if ((record as any).recordNumber !== undefined) payload.record_number = (record as any).recordNumber;
    if ((record as any).teamMemberId !== undefined) payload.team_member_id = (record as any).teamMemberId && (record as any).teamMemberId !== '' ? (record as any).teamMemberId : null;
    if ((record as any).date !== undefined) payload.date = (record as any).date !== '' ? (record as any).date : null;
    if ((record as any).projectPaymentIds !== undefined) payload.project_payment_ids = (record as any).projectPaymentIds || [];
    if ((record as any).totalAmount !== undefined) payload.total_amount = (record as any).totalAmount;
    if ((record as any).vendorSignature !== undefined) payload.vendor_signature = (record as any).vendorSignature;
    return payload;
  },

  lead: (lead: Omit<Lead, 'id'>): any => ({
    name: lead.name,
    contact_channel: lead.contactChannel,
    location: lead.location,
    status: lead.status,
    date: lead.date,
    notes: lead.notes,
    whatsapp: lead.whatsapp
  }),

  rewardLedgerEntry: (entry: Omit<RewardLedgerEntry, 'id'>): any => ({
    team_member_id: entry.teamMemberId,
    date: entry.date,
    description: entry.description,
    amount: entry.amount,
  project_id: entry.projectId && entry.projectId !== '' ? entry.projectId : null
  }),

  asset: (asset: Omit<Asset, 'id'>): any => ({
    name: asset.name,
    category: asset.category,
    purchase_date: asset.purchaseDate,
    purchase_price: asset.purchasePrice,
    serial_number: asset.serialNumber,
    status: asset.status,
    notes: asset.notes
  }),

  clientFeedback: (feedback: Omit<ClientFeedback, 'id'>): any => ({
    client_name: feedback.clientName,
    satisfaction: feedback.satisfaction,
    rating: feedback.rating,
    feedback: feedback.feedback,
    date: feedback.date
  }),

  contract: (contract: Partial<Contract> | Omit<Contract, 'id'>): any => {
    // Build payload only with provided keys. This prevents update calls from
    // overwriting columns with NULL when the field wasn't included in the
    // partial update. For date columns, convert empty-string -> null.
    const payload: any = {};

    if (contract.contractNumber !== undefined) payload.contract_number = contract.contractNumber;
    if (contract.clientId !== undefined) payload.client_id = contract.clientId !== '' ? contract.clientId : null;
    if (contract.projectId !== undefined) payload.project_id = contract.projectId !== '' ? contract.projectId : null;
    if (contract.signingDate !== undefined) payload.signing_date = contract.signingDate !== '' ? contract.signingDate : null;
    if (contract.signingLocation !== undefined) payload.signing_location = contract.signingLocation;
    if (contract.clientName1 !== undefined) payload.client_name1 = contract.clientName1;
    if (contract.clientAddress1 !== undefined) payload.client_address1 = contract.clientAddress1;
    if (contract.clientPhone1 !== undefined) payload.client_phone1 = contract.clientPhone1;
    if (contract.clientName2 !== undefined) payload.client_name2 = contract.clientName2;
    if (contract.clientAddress2 !== undefined) payload.client_address2 = contract.clientAddress2;
    if (contract.clientPhone2 !== undefined) payload.client_phone2 = contract.clientPhone2;
    if (contract.shootingDuration !== undefined) payload.shooting_duration = contract.shootingDuration;
    if (contract.guaranteedPhotos !== undefined) payload.guaranteed_photos = contract.guaranteedPhotos;
    if (contract.albumDetails !== undefined) payload.album_details = contract.albumDetails;
    if (contract.digitalFilesFormat !== undefined) payload.digital_files_format = contract.digitalFilesFormat;
    if (contract.otherItems !== undefined) payload.other_items = contract.otherItems;
    if (contract.personnelCount !== undefined) payload.personnel_count = contract.personnelCount;
    if (contract.deliveryTimeframe !== undefined) payload.delivery_timeframe = contract.deliveryTimeframe;
    if (contract.dpDate !== undefined) payload.dp_date = contract.dpDate !== '' ? contract.dpDate : null;
    if (contract.finalPaymentDate !== undefined) payload.final_payment_date = contract.finalPaymentDate !== '' ? contract.finalPaymentDate : null;
    if (contract.cancellationPolicy !== undefined) payload.cancellation_policy = contract.cancellationPolicy;
    if (contract.jurisdiction !== undefined) payload.jurisdiction = contract.jurisdiction;
    if (contract.vendorSignature !== undefined) payload.vendor_signature = contract.vendorSignature;
    if (contract.clientSignature !== undefined) payload.client_signature = contract.clientSignature;

    return payload;
  },

  notification: (notification: Omit<Notification, 'id'>): any => ({
    title: notification.title,
    message: notification.message,
    timestamp: notification.timestamp,
    is_read: notification.isRead,
    icon: notification.icon,
    link_view: notification.link?.view,
    link_action: notification.link?.action
  }),

  socialMediaPost: (post: Omit<SocialMediaPost, 'id'>): any => ({
    project_id: post.projectId,
    client_name: post.clientName,
    post_type: post.postType,
    platform: post.platform,
    scheduled_date: post.scheduledDate,
    caption: post.caption,
    media_url: post.mediaUrl,
    status: post.status,
    notes: post.notes
  }),

  promoCode: (code: Omit<PromoCode, 'id'>): any => ({
    code: code.code,
    discount_type: code.discountType,
    discount_value: code.discountValue,
    is_active: code.isActive,
    usage_count: code.usageCount,
    max_usage: code.maxUsage,
    expiry_date: code.expiryDate
  }),

  sop: (sop: Omit<SOP, 'id'>): any => ({
    title: sop.title,
    category: sop.category,
    content: sop.content,
    last_updated: sop.lastUpdated
  }),

  profile: (profile: Partial<Profile>): any => ({
    user_id: profile.user_id,
    full_name: profile.fullName,
    email: profile.email,
    phone: profile.phone,
    company_name: profile.companyName,
    website: profile.website,
    address: profile.address,
    bank_account: profile.bankAccount,
    authorized_signer: profile.authorizedSigner,
    id_number: profile.idNumber,
    bio: profile.bio,
    income_categories: profile.incomeCategories,
    expense_categories: profile.expenseCategories,
    project_types: profile.projectTypes,
    event_types: profile.eventTypes,
    asset_categories: profile.assetCategories,
    sop_categories: profile.sopCategories,
    project_status_config: profile.projectStatusConfig,
    notification_settings: profile.notificationSettings,
    security_settings: profile.securitySettings,
    briefing_template: profile.briefingTemplate,
    terms_and_conditions: profile.termsAndConditions,
    contract_template: profile.contractTemplate
  })
};

// Generic CRUD operations
export const supabaseService = {
  // Users
  async getUsers(): Promise<User[]> {
    const { data, error } = await supabase.from('users').select('*').order('full_name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.user);
  },

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const { data, error } = await supabase.from('users').insert(convertAppToDatabase.user(user)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.user(data);
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const { data, error } = await supabase.from('users').update(convertAppToDatabase.user(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.user(data);
  },

  async deleteUser(id: string): Promise<void> {
    const { error } = await supabase.from('users').delete().eq('id', id);
    if (error) throw error;
  },

  // Clients
  async getClients(): Promise<Client[]> {
    const { data, error } = await supabase.from('clients').select('*').order('name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.client);
  },

  async createClient(client: Omit<Client, 'id'>): Promise<Client> {
    const { data, error } = await supabase.from('clients').insert(convertAppToDatabase.client(client)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.client(data);
  },

  async updateClient(id: string, updates: Partial<Client>): Promise<Client> {
    const { data, error } = await supabase.from('clients').update(convertAppToDatabase.client(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.client(data);
  },

  async deleteClient(id: string): Promise<void> {
    const { error } = await supabase.from('clients').delete().eq('id', id);
    if (error) throw error;
  },

  // Packages
  async getPackages(): Promise<Package[]> {
    const { data, error } = await supabase.from('packages').select('*').order('name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.package);
  },

  async createPackage(pkg: Omit<Package, 'id'>): Promise<Package> {
    const { data, error } = await supabase.from('packages').insert(convertAppToDatabase.package(pkg)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.package(data);
  },

  async updatePackage(id: string, updates: Partial<Package>): Promise<Package> {
    const { data, error } = await supabase.from('packages').update(convertAppToDatabase.package(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.package(data);
  },

  async deletePackage(id: string): Promise<void> {
    const { error } = await supabase.from('packages').delete().eq('id', id);
    if (error) throw error;
  },

  // Add-ons
  async getAddOns(): Promise<AddOn[]> {
    const { data, error } = await supabase.from('add_ons').select('*').order('name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.addOn);
  },

  async createAddOn(addOn: Omit<AddOn, 'id'>): Promise<AddOn> {
    const { data, error } = await supabase.from('add_ons').insert(convertAppToDatabase.addOn(addOn)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.addOn(data);
  },

  async updateAddOn(id: string, updates: Partial<AddOn>): Promise<AddOn> {
    const { data, error } = await supabase.from('add_ons').update(convertAppToDatabase.addOn(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.addOn(data);
  },

  async deleteAddOn(id: string): Promise<void> {
    const { error } = await supabase.from('add_ons').delete().eq('id', id);
    if (error) throw error;
  },

  // Projects
  async getProjects(): Promise<Project[]> {
    const { data, error } = await supabase.from('projects').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.project);
  },

  async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    const { data, error } = await supabase.from('projects').insert(convertAppToDatabase.project(project)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.project(data);
  },

  async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    const { data, error } = await supabase.from('projects').update(convertAppToDatabase.project(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.project(data);
  },

  async deleteProject(id: string): Promise<void> {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
  },

  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    const { data, error } = await supabase.from('team_members').select('*').order('name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.teamMember);
  },

  async createTeamMember(member: Omit<TeamMember, 'id'>): Promise<TeamMember> {
    const { data, error } = await supabase.from('team_members').insert(convertAppToDatabase.teamMember(member)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.teamMember(data);
  },

  async updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember> {
    const { data, error } = await supabase.from('team_members').update(convertAppToDatabase.teamMember(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.teamMember(data);
  },

  async deleteTeamMember(id: string): Promise<void> {
    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (error) throw error;
  },

  // Transactions
  async getTransactions(): Promise<Transaction[]> {
    const { data, error } = await supabase.from('transactions').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.transaction);
  },

  async createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
    const { data, error } = await supabase.from('transactions').insert(convertAppToDatabase.transaction(transaction)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.transaction(data);
  },

  async updateTransaction(id: string, updates: Partial<Transaction>): Promise<Transaction> {
    const { data, error } = await supabase.from('transactions').update(convertAppToDatabase.transaction(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.transaction(data);
  },

  async deleteTransaction(id: string): Promise<void> {
    const { error } = await supabase.from('transactions').delete().eq('id', id);
    if (error) throw error;
  },

  // Cards
  async getCards(): Promise<Card[]> {
    const { data, error } = await supabase.from('cards').select('*').order('bank_name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.card);
  },

  async createCard(card: Omit<Card, 'id'>): Promise<Card> {
    const { data, error } = await supabase.from('cards').insert(convertAppToDatabase.card(card)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.card(data);
  },

  async updateCard(id: string, updates: Partial<Card>): Promise<Card> {
    const { data, error } = await supabase.from('cards').update(convertAppToDatabase.card(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.card(data);
  },

  async deleteCard(id: string): Promise<void> {
    const { error } = await supabase.from('cards').delete().eq('id', id);
    if (error) throw error;
  },

  // Financial Pockets
  async getFinancialPockets(): Promise<FinancialPocket[]> {
    const { data, error } = await supabase.from('financial_pockets').select('*').order('name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.financialPocket);
  },

  async createFinancialPocket(pocket: Omit<FinancialPocket, 'id'>): Promise<FinancialPocket> {
    const { data, error } = await supabase.from('financial_pockets').insert(convertAppToDatabase.financialPocket(pocket)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.financialPocket(data);
  },

  async updateFinancialPocket(id: string, updates: Partial<FinancialPocket>): Promise<FinancialPocket> {
    const { data, error } = await supabase.from('financial_pockets').update(convertAppToDatabase.financialPocket(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.financialPocket(data);
  },

  async deleteFinancialPocket(id: string): Promise<void> {
    const { error } = await supabase.from('financial_pockets').delete().eq('id', id);
    if (error) throw error;
  },

  // Team Project Payments
  async getTeamProjectPayments(): Promise<TeamProjectPayment[]> {
    const { data, error } = await supabase.from('team_project_payments').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.teamProjectPayment);
  },

  async createTeamProjectPayment(payment: Omit<TeamProjectPayment, 'id'>): Promise<TeamProjectPayment> {
    const { data, error } = await supabase.from('team_project_payments').insert(convertAppToDatabase.teamProjectPayment(payment)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.teamProjectPayment(data);
  },

  async updateTeamProjectPayment(id: string, updates: Partial<TeamProjectPayment>): Promise<TeamProjectPayment> {
    const { data, error } = await supabase.from('team_project_payments').update(convertAppToDatabase.teamProjectPayment(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.teamProjectPayment(data);
  },

  async deleteTeamProjectPayment(id: string): Promise<void> {
    const { error } = await supabase.from('team_project_payments').delete().eq('id', id);
    if (error) throw error;
  },

  // Team Payment Records
  async getTeamPaymentRecords(): Promise<TeamPaymentRecord[]> {
    const { data, error } = await supabase.from('team_payment_records').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.teamPaymentRecord);
  },

  async createTeamPaymentRecord(record: Omit<TeamPaymentRecord, 'id'>): Promise<TeamPaymentRecord> {
    const { data, error } = await supabase.from('team_payment_records').insert(convertAppToDatabase.teamPaymentRecord(record)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.teamPaymentRecord(data);
  },

  async updateTeamPaymentRecord(id: string, updates: Partial<TeamPaymentRecord>): Promise<TeamPaymentRecord> {
    const { data, error } = await supabase.from('team_payment_records').update(convertAppToDatabase.teamPaymentRecord(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.teamPaymentRecord(data);
  },

  async deleteTeamPaymentRecord(id: string): Promise<void> {
    const { error } = await supabase.from('team_payment_records').delete().eq('id', id);
    if (error) throw error;
  },

  // Leads
  async getLeads(): Promise<Lead[]> {
    const { data, error } = await supabase.from('leads').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.lead);
  },

  async createLead(lead: Omit<Lead, 'id'>): Promise<Lead> {
    const { data, error } = await supabase.from('leads').insert(convertAppToDatabase.lead(lead)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.lead(data);
  },

  async updateLead(id: string, updates: Partial<Lead>): Promise<Lead> {
    const { data, error } = await supabase.from('leads').update(convertAppToDatabase.lead(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.lead(data);
  },

  async deleteLead(id: string): Promise<void> {
    const { error } = await supabase.from('leads').delete().eq('id', id);
    if (error) throw error;
  },

  // Reward Ledger Entries
  async getRewardLedgerEntries(): Promise<RewardLedgerEntry[]> {
    const { data, error } = await supabase.from('reward_ledger_entries').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.rewardLedgerEntry);
  },

  async createRewardLedgerEntry(entry: Omit<RewardLedgerEntry, 'id'>): Promise<RewardLedgerEntry> {
    const { data, error } = await supabase.from('reward_ledger_entries').insert(convertAppToDatabase.rewardLedgerEntry(entry)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.rewardLedgerEntry(data);
  },

  async updateRewardLedgerEntry(id: string, updates: Partial<RewardLedgerEntry>): Promise<RewardLedgerEntry> {
    const { data, error } = await supabase.from('reward_ledger_entries').update(convertAppToDatabase.rewardLedgerEntry(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.rewardLedgerEntry(data);
  },

  async deleteRewardLedgerEntry(id: string): Promise<void> {
    const { error } = await supabase.from('reward_ledger_entries').delete().eq('id', id);
    if (error) throw error;
  },

  // Assets
  async getAssets(): Promise<Asset[]> {
    const { data, error } = await supabase.from('assets').select('*').order('name');
    if (error) throw error;
    return data.map(convertDatabaseToApp.asset);
  },

  async createAsset(asset: Omit<Asset, 'id'>): Promise<Asset> {
    const { data, error } = await supabase.from('assets').insert(convertAppToDatabase.asset(asset)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.asset(data);
  },

  async updateAsset(id: string, updates: Partial<Asset>): Promise<Asset> {
    const { data, error } = await supabase.from('assets').update(convertAppToDatabase.asset(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.asset(data);
  },

  async deleteAsset(id: string): Promise<void> {
    const { error } = await supabase.from('assets').delete().eq('id', id);
    if (error) throw error;
  },

  // Client Feedback
  async getClientFeedback(): Promise<ClientFeedback[]> {
    const { data, error } = await supabase.from('client_feedback').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.clientFeedback);
  },

  async createClientFeedback(feedback: Omit<ClientFeedback, 'id'>): Promise<ClientFeedback> {
    const { data, error } = await supabase.from('client_feedback').insert(convertAppToDatabase.clientFeedback(feedback)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.clientFeedback(data);
  },

  async updateClientFeedback(id: string, updates: Partial<ClientFeedback>): Promise<ClientFeedback> {
    const { data, error } = await supabase.from('client_feedback').update(convertAppToDatabase.clientFeedback(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.clientFeedback(data);
  },

  async deleteClientFeedback(id: string): Promise<void> {
    const { error } = await supabase.from('client_feedback').delete().eq('id', id);
    if (error) throw error;
  },

  // Contracts
  async getContracts(): Promise<Contract[]> {
    const { data, error } = await supabase.from('contracts').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.contract);
  },

  async createContract(contract: Omit<Contract, 'id'>): Promise<Contract> {
    const { data, error } = await supabase.from('contracts').insert(convertAppToDatabase.contract(contract)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.contract(data);
  },

  async updateContract(id: string, updates: Partial<Contract>): Promise<Contract> {
    const { data, error } = await supabase.from('contracts').update(convertAppToDatabase.contract(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.contract(data);
  },

  async deleteContract(id: string): Promise<void> {
    const { error } = await supabase.from('contracts').delete().eq('id', id);
    if (error) throw error;
  },

  // Notifications
  async getNotifications(): Promise<Notification[]> {
    const { data, error } = await supabase.from('notifications').select('*').order('timestamp', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.notification);
  },

  async createNotification(notification: Omit<Notification, 'id'>): Promise<Notification> {
    const { data, error } = await supabase.from('notifications').insert(convertAppToDatabase.notification(notification)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.notification(data);
  },

  async updateNotification(id: string, updates: Partial<Notification>): Promise<Notification> {
    const { data, error } = await supabase.from('notifications').update(convertAppToDatabase.notification(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.notification(data);
  },

  async deleteNotification(id: string): Promise<void> {
    const { error } = await supabase.from('notifications').delete().eq('id', id);
    if (error) throw error;
  },

  // Social Media Posts
  async getSocialMediaPosts(): Promise<SocialMediaPost[]> {
    const { data, error } = await supabase.from('social_media_posts').select('*').order('scheduled_date', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.socialMediaPost);
  },

  async createSocialMediaPost(post: Omit<SocialMediaPost, 'id'>): Promise<SocialMediaPost> {
    const { data, error } = await supabase.from('social_media_posts').insert(convertAppToDatabase.socialMediaPost(post)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.socialMediaPost(data);
  },

  async updateSocialMediaPost(id: string, updates: Partial<SocialMediaPost>): Promise<SocialMediaPost> {
    const { data, error } = await supabase.from('social_media_posts').update(convertAppToDatabase.socialMediaPost(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.socialMediaPost(data);
  },

  async deleteSocialMediaPost(id: string): Promise<void> {
    const { error } = await supabase.from('social_media_posts').delete().eq('id', id);
    if (error) throw error;
  },

  // Promo Codes
  async getPromoCodes(): Promise<PromoCode[]> {
    const { data, error } = await supabase.from('promo_codes').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return data.map(convertDatabaseToApp.promoCode);
  },

  async createPromoCode(code: Omit<PromoCode, 'id'>): Promise<PromoCode> {
    const { data, error } = await supabase.from('promo_codes').insert(convertAppToDatabase.promoCode(code)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.promoCode(data);
  },

  async updatePromoCode(id: string, updates: Partial<PromoCode>): Promise<PromoCode> {
    const { data, error } = await supabase.from('promo_codes').update(convertAppToDatabase.promoCode(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.promoCode(data);
  },

  async deletePromoCode(id: string): Promise<void> {
    const { error } = await supabase.from('promo_codes').delete().eq('id', id);
    if (error) throw error;
  },

  // SOPs
  async getSOPs(): Promise<SOP[]> {
    const { data, error } = await supabase.from('sops').select('*').order('title');
    if (error) throw error;
    return data.map(convertDatabaseToApp.sop);
  },

  async createSOP(sop: Omit<SOP, 'id'>): Promise<SOP> {
    const { data, error } = await supabase.from('sops').insert(convertAppToDatabase.sop(sop)).select().single();
    if (error) throw error;
    return convertDatabaseToApp.sop(data);
  },

  async updateSOP(id: string, updates: Partial<SOP>): Promise<SOP> {
    const { data, error } = await supabase.from('sops').update(convertAppToDatabase.sop(updates as any)).eq('id', id).select().single();
    if (error) throw error;
    return convertDatabaseToApp.sop(data);
  },

  async deleteSOP(id: string): Promise<void> {
    const { error } = await supabase.from('sops').delete().eq('id', id);
    if (error) throw error;
  },

  // Profile
  async getProfile(): Promise<Profile | null> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // No rows found
      throw error;
    }
    return data ? convertDatabaseToApp.profile(data) : null;
  },

  async createProfile(profileData: Omit<Profile, 'id' | 'user_id'>): Promise<Profile> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");

    const newProfile = {
      ...profileData,
      user_id: user.id,
      email: user.email // Ensure email is from the authenticated user
    };

    const { data, error } = await supabase
      .from('profiles')
      .insert(convertAppToDatabase.profile(newProfile as Profile))
      .select()
      .single();

    if (error) throw error;
    return convertDatabaseToApp.profile(data);
  },

  async updateProfile(id: string, updates: Partial<Profile>): Promise<Profile> {
    // RLS ensures the user can only update their own profile.
    const { data, error } = await supabase
      .from('profiles')
      .update(convertAppToDatabase.profile(updates))
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return convertDatabaseToApp.profile(data);
  }
};