# Einmalige Einrichtung: Ayfer kann Werke selbst verwalten

Diese Schritte machst du EINMAL. Danach kann Ayfer über einen Link
(artbyayfer.de/admin) selbst Werke hinzufügen, bearbeiten und löschen —
ganz ohne dich oder Claude.

## 1. GitHub-Konto und Repository anlegen
1. Auf github.com kostenlos registrieren (falls noch nicht vorhanden).
2. Neues Repository erstellen, z.B. Name "artbyayfer-website" (öffentlich
   oder privat, beides funktioniert).
3. Alle Dateien aus diesem Paket per Drag & Drop auf der GitHub-Seite
   hochladen (Button "Add file" → "Upload files"), Ordnerstruktur bleibt
   dabei erhalten. Commit-Message eingeben, "Commit changes" klicken.

## 2. Netlify mit dem Repository verbinden
1. Im Netlify-Dashboard: "Add new site" → "Import an existing project"
   → GitHub auswählen → das gerade erstellte Repository auswählen.
2. Build-Einstellungen: Build command leer lassen, Publish directory
   auf "." (Punkt, für Hauptverzeichnis) setzen.
3. "Deploy" klicken. Ab jetzt baut Netlify die Seite automatisch neu,
   sobald sich im Repository etwas ändert.
4. Die Domain artbyayfer.de in den Netlify-Domain-Einstellungen wie
   gewohnt mit dieser neuen Seite verknüpfen (ersetzt die bisherige
   manuell hochgeladene Version).

## 3. Login-System aktivieren (Identity + Git Gateway)
1. Im Netlify-Dashboard der Seite: "Integrations" → "Identity" →
   "Enable Identity".
2. Unter Identity → "Registration preferences": auf "Invite only"
   stellen (damit sich nicht fremde Personen registrieren können).
3. Unter Identity → "Services" → "Git Gateway" → "Enable Git Gateway"
   anklicken (verbindet den Login mit dem GitHub-Repository).

## 4. Ayfer einladen
1. Im Netlify-Dashboard: "Identity" → "Invite users" → ihre
   E-Mail-Adresse eingeben → "Send".
2. Ayfer bekommt eine E-Mail, setzt sich ein Passwort und ist fertig.

## 5. Ayfer den Link geben
Ab sofort kann sie unter **artbyayfer.de/admin** einloggen und dort:
- neue Werke hinzufügen (Foto hochladen, Titel, Maße, Material, Preis,
  Status eintragen)
- bestehende Werke bearbeiten (z.B. Status auf "verkauft" ändern)
- Werke wieder löschen

Jede Änderung geht innerhalb weniger Minuten automatisch live —
kein Datei-Upload mehr nötig.

## Wichtig bei neuen Werken
Die ID-Nummer bei einem neuen Werk sollte einfach eine noch nicht
vergebene Zahl sein (z.B. die höchste bisherige ID + 1). Das ist nur
eine interne Kennung für den "Kaufen"-Button und hat sonst keine
Bedeutung.
