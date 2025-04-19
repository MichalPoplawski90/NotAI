# System Asystenta AI dla Notariusza

## Cel Projektu

Zawansowane narzędzie zastępujące pracę dobrze wyuczonego aplikanta czy zastępcy notarialnego sporządzającego projekty aktów notarialnych oraz utrzymującego kontakt z klientami. Płatna na zasadzie subskrypcji Aplikacja webowa z przyjaznym i intuicyjnym interfejsem dopuszczającym drobne dynamiczne modyfikacje interfejsu przez AI, która to aplikacja usprawni pracę polskiego notariusza. Aplikacja webowa notai ma przeprowadzić notariusza - użytkownika, od zalogowania i uwierzytelnienia subskrypcji, do wyboru typu sprawy, do analizy stylu aktów notarialnych danego notariusza - użytkownika dotyczących danej sprawy, poprzez wgranie do aplikacji i analizy max 2 dotychczas napisanych przez niego aktów i dotyczących pokrewnej sprawy, a to w celu ustalenia stylu danego notariusza, do wprowadzania przez niego prostego opisu sprawy, do wykazu dokumentów potrzebnych do przeprowadzenia sprawy z możliwością modyfikacji listy przez notariusza z zapamiętaniem preferencji, do analizy dokumentów ich znaczenia dla sprawy orz ich kompletności, do analizy kompletności wszelkich danych w celu stwierdzenia czy system notai jest gotowy, do wygenerowania rzetelnego projektu aktu notarialnego, zgodnego z prawem polskim i stylem notariusza. Dodatkowo potrafiący zapamiętać i wdrożyć preferencje notariusza poprzez m.in. analizę wyborów dokonanych za pośrednictwem aplikacji notai. Podsumowując Notai po walidacji kompletności danych ma gwarantować wysokiej jakości akt notarialny zgodny z prawem, stylem notariusza i założeniami transakcji.

## Tech Stack i Architektura NotAI

Frontend

React 18+ z TypeScript
Next.js dla routingu i server-side rendering
Tailwind CSS dla stylowania
Struktura katalogów oparta na funkcjonalnościach
Atomic design dla komponentów UI
Lucide React dla ikon
React Hook Form + Zod dla obsługi formularzy

Backend

Node.js z Express
PostgreSQL jako główna baza danych
Prisma jako ORM
JWT dla autentykacji
Redis dla cachowania i sesji

AI i Przetwarzanie Dokumentów

Langchain do orkiestracji agentów AI
Tesseract.js dla OCR
PDF.js dla parsowania dokumentów
Lokalna anonimizacja danych osobowych

Infrastruktura

Docker dla konteneryzacji
Vercel dla hostingu frontendu
GitHub Actions dla CI/CD

Założenia Wdrożeniowe

Anonimizacja danych osobowych wykonywana lokalnie
Szyfrowanie danych w spoczynku
Responsywny design
Optymalizacja dla urządzeń mobilnych
Możliwość pracy offline dla kluczowych funkcji

## Główne Funkcjonalności

Tech Stack i Architektura NotAI
Frontend

React 18+ z TypeScript
Next.js dla routingu i server-side rendering
Tailwind CSS dla stylowania
Struktura katalogów oparta na funkcjonalnościach
Atomic design dla komponentów UI
Lucide React dla ikon
React Hook Form + Zod dla obsługi formularzy

Backend

Node.js z Express
PostgreSQL jako główna baza danych
Prisma jako ORM
JWT dla autentykacji
Redis dla cachowania i sesji

AI i Przetwarzanie Dokumentów

Langchain do orkiestracji agentów AI
Tesseract.js dla OCR
PDF.js dla parsowania dokumentów
Lokalna anonimizacja danych osobowych

Infrastruktura

Docker dla konteneryzacji
Vercel dla hostingu frontendu
GitHub Actions dla CI/CD

Kluczowe Tabele Bazy Danych

Users (notariusze i asystenci)
Cases (sprawy notarialne)
Parties (strony transakcji)
Documents (dokumenty i ich statusy)
Acts (generowane akty notarialne)

Założenia Wdrożeniowe

Anonimizacja danych osobowych wykonywana lokalnie
Szyfrowanie danych w spoczynku
Responsywny design
Optymalizacja dla urządzeń mobilnych
Możliwość pracy offline dla kluczowych funkcji

### 1. Zbieranie Wymagań

- **Wprowadzanie Opisu Sprawy**
  - Możliwość opisu tekstowego
  - Wypełnianie predefiniowanych kafelków z danymi
  - podpowiedzi systemu służące do uzyskania od notariusza kluczowych, a pominetych danych
  - Intuicyjny i elegancki interfejs użytkownika
  - Możliwość dostosowania układu interfejsu (np. reorganizacja kafelków)
