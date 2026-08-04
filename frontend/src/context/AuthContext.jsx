import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadProfile(userId) {
    if (!userId) {
      setProfile(null);
      return;
    }
    try {
      const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
      setProfile(data || null);
    } catch {
      setProfile(null);
    }
  }

  useEffect(() => {
    let isMounted = true;

    async function initAuth() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        const currentUser = data?.session?.user || null;
        if (isMounted) setUser(currentUser);
        if (currentUser?.id) {
          await loadProfile(currentUser.id);
        }
      } catch (err) {
        if (isMounted) {
          setUser(null);
          setProfile(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    initAuth();

    try {
      const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!isMounted) return;
        const currentUser = session?.user || null;
        setUser(currentUser);
        if (currentUser?.id) {
          loadProfile(currentUser.id);
        } else {
          setProfile(null);
        }
      });

      return () => {
        isMounted = false;
        listener?.subscription?.unsubscribe();
      };
    } catch {
      return () => {
        isMounted = false;
      };
    }
  }, []);

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }

  async function signUp(email, password, fullName) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error) throw error;
  }

  async function signOut() {
    try {
      await supabase.auth.signOut();
    } catch {}
    setUser(null);
    setProfile(null);
  }

  const isAdmin = profile?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, profile, isAdmin, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

