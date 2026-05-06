export interface Attachment {
  name: string;
  size: string;
}

export interface Email {
  id: string;
  sender: string;
  senderEmail: string;
  avatarColor: string;
  avatarImage: string;
  subject: string;
  preview: string;
  body: string;
  timestamp: string;
  isRead: boolean;
  isStarred: boolean;
  folder: 'inbox' | 'sent' | 'drafts' | 'trash';
}

export interface FolderCount {
  inbox: number;
  sent: number;
  drafts: number;
  trash: number;
}
