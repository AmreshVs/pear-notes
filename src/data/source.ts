/* The app's code is published under PolyForm Strict 1.0.0. That is source
   available, not open source: say "source available", never "open source". */

export const GITHUB = 'https://github.com/AmreshVs';
export const CORE_REPO = `${GITHUB}/pear-notes-core`;
export const LICENSE_NAME = 'PolyForm Strict 1.0.0';
export const LICENSE_URL = `${CORE_REPO}/blob/main/LICENSE`;
export const SECURITY_URL = `${CORE_REPO}/blob/main/SECURITY.md`;
export const TRADEMARK_URL = `${CORE_REPO}/blob/main/TRADEMARK.md`;

export const repos = [
  { name: 'pear-notes-core', href: CORE_REPO, body: 'The shared engine: the encrypted vault, peer-to-peer sync and pairing, attachments, locked notes, backups, and the store both apps use.' },
  { name: 'pear-notes-mobile', href: `${GITHUB}/pear-notes-mobile`, body: 'The iOS and Android app: screens, the note lock, screenshot protection, and on-device AI.' },
  { name: 'pear-notes-desktop', href: `${GITHUB}/pear-notes-desktop`, body: 'The macOS, Windows, and Linux app: screens, the note lock, and on-device AI.' },
];

/* Each claim the site makes, and the file that carries it out. */
const core = (path: string) => `${CORE_REPO}/blob/main/${path}`;
export const claims = [
  { claim: 'Notes are encrypted in a vault only your devices can open', path: 'backend/NoteBase.js', href: core('backend/NoteBase.js') },
  { claim: 'Pairing uses expiring invites, and only paired devices can sync', path: 'backend/vault/pairing.js', href: core('backend/vault/pairing.js') },
  { claim: 'A removed device stops receiving updates', path: 'backend/vault/memberGate.js', href: core('backend/vault/memberGate.js') },
  { claim: 'Attachments are encrypted with a key derived from the vault', path: 'backend/fileCrypto.js', href: core('backend/fileCrypto.js') },
  { claim: 'Locked notes are sealed with your lock password', path: 'backend/lockCrypto.js', href: core('backend/lockCrypto.js') },
  { claim: 'Backups are encrypted with a password we never see', path: 'backend/backupManager.js', href: core('backend/backupManager.js') },
];