- **Interakcja z Systemem**
  - Zadawanie pytań precyzujących przez system
  - Identyfikacja stron transakcji
  - Generowanie listy wymaganych dokumentów

### 2. Analiza Dokumentów

- Skanowanie i parsowanie dokumentów
- Ekstrakcja kluczowych informacji
- Monitorowanie kompletności dokumentacji
- Wykrywanie i raportowanie potencjalnych zagrożeń prawnych

### 3. Bezpieczeństwo Danych

- Lokalna anonimizacja danych osobowych
- System tokenizacji dla serwerów analitycznych
- Przetwarzanie zanonimizowanych materiałów

### 4. System Uczenia Stylu

- Analiza dotychczasowych aktów notarialnych
- Identyfikacja charakterystycznych zwrotów
- Rozpoznawanie struktury dokumentów

### 5. Generowanie Dokumentów

- Tworzenie wstępnych wersji aktów
- Implementacja wyuczonego stylu
- Dostosowanie do specyfiki konkretnej sprawy

### 6. System Doskonalenia

- Możliwość wprowadzania poprawek przez notariusza
- Zapisywanie preferencji użytkownika
- Adaptacja systemu do przyszłych dokumentów

## Szczegółowy Schemat Bazy Danych

### Users (Notariusze i Asystenci)

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role ENUM('notary', 'assistant') NOT NULL,
    office_name VARCHAR(255),
    office_address TEXT,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);
```

### Cases (Sprawy Notarialne)

```sql
CREATE TABLE cases (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    case_number VARCHAR(50) UNIQUE NOT NULL,
    case_type VARCHAR(100) NOT NULL,
    description TEXT,
    status ENUM('draft', 'in_progress', 'completed', 'archived') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    metadata JSONB
);
```

### Parties (Strony Transakcji)

```sql
CREATE TABLE parties (
    id SERIAL PRIMARY KEY,
    case_id INTEGER REFERENCES cases(id),
    type ENUM('seller', 'buyer', 'witness', 'other') NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    pesel VARCHAR(11),
    nip VARCHAR(10),
    address TEXT,
    phone_number VARCHAR(20),
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Documents (Dokumenty)

```sql
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    case_id INTEGER REFERENCES cases(id),
    name VARCHAR(255) NOT NULL,
    document_type VARCHAR(100) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    status ENUM('pending', 'verified', 'rejected') NOT NULL,
    verification_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB
);
```

### Acts (Akty Notarialne)

```sql
CREATE TABLE acts (
    id SERIAL PRIMARY KEY,
    case_id INTEGER REFERENCES cases(id),
    version INTEGER NOT NULL,
    content TEXT NOT NULL,
    status ENUM('draft', 'reviewed', 'approved', 'signed') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    approved_at TIMESTAMP,
    metadata JSONB
);
```

### DocumentTemplates (Szablony Dokumentów)

```sql
CREATE TABLE document_templates (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    document_type VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);
```

### UserPreferences (Preferencje Użytkownika)

```sql
CREATE TABLE user_preferences (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    preferences JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Struktura Katalogów Aplikacji

```plaintext
notai/
├── .github/                    # Konfiguracja GitHub Actions
├── apps/
│   ├── web/                    # Frontend aplikacji
│   │   ├── src/
│   │   │   ├── app/           # Next.js app router
│   │   │   │   ├── atoms/     # Podstawowe komponenty
│   │   │   │   ├── molecules/ # Złożone komponenty
│   │   │   │   ├── organisms/ # Sekcje interfejsu
│   │   │   │   └── templates/ # Szablony stron
│   │   │   ├── hooks/         # Custom hooks
│   │   │   ├── lib/           # Biblioteki pomocnicze
│   │   │   ├── styles/        # Style globalne
│   │   │   └── types/         # Definicje TypeScript
│   │   ├── public/            # Statyczne zasoby
│   │   └── tests/             # Testy frontend
│   │
│   └── api/                   # Backend aplikacji
│       ├── src/
│       │   ├── controllers/   # Kontrolery
│       │   ├── models/        # Modele Prisma
│       │   ├── services/      # Logika biznesowa
│       │   ├── middleware/    # Middleware
│       │   ├── utils/         # Narzędzia pomocnicze
│       │   └── types/         # Definicje TypeScript
│       └── prisma/            # Schemat bazy danych
│
├── packages/                  # Współdzielone pakiety
│   ├── ui/                    # Komponenty UI
│   ├── types/                 # Współdzielone typy
│   └── utils/                 # Współdzielone narzędzia
│
├── docs/                      # Dokumentacja
├── scripts/                   # Skrypty pomocnicze
└── docker/                    # Konfiguracja Docker
    ├── frontend/
    ├── backend/
    └── database/
```
