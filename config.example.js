// config.example.js - Template de configuration
// INSTRUCTIONS :
// 1. Renomme ce fichier en "config.js"
// 2. Remplace les valeurs ci-dessous par tes vraies credentials Supabase

const SUPABASE_URL = 'https://VOTRE-PROJECT-ID.supabase.co';
const SUPABASE_ANON_KEY = 'VOTRE-ANON-KEY-ICI';

// Initialisation du client Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);