import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Email, FolderCount } from '../models/email.model';
const MOCK_EMAILS: Email[] = [
  {
    id: '1',
    sender: 'Aditya Sharma',
    senderEmail: 'aditya.sharma@mail.com',
    avatarColor: '#7c6af7',
    avatarImage:  'assets/avatars/img4.png',
    subject: 'Q3 Design System Review — Final Assets Ready',
    preview: 'Hey! I just pushed the final Figma components to the shared workspace. Everything is annotated and ready for the handoff meeting.',
    body: `<p>Hey team,</p>
<p>I just pushed the final Figma components to the shared workspace. Everything is annotated and production-ready for tomorrow's handoff meeting.</p>
<p>Key highlights in this update:</p>
<ul>
  <li>Token system fully documented (color, spacing, typography)</li>
  <li>Dark mode variants for all 48 components</li>
  <li>Accessibility annotations on interactive elements</li>
  <li>Motion specs for transitions and micro-interactions</li>
</ul>
<p>The export files are attached — let me know if you need any format adjustments before dev picks them up.</p>
<p>Excited to see this shipped! 🎉</p>
<p>— Priya</p>`,
    timestamp: '2024-01-15T09:30:00Z',
    isRead: false,
    isStarred: true,
    folder: 'inbox',
  },
  {
    id: '2',
    sender: 'Rahul Menon',
    senderEmail: 'r.menon@mail.com',
    avatarColor: '#e8673c',
    avatarImage:  'assets/avatars/img2.png',
    subject: 'Partnership Proposal — Confidential',
    preview: 'Following up on our call last week. I have attached the revised terms document that addresses the concerns raised by your legal team.',
    body: `<p>Dear team,</p>
<p>Following up on our call last week. I have attached the revised terms document that addresses the concerns raised by your legal team.</p>
<p>The main changes in version 2.1:</p>
<ul>
  <li>Revised revenue share from 30% to 25% for year one</li>
  <li>Added exit clause with 90-day notice period</li>
  <li>Clarified IP ownership for co-developed features</li>
</ul>
<p>Please review and let me know if we can schedule a signing call before end of month.</p>
<p>Best,<br>Rahul</p>`,
    timestamp: '2024-01-15T08:12:00Z',
    isRead: false,
    isStarred: false,
    folder: 'inbox',
  },
  {
    id: '3',
    sender: 'Ajay Krishnan',
    senderEmail: 'ananya@mail.com',
    avatarColor: '#22c55e',
    avatarImage:  'assets/avatars/img3.png',
    subject: 'Goa trip itinerary — let\'s finalise!',
    preview: 'Okay so I have mapped out the whole 5-day plan. Beaches, food, one day trip to Dudhsagar. You are going to love it.',
    body: `<p>Hi all!</p>
<p>Okay so I've mapped out the entire 5-day itinerary and honestly I'm very proud of this one. Here's the plan:</p>
<p><strong>Day 1:</strong> Arrive in Goa, check in to the villa, evening at Baga beach<br>
<strong>Day 2:</strong> Old Goa churches + Panjim market + sunset at Dona Paula<br>
<strong>Day 3:</strong> Full day trip to Dudhsagar waterfalls (booking jeeps!)<br>
<strong>Day 4:</strong> South Goa — Palolem beach, seafood lunch, chill day<br>
<strong>Day 5:</strong> Morning yoga, brunch, depart</p>
<p>I have attached the hotel options and approximate costs. We need to finalise the dates before the 20th to get the early bird prices!</p>
<p>Can't wait 🌊</p>
<p>— Ananya</p>`,
    timestamp: '2024-01-14T19:45:00Z',
    isRead: true,
    isStarred: true,
    folder: 'inbox',
  },
  
  {
    id: '4',
    sender: 'Meenan ',
    senderEmail: 'meera.nair@mail.com',
    avatarColor: '#f59e0b',
    avatarImage:  'assets/avatars/img5.png',
    subject: 'Invoice #INV-2024-089 for January Retainer',
    preview: 'Please find attached the invoice for January design retainer services. Payment due by 31st January.',
    body: `<p>Hi,</p>
<p>Please find attached the invoice for January 2024 design retainer services.</p>
<p><strong>Invoice Details:</strong><br>
Invoice #: INV-2024-089<br>
Period: January 1–31, 2024<br>
Amount: ₹85,000 + GST<br>
Due Date: January 31, 2024</p>
<p>You can transfer to the bank account on file or use the UPI QR in the attachment.</p>
<p>Thank you for the continued collaboration!</p>
<p>Warm regards,<br>Meera</p>`,
    timestamp: '2024-01-13T11:00:00Z',
    isRead: true,
    isStarred: false,
    folder: 'inbox',
   
  },
  {
    id: '6',
    sender: 'You',
    senderEmail: 'me@mail.com',
    avatarColor: '#6366f1',
    avatarImage:  'assets/avatars/img1.png',
    subject: 'Re: Product roadmap for H1 2024',
    preview: 'Thanks for sharing the updated roadmap. I have added my comments inline — the authentication flow needs to move to Q1.',
    body: `<p>Hi Arjun,</p>
<p>Thanks for sharing the updated roadmap. I've added my comments inline — the main thing I want to flag is that the authentication flow really needs to move to Q1 rather than Q2. We have three enterprise clients waiting on SSO before they can go live.</p>
<p>Otherwise the prioritisation looks solid. The AI search feature in Q3 is ambitious but achievable if we keep the scope tight.</p>
<p>Let's sync on Thursday to align before you present to the board.</p>
<p>Cheers</p>`,
    timestamp: '2024-01-12T14:30:00Z',
    isRead: true,
    isStarred: false,
    folder: 'sent',
    
  },
  {
    id: '7',
    sender: 'You',
    senderEmail: 'me@mail.com',
    avatarColor: '#6366f1',
    avatarImage:  'assets/avatars/img1.png',
    subject: 'Weekend plan — dinner at Smoke House?',
    preview: 'Hey! Are you free Saturday evening? Was thinking Smoke House Deli around 7:30. Let me know and I will make a reservation.',
    body: `<p>Hey!</p>
<p>Are you free Saturday evening? Was thinking Smoke House Deli around 7:30 — they have that new tasting menu I have been wanting to try.</p>
<p>Let me know and I'll make a reservation!</p>`,
    timestamp: '2024-01-11T20:15:00Z',
    isRead: true,
    isStarred: false,
    folder: 'sent',
   
  },
  {
    id: '8',
    sender: 'You',
    senderEmail: 'me@mail.com',
    avatarColor: '#6366f1',
    avatarImage:  'assets/avatars/img1.png',
    subject: 'Newsletter draft — Feb edition',
    preview: 'Working on the February newsletter. Opening with the design trends piece — need to finish the "AI in Design Tools" section.',
    body: `<p><em>[DRAFT — not ready to send]</em></p>
<p>Hi everyone,</p>
<p>Welcome to the February edition of our monthly newsletter...</p>
<p><strong>This month in design:</strong></p>
<p>[AI in Design Tools section — TO BE COMPLETED]</p>
<p>Design trends we're watching in 2024:</p>
<ul>
  <li>Bento grid layouts making a comeback</li>
  <li>Anti-design as a deliberate aesthetic choice</li>
  <li>[add more...]</li>
</ul>`,
    timestamp: '2024-01-10T09:00:00Z',
    isRead: false,
    isStarred: false,
    folder: 'drafts',
   
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emails = [...MOCK_EMAILS];
  private emailsSubject = new BehaviorSubject<Email[]>(this.emails);
  private selectedEmailSubject = new BehaviorSubject<Email | null>(null);
  private searchQuerySubject = new BehaviorSubject<string>('');
  private loadingSubject = new BehaviorSubject<boolean>(false);

  emails$ = this.emailsSubject.asObservable();
  selectedEmail$ = this.selectedEmailSubject.asObservable();
  searchQuery$ = this.searchQuerySubject.asObservable();
  isLoading$ = this.loadingSubject.asObservable();

  getEmailsByFolder(folder: string): Observable<Email[]> {
    this.loadingSubject.next(true);
    return of(this.emails.filter(e => e.folder === folder)).pipe(
      delay(300),
      map(emails => {
        this.loadingSubject.next(false);
        return emails;
      })
    );
  }

  selectEmail(email: Email): void {
    if (!email.isRead) {
      email.isRead = true;
      this.emailsSubject.next([...this.emails]);
    }
    this.selectedEmailSubject.next(email);
  }

  toggleStar(email: Email): void {
    email.isStarred = !email.isStarred;
    this.emailsSubject.next([...this.emails]);
  }

  deleteEmail(email: Email): void {
    if (email.folder === 'trash') {
      this.emails = this.emails.filter(e => e.id !== email.id);
    } else {
      email.folder = 'trash';
    }
    this.emailsSubject.next([...this.emails]);
    if (this.selectedEmailSubject.value?.id === email.id) {
      this.selectedEmailSubject.next(null);
    }
  }

  getFolderCounts(): Observable<Record<string, number>> {
    const counts: Record<string, number> = {
      inbox: this.emails.filter(e => e.folder === 'inbox' && !e.isRead).length,
      sent: 0,
      drafts: this.emails.filter(e => e.folder === 'drafts').length,
      trash: 0
    };
    return of(counts);
  }

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  searchEmails(query: string, folder: string): Observable<Email[]> {
    const lower = query.toLowerCase();
    return of(this.emails.filter(e =>
      e.folder === folder &&
      (e.sender.toLowerCase().includes(lower) ||
       e.subject.toLowerCase().includes(lower) ||
       e.preview.toLowerCase().includes(lower))
    ));
  }
}
