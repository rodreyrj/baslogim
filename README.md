Signup app (Supabase)

Qué hace
- Pequeña página estática para crear cuentas en tu proyecto Supabase usando la `anon` key.

Archivos creados
- `index.html`: UI básica de registro.
- `signup.js`: Lógica para inicializar Supabase y crear cuentas con `auth.signUp`.

Cómo probarlo
1. Abrir `project-signup/index.html` en un navegador (doble clic o "Open File" en tu editor).
2. Introducir correo y contraseña y pulsar "Crear cuenta".
3. Si tu proyecto Supabase tiene confirmación por correo, revisa la bandeja del email.

Notas de seguridad importantes
- NO uses la `service_role` key en el cliente (navegador). Esa clave tiene permisos de administrador y debe quedar sólo en tu servidor.
- El código usa la `anon` key que es la adecuada para llamadas de cliente. Aun así, controla reglas RLS (Row Level Security) y políticas en la consola de Supabase para limitar acceso.

Si quieres que:
- Cree la misma funcionalidad como una pequeña API Node/Express que use la `service_role` para crear usuarios desde el servidor, dímelo y la preparo.
- Integre esta página con tu app de login existente, indícame la URL o cómo quieres que se redirija tras crear la cuenta.
