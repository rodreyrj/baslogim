// Configura aquí tu proyecto Supabase
const SUPABASE_URL = 'https://arvarchybpgfzbavbspy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFydmFyY2h5YnBnZnpiYXZic3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMjQ0NjMsImV4cCI6MjA3ODYwMDQ2M30.-94wDtcmlQT9Lsynny-aCEh9-eq5X88QHyMH30Gf1Fs';

// Inicializa cliente Supabase (UMD global 'supabase')
const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signup');
const messageDiv = document.getElementById('message');

function showMessage(text, type='success'){
  messageDiv.innerHTML = '';
  const el = document.createElement('div');
  el.className = 'msg ' + (type === 'error' ? 'error' : 'success');
  el.textContent = text;
  messageDiv.appendChild(el);
}

signupBtn.addEventListener('click', async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  if (!email || !password){
    showMessage('Introduce correo y contraseña válidos.', 'error');
    return;
  }
  signupBtn.disabled = true;
  showMessage('Creando cuenta...', 'success');
  try {
    const { data, error } = await client.auth.signUp({ email, password });
    if (error){
      showMessage(error.message || 'Error al crear la cuenta.', 'error');
    } else {
      // data.user may be null if email confirmation is required
      showMessage('Cuenta creada correctamente. Revisa el correo para confirmar (si aplica).', 'success');
      emailInput.value = '';
      passwordInput.value = '';
    }
  } catch (err){
    showMessage(err.message || 'Error inesperado.', 'error');
  } finally {
    signupBtn.disabled = false;
  }
});
